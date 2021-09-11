import { useState, useEffect } from 'react'
import Form from "./components/Form"
import Table from "./components/Table"
import Message from './components/Message';
import logo from './images/logo.png';

function App() {
    const [cars, setCars] = useState([]);
    const [status, setStatus] = useState({});
    
    const url = "http://localhost:3333/cars"

    async function listarCarros() {
        fetch(url)
          .then(response => response.json())
          .then(data => {
            setCars(data)
          })
    }

    async function deletarCarro(plate) {
        fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ plate: plate })
            }
        )
        .then(response => response.json())
        .then(data => {
            if (data.message) {
                listarCarros();
                
                setStatus({
                    message: data.message,
                    type: "message-success"
                })
            }
        })
    }

    useEffect(() => {
        listarCarros()
    }, [])

    function showMessage(status) {
       const id = setInterval(() => {
            setStatus(null)
            clearInterval(id)
        }, 5000)

        return(
            status !== null ? 
                <Message message={status.message} type={status.type}/>
            : <></>
        )
    }

    return(
        <>
            <div className="app-container">
                <div className="content">
                    <section className="form">
                        { showMessage(status) }
                        <img src={logo} alt="Logo Piston Cup" className="logo"/>
                        <Form list={listarCarros} setStatus={setStatus} />
                    </section>
                    <section className="list">
                        <h1>Lista de Carros</h1>
                        <Table cars={cars} deleteCar={deletarCarro}/>
                    </section>
                </div>
            </div>
        </>
    )
}

export default App