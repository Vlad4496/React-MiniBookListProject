import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const firstBook = {
  img:
    "https://images-na.ssl-images-amazon.com/images/I/81WZ6QvGZ2L._AC_UL200_SR200,200_.jpg",
  title: "It's Not Easy Being a Bunny",
  author: "Marilyn Sadler",
};
const secondBook = {
  img:
    "https://images-na.ssl-images-amazon.com/images/I/618LsqHnfgL._AC_UL200_SR200,200_.jpg",
  title: "How to Catch a Leprechaun",
  author: "Adam Wallace",
};
const thirdBook = {
  img:
    "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
  title: "I love you to the Moon and Back",
  author: "Amelia Hepworth",
};
const fourthBook = {
  img:
    "https://images-na.ssl-images-amazon.com/images/I/91g%2BaK0nCnL._AC_UL200_SR200,200_.jpg",
  title: "The Four Winds: A Novel",
  author: "Kristin Hannah",
};
const fifthBook = {
  img:
    "https://images-na.ssl-images-amazon.com/images/I/81nzxODnaJL._AC_UL200_SR200,200_.jpg",
  title: "If Animals Kissed Good Night",
  author: "Ann Whitford Paul",
};
const sixthBook = {
  img:
    "https://images-na.ssl-images-amazon.com/images/I/81YzHKeWq7L._AC_UL200_SR200,200_.jpg",
  title: "The Midnight Library: A Novel",
  author: "Matt Haig",
};

function BookList() {
  return (
    <section className="bookList">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
      <Book
        img={thirdBook.img}
        title={thirdBook.title}
        author={thirdBook.author}
      />
      <Book
        img={fourthBook.img}
        title={fourthBook.title}
        author={fourthBook.author}
      />
      <Book
        img={fifthBook.img}
        title={fifthBook.title}
        author={fifthBook.author}
      />
      <Book
        img={sixthBook.img}
        title={sixthBook.title}
        author={sixthBook.author}
      />
    </section>
  );
}

const Book = ({ img, title, author }) => {
  // const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="Book for Kids" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
