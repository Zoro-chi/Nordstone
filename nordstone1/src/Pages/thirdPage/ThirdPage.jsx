import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./thirdPage.scss";
import Nav from "../../components/nav/Nav";
import { app, db } from "../../config/firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";

const ThirdPage = ({ user, setUser }) => {
  const [post, setPost] = useState("");
  const [fetchedPosts, setFetchedPosts] = useState([]);
  const collectionRef = collection(db, "Posts");
  const navigate = useNavigate();

  const handleSubmit = () => {
    addDoc(collectionRef, {
      user: user.email,
      post: post,
    })
      .then(() => {
        setPost("");
        alert("Post saved");
        window.location.reload();
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  useEffect(() => {
    getDocs(collectionRef)
      .then((res) => {
        setFetchedPosts(res.docs.map((post) => post.data()));
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <div className="container">
      <Nav user={user} setUser={setUser} />
      <div className="prevPosts">
        {fetchedPosts.map((post, ind) => (
          <div className="prevPost" key={ind}>
            <p> User: {post.user} </p>
            <p> Post: {post.post} </p>
          </div>
        ))}
      </div>
      <div className="content">
        <h1> Make a post </h1>
        <textarea
          name="post"
          id="post"
          cols="30"
          rows="3"
          onChange={(e) => setPost(e.target.value)}
        ></textarea>
        <button className="postBtn" onClick={handleSubmit}>
          Post
        </button>
      </div>
      <span onClick={() => navigate("/fourthPage")}> Next Page </span>
      <span onClick={() => navigate("/secondPage")}> Prev Page </span>
    </div>
  );
};

export default ThirdPage;
