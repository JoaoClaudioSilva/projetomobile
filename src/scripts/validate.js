/* eslint-disable prettier/prettier */
module.exports = {
    validarEmail: (email) => {

        const regex = /\S+@\S+\.\S+/;
        return regex.test(email);
    },
};
