import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

function Layout() {
    const [openModal, setOpenModal] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchModal, setSearchModal] = useState(false);

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
        <div className="layout">
            <aside className='sidebar'>
                {indexPage.map((item, index) => {
                    return (
                        <ul className='listedType' key={index}>
                            <li onClick={() => setOpenModal(true)} >

                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11m-.711-16.5a.75.75 0 1 1 1.5 0v4.789H17.5a.75.75 0 0 1 0 1.5h-4.711V17.5a.75.75 0 0 1-1.5 0V12.79H6.5a.75.75 0 1 1 0-1.5h4.789z" clipRule="evenodd"></path></svg>
                                {item.buttonAdd}</li>
                            <li onClick={() => setSearchModal(true)} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M16.29 15.584a7 7 0 1 0-.707.707l3.563 3.563a.5.5 0 0 0 .708-.707zM11 17a6 6 0 1 0 0-12 6 6 0 0 0 0 12" clipRule="evenodd"></path></svg>
                                {item.search}</li>
                            <li><svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><g fill="currentColor" fillRule="evenodd"><path fillRule="nonzero" d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6zm1 3h10a.5.5 0 1 1 0 1H7a.5.5 0 0 1 0-1z"></path><text fontFamily="var(--fontFamily-regular)" fontSize="9" transform="translate(4 2)" fontWeight="500"><tspan x="8" y="15" textAnchor="middle">18</tspan></text></g></svg>
                                <Link to="/inbox"> {item.inbox}</Link>
                            </li>

                            <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" fillRule="evenodd" d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm10 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-3-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m9-5a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-3-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0M7 8a.5.5 0 0 0 0 1h10a.5.5 0 0 0 0-1z" clipRule="evenodd"></path></svg> {item.upcoming}</li>


                            <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" fillRule="evenodd" d="M13 6.501a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5zm-6.5 6.5a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5zm8 0a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5zm-8-8a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5z" clipRule="evenodd"></path></svg>
                                {item.filtersAndLabels}</li>


                            <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" fillRule="evenodd" d="M12 21.001a9 9 0 1 0 0-18 9 9 0 0 0 0 18m0-1a8 8 0 1 1 0-16 8 8 0 0 1 0 16m-4.354-8.104a.5.5 0 0 1 .708 0l2.146 2.147 5.146-5.147a.5.5 0 0 1 .708.708l-5.5 5.5a.5.5 0 0 1-.708 0l-2.5-2.5a.5.5 0 0 1 0-.708" clipRule="evenodd"></path></svg>
                                <Link to="/completed" >{item.completed}</Link></li>

                        </ul>

                    )
                })}
            </aside>

            <main className="content">
                <Outlet />
            </main>
        </div>
          {
        openModal && (
            <div className="modalOverlay">
                <div className="modalBox">
                    <h3>Add New Item</h3>
                    <div className='insideDiv'>
                        <input type='text' className='ip' id='ipValue' value={inputValue} placeholder='Replace lightBulb tomorrow at 3pm' onChange={(e) => setInputValue(e.target.value)} />
                        <div className='ibtn'><button onClick={handleSubmit}>Add Task</button>
                            <button onClick={() => setOpenModal(false)}>Cancel</button></div></div>


                </div>
            </div>
        )
    }

    {
        searchModal && (
            <div className="modalOverlay" onClick={() => setSearchModal(false)}>
                <div className="modalBox" onClick={(e) => e.stopPropagation()}>
                    <div className='searchQuery'>
                        <div className="searchRow">
                            <svg xmlns="http://www.w3.org/2000/svg" className='icon' width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M16.29 15.584a7 7 0 1 0-.707.707l3.563 3.563a.5.5 0 0 0 .708-.707zM11 17a6 6 0 1 0 0-12 6 6 0 0 0 0 12" clipRule="evenodd"></path></svg>
                            <input
                                type="text" className='form-control'
                                placeholder="Search"
                                onChange={(e) => setSearchQuery(e.target.value)}
                            /></div>
                        {listToShow.length === 0 && <p>No items found</p>}
                        {listToShow && listToShow.map((item, index) =>
                        (
                            <div className='specific'>{item.text}</div>
                        ))}


                        {/* <div className='ibtn'><button onClick={handleSearch}>search your task</button>
                <button onClick={() => setSearchModal(false)}>Cancel</button></div> */}
                    </div>


                </div>
            </div>
        )
    }
   </> );
}

export default Layout;