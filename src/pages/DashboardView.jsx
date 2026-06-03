import { useEffect, useState } from "react";
import ExpiringStencils from "../components/ExpiringStencils";
import KpiSection from "../components/KpiSection";
import RecentActivity from "../components/RecentActivity";

export default function DashboardView() {
    const [dashboardData, setDashboardData] = useState({})
    const [expiringStencils, setExpiringStencils] = useState([])
    const [loading, setLoading] = useState(true)
    const [activities, setActivities] = useState([])

    useEffect(() => {

        async function fetchData() {

            try {

                const [dashboardRes, expiringRes, activityRes] = await Promise.all([
                    fetch("http://localhost:8080/stencils/dashboard"),
                    fetch("http://localhost:8080/stencils/expiring"),
                    fetch("http://localhost:8080/stencils/recent-activity")
                ])

                const dashboardData = await dashboardRes.json()
                const expiringData = await expiringRes.json()
                const activityData = await activityRes.json()

                setDashboardData(dashboardData)
                setExpiringStencils(expiringData)
                setActivities(activityData)
                setLoading(false)

            } catch (error) {

                console.error(error)

            }
        }

        fetchData()

    }, [])

    const kpiCards = [
        {
            title: "Total Stencils",
            value: dashboardData.total
        },
        {
            title: "Approved",
            value: dashboardData.approved
        },
        {
            title: "Expiring",
            value: dashboardData.expiring
        },
        {
            title: "Expired",
            value: dashboardData.expired
        }
    ]

    return (
        <div
            className="p-4"
        >
            <h1>Dashboard</h1>
            <KpiSection
                kpiCards={kpiCards}
                loading={loading}
            />
            <div className="d-flex justify-content-center">
                <ExpiringStencils
                    stencils={expiringStencils}
                    loading={loading}
                />
                <RecentActivity 
                    activities={activities}
                    loading={loading}
                />
            </div>
        </div>
    )
}