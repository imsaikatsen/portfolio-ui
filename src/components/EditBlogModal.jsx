import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
const EditBlogModal = ({ isOpen, onRequestClose, onSubmit, selectedBlog }) => {
  const [title, setTitle] = useState(selectedBlog ? selectedBlog.title : "");
  const [description, setDescription] = useState(
    selectedBlog ? selectedBlog.description : ""
  );

  useEffect(() => {
    if (selectedBlog) {
      setTitle(selectedBlog.title);
      setDescription(selectedBlog.description);
    }
  }, [selectedBlog]);

  const handleSubmit = () => {
    const updatedData = {
      title,
      description,
    };
    onSubmit(selectedBlog._id, updatedData);
    setTitle("");
    setDescription("");
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal"
      overlayClassName="overlay"
    >
      <div className="modal-content">
        <button className="close-btn" onClick={onRequestClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <h2 className="modal-title">Edit Blog</h2>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="modal-input"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="modal-input"
        />
        <button onClick={handleSubmit} className="modal-btn">
          Update Post
        </button>
      </div>
    </Modal>
  );
};

export default EditBlogModal;
