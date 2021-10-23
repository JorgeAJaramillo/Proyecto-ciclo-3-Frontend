import React, { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography, RadioGroup, FormLabel, FormControlLabel, Radio } from '@material-ui/core';
import { editVenta, getVenta } from '../../services/salesServices';
import { useHistory, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const initialValue = {
    valor: '',
    fecha: '',
    documentaCliente: '',
    documentoVendedor:'',
    descripcion: '',
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

export function EditSale() {
    const [venta, setVenta] = useState(initialValue);
    const { valor, fecha, documentoCliente, documentoVendedor,descripcion } = venta;
    const classes = useStyles();
    let history = useHistory();

    const { id } = useParams();

    useEffect(() => {
        loadVentaData();
    }, [])

    const loadVentaData = async () => {
        let response = await getVenta(id);
        setVenta(response.data.venta);
    }

    const onValueChange = (e) => {
        setVenta({ ...venta, [e.target.name]: e.target.value });
    }


    const updateVentaData = async () => {
        await editVenta(venta);
        history.push('/gesventas');
    }

    return (
        <FormGroup className={classes.container}>
            <Typography align="center" variant="h4">Editar Venta</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Valor</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="valor" value={valor} id="my-input" />
            </FormControl>

            <FormControl>
                <InputLabel htmlFor="my-input">Fecha</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="fecha" value={fecha} id="my-input" />
            </FormControl>

            <FormControl>
                <InputLabel htmlFor="my-input">Documento Cliente</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="documentoCliente" value={documentoCliente} id="my-input" />
            </FormControl>

            <FormControl>
                <InputLabel htmlFor="my-input">Documento Vendedor</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="documentoVendedor" value={documentoVendedor} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Descripción</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="descripcion" value={descripcion} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={(e) => updateVentaData()} component={Link} to={`/gesventas`} color="primary">Editar Venta</Button>
            </FormControl>
        </FormGroup>
    )
}

export default EditSale;