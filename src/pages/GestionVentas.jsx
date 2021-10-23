
import React from 'react';
import '../App.css';
import './GestionProductos.css';
import { useState, useEffect } from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {SaleList} from './components/SaleList';
import {CreateSale} from './components/CreateSale';
import {EditSale} from './components/EditSale';
import {NotFound} from './components/NotFound';



export default function GestionVentas() {
    return (
    <div>
        <h1 class="titulo">Gestión de <span class="titulo_color">Ventas</span> </h1>
        <BrowserRouter>
        
            <Switch>

            <Route exact path="/gesventas" component={SaleList} />
            <Route exact path="/add" component={CreateSale} />
            <Route exact path="/edit/:id" component={EditSale} />
    

            </Switch>

        </BrowserRouter>
    </div>
        )
}
