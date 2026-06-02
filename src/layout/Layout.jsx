import { Routes, Route } from "react-router-dom";
import DashboardView from "../pages/DashboardView";
import StencilsView from "../pages/StencilsView";
import StencilDetailsView from "../pages/StencilDetailsView";
import StencilValidationView from "../pages/StencilValidationView";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { useEffect, useState } from "react"
import ValidationsView from "../pages/ValidationsView";
import TimelineView from "../pages/TimelineView";
import UsersView from "../pages/UsersView";

export default function Layout() {

     useEffect(() => {

        const refreshStatuses = async () => {

            try {

                await fetch(
                    "http://localhost:8080/validations/refresh-statuses",
                    {
                        method: "PUT"
                    }
                )

            } catch (error) {

                console.error(
                    "Error refreshing stencil statuses",
                    error
                )

            }

        }

        refreshStatuses()

    }, [])
    return (
        <div
            className="d-flex flex-grow-1"
        >
            <div style={{ width: "220px" }}>
                <Sidebar />
            </div>
            <div
                className="d-flex flex-column flex-grow-1"
                style={{ backgroundColor: "#F1F5F9" }}
            >
                <Topbar />
                <Routes>
                    <Route path="/" element={<DashboardView/>} />
                    <Route path="/stencils" element={<StencilsView />} />
                    <Route path="/details/:stencilId" element={<StencilDetailsView/>} />
                    <Route path="/validation/:validationId" element={<StencilValidationView/>} />
                    <Route path="/validations" element={<ValidationsView/>} />
                    <Route path="/timeline" element={<TimelineView/>} />
                    <Route path="/users" element={<UsersView/>} />
                </Routes>
            </div>



        </div>
    )

}