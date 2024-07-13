import { useState } from "react";
import "./App.css";
import Post from "./Components/Post";
function App() {
  const [data, setdata] = useState([]);
  const fetchdata = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setdata(data))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <button
        onClick={fetchdata}
        style={{
          backgroundColor: "#3AA6B9",
          border: "none",
          padding: "15px 25px",
        }}
      >
        Get Posts
      </button>
      <div className="data">
        {data.map((el) => (
          <Post key={el.id} title={el.title} body={el.body} />
        ))}
      </div>
    </>
  );
}
export default App;