import MainButton from '../buttons/MainButton';
import  './MainPremium.css';

const images = require.context('../../assets/images/premium', true, /\.svg$/);
const imageList = images.keys().map(image => images(image));

const MainPremium = ()=>{

    return(
        <div>
            <div className="get">
                <h1>Get Premium free for 1 month</h1>
                <p className="p1">Just £119/month after. Debit and credit cards accepted. Cancel anytime.</p>
                <div className="buttons">
                <MainButton 
                name="GET STARTED"
                 style={{background: "black", border: "none"}}
                 />
                <MainButton 
                name="SEE OTHER PLANS" 
                style={{background: "#1D75DE", border: "2px solid white", marginLeft: "20px"}}
                />
                </div>
                <p className="p2"><a href="#">Terms and conditions apply.</a>1 month free not available for users who have already tried Premium</p>
            </div>
            <div className="power">
                <h1>The power of Premium </h1>
                <div className="images">
                {imageList.map((image, index) => (
                <img key={index} src={image}/>
                  ))}
                </div>
                <div className="paragraph">
                    <div>
                    <p className="para1">Ad-free music listening</p>
                    <p>Enjoy uninterrupted music</p>
                    </div>
                    <div>
                    <p className="para1">Offline playback</p>
                    <p>Save your data by<br></br> listening online</p>
                    </div>
                    <div>
                    <p className="para1">play everywhere</p>
                    <p>Listen on your speakers, TV, <br></br>and other favorite devices</p>
                    </div>
                    <div>
                    <p className="para1">Pay your way</p>
                    <p>Pre pay with Paytm, UPI, <br></br>and more</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPremium;