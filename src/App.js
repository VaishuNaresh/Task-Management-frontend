import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import InboxOne from "./InboxOne";
import InboxTwo from "./InboxTwo";
import Completed from "./Completed";

function App() {
  const [showPrompt, setShowPrompt] = useState(false);
  const [inputValue, setInputValue] = useState("");



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
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout showPrompt={showPrompt}
          setShowPrompt={setShowPrompt}
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleSubmit={handleSubmit} />}>
          <Route index element={<InboxOne showPrompt={showPrompt}
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