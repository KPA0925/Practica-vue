import *as yup from 'yup';

export const schema = yup.object({
    nombre: yup.string().required(),
    correo: yup.string().email().required(),
});