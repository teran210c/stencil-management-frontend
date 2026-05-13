import { Link } from "react-router-dom"
import pegatronLogo from "../assets/Pegatron_Logo.png"

export default function Sidebar() {
    return (
        <div 
            className="text-white vh-100 p3"
            style={{ 
                backgroundColor: "#282924",
                fontFamily: "Inter, sans-serif"
            }}
        >
            <div className="text-center mb-4">
                <img 
                    src={pegatronLogo} 
                    alt="Pegatron Logo"
                    style={{ 
                        width: "140px", 
                        filter: "invert(1)"
                    }} 
                />
            </div>
            <div className="mb-3 ps-3 ">
                <Link to="/">
                    Dashboard
                </Link>
                
            </div>

            <div className="mb-3 ps-3">
                <Link to="/stencils">
                    Stencils
                </Link>
            </div>

            <div className="mb-3 ps-3">
                Validations
            </div>

            <div className="mb-3 ps-3">
                Timeline
            </div>

            <div className="mb-3 ps-3">
                Users
            </div>
        </div>
    )
}