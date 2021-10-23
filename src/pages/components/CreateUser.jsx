import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography, RadioGroup, FormLabel, FormControlLabel, Radio } from '@material-ui/core';
import { addUsuario } from '../../services/userServices.js';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const initialValue = {
    cedula: '',
    nombre: '',
    rol: 'Vendedor',
    estado: 'Pendiente'
}

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})

export function CreateUser() {
    const [usuario, setUsuario] = useState(initialValue);
    const { cedula, nombre, rol, estado } = usuario;

    const classes = useStyles();
    let history = useHistory();

    const onValueChange = (e) => {
        setUsuario({ ...usuario, [e.target.name]: e.target.value });
    }

    const onRolChange = (state) => {
        setUsuario({ ...usuario, "rol": state });
    }

    const onStateChange = (state) => {
        setUsuario({ ...usuario, "estado": state });
    }

    const addUsuarioData = async () => {
        await addUsuario(usuario);
        history.push('/gesusuarios');
        
    }

    return (
        
        <FormGroup className= "content-wrapper">
            
            <FormControl>
                <InputLabel htmlFor="my-input">Cédula</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="cedula" value={cedula} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Nombre</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="nombre" value={nombre} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Rol</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="rol" value={rol} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Estado</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="estado" value={estado} id="my-input" />
            </FormControl>
            <FormControl>
            
                <Button  variant="contained"  onClick={(e) => addUsuarioData()}  color="primary">Agregar Usuario</Button>
            </FormControl>
        </FormGroup>
     
    )
}