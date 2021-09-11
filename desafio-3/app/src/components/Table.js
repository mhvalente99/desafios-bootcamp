import { FaTrash } from 'react-icons/fa'

function Table({ cars, deleteCar }) {
    function montarListaCarroVazio() {
        return (
            <tr>
                <td>Nenhum carro encontrado</td>
            </tr>
        )
    }

    function handleDeleteCar(plate) {
        deleteCar(plate)
    }

    function montarListaCarro(cars) {
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
                        <button className="delete-action" onClick={() => {handleDeleteCar(car.plate)}}>
                            <FaTrash size={16} color="#ac1a1c"/>
                        </button>
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