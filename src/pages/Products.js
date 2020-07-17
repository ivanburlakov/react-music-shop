import React from "react";

import Card from "../components/Card/Card.js";

const srcs2 = [
  "https://unsplash.com/photos/Wj1D-qiOseE/download?force=true",
  "https://images.unsplash.com/photo-1498462440456-0dba182e775b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1573430365123-1ba5faa6b486?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1572724013549-0f11f2a52657?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
  "https://effigis.com/wp-content/uploads/2015/02/DigitalGlobe_WorldView2_50cm_8bit_Pansharpened_RGB_DRA_Rome_Italy_2009DEC10_8bits_sub_r_1.jpg",
];

const srcs = [
  "https://images.pexels.com/photos/611328/pexels-photo-611328.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/458881/pexels-photo-458881.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/1940037/pexels-photo-1940037.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://images.pexels.com/photos/531602/pexels-photo-531602.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/1122416/pexels-photo-1122416.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
];

const Products = () => {
  return (
    <div className="products">
      <section id="products-section" className="card-section">
        <Card title="Fender" price="1" src={srcs2[0]} />
        <Card title="Fender" price="1" src={srcs[0]} />
        <Card title="Fender" price="1" src={srcs[4]} />
        <Card title="Fender" price="1" src={srcs[1]} />
        <Card title="Fender" price="1" src={srcs[2]} />
        <Card title="Fender" price="1" src={srcs[3]} />
      </section>
    </div>
  );
};

export default Products;
