import CustomerHero from "../../components/CustomerHero/CustomerHero";
import CategorySection from "../../components/CategorySection";
import TechnologySection from "../../components/TechnologySection";
import Testimonials from "../../components/Testimonials";
import FeaturedProducts from "../../components/FeaturedProducts";

function Home() {
  return (
    <>
      <CustomerHero />
      <CategorySection />
      <TechnologySection />
      <Testimonials />
      <FeaturedProducts />
    </>
  );
}

export default Home;
