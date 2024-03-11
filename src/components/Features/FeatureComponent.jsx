import Adfree from "../../assets/images/premium/Adfree.svg"
import Offline from "../../assets/images/premium/Offline.svg"
import Play from "../../assets/images/premium/Play.svg"
import Pay from "../../assets/images/premium/Pay.svg"
import "./FeatureComponent.css"

const FeatureComponent = ()=>{
    const features = [{
        title:"Ad-free music listening",
        image: Adfree,
        description:"Enjoy uninterrupted music"
    },

    {
        title:"Offline playback",
        image: Offline,
        description:"Save your data by listening online"
    },

    {
        title:"Play everywhere",
        image: Play,
        description:"Listen on your speakers, TV, and other favorite device"
    },
    
    {
        title:"Pay your way",
        image: Pay,
        description:"Pre pay with Paytm, UPI and more"
    },
        
]
   console.log(features) 
    return(
        <div>
            <h1>The power of Premium </h1>
             <div className="power"> 
                {features.map((feature) =>
                
                   <div className="power-div">
                        <img src={feature.image}/>
                        <h4>{feature.title}</h4>
                        <p>{feature.description}</p>
                    </div>
                )}
             </div> 
        </div>
    )
}
export default FeatureComponent;