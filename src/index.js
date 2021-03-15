import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const books = [
  {
    img:
      "https://images-na.ssl-images-amazon.com/images/I/81WZ6QvGZ2L._AC_UL200_SR200,200_.jpg",
    title: "It's Not Easy Being a Bunny",
    author: "Marilyn Sadler",
  },
  {
    img:
      "https://images-na.ssl-images-amazon.com/images/I/618LsqHnfgL._AC_UL200_SR200,200_.jpg",
    title: "How to Catch a Leprechaun",
    author: "Adam Wallace",
  },
  {
    img:
      "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
    title: "I love you to the Moon and Back",
    author: "Amelia Hepworth",
  },
  {
    img:
      "https://images-na.ssl-images-amazon.com/images/I/91g%2BaK0nCnL._AC_UL200_SR200,200_.jpg",
    title: "The Four Winds: A Novel",
    author: "Kristin Hannah",
  },
  {
    img:
      "https://images-na.ssl-images-amazon.com/images/I/81nzxODnaJL._AC_UL200_SR200,200_.jpg",
    title: "If Animals Kissed Good Night",
    author: "Ann Whitford Paul",
  },
  {
    img:
      "https://images-na.ssl-images-amazon.com/images/I/81YzHKeWq7L._AC_UL200_SR200,200_.jpg",
    title: "The Midnight Library: A Novel",
    author: "Matt Haig",
  },
];

function BookList() {
  return (
    <section className="bookList">
      {books.map((book, index) => {
        return <Book book={book} key={index} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props.book;
  return (
    <article className="book">
      <img src={img} alt="Book for Kids" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
