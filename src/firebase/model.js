/* eslint-disable prettier/prettier */
import { getFirestore, collection, doc, getDocs, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { uploadBytes, ref, getDownloadURL } from 'firebase/storage';
import { app, storage } from './config';

const db = getFirestore(app);
const refCol = collection(db, 'pesquisas');

async function getPesquisas() {
  const snapCollection = await getDocs(refCol);
  const listCollection = snapCollection.docs.map(obj => obj.data());

  return listCollection;
}

async function addPesquisas(obj, urlFoto) {

  const imageRef = ref(storage, 'minhaImagem.jpeg');
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
        }
          
        )
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

export default { getPesquisas, addPesquisas, updatePesquisas };
