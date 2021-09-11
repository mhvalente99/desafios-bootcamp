import { useState, useEffect } from 'react'

function Table() {
    const url = "http://localhost:3333/cars"
    const [cars, setCars] = useState([
        {image: 'https://www.nicepng.com/png/detail/12-126581_light…g-mcqueen-budget-cars-3-lightning-mcqueen-png.png', brandModel: 'McQueen', year: '2021', plate: 'AXT-7393', color: '#87121b'}
    ]);

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
                <tr key={car.plate}>
                    <td>
                        <img src={car.image} alt={car.brandModel}/>
                    </td>
                    <td>{car.brandModel}</td>
                    <td>{car.year}</td>
                    <td>{car.plate}</td>
                    <td>
                        <div style={{ background: car.color }}>
                        </div>
                    </td>
                    <td>
                        <button>Deletar</button>
                    </td>
                </tr>
        )
     )
    }

    return(
        <table>
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