import Footer from "../components/Footer";
import HomeBanner from "../components/HomeBanner";
import HomeMap from "../components/HomeMap";
import HomeProducts from "../components/HomeProducts";
import Nav from "../components/Nav";
import PartnarShip from "../components/PartnarShip";
import PopularProducts from "../components/PopularProducts";
import Questions from "../components/Questions";
import Recipes from "../components/Recipes";

export default function Home() {
  return (
    <div>
      <Nav />
      <HomeBanner />
      <PopularProducts />
      <HomeProducts />
      <HomeMap />
      <Questions />
      <Recipes />
      <PartnarShip />
      <Footer />
    </div>
  );
}
