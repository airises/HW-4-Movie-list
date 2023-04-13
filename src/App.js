import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Maincont from "./components/maincontent/Maincont";
import Modal from "./components/modal/Modal";

function App() {
  // localStorage.getItem("data");
  // localStorage.setItem("data", JSON.stringify(data));

  const [data, setNewData] = useState([]);

  const [isModalVisible, setModalVisible] = useState(false);
  const [updateBtn, setUpdateBtn] = useState(false);

  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [rating, setRating] = useState(0);

  // const Data = JSON.parse(localStorage.getItem("data"));

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const urlChangeHandler = (e) => {
    setUrl(e.target.value);
  };

  const ratingChangeHandler = (e) => {
    setRating(e.target.value);
  };

  const openModalHandler = () => {
    setModalVisible((prev) => !prev);

    setTitle("");
    setRating("");
    setUrl("");
    setUpdateBtn(false);
  };

  const closeModalHandler = () => {
    openModalHandler();
    setTitle("");
    setRating("");
    setUrl("");
  };

  function submitHandler(event) {
    event.preventDefault();
    const movie = {
      title: title,
      url: url,
      rating: +rating,
      id: Date.now().toString(),
    };

    newMovie(movie);

    closeModalHandler();

    console.log(movie, "taken");

    setTitle("");
    setRating("");
    setUrl("");
  }

  function newMovie(movie) {
    setNewData([...data, movie]);
  }

  function deleteMovieHandler(id) {
    const newData = data.filter((el) => el.id !== id);
    setNewData(newData);
  }

  const editModalHandler = (el) => {
    openModalHandler();

    setRating(el.rating);
    setTitle(el.title);
    setUrl(el.url);

    setUpdateBtn(true);
  };

  const seveHandler = (el) => {
    data.map((item) => {
      item.title = el.title;
      item.rating = el.rating;
      item.url = el.url;
    });

    openModalHandler();
    setUpdateBtn(false);
  };

  return (
    <div className="App">
      <Header newMovie={newMovie} openModalHandler={openModalHandler} />

      {data.map((el) => {
        return (
          <Maincont
            key={el.id}
            title={el.title}
            url={el.url}
            id={el.id}
            rating={el.rating}
            deleteMovieHandler={deleteMovieHandler}
            openModal={() => editModalHandler(el)}
          />
        );
      })}
      {isModalVisible && (
        <Modal
          newMovie={newMovie}
          onClose={openModalHandler}
          submitHandler={submitHandler}
          ratingChangeHandler={ratingChangeHandler}
          titleChangeHandler={titleChangeHandler}
          urlChangeHandler={urlChangeHandler}
          title={title}
          rating={rating}
          url={url}
          seveHandler={seveHandler}
          updateBtn={updateBtn}
        />
      )}
    </div>
  );
}

export default App;
