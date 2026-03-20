import React, { useState,useEffect} from 'react'
import axios from 'axios';

function Completed({ todos }) {
    const [completed, setCompleted] = useState([]);
    const fetchCompleted = async () => {
        const res = await axios.get("http://localhost:8091/api/todos/completed")   
        setCompleted(res.data) 
    }
    useEffect(() => {
        fetchCompleted();
    }, []);
  return (
      <div className='comp'>
          <h1>Completed Tasks</h1>

          {completed.map(item => (
              <p key={item._id}>{item.text}</p>
          ))}
      </div>

  )
}

export default Completed