import CustomerHero from "../../components/CustomerHero";
import CategorySection from "../../components/CategorySection";
import FeaturedProducts from "../../components/FeaturedProducts";
import WhyChooseUs from "../../components/WhyChooseUs";
import TechnologySection from "../../components/TechnologySection";
import ServicesSection from "../../components/ServicesSection";

function Home() {
  return (
    <>
      <CustomerHero />
      <CategorySection/>
      <FeaturedProducts/>
      <WhyChooseUs/>
      <TechnologySection/>
      <ServicesSection/>
    </>
  );
}

export default Home;