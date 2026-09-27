import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "../style/Quotes.module.css";

const Quotes = () => {
  const [quote, setQuote] = useState({
    text: "",
    author: "",
  });

  const [loading, setLoading] = useState(false);

  const fetchQuotes = async () => {
    try {
      setLoading(true);
      let response = await axios.get(
        "https://motivational-spark-api.vercel.app/api/quotes/random",
      );
      setQuote({ text: response.data.quote, author: response.data.author });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <div className={style.body}>
      <div className={style.quotesCard}>
        {loading ? (
          <div className={style.loader}></div>
        ) : (
          <>
            <h1>{quote.text}</h1>
            <p>- {quote.author}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Quotes;
