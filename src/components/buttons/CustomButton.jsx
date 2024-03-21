import combineClasses from '../../utils/format';

const CustomButton = ({name, style, type, onClick, className})=>{
    const classNames = {
        primary: 'btn',
        outline: 'btn-outline',
        secondary: 'btn-secondary'
    }
    const classname = classNames[type] || classNames.primary
    return(
        onClick?
        <button onClick={onClick} style={style} className={combineClasses(classname, className)}>{name}</button>
        :
        <a href="#" className={combineClasses(classname, className)}>{name}</a>
    )
}
export default CustomButton;