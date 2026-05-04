import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import {  useNavigate } from 'react-router-dom';
import Layout from "./Layout";
import InboxOne from "./InboxOne";
import InboxTwo from "./InboxTwo";
import Completed from "./Completed";
import { addTodo,fetchTodo } from "./api/todoapi";

function App() {

  const [inputValue, setInputValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [todos, setTodos] = useState([]);

  const navigate = useNavigate()

  //for open modal for ADD TASK
  const [showPrompt, setShowPrompt] = useState(false);

  //FOR SEARCH QUERY OPEN MODAL
  const [searchModal, setSearchModal] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!inputValue.trim()) return;
    const todoText = inputValue; // capture current typed value first
// WHY I STORED const todoText = inputValue
// Because async operations sometimes rerender while state changes.
// Capturing current value ensures exact typed value sent.
    try {
      await addTodo({
        text:todoText
      });
      setInputValue(""); // clear only after api success
       setShowPrompt(false);
      setSearchModal(false)
      await fetchTodos();
      navigate("/");   
    } catch (error) {
      console.log("Add todo error:", error);
    }
  };

  const fetchTodos = useCallback(async () => {
    const res = await fetchTodo();
    setTodos(res.data);
    setShowPrompt(false);
  }, [setShowPrompt]);

  useEffect(() => {
    fetchTodos()
  }, [fetchTodos])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout showPrompt={showPrompt}
          searchModal={searchModal}
          setShowPrompt={setShowPrompt}
          inputValue={inputValue}
          setInputValue={setInputValue}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          handleSubmit={handleSubmit} />}>
          <Route index element={<InboxOne todos={todos}
            setTodos={setTodos}
            fetchTodos={fetchTodos}
            searchQuery={searchQuery}
            showPrompt={showPrompt}
            setShowPrompt={setShowPrompt}
            inputValue={inputValue}
            setInputValue={setInputValue}
            handleSubmit={handleSubmit} />} />
          <Route path="Inbox2" element={<InboxTwo />} />
          <Route path="completed" element={<Completed />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;