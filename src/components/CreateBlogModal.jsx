import React, { useState } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

const CreateBlogModal = ({ isOpen, onRequestClose, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [blogImage, setBlogImage] = useState(null);

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    if (blogImage) {
      formData.append("blogImage", blogImage);
    }
    onSubmit(formData);
    try {
      // Show SweetAlert2 success message
      Swal.fire({
        title: "Success!",
        text: "Project created successfully!",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        // Close the modal and redirect to the project list page after the alert
        setTitle("");
        setDescription("");
        setBlogImage(null);
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
        <h2 className="modal-title">Create New Blog</h2>
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
          onChange={(e) => setBlogImage(e.target.files[0])}
          className="modal-input"
        />
        <button onClick={handleSubmit} className="modal-btn">
          Post
        </button>
      </div>
    </Modal>
  );
};

export default CreateBlogModal;
