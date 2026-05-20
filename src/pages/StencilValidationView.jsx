import { Activity, useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function StencilValidationView() {
    const { validationId } = useParams()
    const [validation, setValidation] = useState({})
    const [checklist, setChecklist] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const fetchDetails = async () => {

            const res = await fetch(
                `http://localhost:8080/validations/${validationId}/details`
            )

            const data = await res.json()

            setValidation(data.validation)

            setChecklist(data.checklist)

            setLoading(false)

        }

        fetchDetails()

    }, [validationId])

    const handleToogleStatus = async (itemId) => {
        const itemToUpdate = checklist.find(item => item.id === itemId)

        const newResult =
            itemToUpdate.result === "PASSED"
                ? "PENDING"
                : "PASSED"

        setChecklist(prev =>
            prev.map(item =>
                item.id === itemId
                    ? { ...item, result: newResult }
                    : item
            )
        )

        try {

            await fetch(
                `http://localhost:8080/validations/checklist/${itemId}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        result: newResult
                    })
                }
            )

        } catch (error) {

            console.error("Error updating checklist item", error)

        }


    }

    return (
        <div>
            ValidationView
            <div className="d-flex p-4 justify-content-between">
                <div>
                    {validation.number}
                    <h4>model</h4>
                </div>
                {validation.result}
            </div>
            <div className="d-flex p-4 justify-content-around">
                <div>
                    checklist
                    {loading ? (
                        <div className="d-flex align-items-center justify-content-center gap-2">
                            <div
                                className="spinner-border spinner-border"
                                style={{ width: "1rem", height: "1rem" }}
                                role="status"
                            >
                            </div>
                            <span className="text-muted fs-sm">Loading activites...</span>
                        </div>
                    ) : (checklist.map(activity => {
                        const isPassed = activity.result === 'PASSED'
                        return (
                            <div
                                className="d-flex gap-3"
                                key={activity.id}
                            >
                                {activity.item_name}
                                <div
                                    onClick={() => handleToogleStatus(activity.id)}
                                    className="d-flex justify-content-center align-items-center text-white"
                                    style={{
                                        backgroundColor: isPassed ? "#10e93b" : "#dbe910",
                                        height: "1.25rem",
                                        width: "1.25rem",
                                        cursor: "pointer"

                                    }}
                                >
                                    <span className="fs-6 fw-bolder">{isPassed ? "✓" : "-"}</span>
                                </div>
                            </div>
                        )
                    }))}

                </div>
                <div>
                    Validation Summary
                </div>
            </div>
            <div>
                <button type="button" className="btn btn-primary">
                    Save Draft
                </button>
            </div>
        </div>
    )
}