import spotifywhite from '../../assets/images/spotifywhite.svg'
import spotifyblack from '../../assets/images/spotifyblack.svg'

const Logo = (props)=>{
  if(props.useWhite){
    return(
        <a href="#/dashboard">
        <img src={spotifywhite}/>
        </a>
    )
  }
  else{
    return(
    <a href="#/dashboard">
    <img src={spotifyblack}/>
    </a>
    )
  }  
  
}
export default Logo;