import { useState } from "react";
import axios from 'axios';

const Write = () =>{
    let [inputValue, setInputValue] = useState()
    const saveData = async() =>{
        try{
            await axios.post('http://localhost:8080/writetodatabase',{content:inputValue})
            console.log("Data: ",inputValue)
            alert('Data Saved: ',inputValue)
        }
        catch(error){
            console.log('Error while data saving: ',error.message)
        }
    }
    return(
        <div>
            <input type='text' placeholder="Enter something" value={inputValue} onChange={e=>setInputValue(e.target.value)} />
            <button onClick={saveData}>Save data to MongoDB</button>
        </div>
    )
}

export default Write;