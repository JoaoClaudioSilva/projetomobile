/* eslint-disable prettier/prettier */
import { getFirestore, collection, doc, getDocs, addDoc, updateDoc, deleteDoc, getDoc, increment } from 'firebase/firestore';
import { uploadBytes, ref, getDownloadURL } from 'firebase/storage';
import { app, storage } from './config';

const db = getFirestore(app);
const refCol = collection(db, 'pesquisas');

async function getPesquisas() {
  const snapCollection = await getDocs(refCol);
  const listCollection = snapCollection.docs.map(obj => ({id: obj.id, ...obj.data()}));

  listCollection.sort((a, b) => b.data - a.data);

  return listCollection;
}

async function incPesquisa(uid, index) {
  const refDoc = await doc(db, 'pesquisas', uid);
  const docSnap = await getDoc(refDoc);

  let ratings = docSnap.get('ratings');

  ratings[index] = ratings[index] + 1;

  console.log(ratings)
  await updateDoc(refDoc, {
    ratings: ratings,
  })

}

async function addPesquisas(obj, urlFoto) {

  const imageRef = ref(storage, `${Math.floor(Math.random() * 5000)}.jpg`);
  const file = await fetch(urlFoto);
  const blob = await file.blob();

  uploadBytes(imageRef, blob, { contentType: 'image/jpeg' })
  .then(
    () => {
      console.log('Sucesso');
      getDownloadURL(imageRef)
        .then(
          (url) => {
            addDoc(refCol, { ...obj, url: url });
          });
    }
  )
  .catch(
    (err) => {
      console.log(err);
    }
  )
}

async function updatePesquisas(uid, novoObj) {
  return await updateDoc(doc(db, 'pesquisas', uid), novoObj);
}

export default { getPesquisas, addPesquisas, updatePesquisas, incPesquisa };
