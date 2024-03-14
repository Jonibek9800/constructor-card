import { useState } from "react";
import Card from "./components/card/Card";
import ImageCardDesigne from "./components/imahe-card-designe/ImageCardDesigne";

function App() {
  const [color, setColor] = useState("");
  const [personName, setPersonName] = useState("Person person");
  const [imageChange, setImageChange] = useState("img/chevrole.png");
  const images = [
    "img/at-20.png",
    "img/audi.png",
    "img/chevrole.png",
    "img/decor-2.png",
    "img/glass.png",
    "img/horse.png",
    "img/map.png",
  ];

  const changeImage = (event) => {
    setImageChange(event.target.src);
  };

  return (
    <div className="container">
      <div className="designe-container">
        <div className="image-designe-name">Выберите свой дизайн</div>
        <div className="image-desine">
          {images.map((image) => {
            return <ImageCardDesigne imageUrl={image} onClick={changeImage} />;
          })}
        </div>
      </div>

      <div className="card">
        <div className="color-designe">
          <label htmlFor="color-change">Цвет:</label>
          <input
            className="color-change"
            id="color-change"
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
        <div className="person-name-container">
          <label htmlFor="person-name">Имя:</label>
          <input
            className="person-name"
            type="text"
            id="person-name"
            value={personName}
            onChange={(e) => {
              setPersonName(e.target.value);
            }}
          />
        </div>
        <Card backgroundColor={color} name={personName} image={imageChange} />
      </div>
    </div>
  );
}

export default App;
