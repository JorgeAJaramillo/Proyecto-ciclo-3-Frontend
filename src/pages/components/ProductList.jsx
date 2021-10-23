import React, { useState, useEffect } from 'react'
import { Table, TableHead, TableCell, TableRow, TableBody, Button, makeStyles } from '@material-ui/core';
import { getProducto, deleteProducto } from '../../services/productServices';
import { Link } from 'react-router-dom';
import { getProductos } from '../../services/productServices';
import { NavLink } from 'react-router-dom';
import '../GestionProductos.css';

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
        setProductos(response.data.productos);
    }

    const deleteProductoData = async (id) => {
        let callbackUser = window.confirm('Esta seguro de elimar el producto');
        if (callbackUser) {
            await deleteProducto(id);
            getAllProductos();
        }
    }

    return ( 
    <div class = "container">
    <div class = "agregar">
     <NavLink class="btn btn-light" to="/add">Crear Producto</NavLink>
     </div>
    <Table class="table table-light">
        <TableHead>
            <TableRow>
                <TableCell class = "td">Descripción</TableCell>
                <TableCell class = "td">Valor</TableCell>
                <TableCell class = "td">Estado</TableCell>
                <TableCell class = "td">Opciones</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {
                productos.map(producto => (
                    <TableRow className={classes.row} key={producto._id}>
                
                        <TableCell>{producto.descripcion}</TableCell>
                        <TableCell>{producto.valor}</TableCell>
                        
                        <TableCell>{producto.estado ? "Disponible" : "Agotado"}</TableCell>
                        <TableCell>
                            <Button component={Link} to={`/edit/${producto._id}`} color="primary">Editar</Button>
                            <Button color="secondary" onClick={() => deleteProductoData(producto._id)} >Eliminar</Button>
                        </TableCell>
                    </TableRow>
                ))
            }
        </TableBody>
    </Table>
</div>
    )
}

export default ProductList;