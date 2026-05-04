import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

function Layout() {
    const [openModal, setOpenModal] = useState(false);
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

    return (
        <div className="layout">
            <aside className='sidebar'>
                {indexPage.map((item, index) => (
                    <ul className='listedType' key={index}>
                        <li onClick={() => setOpenModal(true)}>{item.buttonAdd}</li>
                        <li onClick={() => setSearchModal(true)}>{item.search}</li>
                        <li><Link to="/">{item.inbox}</Link></li>
                        <li>{item.today}</li>
                        <li>{item.upcoming}</li>
                        <li>{item.filtersAndLabels}</li>
                        <li><Link to="/completed">{item.completed}</Link></li>
                    </ul>
                ))}
            </aside>

            <main className="content">
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;