import { Routes, Route } from "react-router-dom";
import DashboardView from "../pages/DashboardView";
import StencilsView from "../pages/StencilsView";
import StencilDetailsView from "../pages/StencilDetailsView";
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
                <Routes>
                    <Route path="/" element={<DashboardView/>} />
                    <Route path="/stencils" element={<StencilsView />} />
                    <Route path="/details" element={<StencilDetailsView/>} />
                </Routes>
            </div>



        </div>
    )

}