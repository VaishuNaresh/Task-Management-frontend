import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import Layout from "./Layout";
import InboxOne from "./InboxOne";
import InboxTwo from "./InboxTwo";
import Completed from "./Completed";
import { addTodo,fetchTodo } from "./api/todoapi";

function App() {
  const [showPrompt, setShowPrompt] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [todos, setTodos] = useState([]);

  //for open modal for ADD TASK
  const [openModal, setOpenModal] = useState(false);

  //FOR SEARCH QUERY OPEN MODAL
  const [searchModal, setSearchModal] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!inputValue.trim()) return;
    try {
      await addTodo({
        text: inputValue
      });
      fetchTodos();
      setInputValue("");
       setShowPrompt(false);
      setOpenModal(false)
      setSearchModal(false)
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
          openModal={openModal}
          setOpenModal={setOpenModal}
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