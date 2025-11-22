function MyReact(props) {
    const  { username, surname} = props
    return (
        <div>
            <p>name: {username}</p>
            <p>surname: {surname}</p>
        </div>
    )
};

export default MyReact;