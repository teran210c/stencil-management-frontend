export default function RecentActivity({ activities, loading }) {

    const formatActivityDate = (validationDate) => {

        const today = new Date()

        const activityDate = new Date(validationDate)

        const diffTime = today - activityDate

        const diffDays = Math.floor(
            diffTime / (1000 * 60 * 60 * 24)
        )

        if (diffDays > 1) return `${diffDays} days ago`
        if (diffDays === 1) return "Yesterday"
        return "Today"

    }


    return (
        <div
            className="d-flex flex-column p-4 rounded-3 shadow-sm gap-3"
            style={{
                backgroundColor: "#FFFFFF",
                marginTop: "30px"
            }}
        >
            {loading ? (
                <div className="d-flex align-items-center justify-content-center gap-2">
                    <div
                        className="spinner-border spinner-border"
                        style={{ width: "3rem", height: "3rem" }}
                        role="status"
                    >
                    </div>
                    <span className="text-muted fs-4">Loading</span>
                </div>

            ) : (
                <div>
                    <h4>
                        Recent Activity
                    </h4>
                    <div className="d-flex flex-column gap-2">
                        {activities.map((a) => (
                            <div
                                className="border-bottom pb-2"
                                key={a.id}
                            >
                                <div>
                                    Stencil {a.number} {a.result.toLowerCase()} validation
                                </div>

                                <div className="text-muted small">
                                    {formatActivityDate(a.validation_date)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>)}

        </div>

    )
}