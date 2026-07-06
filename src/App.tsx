import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import BusyVsBuilding from './components/BusyVsBuilding';
import ForGrowth from './components/ForGrowth';
import BusinessImpact from './components/BusinessImpact';
import CaseStudies from './components/CaseStudies';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import GetInTouch from './components/GetInTouch';
import AboutUs from './components/AboutUs';
import Offerings from './components/Offerings';
import PartnerProgram from './components/PartnerProgram';
import Insights from './components/Insights';
import InsightDetail from './components/InsightDetail';
import CaseStudiesList from './components/CaseStudiesList';
import CaseStudyDetail from './components/CaseStudyDetail';

function LandingPage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <BusyVsBuilding />
      <ForGrowth />
      <BusinessImpact />
      <CaseStudies />
      <FinalCTA />
    </>
  );
}

function ContactPage() {
  return (
    <>
      <GetInTouch />
      <FinalCTA />
    </>
  );
}

function AboutPage() {
  return (
    <>
      <AboutUs />
      <FinalCTA />
    </>
  );
}

function OfferingsPage() {
  return (
    <>
      <Offerings />
    </>
  );
}

function PartnerProgramPage() {
  return (
    <>
      <PartnerProgram />
    </>
  );
}

function InsightsPage() {
  return (
    <>
      <Insights />
    </>
  );
}

function InsightDetailPage() {
  return (
    <>
      <InsightDetail />
    </>
  );
}

function CaseStudiesListPage() {
  return (
    <>
      <CaseStudiesList />
    </>
  );
}

function CaseStudyDetailPage() {
  return (
    <>
      <CaseStudyDetail />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/offerings" element={<OfferingsPage />} />
            <Route path="/partner-program" element={<PartnerProgramPage />} />
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/insights/:slug" element={<InsightDetailPage />} />
            <Route path="/case-studies" element={<CaseStudiesListPage />} />
            <Route path="/case-studies/:slug" element={<CaseStudyDetailPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
