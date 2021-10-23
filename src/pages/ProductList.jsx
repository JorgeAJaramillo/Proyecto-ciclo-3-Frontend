import React, { useState, useEffect } from 'react'
import { Table, TableHead, TableCell, TableRow, TableBody, Button, makeStyles } from '@material-ui/core';
import { getProductos, deleteProducto } from '../services/productServices';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    table: {
        background: "white",
        width: '90%',
        margin: '50px 0 0 50px'
    },
    thead: {
        '& > *': {
            fontSize: 20,
            background: 'white',
            color: 'black'
        }
    },
    row: {
        '& > *': {
            fontSize: 18
        }
    }
})

export function ProductList() {
    const classes = useStyles();

    const [productos, setProductos] = useState([])

    useEffect(() => {
        getAllProductos();
    }, [])

    const getAllProductos = async () => {
        let response = await getProductos();
        console.log(response);
        setProductos(response.data.data);
    }

    const deleteProductoData = async (id) => {
        let callbackUser = window.confirm('Esta seguro de elimar el producto');
        if (callbackUser) {
            await deleteProducto(id);
            getAllProductos();
        }
    }

    return (
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>Id</TableCell>
                    <TableCell>Descripción</TableCell>
                    <TableCell>Valor</TableCell>
                    <TableCell>Estado</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    productos.map(producto => (
                        <TableRow className={classes.row} key={producto._id}>
                            <TableCell>{producto._id}</TableCell>
                            <TableCell>{producto.descripcion}</TableCell>
                            <TableCell>{producto.valor}</TableCell>
                            <TableCell>{producto.estado ? "Disponible" : "Agotado"}</TableCell>
                            <TableCell>
                                <Button component={Link} to={`/editarpro?id=${producto._id}`} color="primary">Editar</Button>
                                <Button color="secondary" onClick={() => deleteProductoData(producto._id)} >Eliminar</Button>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}

export default ProductList;