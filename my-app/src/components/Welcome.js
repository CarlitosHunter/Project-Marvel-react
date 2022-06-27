export default function Welcome(props){
    console.log(props);
    const { message, name, project } = props;

    return(
        <div>
            <h1>Hola, {name}</h1>
            <h3><i>{project}</i></h3>
            <p>{message}</p>
            
        </div>
        
    );
}