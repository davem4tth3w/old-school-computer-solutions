import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";

import "./contact.css";
import micahProfile from "../../assets/img/people/micah_profile.jpg";
import jijiProfile from "../../assets/img/people/jiji_profile.jpg";

function ContactPage() {
    return (
        <>
            <Navbar />
                            
            <main>

                <section className="contact-section">
                    <div className="section-header">
                        <span className="header-badge">OUR CONTACT INFO</span>
                        <h1>Get in Touch</h1>
                        <p>
                            Contact us for reliable computer repair, business IT support, 
                            software development, and accounting solutions.
                        </p>
                    </div>
                    
                    <div className="contact-grid">

                        {/* Contact 1 */}
                        <article className="contact-card">

                            <div className="contact-avatar">
                                <img
                                    src={micahProfile}
                                    alt="Micah - Software Engineer"
                                    onError={(e) => {
                                        e.target.src = defaultProfile;
                                    }}
                                />
                            </div>

                            <h2>Micah Holmes</h2>

                            <span className="contact-role">
                                Software Engineer
                            </span>

                            <p className="contact-specialization">
                                Microsoft Subject Matter Expert
                            </p>

                            <div className="divider"></div>

                            <ul className="contact-info">

                                <li>
                                    <i className="fa-solid fa-envelope"></i>
                                    oldschoolcomputersolutions@gmail.com
                                </li>

                                <li>
                                    <i className="fa-solid fa-phone"></i>
                                    (815) 435-0028
                                </li>

                            </ul>

                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=oldschoolcomputersolutions@gmail.com"
                            target="_blank" className="contact-btn">
                                Send Email
                            </a>

                        </article>

                        {/* Contact 2 */}
                        <article className="contact-card">

                            <div className="contact-avatar">
                                <img
                                    src={jijiProfile}
                                    alt="Jiji - Accountant"
                                    onError={(e) => {
                                        e.target.src = defaultProfile;
                                    }}
                                />
                            </div>

                            <h2>Jiji Morte-Holmes</h2>

                            <span className="contact-role">
                                IT Accountant
                            </span>

                            <p className="contact-specialization">
                                Accounting & Business Subject Matter Expert
                            </p>

                            <div className="divider"></div>

                            <ul className="contact-info">

                                <li>
                                    <i className="fa-solid fa-envelope"></i>
                                    jijigadugdugholmes@gmail.com
                                </li>

                                <li>
                                    <i className="fa-solid fa-phone"></i>
                                    (815) 435-0028
                                </li>

                            </ul>

                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jijigadugdugholmes@gmail.com"
                            target="_blank" className="contact-btn">
                                Send Email
                            </a>

                        </article>

                    </div>

                </section>

            </main>

            <Footer />
        </>
    );
}

export default ContactPage;
