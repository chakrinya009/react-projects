import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>techystar</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            delectus maiores, rerum odit, neque necessitatibus rem nobis hic vel
            architecto, nostrum esse iure minima. Explicabo dignissimos optio
            itaque perspiciatis voluptatum!
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>who we are</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            provident, nam quasi voluptatum facilis ex nesciunt. Possimus
            pariatur dignissimos cumque laudantium ea quod nulla amet, odio at
            voluptatibus tenetur Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Sequi ipsum quis voluptatibus qui esse nostrum vel
            fugiat, officia, eum quod impedit aspernatur illo quas unde soluta.
            Cupiditate non consectetur inventore.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>brands</h1>
          <article>
            <div style={{ animationDelay: "0.3s," }}>
              <AiFillGoogleCircle />
              <p>google</p>
            </div>
            <div style={{ animationDelay: "0.5s" }}>
              <AiFillAmazonCircle />
              <p>amazon</p>
            </div>
            <div style={{ animationDelay: "0.7s" }}>
              <AiFillYoutube />
              <p>youtube</p>
            </div>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillInstagram />
              <p>instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
