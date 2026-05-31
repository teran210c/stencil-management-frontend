import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function ValidationsView() {

    const [validations, setValidations] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        async function fetchValidations() {

            try {

                const res = await fetch(
                    "http://localhost:8080/validations"
                )

                const data = await res.json()

                setValidations(data)

                setLoading(false)

            } catch (error) {

                console.error(
                    "Error fetching validations",
                    error
                )

            }

        }

        fetchValidations()

    }, [])

    return (
        <div className="p-4">

            <h1 className="mb-4">
                Validation History
            </h1>

            {
                loading ? (

                    <div className="d-flex align-items-center justify-content-center gap-2">
                        <div
                            className="spinner-border"
                            style={{
                                width: "3rem",
                                height: "3rem"
                            }}
                        />
                        <span className="text-muted fs-4">
                            Loading validations...
                        </span>
                    </div>

                ) : (

                    <table className="table table-striped">

                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Stencil</th>
                                <th>Result</th>
                                <th>Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>

                            {validations.map(validation => {

                                return (

                                    <tr key={validation.id}>

                                        <td>
                                            {validation.id}
                                        </td>

                                        <td>
                                            {validation.number}
                                        </td>

                                        <td>
                                            {validation.result}
                                        </td>

                                        <td>
                                            {validation.validation_date}
                                        </td>

                                        <td>
                                            <Link
                                                to={`/validation/${validation.id}`}
                                            >
                                                VIEW
                                            </Link>
                                        </td>

                                    </tr>

                                )

                            })}

                        </tbody>

                    </table>

                )
            }

        </div>
    )

}