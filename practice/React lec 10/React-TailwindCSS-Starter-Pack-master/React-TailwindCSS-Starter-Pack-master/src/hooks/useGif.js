import React, { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const useGif = (tag) => {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  async function fetchData() {
    setLoading(true);
    const { data } = await axios.get(tag?`${url}&tag=${tag}:`:url);
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
    console.log(imageSource);
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return {gif,loading,fetchData}
}

export default useGif