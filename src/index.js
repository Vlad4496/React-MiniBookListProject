import React from "react";
import ReactDom from "react-dom";
import "./index.css";

function BookList() {
  return (
    <section className="bookList">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image></Image>
      <Title></Title>
      <Author></Author>
    </article>
  );
};
const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/81WZ6QvGZ2L._AC_UL200_SR200,200_.jpg"
    alt=""
  />
);
const Title = () => <h1>It's Not Easy Being a Bunny (Beginner Books(R))</h1>;
const Author = () => <h4>Marilyn Sadler</h4>;

ReactDom.render(<BookList />, document.getElementById("root"));
