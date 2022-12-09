import Navbar from './Navbar';
import './style.css';
const Home = ()=>{
    return(
        <div>
        <Navbar/>

   <div>
        <div className="m-1">
            <figure><img src="img/Header.png" alt="m-1"/></figure>
            <article>
                <h2>Balance Your Body and Mind</h2>
                <p>
                    Duis aute irure dolor in reprehenderit in voluptate 
                    velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat.
                </p>
                <a  href="/register"
                >JOIN US NOW</a>
            </article>
        </div>
       </div>
       </div>
    )
}

export default Home;




