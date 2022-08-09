import './About.css'
import Navbar from '../../Navigation/Navbar';
import Footer from '../../Footer/Footer';

const About = () => {
    return (
        <div className="about_body">
            <Navbar></Navbar>

            <div className="image-aboutus-banner mt-70">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="lg-text">About Us</h1>

                            <p className="image-aboutus-para">Welcome to Course Management System of Faculty of Enginnering, University of jaffna.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="aboutus-secktion paddingTB60">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1 className="strong">Who we are and<br />what we do</h1>

                            <p className="lead">Handle all courses<br />easily and quickly </p>
                        </div>
                        <div className="col-md-6">
                            <h3>Our Vision</h3>

                            <p>Providing a smooth and user-friendly web application that can handle the course management and displaying process for the Faculty of Engineering, University of Jaffna.</p>
                          
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default About;
