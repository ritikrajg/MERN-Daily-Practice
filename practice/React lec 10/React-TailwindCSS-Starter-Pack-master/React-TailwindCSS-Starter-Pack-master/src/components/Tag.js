import React, { useEffect, useState } from "react";
import useGif from "../hooks/useGif";
import Spinner from "./Spinner";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Tag = () => {
  /*const [gif, setGif] = useState("");
  const [tag,setTag]=useState("Dog")
  const [loading, setLoading] = useState(false);
  async function fetchData(tag) {
    setLoading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const { data } = await axios.get(url);
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
    console.log(imageSource);
    setLoading(false);
  }
  useEffect(() => {
    fetchData(tag);
  }, []);*/const [tag, setTag] = useState("Dog");
  const {gif,loading,fetchData}=useGif(tag);
  return (
    <div className="flex flex-col items-center justify-center w-1/2 bg-green-500 border border-black rounded-lg h-1/2">
    <div className="mb-3 text-3xl font-bold underline">RANDOM {tag} GIF</div>
      <div style={{ width: "450px" }}>
        {loading?(<Spinner/>):(<img src={gif} alt="Generated GIF" />)}
      </div>
      <div className="w-5/6 m-1">
        <input 
        type="text"
        onChange={(event)=>setTag(event.target.value)}
        value={tag}
        className="w-full font-bold bg-white rounded-lg h-9"></input>
      </div>
      <div className="w-5/6 m-9">
        <button className="w-full font-bold bg-white rounded-lg h-9" 
        onClick={()=>fetchData()}>Generate</button>
      </div>
    </div>
  );
}

export default Tag