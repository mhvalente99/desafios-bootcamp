import { useState, useEffect } from 'react'

function Table() {
    const url = "http://localhost:3333/cars"
    const [cars, setCars] = useState([]);

    async function listarCarros() {
        fetch(url)
          .then(response => response.json())
          .then(data => {
            setCars(data)
          })
    }

    useEffect(() => {
        listarCarros()
    }, [])

    function montarListaCarroVazio() {
        return (
            <tr>
                <td>Nenhum carro encontrado</td>
            </tr>
        )
    }

    function montarListaCarro(cars) {
        console.log(cars);
        return cars.map((car) => (
                <tr>
                    <td>{car.image}</td>
                    <td>{car.brandModel}</td>
                    <td>{car.year}</td>
                    <td>{car.plate}</td>
                    <td>{car.color}</td>
                </tr>
        )
     )
    }

    return(
        <table data-js="table" border="1">
            <thead>
                <tr>
                    <th>Imagem</th>
                    <th>Modelo</th>
                    <th>Ano</th>
                    <th>Placa</th>
                    <th>Cor</th>
                </tr>
             </thead>
             <tbody>
                 {
                     cars.length > 0 ? montarListaCarro(cars) : montarListaCarroVazio()
                 }                
             </tbody>
        </table>
    )
}

export default Table