import React from 'react';
import '../App.css';
import './GestionProductos.css';
import { useState, useEffect } from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {ProductList} from './components/ProductList';
import {CreateProduct} from './components/CreateProduct';
import {EditProduct} from './components/EditProduct';
import {NotFound} from './components/NotFound';



export default function GestionProductos() {
    return (
    <div>
        <h1 class="titulo">Gestión de <span class="titulo_color">Productos</span> </h1>
        <BrowserRouter>
        
            <Switch>

            <Route exact path="/gesproductos" component={ProductList} />
            <Route exact path="/add" component={CreateProduct} />
            <Route exact path="/edit/:id" component={EditProduct} />
    

            </Switch>

        </BrowserRouter>
    </div>
        )
}

