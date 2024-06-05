import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EditProjectModal = ({
  isOpen,
  onRequestClose,
  onSubmit,
  selectedProject,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [tools, setTools] = useState("");
  const [link, setLink] = useState("");
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    if (selectedProject) {
      setTitle(selectedProject.projectTitle);
      setDescription(selectedProject.projectDescription);
      setTools(selectedProject.projectTools.join(", "));
      setLink(selectedProject.projectGithubLink);
      setDate(new Date(selectedProject.date));
    }
  }, [selectedProject]);

  const handleSubmit = () => {
    const updatedData = {
      title,
      description,
      image,
      tools,
      link,
      date,
    };
    onSubmit(updatedData);
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
        <h2 className="modal-title">Edit Project</h2>
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
        <button onClick={handleSubmit} className="modal-btn">
          Update Project
        </button>
      </div>
    </Modal>
  );
};

export default EditProjectModal;
