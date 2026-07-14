import { Link } from "react-router-dom";

import "./commercial-services.css";

function CommercialServicesPage() {
    return (
        <>  

            <main>
                <section className="commercial-services-section">

                    <Link to="/services" className="back-btn">
                        ← Back to Services
                    </Link>

                    <div className="section-header">
                        <span className="header-badge">OLD SCHOOL COMPUTER SOLUTIONS</span>

                        <h1>Commercial Services</h1>

                        <p>
                            Technology solutions designed for growing businesses,
                            organizations, and professional teams.
                        </p>
                    </div>

                    <div className="commercial-services-grid">

                        {/* IT PC SERVICES */}
                        <div className="commercial-service-card">
                            <h2>IT PC Services</h2>

                            <div className="commercial-service-groups">

                                <div className="commercial-service-group">
                                    <h3>On-Site Services</h3>

                                    <ul className="commercial-service-features">
                                        <li>PC Diagnostics & Repair</li>
                                        <li>PC Tuneup & Optimizations</li>
                                        <li>Virus & Malware Removal</li>
                                        <li>Hardware Repair</li>
                                        <li>Data Recovery & Backup</li>
                                        <li>PC Hardware Lite Cleaning</li>
                                        <li>Software Installation & Setup</li>
                                        <li>Malware & Phishing Prevention Training</li>
                                        <li>General IT Support</li>
                                    </ul>
                                </div>

                                <div className="commercial-service-group">
                                    <h3>IT Consultations & Custom Software Projects</h3>

                                    <ul className="commercial-service-features">
                                        <li>Business Email Setup & Support</li>
                                        <li>.NET & CORE Software Development</li>
                                        <li>PHP Software Development</li>
                                        <li>Mobile Application Development</li>
                                        <li>T-SQL & MySQL Development</li>
                                        <li>ERP Development & Support</li>
                                        <li>Web Application & DNS Support</li>
                                        <li>Custom System Integration</li>
                                        <li>SaaS Setup & Support</li>
                                        <li>Database Administration & Support</li>
                                        <li>T-SQL</li>
                                        <li>MySQL</li>
                                        <li>PostgreSQL</li>
                                    </ul>
                                </div>

                                <div className="commercial-service-group">
                                    <h3>Remote Services</h3>

                                    <ul className="commercial-service-features">
                                        <li>Remote IT Monitoring</li>
                                        <li>Remote Diagnostic & Repair</li>
                                        <li>Remote PC Tuneup & Optimization</li>
                                        <li>Remote Virus & Malware Removal</li>
                                        <li>Remote Data Recovery & Backup</li>
                                    </ul>
                                </div>
                            </div>


                        </div>

                        
                        {/* ACCOUNTING */}
                        <div className="commercial-service-card">
                            <h2>IT Accounting Services</h2>

                            <div className="commercial-service-group">
                                <h3>On-Site & Remote</h3>

                                <ul className="commercial-service-features">
                                    <li>Payroll Setup & Support</li>
                                    <li>Bookkeeping Support</li>
                                    <li>Venture Funding Preparation</li>
                                    <li>Accounting Software Setup & Support</li>
                                    <li>Supply Chain Management Setup & Support</li>
                                    <li>Contract Review</li>
                                    <li>Vendor Management</li>
                                </ul>
                            </div>
                        </div>

                        {/* BUSINESS */}
                        <div className="commercial-service-card">
                            <h2>IT General Business Services</h2>

                            <div className="commercial-service-group">
                                <h3>On-Site & Remote</h3>

                                <ul className="commercial-service-features">
                                    <li>Business Plan Review & Creation</li>
                                    <li>Social Media Setup & Support</li>
                                    <li>IT Planning & Strategy</li>
                                    <li>Help Desk & On-Site Staffing</li>
                                    <li>Customer Relations Management</li>
                                    <li>Risk Management & Disaster Recovery</li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </section>
            </main>

        </>
    );
}

export default CommercialServicesPage;