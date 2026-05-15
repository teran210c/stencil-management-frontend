import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function StencilValidationView() {
    const {stencilId} = useParams()
    const [stencil, setStencil] = useState({})

    useEffect(() => {

        const fetchStencil = async () => {

            const res = await fetch(`http://localhost:8080/stencils/${stencilId}`)

            const data = await res.json()

            setStencil(data)

        }

        fetchStencil()

    }, [])

    console.log(stencil)

    return (
        <div>
            ValidationView
            <div>
                {stencil.number}
                {stencil.status}
            </div>
            <div>
                <div>
                    checklist
                </div>
                <div>
                    Validation Summary
                </div>
            </div>
        </div>
    )
}