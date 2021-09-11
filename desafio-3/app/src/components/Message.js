function Message({ message, type }) {
    return(
        <span className={type}>
            {message}
        </span>
    )
}

export default Message
