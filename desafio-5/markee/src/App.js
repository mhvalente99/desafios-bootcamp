import './App.css'
import markee from './markee.png'

function App() {
  return (
      <>
        <aside className="NavigationSide">
          <figure>
            <img src={markee} alt="Logo Markee"/>
          </figure>
          <div className="WrapperArchive">
            <span className="TitleArchive">Arquivos</span>
          </div>
          <div className="WrapperButton">
            <button><b>+</b> Adicionar Arquivo</button>
          </div>
          <div>
            <ul>
              <li>README.md</li>
            </ul>
          </div>
        </aside>
        <main>
          <div>
            <input type="text" value="README.md"/>
          </div>
          <div>
            Edit Markee
          </div>
          <div>
            Listar Markee
          </div>
        </main>
      </>
    );
}

export default App;
