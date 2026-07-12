import {Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollTop";

import HomePage from "./pages/Home/homepage";
import ServicesPage from "./pages/Services/services";
import AboutPage from "./pages/About/about";
import ContactPage from "./pages/Contact/contact";
import ResidentialServicesPage from "./pages/Residential_Services/residential-services";
import CommercialServicesPage from "./pages/Commercial_Services/commercial-services";
import ItManagedServicesPage from "./pages/IT_Managed_Services/it-managed-services";

function App() {
    return (
        <>

            <ScrollToTop />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/residential-services" element={<ResidentialServicesPage />} />
                <Route path="/commercial-services" element={<CommercialServicesPage />} />
                <Route path="/it-managed-services" element={<ItManagedServicesPage />} />
            </Routes>

        </>
    );
}

export default App;