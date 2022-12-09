type ntu = {
    value:string,
    color:string,
    onCLickHandler : ()=>void
}
const Button = (props:ntu) =>{
    return(
        <div>
            <button type="button" onClick={props.onCLickHandler} className={props.color}>{props.value}</button>

        </div>
    )
}
export default Button;