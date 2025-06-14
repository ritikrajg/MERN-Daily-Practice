import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const random = () => {
  /*const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);
  async function fetchData() {
    setLoading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const { data } = await axios.get(url);
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
    console.log(imageSource);
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);*/
  const {gif,loading,fetchData}=useGif();
  return (
    <div className="flex flex-col items-center justify-center w-1/2 bg-green-500 border border-black rounded-lg h-1/2">
    <div className="mb-3 text-3xl font-bold underline">A RANDOM GIF</div>
      <div style={{ width: "450px" }}>
        {loading?(<Spinner/>):(<img src={gif} alt="Generated GIF" />)}
      </div>
      <div className="w-5/6 m-9">
        <button className="w-full font-bold bg-white rounded-lg h-9" onClick={()=>fetchData()}>Generate</button>
      </div>
    </div>
  );
};

export default random;
