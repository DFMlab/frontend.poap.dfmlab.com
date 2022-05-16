import React, { useState } from "react";

import Images from "./../utils/image";

import Header from "./../components/Header";

const Home = () => {

  const { image, useImage } = useState("")

  const { attribute, useAttribute } = useState("")

  function setImage() {}

  async function mint() {}

  function SelectImageTemplate() {
    return Images.entries.map((image, url) => (
      <option value={url}>{image}</option>
    ));
  }

  function selectImage(e) {
    useImage(e.target.value)
    useAttribute(e.target.text)
  }

  return (
    <React.Fragment>
      <Header />
      <section style={`height: 100vh`} className="text-center">
        <div>
          <form>
            <select onChange={(e) => selectImage(e) } name="image">
              <option default>choose a color</option>
              {SelectImageTemplate()}
              </select>
            <button className="btn btn-primary">Mint</button>
          </form>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Home;
