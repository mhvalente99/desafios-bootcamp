import Form from "./components/Form"
import Table from "./components/Table"
import logo from './images/logo.png';
function App() {
    return(
        <>
            <div className="app-container">
                <div className="content">
                    <section className="form">
                        <img src={logo} alt="Logo Piston Cup" className="logo"/>
                        <Form />
                    </section>
                    <section className="list">
                        <h1>Lista de Carros</h1>
                        <Table />
                    </section>
                </div>
            </div>
        </>
    )
}

export default App