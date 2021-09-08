import H4 from './h4'

function Sidebar({links, handleClick}) {
    return (
        <aside className="sidebar">
            <H4 text="Ajuda"/>
            <ul>
            {
                links.map((link) => (
                    <li key={link.id} onClick={(e) => {
                        e.preventDefault() 
                        handleClick(link.title, link.content) 
                    }}>
                        <a href={link.id}>{link.title}</a>
                    </li>
                ))
            }
            </ul>
        </aside>
    )
}

export default Sidebar
