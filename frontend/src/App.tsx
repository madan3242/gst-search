import {  useState } from "react"
import Navbar from "./components/Navbar"
import Search from "./components/Search"
import axios from "axios";

// type responseType = {
//   busniess_name: string,
//   pan: string,

// }
const App = () => {
  const [searchText, setSearchText] = useState("");
  const [response, setResponse] = useState({});

  const searchFunction = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const API_URL = `${import.meta.env.VITE_API_URL}/search?gst=${searchText.toString()}`;
    const response = await axios.get(`${API_URL}`)
    console.log(response);
    
    setResponse(response?.data?.data[0]);
  }
  return (
    <div className="h-screen bg-green-50">
      <Navbar />
      <div>
        <Search setSearchText={setSearchText} searchFunction={searchFunction} />
        <div className="text-center">
        <div className="flex justify-center">
        <div className="w-1/2 h-80 p-3 bg-white rounded">
          <h3 className="text-left italic">Search result for: <span className="font-bold">{searchText}</span></h3>
          <div>
            {/* {JSON.stringify(response)} */}
            <h2 className="text-xl"><span className="font-bold">Busniess Name:</span> {response?.busniess_name}</h2>  
            <h2 className="text-xl"><span className="font-bold">PAN:</span> {response?.pan}</h2>  
            <h2 className="text-xl"><span className="font-bold">Address:</span> {response?.address}</h2> 
            <h2 className="text-xl"><span className="font-bold">Pincode:</span> {response?.pincode}</h2> 
            <h2 className="text-xl"><span className="font-bold">Nature of Busniess:</span> {response?.nature_of_busniess}</h2> 
            <h2 className="text-xl"><span className="font-bold">Department Code:</span> {response?.department_code}</h2> 
            <h2 className="text-xl"><span className="font-bold">Registration Type:</span> {response?.registration_type}</h2> 
            <h2 className="text-xl"><span className="font-bold">Registration date:</span> {response?.registration_date}</h2> 
          </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default App