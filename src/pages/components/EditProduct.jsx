import React, { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography, RadioGroup, FormLabel, FormControlLabel, Radio } from '@material-ui/core';
import { editProducto, getProducto } from '../../services/productServices';
import { useHistory, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

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

    const { id } = useParams();

    useEffect(() => {
        loadProductoData();
    }, [])

    const loadProductoData = async () => {
        let response = await getProducto(id);
        setProducto(response.data.productos);
    }

    const onValueChange = (e) => {
        setProducto({ ...producto, [e.target.name]: e.target.value });
    }

    const onStateChange = (state) => {
        setProducto({ ...producto, "estado": state });
    }

    const updateProductoData = async () => {
        await editProducto(producto);
        history.push('/gesproductos');
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
                <Button variant="contained" onClick={(e) => updateProductoData()} component={Link} to={`/gesproductos`} color="primary">Editar Producto</Button>
            </FormControl>
        </FormGroup>
    )
}

export default EditProduct;