import { useEffect, useState } from "react"

export default function TimelineView() {

    const [activities, setActivities] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        async function fetchActivities() {

            try {

                const res = await fetch(
                    "http://localhost:8080/stencils/recent-activity"
                )

                const data = await res.json()

                setActivities(data)

                setLoading(false)

            } catch (error) {

                console.error(
                    "Error fetching timeline",
                    error
                )

            }

        }

        fetchActivities()

    }, [])

    const formatDate = (date) => {

        return new Date(date).toLocaleDateString()

    }

    return (
        <div className="p-4">

            <h1 className="mb-4">
                Timeline
            </h1>

            {
                loading ? (

                    <div className="d-flex justify-content-center">
                        <div
                            className="spinner-border"
                            role="status"
                        />
                    </div>

                ) : (

                    <div className="d-flex flex-column gap-3">

                        {activities.map(activity => (

                            <div
                                key={activity.id}
                                className="card shadow-sm"
                            >

                                <div className="card-body">

                                    <div className="fw-bold">
                                        {activity.number}
                                    </div>

                                    <div>
                                        Validation Result:
                                        {" "}
                                        {activity.result}
                                    </div>

                                    <div
                                        className="text-muted small"
                                    >
                                        {formatDate(
                                            activity.validation_date
                                        )}
                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                )
            }

        </div>
    )

}