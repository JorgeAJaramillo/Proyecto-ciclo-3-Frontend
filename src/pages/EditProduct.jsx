import React, { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography, RadioGroup, FormLabel, FormControlLabel, Radio } from '@material-ui/core';
import { editProducto, getProducto } from '../services/productServices';
import { useHistory, useParams, useLocation } from 'react-router-dom';

const initialValue = {
    valor: '',
    descripcion: '',
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

export function EditProduct() {
    const [producto, setProducto] = useState(initialValue);
    const { valor, descripcion, estado } = producto;
    const classes = useStyles();
    let history = useHistory();

    
    const search = useLocation().search;
    const id = new URLSearchParams(search).get('id');

    useEffect(() => {
        console.log("id"+ id)
        loadProductoData();
    }, [])

    const loadProductoData = async () => {
        
        let response = await getProducto(id);
        console.log(response.data);
        setProducto(response.data.data);
    }

    const onValueChange = (e) => {
        setProducto({ ...producto, [e.target.name]: e.target.value });
    }

    const onStateChange = (state) => {
        setProducto({ ...producto, "estado": state });
    }

    const updateProductoData = async () => {
        console.log("produc");
        console.log(producto)
        await editProducto(producto);
        history.push('/listarpro');
    }

    return (
        <FormGroup className={classes.container}>
            <Typography align="center" variant="h4">Editar Producto</Typography>
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
                <Button variant="contained" onClick={(e) => updateProductoData()} color="primary">Editar Producto</Button>
            </FormControl>
        </FormGroup>
    )
}

export default EditProduct;