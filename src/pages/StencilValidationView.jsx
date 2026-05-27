import { Activity, useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"

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

    const completeValidation = async (validationId) => {


        try {
            const res = await fetch(`http://localhost:8080/validations/${validationId}/complete`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            )

            const data = await res.json()

            setValidation(data.validation)
            setChecklist(data.checklist)

        } catch (error) {

            console.error("Error at completing validation", error)
            alert("Error at completing validation")

        }
    }

   

    return (
        <div>
            ValidationView
            <div className="d-flex flex-column p-4">
                {validation.number}
                <div className="d-flex justify-content-evenly">
                    <h4 className="flex-grow-1 me-5">model</h4>
                    <h4 className="flex-grow-1 me-5">{validation.result}</h4>
                </div>
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
                    ) : (
                        checklist.map(activity => {
                            // Evaluamos dinámicamente el estilo para PASSED, FAILED o PENDING
                            let bgColor = "#dbe910" // Amarillo por defecto (PENDING)
                            let iconClass = "bi bi-dash" // Guion por defecto

                            if (activity.result === 'PASSED') {
                                bgColor = "#10e93b" // Verde
                                iconClass = "bi bi-check-lg" // Check de Bootstrap Icons
                            } else if (activity.result === 'FAILED') {
                                bgColor = "#e91010" // Rojo
                                iconClass = "bi bi-x-lg" // X de Bootstrap Icons
                            }

                            return (
                                <div className="d-flex gap-3 align-items-center mb-2" key={activity.id}>
                                    {activity.item_name}
                                    <div
                                        onClick={() => handleToogleStatus(activity.id)}
                                        className="d-flex justify-content-center align-items-center text-white"
                                        style={{
                                            backgroundColor: bgColor,
                                            height: "1.25rem",
                                            width: "1.25rem",
                                            cursor: "pointer"
                                        }}
                                    >
                                        <i className={`${iconClass} fs-6 fw-bolder`}></i>
                                    </div>
                                </div>
                            )
                        })
                    )}
                </div>
                <div>
                    Validation Summary
                </div>
            </div>
            <div>
                {validation.result === "PENDING" ?( 
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => completeValidation(validation.id)}
                    >
                        Complete Validation
                    </button> ) : (
                    <Link
                        className="btn btn-primary"
                        to={`/`}
                    >
                        Retrun Home
                    </Link>
                )

                }
            </div>
        </div>
    )
}