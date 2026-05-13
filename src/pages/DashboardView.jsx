import ExpiringStencils from "../components/ExpiringStencils";
import KpiSection from "../components/KpiSection";
import RecentActivity from "../components/RecentActivity";

export default function DashboardView() {
    const kpiCards = [
        {
            title: "Total Stencils",
            value: 142
        },
        {
            title: "Approved",
            value: 118
        },
        {
            title: "Expiring",
            value: 16
        },
        {
            title: "Expired",
            value: 8
        }
    ]

    const stencils = [
        {
            name: "ABU8-424B01(1)",
            status: "EXPIRING",
            daysLeft: 1
        },
        {
            name: "ABU8-424B01(2)",
            status: "EXPIRING",
            daysLeft: 2
        },
        {
            name: "ABU8-424B01(3)",
            status: "EXPIRED",
            daysLeft: -3
        },
        {
            name: "ABU8-424B01(4)",
            status: "EXPIRING",
            daysLeft: 1
        },
        {
            name: "ABU8-424B01(5)",
            status: "EXPIRING",
            daysLeft: 5
        },
        {
            name: "ABU8-424B01(6)",
            status: "EXPIRED",
            daysLeft: -1
        },
        {
            name: "ABU8-424B01(7)",
            status: "EXPIRING",
            daysLeft: 3
        }
    ]

    const activities = [
        {
            description: "Stencil ABU8-424B01 approved",
            timeStamp: "Today"

        },
        {
            description: "Validation scheduled for BCM022-A",
            timeStamp: "Yesterday"
        },
        {
            description: "New stencil A17-REWORK registered",
            timeStamp: "2 days ago"
        },
        {
            description: "User Javier completed validation",
            timeStamp: "3 days ago"
        }
    ]

    return (
        <div
            className="p-4 flex-grow-1"
            style={{
                backgroundColor: "#F1F5F9"
            }}
        >
            <h1>Dashboard</h1>
            <KpiSection kpiCards={kpiCards}/>
            <div className="d-flex justify-content-center">
                <ExpiringStencils stencils={stencils}/>
                <RecentActivity activities={activities}/>
            </div>
        </div>
    )
}