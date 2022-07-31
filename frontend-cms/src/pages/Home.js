import Navbar from '../Navigation/Navbar.js';
import '../styles/home.css';
import uojLogo from '../assets/uojLogo.png';
import Footer from '../Footer/Footer.js';

const Home = () => {

    return (
        <> <Navbar/>

        <section className="hero">
                
                <div className="container">

                    <div className="left-col">

                        {/* <h1>SEE OUR COURSE CATALOGUE</h1> */}
                       <h3 >We Are Managing Courses In</h3>
                <h3 >Faculty of Engineering</h3>
                <h3 >University of Jaffna</h3>
                        <a href="/catalogue" className="primary-cta  ">SEE OUR COURSE CATALOGUE</a>
                        {/* <a href="/CourseSelection" className="watch-sched-cta "  >
                            <img src={exam} alt="exam calender" />Assessments Schedule
                        </a> */}
                    </div>
                    <img src={uojLogo} className="logo-img" alt="uojLogo" />
                </div>
            </section>
        <Footer/>
        </>
       
        
    );
}

export default Home;
