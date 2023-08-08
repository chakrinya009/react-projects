import React from "react";
import Coin from "./Coin";
import axios from "axios";
import { useEffect, useState } from "react";
import "./loader.css";
import Loader from "./Loader";

const App = () => {
  const [coins, setcoins] = useState([]);
  const [loader, setloader] = useState(true);

  useEffect(() => {
    const bitcoin = async () => {
      const { data } = await axios.get(
        "https://api.conigecko.com/api/v3/coins/markets?vs_currency=inr&per_page=20"
      );
      console.log(data);
      setcoins(data);
      setloader(false);
    };

    bitcoin();
  }, []);

  return (
    <div>
      {loader ? (
        <Loader />
      ) : (
        coins.map((i) => <Coin key={i.id} value={i.name} />)
      )}
    </div>
  );
};

export default App;
