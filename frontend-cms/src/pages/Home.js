import Navbar from '../Navigation/Navbar.js';
import '../styles/home.css'

const Home = () => {

    return (
        <> <Navbar/>

        <section className="hero">
                <h2 className='float-center' style={{color:'red'}}>Welcome To Engineering Foundation Institute</h2>
                {/* <div className="container">

                    <div className="left-col">

                        <h1>VIEW YOUR / YOUR STUDENT'S RESULTS</h1>
                        <a href="/StudentGuardianLogIn" className="primary-cta btn-info ">Click here!</a>
                        <a href="/CourseSelection" className="watch-sched-cta "  >
                            <img src={exam} alt="exam calender" />Assessments Schedule
                        </a>
                    </div>
                    <img src={illustration} className="hero-img" alt="Illustration" />
                </div> */}
            </section>
        
        </>
       
        
    );
}

export default Home;
