import Home from "@/components/About/About";
import Activities from "@/components/Activities/Activities";
import EducationCard from "@/components/Education/Education";
import Projects from "@/components/Projects/Projects";
import Footer from "@/components/About/Footer";
import Experience from "@/components/Education/Experience";
const Index = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-[#f4f7fa] to-[#fbf7ef]">
      <main>
        <Home/>
        <EducationCard/>
        <Experience/>
        <Projects/>
        <Activities/>
        <Footer/>
      </main>

    </div>
  );
};

export default Index;