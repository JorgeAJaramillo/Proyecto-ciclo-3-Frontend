import react, { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography, RadioGroup, FormLabel, FormControlLabel, Radio } from '@material-ui/core';
import { editUsuario, getUsuario } from '../../services/userServices';
import { useHistory, useParams } from 'react-router-dom';
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

export function EditUser() {
    const [usuario, setUsuario] = useState(initialValue);
    const { cedula, nombre, rol, estado } = usuario;
    const classes = useStyles();
    let history = useHistory();

    const { id } = useParams();

    useEffect(() => {
        loadUserData();
    }, [])

    const loadUserData = async () => {
        let response = await getUsuario(id);
        setUsuario(response.data.usuario);
    }

    const onValueChange = (e) => {
        setUsuario({ ...usuario, [e.target.name]: e.target.value });
    }

    const onStateChange = (state) => {
        setUsuario({ ...usuario, "estado": state });
    }

    const updateUsuarioData = async () => {
        await editUsuario(usuario);
        history.push('/gesusuarios');
    }

    return (
        <FormGroup className= "content-wrapper">
            <Typography variant="h4">Editar Usuario</Typography>
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
                <Input onChange={(e) => onStateChange(e)} name="estado" value={estado} id="my-input" />
            </FormControl>
            <FormControl>
            <Button  variant="contained" onClick={(e) => updateUsuarioData()} component={Link} to={`/gesusuarios`} color="primary">Editar Usuario</Button>
            </FormControl>
        </FormGroup>
    )
}