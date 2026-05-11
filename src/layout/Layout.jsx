import DashboardView from "../pages/DashboardView";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function Layout() {
    return (
        <div
            className="d-flex flex-grow-1"
            style={{ backgroundColor: "#F1F5F9" }}
        >
            <div style={{ width: "220px" }}>
                <Sidebar />
            </div>
            <div
                className="d-flex flex-column flex-grow-1"
            >
                <Topbar />
                <DashboardView/>
            </div>



        </div>
    )

}