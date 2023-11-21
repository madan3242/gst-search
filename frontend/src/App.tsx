import {  useState } from "react"
import Navbar from "./components/Navbar"
import Search from "./components/Search"
import axios from "axios";

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [response, setResponse] = useState({});

  const searchFunction = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const API_URL = `${import.meta.env.VITE_API_URL}/search?gst=${searchText.toString()}`;
    const response = await axios.get(`${API_URL}`)

    setResponse(response.data);
  }
  return (
    <div className="h-screen bg-green-50">
      <Navbar />
      <div>
        <Search setSearchText={setSearchText} searchFunction={searchFunction} />
        <div className="text-center">
        {`${import.meta.env.VITE_API_URL}/search?gst=${searchText}`}
        <br />
        {JSON.stringify(response)}
        </div>
      </div>
    </div>
  )
}

export default App