import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"

export default function StencilDetailsView() {
    const { stencilId } = useParams()
    const [stencil, setStencil] = useState({})

    useEffect(() => {
        const fetchStencil = async () => {

            try {
            
            const res = await fetch(`http://localhost:8080/stencils/${stencilId}`)

            const data = await res.json()

            setStencil(data)

        } catch (error) {

            console.error("Error fetching stencil", error)
            
        }

        }

        fetchStencil()
        
    }, [])

    console.log(stencil)

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
                    <Link to={`/validation/${stencilId}`} type="button" className="btn btn-success">Start Validation</Link>
                    <button type="button" className="btn btn-secondary">Edit Stencil</button>
                    <button type="button" className="btn btn-secondary">Disable Stencil</button>
                </div>
            </div>
        </div>
    )
}