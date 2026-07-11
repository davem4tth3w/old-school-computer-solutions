import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";

import "./about.css";

import heroImage from "../../assets/img/cover/jiji_mic_bgcover.jpg";
import micahProfile from "../../assets/img/people/micah_profile.jpg";
import jijiProfile from "../../assets/img/people/jiji_profile.jpg";
import dmProfile from "../../assets/img/people/dm_profile_img_JPG.jpg";

function AboutPage() {
    return (
        <>
            <Navbar />

             <main>
                {/* Hero / About Intro */}
                <section className="about-hero">
                    <div className="about-hero-content">

                        <span className="header-badge">OUR STORY</span>

                        <h1>About Old School Computer Solutions</h1>

                        <p className="lead">
                            Helping homes and businesses succeed through dependable IT services, software development, and professional technology solutions.
                        </p>
                    </div>

                    <div className="hero-image">
                        <img
                            src={heroImage}
                            alt="Old School Computer Solutions Logo"
                            className="HeroImage"
                        />
                    </div>
                </section>


                {/* Company Story */}
                <section className="company-story">
                    <div className="section-container story-grid">

                        <div className="story-title">
                            <span className="header-badge">WHO WE ARE</span>
                            <h2>Old School Values, Modern Solutions.</h2>
                        </div>

                        <div className="story-content">

                            <p>
                                <strong>Old School Computer Solutions</strong> was established in
                                <strong>June 2026</strong> in
                                <strong>Kankakee, Illinois (60901)</strong>,
                                by <strong>Micah Holmes</strong> and <strong>Jiji Morte-Holmes</strong> with a simple mission:
                                to provide reliable, honest, and practical technology
                                solutions for homes and businesses.
                            </p>

                            <p>
                                The company was founded on the belief that exceptional customer service never goes out of style. 
                                These old school values—integrity, professionalism, and personal commitment—remain timeless. 
                                Combined with modern innovation, they enable us to deliver technology solutions that are dependable, 
                                efficient, and tailored to each client's unique needs.
                            </p>

                            <p>
                                From computer repair and managed IT services to software
                                development, networking, accounting solutions, and
                                technology consulting, Old School Computer Solutions is
                                committed to helping individuals and organizations
                                confidently embrace today's digital world. Every project is
                                approached with careful attention to detail, transparent
                                communication, and a genuine commitment to long-term
                                success.
                            </p>

                        </div>

                    </div>
                </section>

                

                {/* Mission */}
                <section className="mission-section">
                    <div className="section-container">
                        <h2>Our Mission</h2>

                        <p>
                            We are a company grounded in the timeless values of integrity, respect, and dedication—principles that have shaped successful businesses for generations. At the same time, we embrace the power of modern innovation to create solutions that are agile, efficient, and forward-thinking.
                        </p>

                        <p>
                            Our core purpose is to build meaningful relationships and deliver exceptional value by combining the wisdom of old-school business ethics with cutting-edge technology. We believe that trust, transparency, and personal commitment are the foundation upon which every modern success is built.
                        </p>

                        <p>
                            Driven by this blend of tradition and innovation, we strive to empower our clients and partners to navigate today's challenges with confidence and creativity. Our approach is rooted in thoughtful decision-making, continuous improvement, and a genuine desire to make a positive impact in every interaction.
                        </p>
                    </div>
                </section>

                {/* Team */}
                <section className="team-section">
                    <div className="section-container">
                        <div className="section-header">
                            <h2>Meet Our Team</h2>
                            <p className="section-subtitle">Experts dedicated to your success</p>
                        </div>

                        <div className="profiles-grid">
                            {/* Profile 1 */}
                            <article className="profile-card">
                                <div className="profile-avatar">
                                    <img
                                        src={micahProfile}
                                        alt="Micah - Software Engineer"
                                        onError={(e) => {
                                            e.target.src = defaultProfile;
                                        }}
                                    />
                                </div>
                                <h3>Micah Holmes</h3>
                                <span className="profile-role">Software Engineer</span>
                                <p className="profile-specialization">Microsoft Subject Matter Expert</p>
                                <p className="profile-bio">
                                    A skilled software engineer with a passion for creating innovative technology solutions that solve 
                                    real-world challenges. With extensive expertise in Microsoft technologies and a proven track record of
                                    delivering high-quality projects, he leads the company's technical vision while ensuring every solution 
                                    meets the highest standards of performance, reliability, and customer satisfaction.
                                </p>
                            </article>

                            {/* Profile 2 */}
                            <article className="profile-card">
                                <div className="profile-avatar">

                                    <img
                                        src={jijiProfile}
                                        alt="Jiji - IT Accountant"
                                        onError={(e) => {
                                            e.target.src = defaultProfile;
                                        }}
                                    />

                                </div>
                                <h3>Jiji Morte-Holmes</h3>
                                <span className="profile-role">IT Accountant</span>
                                <p className="profile-specialization">Accounting &amp; Business Subject Matter Expert</p>
                                <p className="profile-bio">
                                    Experienced IT accountant with strong expertise in financial analysis, budgeting, 
                                    and strategic planning. She oversees the company's financial operations, ensuring sound financial management while 
                                    supporting sustainable growth and helping clients make informed business decisions through accurate 
                                    and dependable accounting practices.
                                </p>
                            </article>
                        </div>

                        {/* Profile 3 */}
                        <article className="profile-card profile-center">
                            <div className="profile-avatar">
                                <img
                                    src={dmProfile}
                                    alt="Dave Matthew Ignacio - Programmer"
                                    onError={(e) => {
                                        e.target.src = defaultProfile;
                                    }}
                                />
                            </div>

                            <h3>Dave Matthew Ignacio</h3>
                            <span className="profile-role">Programmer</span>

                            <p className="profile-specialization">
                                Software Developer
                            </p>

                            <p className="profile-bio">
                                Experienced programmer specializing in software development and modern application design.
                            </p>
                        </article>
                    </div>
                </section>
            </main>



            <Footer/>
        </>
    );
}

export default AboutPage;

   

