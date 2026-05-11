export default function DashboardView() {
    return (
        <div
            className="p-4 flex-grow-1"
            style={{
                backgroundColor: "#F1F5F9"
            }}
        >
            <h1>Dashboard</h1>
            <div
                className="d-flex pt-4 justify-content-around"
            >
                <div 
                    className="p-4 rounded-3 shadow-sm"
                    style={{
                        backgroundColor: "#FFFFFF",
                        width: "150px"
                    }}
                >
                    Tool stencils
                </div>
                <div 
                    className="p-4 rounded-3 shadow-sm"
                    style={{
                        backgroundColor: "#FFFFFF",
                        width: "150px"
                    }}
                >
                    Approved
                </div>
                <div 
                    className="p-4 rounded-3 shadow-sm"
                    style={{
                        backgroundColor: "#FFFFFF",
                        width: "150px"
                    }}
                >
                    Expiring
                </div>
                <div 
                    className="p-4 rounded-3 shadow-sm"
                    style={{
                        backgroundColor: "#FFFFFF",
                        width: "150px"
                    }}
                >
                    Expired
                </div>

            </div>
            <div className="d-flex">
                <div
                    className="p-4 rounded-3 shadow-sm"
                    style={{
                        backgroundColor: "#FFFFFF",
                        width: "500px",
                        margin: "30px"
                    }}
                >
                    Expiring Stencils
                </div>
                <div
                    className="p-4 rounded-3 shadow-sm" 
                    style={{
                        backgroundColor: "#FFFFFF",
                        marginTop: "30px"
                    }}
                >
                    Recent Activity
                </div>
            </div>
        </div>
    )
}