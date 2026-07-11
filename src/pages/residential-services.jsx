import { Link } from "react-router-dom";

import "../assets/css/pages/residential-services.css";

function ResidentialServicesPage() {
    return (
        <>
            <main>
                <section className="services-section">

                    <Link to="/services" className="back-btn">
                        ← Back to Services
                    </Link>


                    <div className="section-header">
                        <span className="badge">OLD SCHOOL COMPUTER SOLUTIONS</span>
                        
                        <h1>Residential Services</h1>

                        <p>
                            Home technology solutions designed for homeowners
                            and families.
                        </p>
                    </div>

                    <div className="services-grid">

                        {/* On-Site */}
                        <div className="service-card">
                            <h2>On-Site Services</h2>

                            <ul className="service-features">
                                <li>PC Diagnostics & Repair</li>
                                <li>PC Tuneup & Optimization</li>
                                <li>Virus & Malware Removal</li>
                                <li>Hardware Repair</li>
                                <li>Data Recovery & Backup</li>
                                <li>PC Hardware Lite Cleaning</li>
                            </ul>
                        </div>

                        {/* Pickup */}
                        <div className="service-card">
                            <h2>Pickup & Drop-Off Services</h2>

                            <ul className="service-features">
                                <li>PC Diagnostics & Repair</li>
                                <li>Virus Removal</li>
                                <li>Deep Hardware Cleaning</li>
                                <li>Data Recovery</li>
                            </ul>
                        </div>

                        {/* Remote */}
                        <div className="service-card">
                            <h2>Remote Services</h2>

                            <ul className="service-features">
                                <li>Remote Monitoring</li>
                                <li>Remote Diagnostics</li>
                                <li>Remote Optimization</li>
                                <li>Remote Virus Removal</li>
                                <li>Remote Backup Support</li>
                            </ul>
                        </div>

                    </div>

                </section>
            </main>
        </>
    );
}

export default ResidentialServicesPage;