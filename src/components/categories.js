import "./categories.css";
import ShopBtn from "./shopBtn";

const Categories = (props) => {
  return (
    <div className="categories-div p-1">
      <img src={props.item.url} className="img-fluid my-1" alt=""/>
      <div id="info-container">
        <div className="categories-title-div text-center">
            <h2 id="categorie-title" className="my-2 align-self-center">{props.item.title}</h2>
            <ShopBtn/>
        </div>
      </div>
    </div>
  )
}

export default Categories;