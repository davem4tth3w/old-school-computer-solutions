import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";


import "./services.css";

function ServicesPage() {
    return (
        <>
            <Navbar/>  

            <main>
                
                <section className="services-section">
                    <div className="services-section-header">
                        <span className="header-badge">OUR SERVICES</span>
                        <h1>Technology solutions for homes and businesses</h1>
                        <p>
                            Reliable computer repair, business IT support,
                            software development, and accounting solutions.
                        </p>
                    </div>
                
                    {/* Single unified grid with all three cards */}
                    <div className="services-grid">
                        {/* Residential */}
                        <div className="service-card">
                            <div className="service-icon"><i className="fa-solid fa-house"></i></div>
                            <h2>Residential Services</h2>
                            <p>Home computer repair and support.</p>
                        
                            <ul className="service-features">
                                <li>On-Site Services</li>
                                <li>Pickup & Drop-Off</li>
                                <li>Remote Support</li>
                            </ul>
                        
                            <Link to="/residential-services" className="btn btn-primary">
                                Explore Services
                                <span className="arrow">→</span>
                            </Link>
                        </div>

                        {/* Commercial Services */}
                        <div className="service-card">
                            <div className="service-icon"><i className="fa-solid fa-briefcase"></i></div>
                            <h2>Commercial Services</h2>
                            <p>Business technology and support.</p>
                        
                            <ul className="service-features">
                                <li>IT Services</li>
                                <li>Accounting Services</li>
                                <li>Business Services</li>
                            </ul>
                        
                            <Link to="/commercial-services" className="btn btn-primary">
                                Explore Services
                                <span className="arrow">→</span>
                            </Link>
                        </div>

                        {/* IT Managed Services */}
                        <div className="service-card">
                            <div className="service-icon"><i className="fa-solid fa-computer"></i></div>
                            <h2>IT Managed Services</h2>
                            <p>For businesses needing proactive monitoring and ongoing IT management.</p>
                        
                            <ul className="service-features">
                                <li>24/7 Monitoring</li>
                                <li>Patch Management</li>
                                <li>Backup Monitoring</li>
                                <li>Firewall Management</li>
                                <li>Vendor Coordination</li>
                            </ul>
                        
                            <Link to="/it-managed-services" className="btn btn-primary">
                                Explore Services
                                <span className="arrow">→</span>
                            </Link>
                        </div>
                    </div>
                
                    <div className="service-catalog">
                        <p>Need a complete overview of our services?</p>

                        <a
                            href="/documents/Old School Computer Solutions - Service List - 2026.pdf"
                            className="btn pdf-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Service List{" "}
                            <i className="fa-solid fa-file-pdf"></i>
                        </a>
                    </div>
                </section>
            </main>

            <Footer />

        </>
    );
}

export default ServicesPage;