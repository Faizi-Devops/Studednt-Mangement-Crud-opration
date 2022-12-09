type ntu = {
    value:string,
    color:string
}
const Button = (props:ntu) =>{
    return(
        <div>
            <button type="button" className={props.color}>{props.value}</button>

        </div>
    )
}
export default Button;