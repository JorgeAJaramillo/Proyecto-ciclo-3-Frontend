import axios from "axios";

const productosUrl = "http://localhost:3001/productos/";


export const getProducto = async (id) => {
    return await axios.get(`${productosUrl}/${id}`);
}

export const getProductos = async (id) => {
    return await axios.get(`${productosUrl}/`);
}

export const addProducto = async (id) => {
    return await axios.post(`${productosUrl}/`.producto);
}

export const deleteProducto = async (id) => {
    return await axios.delete(`${productosUrl}/${id}`);
}

export const editUsuario = async (id) => {
    return await axios.post(`${productosUrl}/${productosUrl._id}`.producto);
}



