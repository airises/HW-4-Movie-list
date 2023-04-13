import React from "react";
import "./Maincont.css";
import Buttons from "../button/Buttons";

function Maincont(props) {
  console.log(props);
  return (
    <div>
      <div className="main-conts_div">
        <div className="div">
          <img src={props.url} />
          <div id="extraInfo">
            <h1>{props.title}</h1>
            <h4 className="rating">{props.rating}/5 stars</h4>
          </div>

          <div className="btns">
            <Buttons onClick={() => props.deleteMovieHandler(props.id)}>
              Delete
            </Buttons>
            <Buttons onClick={props.openModal}>edit</Buttons>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Maincont;
