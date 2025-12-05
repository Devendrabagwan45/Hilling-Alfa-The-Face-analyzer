import Footer from "../components/Footer";
import BeautyPlan from "../components/BeautyPlan";
import DemoAndDetections from "../components/DemoAndDetections";
import AdvanceFeatures from "../components/AdvanceFeatures";
import Home from "../components/Home";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      <Home />
      <AdvanceFeatures />
      <DemoAndDetections />
      <BeautyPlan />
      <Footer />
    </div>
  );
};

export default HomePage;
