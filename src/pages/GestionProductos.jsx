import React from 'react'
import './GestionProductos.css';
import '../App.jsx';

const GestionProductos = () => {
    return (
    <div className="App">
    <h1 class="titulo">Gestión <span class="titulo_color">Productos</span> </h1>
    <div class="container"></div>
      <div>
      <div class="btn-group">
  <div class="btn-group">
    <button type="button" class="btn btn-default dropdown-toggle"
            data-toggle="dropdown">
      Gestión Productos
      <span class="caret"></span>
    </button>
    <ul class="dropdown-menu">
      <li><a href="./editarpro">Editar Producto</a></li>
      <li><a href="./crearpro">Crear Producto</a></li>
      <li><a href="./listarpro">Listar Productos</a></li>
    </ul>
  </div>
</div>   
        </div>
        <div class="container">
        </div>
    </div>
    
    ) 
};

export default GestionProductos;
