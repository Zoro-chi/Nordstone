import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import "./secondPage.scss";
import Nav from "../../components/nav/Nav";
import { storage, db } from "../../config/firebaseConfig";

const SecondPage = ({ user, setUser }) => {
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const navigate = useNavigate();

  useEffect(() => {});

  const imageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setFile(img);
      // previewImg(img);
    }
  };

  // const previewImg = (img) => {
  //   const reader = new FileReader();
  //   reader.readAsDataURL(img);
  //   reader.onloadend = () => {
  //     setPreview(reader.result);
  //   };
  // };

  const handleSubmit = () => {
    const imageRef = ref(storage, `images/${file.name}`);
    const upload = uploadBytesResumable(imageRef, file);
    upload.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },
      (error) => {
        console.log(error.message);
      },
      () => {
        getDownloadURL(upload.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setPreview(downloadURL);
        });
      }
    );
    // setFile("");
    // setPreview("");
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
            <>
              <div className="preview">{<img src={preview} alt="" />}</div>
              <div className="downloadedPrev">
                <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>
                  Download Link:
                </h2>
                <a href={preview}>
                  <p> {preview} </p>
                </a>
              </div>
            </>
          )}
          <button className="uploadBtn" onClick={handleSubmit}>
            Upload
          </button>
        </div>
      </div>
      <span onClick={() => navigate("/thirdPage")}> Next Page </span>
      <span onClick={() => navigate("/firstPage")}> Prev Page </span>
    </div>
  );
};

export default SecondPage;
