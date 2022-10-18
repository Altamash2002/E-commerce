import "./newsLetter.css";
import "./inputs.css";
import { useState } from "react";

const NewsLetter = () => {

  const [newsLetterEmail,setNewsLetterEmail] = useState('');
  const emailChangeHandler = (e) => {
    setNewsLetterEmail(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    setNewsLetterEmail('');
  }

  return (
    <div id="news-container">
        <div id="letter-container">
          <h1 className="my-3"> Newsletter </h1>
          <p className="my-3">Get Timely Updates From Your Favourite Products</p>
          <form className="my-3" onSubmit={submitHandler}>
            <input id="news-email" className="input-fields" value={newsLetterEmail} onChange={emailChangeHandler} name="email" type="email" placeholder="YOUR EMAIL" />
            <button type="submit" id="news-submit">
              <i className="bi bi-send-fill" />
            </button>
          </form>
        </div>
    </div>
  )
}

export default NewsLetter;