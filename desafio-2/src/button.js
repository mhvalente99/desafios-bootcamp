function Button({ children, kind }){
    return(
        <button className={kind}>{ children }</button>
    )
}

export default Button