export function Square(props) {
    console.log(props);
    
    return (
        <button onClick={props.onSquareClick} disabled={props.disBtn}>
            {props.value}
        </button>
    );
}