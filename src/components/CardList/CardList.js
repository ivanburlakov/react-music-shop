import * as React from "react";
import Card from "../Card/Card.js";

// import { Scrollbar } from "react-scrollbars-custom";

const CardList = ({ match, history }) => (
  // <Scrollbar
  //   style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
  // >
    <ul id="products-section" className="card-section">
      {сardData.map((card) => (
        <Card
          key={card.id}
          isSelected={match.params.id === card.id}
          history={history}
          {...card}
        />
      ))}
    </ul>
  // </Scrollbar>
);

export default CardList;

const сardData = [
  {
    id: "c",
    title: "Telecaster",
    price: "1",
    image: "/images/guitar1.jpg",
  },
  {
    id: "f",
    title: "Fender American Special Stratocaster MN Elitg Deluxe",
    price: "1",
    image: "/images/guitar2.jpg",
  },
  {
    id: "a",
    title: "Martin",
    price: "1",
    image: "/images/guitar3.jpg",
  },
  {
    id: "g",
    title: "Martin",
    price: "1",
    image: "/images/guitar4.jpg",
  },
  {
    id: "d",
    title: "Ukulele",
    price: "1",
    image: "/images/guitar5.jpg",
  },
  {
    id: "h",
    title: "PRS Custom 22",
    price: "1",
    image: "/images/guitar6.jpg",
  },
];
