import { useParams } from "react-router-dom"

export default function StencilValidationView() {
    const {stencilId} = useParams()
    return (
        <div>
            ValidationView
        </div>
    )
}