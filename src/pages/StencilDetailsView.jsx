import { useParams } from "react-router-dom"

export default function StencilDetailsView() {
    const { stencilId } = useParams()

    console.log(stencilId)

    return (
        <div>
            <div>
                StencilHeader
            </div>
            <div>
                <div>
                    StencilInfoCard
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
                    StencilActions
                </div>
            </div>
        </div>
    )
}