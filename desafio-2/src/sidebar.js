import H4 from './h4'

function Sidebar({links}) {
    return (
        <aside className="sidebar">
            <H4 text="Ajuda"/>
            <ul>
            {
                links.map((link) => (
                    <li key={link.id}>
                        <a href={link.id}>{link.title}</a>
                    </li>
                ))
            }
            </ul>
        </aside>
    )
}

export default Sidebar
