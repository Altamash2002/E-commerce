import "./home.css";
import Slides from "../components/slides";
import NewsLetter from "../components/newsLetter";
import FeaturedProducts from "../components/FeaturedProducts";
import CategoriesContainer from "../components/CategoriesContainer";
import { sliders } from "../data";
const Home = () => {

    return (
        <>
            
            <div id="home-container" className="container-fluid p-0">
                
                {/* home page banner */}
                <Slides sliders={sliders}  />
                
                {/* CATEGORIES IMAGES */}
                <CategoriesContainer />
                
                {/* featured products  */}
                <FeaturedProducts />
                
            </div>

            <NewsLetter />

        </>
    );
}

export default Home;