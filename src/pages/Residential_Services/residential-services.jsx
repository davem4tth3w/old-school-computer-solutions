import { Link } from "react-router-dom";

import "./residential-services.css";

function ResidentialServicesPage() {
    return (
        <>
            <main>
                <section className="residential-services-section">

                    <Link to="/services" className="back-btn">
                        ← Back to Services
                    </Link>


                    <div className="section-header">
                        <span className="header-badge">OLD SCHOOL COMPUTER SOLUTIONS</span>
                        
                        <h1>Residential Services</h1>

                        <p>
                            Home technology solutions designed for homeowners
                            and families.
                        </p>
                    </div>

                    <div className="residential-services-grid">

                        {/* On-Site */}
                        <div className="residential-services-card">
                            <h2>On-Site Services</h2>

                            <ul className="residential-service-features">
                                <li>PC Diagnostics & Repair</li>
                                <li>PC Tuneup & Optimization</li>
                                <li>Virus & Malware Removal</li>
                                <li>Hardware Repair</li>
                                <li>Data Recovery & Backup</li>
                                <li>PC Hardware Lite Cleaning</li>
                            </ul>
                        </div>

                        {/* Pickup */}
                        <div className="residential-services-card">
                            <h2>Pickup & Drop-Off Services</h2>

                            <ul className="residential-service-features">
                                <li>PC Diagnostics & Repair</li>
                                <li>Virus Removal</li>
                                <li>Deep Hardware Cleaning</li>
                                <li>Data Recovery</li>
                            </ul>
                        </div>

                        {/* Remote */}
                        <div className="residential-services-card">
                            <h2>Remote Services</h2>

                            <ul className="residential-service-features">
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