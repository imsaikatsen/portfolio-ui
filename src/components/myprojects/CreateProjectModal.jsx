import React, { useState } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { createProject } from "../../utils/Api";
import { useHistory } from "react-router-dom";

const CreateProjectModal = ({ isOpen, onRequestClose, onProjectCreated }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [tools, setTools] = useState("");
  const [link, setLink] = useState("");
  const [date, setDate] = useState(new Date());

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("projectTitle", title);
    formData.append("projectDescription", description);
    if (image) formData.append("projectImage", image);
    formData.append("projectTools", tools);
    formData.append("projectGithubLink", link);
    formData.append("date", date.toISOString());

    try {
      const response = await createProject(formData);
      // Show SweetAlert2 success message
      Swal.fire({
        title: "Success!",
        text: "Project created successfully!",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        // Close the modal and redirect to the project list page after the alert
        onProjectCreated(response.data);
        setTitle("");
        setDescription("");
        setImage(null);
        setTools("");
        setLink("");
        setDate(new Date());
        onRequestClose();
        history.push("/admin/dashboard/projects"); // Redirect to the project list page
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
        <h2 className="modal-title">Create New Project</h2>
        <form onSubmit={handleSubmit}>
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
          <input
            type="text"
            placeholder="Tools (comma separated)"
            value={tools}
            onChange={(e) => setTools(e.target.value)}
            className="modal-input"
          />
          <input
            type="text"
            placeholder="GitHub Link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="modal-input"
          />
          <DatePicker
            selected={date}
            onChange={(date) => setDate(date)}
            className="modal-input"
          />
          <button type="submit" className="modal-btn">
            Post
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default CreateProjectModal;
