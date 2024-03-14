import './CustomButton.css';

const CustomButton = ({name, style})=>{
    return(
        <button style={style} className="comp-button">{name}</button>
    )
}
export default CustomButton;