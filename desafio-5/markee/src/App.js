import './App.css'
import markee from './markee.png'

function App() {
  return (
      <>
        <aside>
          <img src={markee} alt="Logo Markee"/>
          <div className="titleArchive">
            <span>Arquivos</span>
          </div>
          <div>
            <button>+ Adicionar Arquivo</button>
          </div>
          <div>
            <ul>
              <li>README.md</li>
            </ul>
          </div>
        </aside>
        <main>
          <div>
            <div>
              <input type="text" value="README.md"/>
            </div>
          </div>
          <div>
            Listar Markee
          </div>
        </main>
      </>
    );
}

export default App;
