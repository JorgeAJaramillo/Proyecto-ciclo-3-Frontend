import axios from "axios";

const ventasUrl = "http://localhost:3001/ventas/";


export const getVenta = async (id) => {
    return await axios.get(`${ventasUrl}/${id}`);
}

export const getVentas = async (id) => {
    return await axios.get(`${ventasUrl}/`);
}

export const addVenta = async (id) => {
    return await axios.post(`${ventasUrl}/`.venta);
}

export const deleteVenta = async (id) => {
    return await axios.delete(`${ventasUrl}/${id}`);
}

export const editVenta = async (id) => {
    return await axios.post(`${ventasUrl}/${ventasUrl._id}`.venta);
}

