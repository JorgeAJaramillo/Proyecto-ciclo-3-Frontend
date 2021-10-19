import React from 'react';
import '../App.css';
import './GestionProductos.css';
import { useState } from 'react';

function GestionUsuarios() {
  
   
    const [usuarios, setUsuarios] = useState([]);

    const handleAddUsuario = () => {
        const cedula = usuarios.length + 1;
        const newUsuario = {
            cedula: cedula,
            name: "",
            rol: "",
            state: ""
        }
        setUsuarios([...usuarios, newUsuario])
    };
    const handleDeleteUsuario = (cedula) => {
        alert("Solicitud Back para eliminar el usuario: " + cedula)
    };

    const handleUpdateUsuario = (cedula) => {
        alert("Solicitud Back para actualizar la información del usuario: " + cedula)
    };

    const handleSearchUsuario = () => {
        alert("Solicitud Back para buscar el usuario")
    };


    const handleChangeRol = (cedula) => {
        const index = usuarios.findIndex(element => element.cedula === cedula)

        var newUsuario = usuarios;
        var newState = "Vendedor";
        if (newUsuario[index].rol === "Vendedor") {
            newState = "Administrador";
        
        }
        newUsuario[index] = {

            cedula: newUsuario[index].cedula,
            name: newUsuario[index].name,
            state: newUsuario[index].state,
            rol: newState
            

        }

        setUsuarios([...newUsuario])
    };

    const handleChangeState = (cedula) => {
        const index = usuarios.findIndex(element => element.cedula === cedula)

        var newUsuario = usuarios;

        newUsuario[index] = {

            cedula: newUsuario[index].cedula,
            name: newUsuario[index].name,
            state: newUsuario[index].state,
            rol: newUsuario[index].rol
            
        }

        setUsuarios([...newUsuario])
    };


    const handleChangeStateAutorizado = (cedula) => {
        const index = usuarios.findIndex(element => element.cedula === cedula)

        var newUsuario = usuarios;
        var newState = "Autorizado";
        newUsuario[index] = {

            cedula: newUsuario[index].cedula,
            name: newUsuario[index].name,
            state: newState,
            rol: newUsuario[index].rol

        }

        setUsuarios([...newUsuario])
    };

    const handleChangeStatePendiente = (cedula) => {
        const index = usuarios.findIndex(element => element.cedula === cedula)

        var newUsuario = usuarios;
        var newState = "Pendiente";
        newUsuario[index] = {

            cedula: newUsuario[index].cedula,
            name: newUsuario[index].name,
            state: newState,
            rol: newUsuario[index].rol

        }

        setUsuarios([...newUsuario])
    };

    const handleChangeStateNoAutorizado = (cedula) => {
        const index = usuarios.findIndex(element => element.cedula === cedula)

        var newUsuario = usuarios;
        var newState = "No Autorizado";
        newUsuario[index] = {

            cedula: newUsuario[index].cedula,
            name: newUsuario[index].name,
            state: newState,
            rol: newUsuario[index].rol

        }

   

   

        setUsuarios([...newUsuario])
    };

    const handleChangeName = (event, cedula) => {
        const index = usuarios.findIndex(element => element.cedula === cedula)

        var newUsuario = usuarios;
        
        newUsuario[index] = {

            cedula: newUsuario[index].cedula,
            name: event,
            state: newUsuario[index].state,
            rol: newUsuario[index].rol
            

        }

        setUsuarios([...newUsuario])
    };

    return (

        <div className="App">
            <h1 class="titulo">Gestión de <span class="titulo_color">Usuarios</span> </h1>
            <div class="container">

                <div class="row">
                    <div class="col-2">
                        <h3 class="titulo">Cédula </h3>
                    </div>
                    <div class="col-4">

                        <div class="input-group mb-3">

                            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="#Cédula" />
                        </div>
                    </div>
                    <div class="col-3">
                        <button type="button" class="btn btn-light" onClick={handleSearchUsuario}>Buscar usuario</button>
                    </div>
                    <div class="col-3">
                        <button type="button" class="btn btn-light" onClick={handleAddUsuario}>Agregar usuario</button>
                    </div>
                </div>
            </div>



            <div>
                <table class="table table-light">
                    <thead>
                        <tr>
                            <th scope="col">Cédula</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Rol</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Opciones</th>
                        </tr>
                    </thead>
                    <tbody>

                        {usuarios.map((usuario) => (
                            <tr key={usuario.cedula} >
                                <td>
                                    <div class="input-group mb-3">

                                        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={usuario.cedula}/>
                                    </div>
                                </td>
                                <td>
                                    <div class="input-group mb-3">

                                        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={usuario.description} onChange={(e) => handleChangeName(e.target.value, usuario.cedula)}/>
                                    </div>
                                </td>
                                <td> 
                                    <select
                                        value={usuario.rol}
                                        onChange={() => handleChangeRol(usuario.cedula)}
                                    >
                                        <option value="Administrador">Administrador</option>
                                        <option value="Vendedor">Vendedor</option>

                                    </select></td>
                                <td>

                                    <select
                                     

                                       
                                    >   value={usuario.state}
                                        onChange={() => handleChangeState(usuario.cedula)}
                                        <option onClick={() => handleChangeStateAutorizado(usuario.cedula)} >Autorizado</option>
                                        <option  onClick={() => handleChangeStatePendiente(usuario.cedula)} >Pendiente</option>
                                        <option onClick={() => handleChangeStateNoAutorizado(usuario.cedula)} >No Autorizado</option>
                                        
                                    </select>
                                    
                                </td>
                                <td>
                                    <div class="container" style={{
                                        backgroundColor: '#f8f9fa'
                                    }}>
                                        <div class="row">
                                            <div class="col">
                                                <button type="button" class="btn btn-success" onClick={() => handleUpdateUsuario(usuario.cedula)}>
                                                    Guardar</button>
                                            </div>
                                            <div class="col">
                                                <button type="button" class="btn btn-danger" onClick={() => handleDeleteUsuario(usuario.cedula)}>
                                                    Eliminar</button>
                                            </div>
                                        </div>


                                    </div>




                                </td>
                            </tr>

                        ))}



                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default GestionUsuarios;
