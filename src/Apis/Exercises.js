import { useEffect, useState} from 'react';
import axios from 'axios';

const useFetchData = () => {

  //const [loading, setLoading] = useState(true);
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () =>{
      //setLoading(true);
      try {
        const {response} = await axios.get('http://localhost:8000/exercises');
        setData(response);
        console.log('data', data);
      } catch (error) {
        console.error(error.message);
      }
      //setLoading(false);
    }

    fetchData();
  });

}

export default useFetchData;
