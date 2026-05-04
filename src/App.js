
import './App.css';
import InboxOne from './InboxOne';
function App() {
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

  return (<>
    <InboxOne indexPage={indexPage} />
  
  </>);
}

export default App;
