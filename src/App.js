import { useState } from 'react';
import './App.css';
import InboxOne from './InboxOne';
import photo from "../src/assets/yellow-file-folder-with-documents-vector-1627041 (1).webp"
function App() {
  const [showPrompt, setShowPrompt] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [inputData, setInputData] = useState([])
  
  const [editValue, setEditValue] = useState("")   // Temporary updated text
  const [editIndex, setEditIndex] = useState(null)  //Which index we are editing

  const indexPage = [
  {
    buttonAdd: "Add Task",
    search: "Search",
    inbox: "Inbox",
    today: "Today",
    upcoming: "Upcoming",
    filtersAndLabels: "Filters And Labels",
    completed: "Completed"
  }
];
  const handleAdd = () => {

 setShowPrompt(!showPrompt)
}
  
  const handleDelete = (index) => {
    console.log(index)
    const filtered = inputData.filter((item, i) => i !== index)
    console.log(filtered);
    setInputData(filtered)
    
  }
  const handleEdit = (index) => {
    console.log(index)
// Save the index
// Put the old value into editValue
    // Then React will show the edit input
    
    setEditIndex(index);// Save the index
    setEditValue(inputData[index]);  // old value goes inside input
  }

  const handleUpdate = ()=> {
    const updated = [...inputData];
    updated[editIndex] = editValue;

    setInputData(updated);
    setEditIndex(null);  // close edit box
    setEditValue("");
  }
  
  const handleSubmit = () => {
  
    setInputData([...inputData, inputValue]);  
    setInputValue("")
  }
  return (<>
    <InboxOne/>
  
  </>);
}

export default App;
