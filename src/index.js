import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import InboxOne from './InboxOne';
import InboxTwo from './InboxTwo';
import InboxThree from './InboxThree';
import { Routes ,BrowserRouter , Route} from 'react-router-dom';
import Completed from './Completed';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <BrowserRouter>
    <Routes>
        <Route path="/Inbox" element={<InboxOne />} />
        <Route path="/completed" element={<Completed />} />
        <Route path="/Inbox2" element={<InboxTwo />} />
    {/* <InboxOne /> */}
    </Routes>
    </BrowserRouter>
    {/* 1.
   
    2.
    <InboxTwo />
    3.
    <InboxThree/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
