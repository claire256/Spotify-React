import './MainButton.css'

const MainButton = ({name, style})=>{
    return(
        <button style={style} className="comp-button">{name}</button>
    )
}
export default MainButton;