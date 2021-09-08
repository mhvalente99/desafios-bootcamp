import { useState } from 'react'
import Header from './header'
import Menu from './menu'
import Sidebar from './sidebar'
import Content from './content'
import Footer from './footer'

import H3 from './h3'

const articles = [
    {
        id: 1,
        title: "Equipamentos para fazer em casa",
        content: (
            <>
                <H3 text="Equipamentos para fazer em casa" />
                <p>Alguns equipamentos para auxiliar você a preparar um otimo burger</p>
                <ul>
                    <li>Balança para culinaria</li>
                    <li>Chapa de ferro para fogão</li>
                    <li>Espatula</li>
                    <li>Tampa para abafar</li>
                    <li>Bisnagas de molho</li>
                </ul>
            </>
        )
    },
    {
        id: 2,
        title: "Molhos para acompanhar",
        content: (
            <>
                <H3 text="Molho para acompanhar" />
                <p>Dicas de alguns molhos para acompanhar seu burger</p>
                <ul>
                    <li>Maionese de alho</li>
                    <li>Maionese verde</li>
                    <li>Ketchup</li>
                    <li>Mostarda</li>
                </ul>
            </>
        )
    },
    {
        id: 3,
        title: "Adicionais para seu burger",
        content: (
            <>
                <H3 text="Adicionais para seu burger" />
                <p>Alguns ingredientes para turbinar seu burger</p>
                <ul>
                    <li>Bacon crocante em tiras</li>
                    <li>Calabresa</li>
                    <li>Alface</li>
                    <li>Tomate</li>
                    <li>Cebola roxa</li>
                </ul>
            </>
        )
    }
]

function App() {
    const [title, setTitle] = useState(articles[0].title)
    const [content, setContent] = useState(articles[0].content)

    function handleSelectArticle(title, content) {
        setTitle(title)
        setContent(content)        
    }

    return (
        <>
            <Header/>
            <Menu/>
            <Sidebar links={articles} handleClick={handleSelectArticle}/>
            <Content title={title} content={content}/>
            <Footer/>
        </>
    )
}

export default App
