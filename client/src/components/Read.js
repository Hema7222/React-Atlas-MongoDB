import {useState, useEffect} from 'react';
import axios from 'axios';

const Read = () =>{
    const [serverData, setServerData] = useState()
    useEffect(()=>{
        const fetchData = async() =>{
            try{
                const response = await axios.get('http://localhost:8080/readfromserver')
                const datafromServer = response.data.message
                setServerData(datafromServer)
            }
            catch(error){
                console.log('Error fetching the data',error.message)
            }
        }
        fetchData()
    },[])
    return(
        <div>
            {serverData}
        </div>
    )
}

export default Read;