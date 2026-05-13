export default function RecentActivity({ activities }) {

    return (
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
                {activities.map((a, i) => {
                    return (
                        <div 
                            className="border-bottom pb-2"
                            key={i}

                        >
                            <div>
                                {a.description}
                            </div>
                            <div className="text-muted small">
                                {a.timeStamp}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>

    )
}