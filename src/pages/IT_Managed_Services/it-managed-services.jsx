import { Link } from "react-router-dom";

import "./it-managed-services.css";

function ITManagedServicesPage() {
    return (
        <>

            <main>
                <section className="it-managed-services-section">

                    <Link to="/services" className="back-btn">
                        ← Back to Services
                    </Link>

                    <div className="section-header">
                        <span className="header-badge">OLD SCHOOL COMPUTER SOLUTIONS</span>

                        <h1>IT Managed Services</h1>

                        <p>
                            Professional IT management solutions for businesses
                            and organizations.
                            and families.
                        </p>
                    </div>

                    {/* row - 1 */}
                    <div className="it-managed-services-grid">

                        <div className="it-managed-service-card">
                            <h2>Proactive Monitoring</h2>

                            <ul className="it-managed-service-features">
                                <li>Remote Help Desk</li>
                                <li>24/7 Monitoring</li>
                                <li>Patch Management</li>
                                <li>Data Backup Monitoring</li>
                            </ul>
                        </div>

                        <div className="it-managed-service-card">
                            <h2>Security & Protection</h2>

                            <ul className="it-managed-service-features">
                                <li>Virus & Malware Removal</li>
                                <li>Firewall Management</li>
                                <li>Risk Assessments</li>
                                <li>Disaster Recovery</li>
                            </ul>
                        </div>

                        <div className="it-managed-service-card">
                            <h2>Infrastructure</h2>

                            <ul className="it-managed-service-features">
                                <li>Network Administration</li>
                                <li>Cloud Setup</li>
                                <li>Business Email Support</li>
                                <li>Vendor Coordination</li>
                            </ul>
                        </div>

                    </div>

                    {/* row - 2 */}
                    <div className="it-managed-services-grid">

                        <div className="it-managed-service-card">
                            <h2>Business Applications</h2>

                            <ul className="it-managed-service-features">
                                <li>Microsoft 365 Administration</li>
                                <li>ERP Administration</li>
                                <li>QuickBooks Support</li>
                            </ul>
                        </div>

                        <div className="it-managed-service-card">
                            <h2>PC Maintenance</h2>

                            <ul className="it-managed-service-features">
                                <li>PC Diagnostics</li>
                                <li>Tune-Up & Optimization</li> 
                                <li>Hardware Cleaning</li>
                                <li>Software Installation</li>
                            </ul>
                        </div>

                        <div className="it-managed-service-card">
                            <h2>IT Consulting</h2>

                            <ul className="it-managed-service-features">
                                <li>IT Planning & Strategy</li>
                                <li>IT Advisory</li>
                                <li>Risk Assessments</li>
                            </ul>
                        </div>


                    </div>

                </section>
            </main>

        </>
    );
}

export default ITManagedServicesPage;
