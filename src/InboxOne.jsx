import { useState} from 'react';
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import {  deleteTodo, updateTodo } from './api/todoapi';
import photo from "../src/assets/yellow-file-folder-with-documents-vector-1627041 (1).webp"
function InboxOne({ todos,
  setTodos,
  fetchTodos,
  searchQuery,
  showPrompt,
  setShowPrompt,
  // inputValue,
  // setInputValue,
  // handleSubmit
}) {


  const navigate = useNavigate()

  // this is for frontly add the data without backend so we use this inputdata
  // const [inputData, setInputData] = useState([])

  //this is for backend axios /mongodb 
  // const [todos, setTodos] = useState([]);

  const [editValue, setEditValue] = useState("")   // Temporary updated text
  const [editIndex, setEditIndex] = useState(null)  //Which index we are editing

  // const [completed, setCompleted] = useState([])
  // const [text,setText]=useState([])


  // // Modal state---- sidebar addtask thing
  // const [showDeleteModal, setShowDeleteModal] = useState(false);
  // const [deleteId, setDeleteId] = useState(null);


  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this task?");

    if (!confirmDelete) return; // user cancelled
    await deleteTodo(id);
    fetchTodos();
  };
  const handleAdd = () => {
    setShowPrompt(true)
  }

 //which is purely from frontend
  // const handleDelete = (index) => {
  //   console.log(index)
  //   const filtered = inputData.filter((item, i) => i !== index)
  //   console.log(filtered);
  //   setInputData(filtered)
  // }

  // const handleCompleted = (index) => {
  //   const filtered = inputData[index]
  //   setCompleted(prev => [...prev,filtered]);
  //   console.log(completed, "filtered2 ")

  //   const updated = inputData.filter((_, i) => i !== index)
  //   setInputData(updated)
  // }
  // const handleEdit = (index) => {
  //   console.log(index)
  //   // Save the index
  //   // Put the old value into editValue
  //   // Then React will show the edit input

  //   setEditIndex(index);// Save the index
  //   setEditValue(inputData[index]);  // old value goes inside input
  // }

  // const handleUpdate = () => {
  //   const updated = [...inputData];
  //   updated[editIndex] = editValue;

  //   setInputData(updated);
  //   setEditIndex(null);  // close edit box
  //   setEditValue("");
  // }
  
  // const handleSubmit = () => {
  //   setInputData([...inputData, inputValue]);
  //   setInputValue("")
  // }

  const handleEdit = (id, todoText) => {
    setEditIndex(id);
    setEditValue(todoText);
  };

  const handleUpdate = async (id) => {
   await updateTodo(id, { text: editValue });
    setEditIndex(null);
    setEditValue("");
    fetchTodos();
  };

  const filteredTodos = todos.filter((item) =>
    item.text?.toLowerCase().includes((searchQuery || "").toLowerCase())
  );

  const listToShow = (searchQuery || "").trim() === "" ? todos : filteredTodos;

  
  const inboxTodos = listToShow.filter(item => !item.completed);

  const handleCompleted = async (id) => {
   
    await axios.patch(` https://task-management-pro-dre1.onrender.com/api/todos/${id}`, {
      completed: true
    });
    // 2. Get completed item from state
    // const completedItem = todos.find(t => t._id === id)

    // 3. Remove from UI
    setTodos(prev => prev.filter(t => t._id !== id))
    
    // 4. Move to completed page with item data
    // navigate("/completed", {
    //   state: { completedItem }
    // });

    navigate("/completed");

    fetchTodos();
  };


  return (<>
    {/* <div className="layout"> */}
      <main className='content'>
        <h1>Inbox</h1>
      
        {inboxTodos.map(item => (
          // console.log(item,' itembefore insidediv3'),
          <div className='insideDiv3'>
            <ul className='insideDiv2' key={item._id}>
              <li >
                <div className="leftSection">
                  {editIndex === item._id ? (
                    <input
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                    />
                  ) : (
                    item.text
                  )}
                </div>
                <div className="rightSection">

                  {editIndex === item._id ? (
                    <>
                      <button className='btn' onClick={() => handleUpdate(item._id)}>Update</button>
                      <button className='btn' onClick={() => setEditIndex(null)}>Cancel</button>
                    </>
                  ) : (
                    <>
                      <button className='btn' onClick={() => handleEdit(item._id, item.text)}>Edit</button>
                      <button className='btn' onClick={() => handleDelete(item._id)}>Delete</button>
                      <button className='btn' onClick={() => handleCompleted(item._id)}>Completed</button>
                    </>
                  )}
                </div>
                
{/* update on some other place */}

                {/* {editIndex === item._id ? (
                  <>
                    <input
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                    />
                    <button className='btn' onClick={() => handleUpdate(item._id)}>Update</button>
                    <button className='btn' onClick={() => setEditIndex(null)}>Cancel</button>
                  </>
                ) : (
                  <>
                      {item.text}
                      <div className="actions">
                        <button className='btn' onClick={() => handleEdit(item._id, item.text)}>Edit</button>
                        <button className='btn' onClick={() => handleDelete(item._id)}>Delete</button>
                        <button className='btn' onClick={() => handleCompleted(item._id)}>completed</button>
                      </div>
                  </>
                )} */}

              </li>
            </ul> </div>
          ))}

        <div className="App" >
        {/* instead of todos we use inputData  */}
          {todos.length === 0 &&
            <img className='imgTag' src={photo} alt='no task' style={{ display: showPrompt ? 'none' : 'block' }} />}
          {todos.length === 0 && <h3 className='txted' style={{ display: showPrompt ? 'none' : 'block' }}>Welcome to your Today view
            See everything due today across all your projects.</h3>}
          <button className="btn" 
            style={{ display: showPrompt ? 'none' : 'block' }}
            onClick={handleAdd}
          >
            + Add Task
          </button>

          {/* {showPrompt &&
            <div className='insideDiv'>
              <input type='text' className='ip' id='ipValue' value={inputValue} placeholder='Replace lightBulb tomorrow at 3pm' onChange={(e) => setInputValue(e.target.value)} />
            <div className='ibtn'><button type="button" onClick={handleSubmit}>Add Task</button>
                <button onClick={() => setShowPrompt(false)}>Cancel</button></div></div>
          } */}

{/* check about noopener noreferrer */}
          {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        > */}

        </div>

      </main >
    
{/* 
    </div > */}
  </>);
}

export default InboxOne;
