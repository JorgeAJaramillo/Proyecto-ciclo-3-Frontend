
import '../App.css';
import './GestionProductos.css';
import { useState } from 'react';

function GestionVentas() {

  
    const [products, setProducts] = useState([]);

    const handleAddProduct = () => {
        const i = products.length + 1;
        const newProduct = {
            id: i,
            description: "",
            value: "",
            state: "Disponible"
        }
        setProducts([...products, newProduct])
    };
    const handleDeleteProduct = (id) => {
        alert("Solicitud Back para eliminar el id: " + id)
    };

    const handleUpdateProduct = (id) => {
        alert("Solicitud Back para actualizar el id: " + id)
    };

    const handleSearchProduct = () => {
        alert("Solicitud Back para buscar")
    };


    const handleChangeState = (id) => {
        const index = products.findIndex(element => element.id === id)

        var newProduct = products;
        var newState = "Disponible";
        if (newProduct[index].state === "Disponible") {
            newState = "No disponible";
        }
        newProduct[index] = {

            id: newProduct[index].id,
            description: newProduct[index].description,
            value: newProduct[index].value,
            state: newState

        }

        setProducts([...newProduct])
    };

    const handleChangeValue = (event, id) => {
        const index = products.findIndex(element => element.id === id)

        var newProduct = products;
        
        newProduct[index] = {

            id: newProduct[index].id,
            description: newProduct[index].description,
            value: event,
            state: newProduct[index].state

        }

        setProducts([...newProduct])
    };

    const handleChangeDescription = (event, id) => {
        const index = products.findIndex(element => element.id === id)

        var newProduct = products;
        
        newProduct[index] = {

            id: newProduct[index].id,
            description: event,
            value: newProduct[index].value,
            state: newProduct[index].state

        }

        setProducts([...newProduct])
    };

    return (

        <div className="App">
            <h1 class="titulo">Gestión de <span class="titulo_color">Ventas</span> </h1>
            <div class="container">

                <div class="row">
                    <div class="col-2">
                        <h3 class="titulo">ID </h3>
                    </div>
                    <div class="col-4">

                        <div class="input-group mb-3">

                            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="#ID" />
                        </div>
                    </div>
                    <div class="col-3">
                        <button type="button" class="btn btn-light" onClick={handleSearchProduct}>Buscar venta</button>
                    </div>
                    <div class="col-3">
                        <button type="button" class="btn btn-light" onClick={handleAddProduct}>Agregar venta</button>
                    </div>
                </div>
            </div>



            <div>
                <table class="table table-light">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">Valor total</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Opciones</th>
                        </tr>
                    </thead>
                    <tbody>

                        {products.map((product) => (
                            <tr key={product.id} >
                                <th scope="row">{product.id}</th>
                                <td>
                                    <div class="input-group mb-3">

                                        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={product.description} onChange={(e) => handleChangeDescription(e.target.value, product.id)}/>
                                    </div>
                                </td>
                                <td>
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="inputGroup-sizing-default">$</span>
                                        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={product.value} onChange={(e) => handleChangeValue(e.target.value, product.id)}/>
                                    </div>
                                </td>
                                <td>

                                    <select
                                        value={product.state}
                                        onChange={() => handleChangeState(product.id)}
                                    >
                                        <option value="Disponible">Disponible</option>
                                        <option value="No disponible">No disponible</option>

                                    </select>
                                </td>
                                <td>
                                    <div class="container" style={{
                                        backgroundColor: '#f8f9fa'
                                    }}>
                                        <div class="row">
                                            <div class="col">
                                                <button type="button" class="btn btn-success" onClick={() => handleUpdateProduct(product.id)}>
                                                    Guardar</button>
                                            </div>
                                            <div class="col">
                                                <button type="button" class="btn btn-danger" onClick={() => handleDeleteProduct(product.id)}>
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

export default GestionVentas;
