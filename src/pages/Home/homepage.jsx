import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";

import "./homepage.css";

import osLogo from "../../assets/img/os_logo.png";

function HomePage() {
    return (
        <>
            <Navbar />

            <main>

                <section className="home-hero">
                    <div className="home-hero-content">

                        {/* Column 1 */}
                        <div className="hero-text">

                            <p className="eyebrow">
                                Old School Computer Solutions
                            </p>

                            <h1>
                                IT Support &
                                <br />
                                Computer Solutions
                            </h1>

                            <p className="hero-description">
                                Helping homes and businesses succeed through dependable
                                IT services, software development, and professional
                                technology solutions.
                            </p>

                            <div className="hero-buttons">

                                <a
                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=oldschoolcomputersolutions@gmail.com"
                                    className="btn-primary"
                                >
                                    Get Support
                                </a>

                                <Link
                                    to="/services"
                                    className="btn-secondary"
                                >
                                    View Services
                                </Link>

                            </div>

                        </div>

                        {/* Column 2 */}
                        <div className="hero-image">

                            <img
                                src={osLogo}
                                alt="Logo"
                                className="logo"
                            />

                        </div>

                    </div>
                </section>

            </main>

            <Footer />
        </>
    );
}

export default HomePage;