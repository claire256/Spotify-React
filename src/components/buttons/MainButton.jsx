import './MainButton.css'

const MainButton = ({name, style})=>{
    return(
        <button style={style}>{name}</button>
    )
}
export default MainButton;