import './Banner.css'
import logo from './logo.png'
import Recomendation from './Recomendation.js';

function Banner(){

    return (
        <div className="lmj-banner">
         <div>
            <img src={logo} alt='La maison jungle' className='lmj-logo'/>
            <h1>La Maison Jungle</h1>
         </div>
              <Recomendation/>
        </div>
        
    );
}
   
    
   

export default Banner