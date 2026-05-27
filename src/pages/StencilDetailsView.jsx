import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export default function StencilDetailsView() {
    const [stencil, setStencil] = useState({})
    const { stencilId } = useParams()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchStencil = async () => {

            try {

                const res = await fetch(`http://localhost:8080/stencils/${stencilId}`)

                const data = await res.json()

                setStencil(data)

                setLoading(true)


            } catch (error) {

                console.error("Error fetching stencil", error)

            }

        }

        fetchStencil()

    }, [])


    async function handleStartValidation() {

        try {

            const response = await fetch(`http://localhost:8080/validations/start-validation/${stencilId}`,
                {
                    method: "POST"
                }
            )

            const data = await response.json()


            navigate(`/validation/${data.validation}`)


        } catch (error) {

            console.error("Error starting validation", error)

            alert("Error starting validation")

        }


    }

    async function handleResumeValidation() {

    try {

        const res = await fetch(
            `http://localhost:8080/validations/stencil/${stencilId}/latest`
        )

        const validation = await res.json()

        navigate(`/validation/${validation.id}`)

    } catch (error) {

        console.error(
            "Error fetching latest validation",
            error
        )

    }

}

    { loading && console.log(stencil) }

    return (
        <div>
            <div>
                {stencil.number}
            </div>
            <div>
                <div>
                    StencilInfoCard
                    <ul>
                        <li>{stencil.vendor}</li>
                        <li>Location</li>
                        <li>Expiration Date</li>
                        <li>Cycle Days</li>
                    </ul>
                </div>
                <div>
                    ValidationHistory
                </div>
            </div>
            <div>
                <div>
                    CurrentValidation
                </div>
                <div>
                    {stencil.status === "PENDING" ? (

                        <button
                            onClick={handleStartValidation}
                            type="button"
                            className="btn btn-success"
                        >
                            Start Validation
                        </button>

                    ) : stencil.status === "FAILED" ? (

                        <button
                            onClick={handleResumeValidation}
                            type="button"
                            className="btn btn-warning"
                        >
                            Start Revalidation
                        </button>

                    ) : stencil.status === "PASSED" ? (

                        <button
                            onClick={() => navigate(-1)}
                            type="button"
                            className="btn btn-primary"
                        >
                            Return
                        </button>

                    ) : (

                        <button
                            onClick={handleStartValidation}
                            type="button"
                            className="btn btn-success"
                        >
                            Start Validation
                        </button>

                    )}
                    <button type="button" className="btn btn-secondary">Edit Stencil</button>
                    <button type="button" className="btn btn-secondary">Disable Stencil</button>
                </div>
            </div>
        </div>
    )
}