import axios from "axios";

const productosUrl = "http://localhost:3001/productos";

export const getProducto = async (id) => {
    return await axios.get(`${productosUrl}/${id}`);
}

export const getProductos = async () => {
    return await axios.get(`${productosUrl}/`);
}

export const addProducto = async (producto) => {
    return await axios.post(`${productosUrl}/`,producto);
}

export const deleteProducto = async (id) => {
    return await axios.delete(`${productosUrl}/${id}`);
}

export const editProducto = async (producto) => {
    return await axios.put(`${productosUrl}/${producto._id}`, producto);
}