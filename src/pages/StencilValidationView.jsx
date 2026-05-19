import { Activity, useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function StencilValidationView() {
    const { validationId } = useParams()
    const [validation, setValidation] = useState({})
    const [checklist, setChecklist] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const fetchDetails = async () => {

            const res = await fetch(
                `http://localhost:8080/validations/${validationId}/details`
            )

            const data = await res.json()

            console.log(data)

            setValidation(data.validation)

            setChecklist(data.checklist)

            setLoading(false)

        }

        fetchDetails()

    }, [])

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
                        return (
                            <div
                                key={activity.id}
                            >
                                {activity.item_name}
                            </div>
                        )
                    } ))}

                </div>
                <div>
                    Validation Summary
                </div>
            </div>
        </div>
    )
}