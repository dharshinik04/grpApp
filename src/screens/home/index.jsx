import React from "react";
import "./styles.css";
import NavBar from "../../components/shared/navbar";
import ProductSpecific from "../../components/product";
import Tshirt from "../../assets/tshirt.webp";
import Phone from "../../assets/phone.jpg";
import Speaker from "../../assets/speaker.webp";
import Dress from "../../assets/dress.jpg";
import Watch from "../../assets/watch.jpg";

function Home() {
  const productDetails = [
    {
      id: "12321341",
      title:
        "The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",
      price: "11.96",
      rating: "5",
      image: { Tshirt },
    },
    {
      id: "49538094",
      title:
        "Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl",
      price: "239.0",
      rating: 4,
      image: { Dress },
    },
    {
      id: "4903850",
      title: "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor",
      price: "199.99",
      rating: "3",
      image: { Watch },
    },
    {
      id: "23445930",
      title:
        "JBL Speaker (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",
      price: "98.99",
      rating: "5",
      image: { Speaker },
    },
    {
      id: "3254354345",
      title:
        "New Apple phone Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",
      price: "598.99",
      rating: "4",
      image: { Phone },
    },
  ];
  return (
    <div className="home">
      <NavBar />
      <div className="home__container">
        {productDetails.map((item, index) => {
          return <ProductSpecific title={item.title} />;
        })}
        <div className="home__row"></div>
      </div>
    </div>
  );
}

export default Home;
