import React, { useState, } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography, RadioGroup, FormLabel, FormControlLabel, Radio } from '@material-ui/core';
import { addProducto } from '../../services/productServices';
import { useHistory } from 'react-router-dom';

const initialValue = {
    descripcion: '',
    valor: '',
    estado: true,
}

const useStyles = makeStyles({
    container: {
        background: "white",
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})

export function CreateProduct() {
    const [producto, setProducto] = useState(initialValue);
    const { descripcion, valor, estado } = producto;

    const classes = useStyles();
    let history = useHistory();

    const onValueChange = (e) => {
        setProducto({ ...producto, [e.target.name]: e.target.value });
    }

    const onStateChange = (state) => {
        setProducto({ ...producto, "estado": state });
    }

    const addProductoData = async () => {
        await addProducto(producto);
        history.push('/gesproductos');
    }

    return (
        <FormGroup className={classes.container}>
            <Typography align="center" variant="h4">Agregar Producto</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Descripción</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="descripcion" value={descripcion} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Valor</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="valor" value={valor} id="my-input" />
            </FormControl>
            <FormControl component="fieldset">
                <FormLabel component="legend">Estado</FormLabel>
                <RadioGroup
                    name='estado'
                    onChange={(e) => onStateChange(e.target.value === "disponible")}
                    aria-label="estado"
                    defaultValue="disponible"
                    value={estado ? "disponible" : "noDisponible"}>
                    <FormControlLabel value="disponible" control={<Radio />} label="Disponible" />
                    <FormControlLabel value="noDisponible" control={<Radio />} label="No Disponible" />
                </RadioGroup>
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={(e) => addProductoData()} color="primary">Agregar Producto</Button>
            </FormControl>
        </FormGroup>
    )
}

export default CreateProduct;