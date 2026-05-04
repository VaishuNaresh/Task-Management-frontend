import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import InboxOne from "./InboxOne";
import InboxTwo from "./InboxTwo";
import Completed from "./Completed";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<InboxOne />} />
          <Route path="Inbox2" element={<InboxTwo />} />
          <Route path="completed" element={<Completed />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;