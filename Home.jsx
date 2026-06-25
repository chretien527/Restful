import Navbar from '../components/Navbar.jsx';
import './Home.css';

function Home(){
    return(
        <div className='home'>
            <Navbar />
            <h3> FAST FOOD.  </h3>
            <h1>LUXURY</h1>
            <h3>EXPERIENCE.</h3>
            <p className='paragraph'> Where speed meets luxury.
                Every bite is crafted with perfection,
                and passion.
            </p>
            <button className='btn1'>ORDER NOW</button>
            <img src="" alt="" />
        </div>
    );
}

export default Home;