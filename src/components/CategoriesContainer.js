import "./CategoriesContainer.css";
import { categoriesImg } from "../data";
import Categories from "./categories";

const CategoriesContainer = () => {
  return (
    <div id="categories-images" className="text-center container-fluid">
        <h2 className="pt-4 my-5">Categories</h2>

        <div className="row justify-content-center">
            {
                categoriesImg.map(item => (
                        <Categories item = {item} />
                    )
                )
            }
        </div>
    </div>
  )
}

export default CategoriesContainer;