import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export default function StencilDetailsView() {
    const [stencil, setStencil] = useState({})
    const { stencilId } = useParams()
    const navigate = useNavigate() 

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
                    <button onClick={handleStartValidation} type="button" className="btn btn-success">Start Validation</button>
                    <button type="button" className="btn btn-secondary">Edit Stencil</button>
                    <button type="button" className="btn btn-secondary">Disable Stencil</button>
                </div>
            </div>
        </div>
    )
}