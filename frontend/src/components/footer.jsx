import { useState } from "react";

import "../assets/css/components/footer.css";
import "../assets/css/components/modal.css";

function Footer() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [pdfTitle, setPdfTitle] = useState("");
    const [pdfSrc, setPdfSrc] = useState("");

    const openPdf = (title, pdf) => {
        setPdfTitle(title);
        setPdfSrc(pdf);
        setIsModalOpen(true);
    };

    const closePdf = () => {
        setIsModalOpen(false);
        setPdfSrc("");
        setPdfTitle("");
    };

    return (
        <>
            <section className="footer-section">

                <div className="footer-container">

                    <div className="footer-column">

                        <h2>Contact</h2>

                        <p>
                            <i className="fa-solid fa-envelope"></i>{" "}
                            oldschoolcomputersolutions@gmail.com
                        </p>

                        <p>
                            <i className="fa-solid fa-phone"></i>{" "}
                            (815) 435-0028
                        </p>

                        <p>
                            <i className="fa-solid fa-location-dot"></i>{" "}
                            304 Waldron Rd. Kankakee, IL 60901
                        </p>

                    </div>

                    <div className="footer-column">

                        <h2>Resources</h2>

                        <ul>

                            <li>
                                <a
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        openPdf(
                                            "Terms of Service",
                                            "/documents/Old School Computer Solutions Terms of Service.pdf"
                                        );
                                    }}
                                >
                                    Terms of Service
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    onClick={(e) => { 
                                        e.preventDefault();
                                        openPdf(
                                            "Privacy Policy",
                                            "/documents/Old School Computer Solutions - Privacy Policy.pdf"
                                        );
                                    }}
                                >
                                    Privacy Policy
                                </a>
                            </li>

                        </ul>

                    </div>

                </div>

                <footer className="footer-bottom">

                    <p>
                        <i className="fa-regular fa-copyright"></i>{" "}
                        2026 Old School Computer Solutions. All Rights Reserved.
                    </p>

                </footer>

            </section>

            {isModalOpen && (
                <div
                    className="pdf-modal"
                    onClick={closePdf}
                >
                    <div
                        className="pdf-modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >

                        <div className="pdf-header">

                            <h2>{pdfTitle}</h2>

                            <button onClick={closePdf}>
                                &times;
                            </button>

                        </div>

                        <iframe
                            className="pdf-viewer"
                            src={pdfSrc}
                            title="PDF Viewer"
                        />

                    </div>
                </div>
            )}
        </>
    );
}

export default Footer;