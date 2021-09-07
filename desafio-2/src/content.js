import H3 from './h3'
function Content() {
    return (
        <main className="content">
            <H3 text="Dicas para um bom burger"/>
            <br/>
            <p>7 Dicas para um burger perfeito</p>
            <br/>
            <ul>
                <li>Escolha um boa carne com um bom percentual de gordura. Ex: (Ácem com Peito)</li>
                <li>Escolha um pão macio. Ex: (Brioche)</li>
                <li>Escolha um queijo que tenha facilidade para derreter. Ex: (Mussarela, Prato, Cheddar)</li>
                <li>Molde o burger com uma sobre em relação ao disco do pão. Pois ele ira diminuir durante a cocção</li>
                <li>Sele seu pão com manteiga em uma frigideira pre aquecida</li>
                <li>Com a frigideira bem quente, sele os dois lados do seu burger para fazer uma crostinha perfeita</li>
                <li>Monte seu burger na sua sequencia preferida</li>
            </ul>
        </main>
    )
}

export default Content
