import React, { useState } from "react";
import "./Header.css";
import Buttons from "../button/Buttons";
import Modal from "../modal/Modal";

function Header({ openModalHandler }) {
  return (
    <div className="main-div">
      <h1 className="heading">Favorite Movie</h1>
      <Buttons
        className="btn btn--success"
        id="add-movie"
        onClick={openModalHandler}
      >
        add movies
      </Buttons>
    </div>
  );
}

export default Header;
