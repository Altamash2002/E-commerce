import "./newsLetter.css";
import "./inputs.css";

const NewsLetter = () => {
  return (
    <div id="news-container">
        <div id="letter-container">
          <h1 className="my-3"> Newsletter </h1>
          <p className="my-3">Get Timely Updates From Your Favourite Products</p>
          <form className="my-3">
            <input id="news-email" className="input-fields" name="email" type="email" placeholder="YOUR EMAIL" />
            <button type="submit" id="news-submit">
              <i className="bi bi-send-fill" />
            </button>
          </form>
        </div>
    </div>
  )
}

export default NewsLetter;