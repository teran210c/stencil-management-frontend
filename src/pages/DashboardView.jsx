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
                className="d-flex pt-4 gap-5 justify-content-center"
            >
                <div
                    className="p-4 text-center rounded-3 shadow-sm"
                    style={{
                        backgroundColor: "#FFFFFF",
                        width: "240px"
                    }}
                >
                    <p
                        className="text-muted small mb-0"
                    >
                        Total Stencils
                    </p>
                    <h1
                        className="display-6 fw-bold"
                    >
                        142
                    </h1>
                </div>
                <div
                    className="p-4 text-center rounded-3 shadow-sm"
                    style={{
                        backgroundColor: "#FFFFFF",
                        width: "240px"
                    }}
                >
                    <p
                        className="text-muted small mb-0"
                    >
                        Approved
                    </p>
                    <h1
                        className="display-6 fw-bold"
                    >
                        118
                    </h1>
                </div>
                <div
                    className="p-4 text-center rounded-3 shadow-sm"
                    style={{
                        backgroundColor: "#FFFFFF",
                        width: "240px"
                    }}
                >
                    <p
                        className="text-muted small mb-0"
                    >
                        Expiring
                    </p>
                    <h1
                        className="display-6 fw-bold"
                    >
                        16
                    </h1>
                </div>
                <div
                    className="p-4 text-center rounded-3 shadow-sm"
                    style={{
                        backgroundColor: "#FFFFFF",
                        width: "240px"
                    }}
                >
                    <p
                        className="text-muted small mb-0"
                    >
                        Expired
                    </p>
                    <h1
                        className="display-6 fw-bold"
                    >
                        8
                    </h1>
                </div>

            </div>
            <div className="d-flex justify-content-center">
                <div
                    className="p-4 rounded-3 shadow-sm"
                    style={{
                        backgroundColor: "#FFFFFF",
                        width: "500px",
                        margin: "30px"
                    }}
                >
                    <h4>
                        Expiring Stencils
                    </h4>
                    <div className="table-responsive">
                        <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>
                                    Stencil
                                </th>
                                <th>
                                    Status
                                </th>
                                <th>
                                    Days Left
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    ABU8-424B01
                                </td>
                                <td>
                                    EXPIRING
                                </td>
                                <td>
                                    2 Days Left
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    ABU8-424B01
                                </td>
                                <td>
                                    EXPIRING
                                </td>
                                <td>
                                    2 Days Left
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    ABU8-424B01
                                </td>
                                <td>
                                    EXPIRING
                                </td>
                                <td>
                                    2 Days Left
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    ABU8-424B01
                                </td>
                                <td>
                                    EXPIRING
                                </td>
                                <td>
                                    2 Days Left
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    ABU8-424B01
                                </td>
                                <td>
                                    EXPIRING
                                </td>
                                <td>
                                    2 Days Left
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                    
                </div>
                <div
                    className="d-flex flex-column p-4 rounded-3 shadow-sm gap-3"
                    style={{
                        backgroundColor: "#FFFFFF",
                        marginTop: "30px"
                    }}
                >
                    <h4>
                        Recent Activity
                    </h4>
                    <div className="d-flex flex-column gap-2">
                        <div className="border-bottom pb-2">
                            <div>
                                Stencil ABU8-424B01 approved
                            </div>
                            <div className="text-muted small">
                                today
                            </div>
                        </div>
                        <div className="border-bottom pb-2">
                            <div>
                                Validation scheduled for BCM022-A
                            </div>
                            <div className="text-muted small">
                                yeterday
                            </div>
                        </div>
                        <div className="border-bottom pb-2">
                            <div>
                                New stencil A17-REWORK registered
                            </div>
                            <div className="text-muted small">
                                2 days ago
                            </div>
                        </div>
                        <div className="border-bottom pb-2">
                            <div>
                                User Javier completed validation
                            </div>
                            <div className="text-muted small">
                                3 days ago
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}