import React, { useState, useEffect } from 'react'
import { Table, TableHead, TableCell, TableRow, TableBody, Button, makeStyles } from '@material-ui/core';
import { getUsuario, deleteUsuario } from '../../services/UserServices';
import { Link } from 'react-router-dom';
import { getUsuarios } from '../../services/UserServices';
import { NavLink } from 'react-router-dom';
import '../GestionProductos.css';

const useStyles = makeStyles({
    table: {
        width: '90%',
        margin: '50px 0 0 50px'
    },
    thead: {
        '& > *': {
            fontSize: 20,
            background: '#000000',
            color: '#FFFFFF'
        }
    },
    row: {
        '& > *': {
            fontSize: 18
        }
    }
})

export function UserList() {
    const classes = useStyles();

    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        getAllUsuarios();
    }, [])

    const getAllUsuarios = async () => {
        let response = await getUsuarios();
        console.log(response);
        setUsuarios(response.data.usuarios);
    }

    const deleteUsuarioData = async (id) => {
        let callbackUser = window.confirm('¿Está seguro de elimar el usuario?');
        if (callbackUser) {
            await deleteUsuario(id);
            getAllUsuarios();
        }
    }

    return (
    <div class = "container">
        <div class = "agregar">
         <NavLink class="btn btn-light" to="/add">Crear Usuario</NavLink>
         </div>
        <Table class="table table-light">
            <TableHead>
                <TableRow>
                    <TableCell class = "td">Cédula</TableCell>
                    <TableCell class = "td">Nombre</TableCell>
                    <TableCell class = "td">Rol</TableCell>
                    <TableCell class = "td">Estado</TableCell>
                    <TableCell class = "td">Opciones</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    usuarios.map(usuario => (
                        <TableRow className={classes.row} key={usuario._id}>
                    
                            <TableCell>{usuario.cedula}</TableCell>
                            <TableCell>{usuario.nombre}</TableCell>
                            <TableCell>{usuario.rol}</TableCell>
                            <TableCell>{usuario.estado}</TableCell>
                            <TableCell>
                                <Button component={Link} to={`/edit/${usuario._id}`} color="primary">Editar</Button>
                                <Button color="secondary" onClick={() => deleteUsuarioData(usuario._id)} >Eliminar</Button>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    </div>
    )
}