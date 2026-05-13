export default function ExpiringStencils({ stencils }) {

    const formatDaysLeft = (daysLeft) => {
        if (daysLeft < -1) return `${Math.abs(daysLeft)} days ago`
        if (daysLeft === -1) return "Yesterday"
        if (daysLeft === 0) return "Today"
        if (daysLeft === 1) return "Tomorrow"
        if (daysLeft > 1) return `${daysLeft} days`
    }

    return (
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
                            {stencils.map((s, i) => {
                                return (
                                    <tr
                                        key={i}
                                    >
                                        <td>
                                            {s.name}
                                        </td>
                                        <td>
                                            {s.status}
                                        </td>
                                        <td>
                                            {formatDaysLeft(s.daysLeft)}
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    </div>
                    
                </div>
    )
}