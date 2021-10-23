import axios from "axios";

const usuariosUrl = "http://localhost:3001/usuarios";


export const getUsuario = async (id) => {
    return await axios.get(`${usuariosUrl}/${id}`);
}

export const getUsuarios = async (id) => {
    return await axios.get(`${usuariosUrl}/`);
}

export const addUsuario = async (usuario) => {
    return await axios.post(`${usuariosUrl}/`, usuario);
}

export const deleteUsuario = async (id) => {
    return await axios.delete(`${usuariosUrl}/${id}`);
}

export const editUsuario = async (usuario) => {
    return await axios.put(`${usuariosUrl}/${usuario._id}`, usuario);
}

