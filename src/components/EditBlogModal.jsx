import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
const EditBlogModal = ({ isOpen, onRequestClose, onSubmit, selectedBlog }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

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
      image,
    };
    onSubmit(updatedData);

    try {
      // Show SweetAlert2 success message
      Swal.fire({
        title: "Success!",
        text: "Project Updated successfully!",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        // Close the modal and redirect to the project list page after the alert
        onRequestClose();
      });
    } catch (error) {
      console.error("Error creating project:", error);
    }
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
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
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
