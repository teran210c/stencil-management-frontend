import { Activity, useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function StencilValidationView() {
    const { validationId } = useParams()
    const [validation, setValidation] = useState({})
    const [checklist, setChecklist] = useState({})

    useEffect(() => {

        const fetchDetails = async () => {

            const res = await fetch(
                `http://localhost:8080/validations/${validationId}/details`
            )

            const data = await res.json()

            setValidation(data.validation)

            setChecklist(data.checklist)

        }

        fetchDetails()

    }, [])

    console.log(checklist)

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
                    {checklist.map(activity => {
                        return (
                            <div
                                key={activity.id}
                            >
                                {activity.item_name}
                            </div>
                        )
                    } )}

                </div>
                <div>
                    Validation Summary
                </div>
            </div>
        </div>
    )
}