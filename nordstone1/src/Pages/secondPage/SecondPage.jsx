import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./secondPage.scss";
import Nav from "../../components/nav/Nav";

const SecondPage = ({ user, setUser }) => {
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const [savedFiles, setSavedFiles] = useState([]);
  const navigate = useNavigate();

  const imageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setFile(img);
      previewImg(img);
    }
  };

  const previewImg = (img) => {
    const reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onloadend = () => {
      setPreview(reader.result);
    };
  };

  return (
    <div className="container">
      <Nav user={user} setUser={setUser} />
      <div className="contentUpload">
        <h1> Upload a file </h1>
        <div className="fileUpload">
          <input
            type="file"
            id="file"
            accept=".png, .jpeg, .jpg, .pdf"
            onChange={imageChange}
          />
          {file && (
            <div className="preview">
              <img src={preview} alt="" />
            </div>
          )}
          <button className="uploadBtn"> Upload </button>
        </div>
      </div>
      <span onClick={() => navigate("/thirdPage")}> Next Page </span>
      <span onClick={() => navigate("/firstPage")}> Prev Page </span>
    </div>
  );
};

export default SecondPage;
