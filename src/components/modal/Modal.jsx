import "./Modal.css";
import Buttons from "../button/Buttons";

const Modal = ({
  onClose,
  submitHandler,
  ratingChangeHandler,
  titleChangeHandler,
  urlChangeHandler,
  title,
  rating,
  url,
  seveHandler,
  updateBtn,
}) => {
  const handleSave = () => {
    const data = {
      title,
      url,
      rating,
    };
    seveHandler(data);
  };

  return (
    <>
      <div id="backdrop"></div>
      <div className="modal" id="add-modal">
        <div className="modal__content">
          <label htmlFor="title">Movie Title</label>
          <input
            value={title}
            onChange={titleChangeHandler}
            type="text"
            name="title"
            id="title"
          />
          <label htmlFor="image-url">Image URL</label>
          <input
            value={url}
            onChange={urlChangeHandler}
            type="text"
            name="image-url"
            id="image-url"
          />
          <label htmlFor="rating">Your Rating</label>
          <input
            value={rating}
            onChange={ratingChangeHandler}
            type="number"
            step="1"
            max="5"
            min="1"
            name="rating"
            id="rating"
          />
        </div>
        <div className="modal__actions">
          <Buttons className="btn btn--passive" id="cancel" onClick={onClose}>
            Cancel
          </Buttons>
          {updateBtn ? (
            <Buttons onClick={handleSave}>Update</Buttons>
          ) : (
            <Buttons
              onClick={submitHandler}
              className="btn btn--success"
              id="add-movie"
            >
              Add
            </Buttons>
          )}
        </div>
      </div>
    </>
  );
};

export default Modal;
