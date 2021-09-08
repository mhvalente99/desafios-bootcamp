import H3 from './h3'
function Content({title, content}) {
    return (
        <main className="content">
            <H3 text="Dicas para um bom burger"/>
            <br/>
            <p>{title}</p>
            <br/>
            { content }
        </main>
    )
}

export default Content
