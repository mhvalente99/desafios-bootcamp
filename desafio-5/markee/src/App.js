import './App.css'
import markee from './markee.png'
import iconFile from './assets/icon-file-text.svg'

function App() {
  return (
      <>
        <aside className="NavigationSide">
          <figure>
            <img src={markee} alt="Logo Markee" className="LogoMarkee"/>
          </figure>
          <div className="WrapperArchive">
            <span className="TitleArchive">Arquivos</span>
          </div>
          <div className="WrapperButton">
            <button><b>+</b> Adicionar Arquivo</button>
          </div>
          <div className="WrapperListFile">
            <ul className="ListFile">
              <li className="File selected">
                <img src={iconFile} alt="Icone Arquivo"/>
                <span>READMtergergwegwegwtgwtgwgrtgwgwrE.md</span>
              </li>
              <li className="File">
                <img src={iconFile} alt="Icone Arquivo"/>
                MYFILE.md
              </li>
              <li className="File">
              <img src={iconFile} alt="Icone Arquivo"/>
                CONTRIB.md
              </li>
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
