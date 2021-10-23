import React, { useState, useEffect } from 'react'
import { Table, TableHead, TableCell, TableRow, TableBody, Button, makeStyles } from '@material-ui/core';
import { getVenta, deleteVenta } from '../../services/salesServices';
import { Link } from 'react-router-dom';
import { getVentas } from '../../services/salesServices';
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

export function SaleList() {
    const classes = useStyles();

    const [ventas, setVentas] = useState([])

    useEffect(() => {
        getAllVentas();
    }, [])

    const getAllVentas = async () => {
        let response = await getVentas();
        setVentas(response.data.ventas);
    }

    const deleteVentaData = async (id) => {
        let callbackUser = window.confirm('Esta seguro de elimar el Venta');
        if (callbackUser) {
            await deleteVenta(id);
            getAllVentas();
        }
    }

    return ( 
    <div class = "container">
    <div class = "agregar">
     <NavLink class="btn btn-light" to="/add">Crear Venta</NavLink>
     </div>
    <Table class="table table-light">
        <TableHead>
            <TableRow>
           
                <TableCell class = "td">Valor</TableCell>
                <TableCell class = "td">Fecha</TableCell>
                <TableCell class = "td">Documento Cliente</TableCell>
                <TableCell class = "td">Documento Vendedor</TableCell>
                <TableCell class = "td">Descripción</TableCell>
                <TableCell class = "td">Opciones</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {
                ventas.map(venta => (
                    <TableRow className={classes.row} key={venta._id}>
                
                        
                        <TableCell>{venta.valor}</TableCell>
                        <TableCell>{venta.fecha}</TableCell>
                        <TableCell>{venta.documentoCliente}</TableCell>
                        <TableCell>{venta.documentoVendedor}</TableCell>
                        <TableCell>{venta.descripcion}</TableCell>
                        
                        
                        <TableCell>
                            <Button component={Link} to={`/edit/${venta._id}`} color="primary">Editar</Button>
                            <Button color="secondary" onClick={() => deleteVentaData(venta._id)} >Eliminar</Button>
                        </TableCell>
                    </TableRow>
                ))
            }
        </TableBody>
    </Table>
</div>
    )
}

export default SaleList;