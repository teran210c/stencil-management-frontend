import { Link } from "react-router-dom"
import pegatronLogo from "../assets/Pegatron_Logo.png"

export default function Sidebar() {
    return (
        <div 
            className="text-white p3"
            style={{ 
                backgroundColor: "#282924",
                fontFamily: "Inter, sans-serif",
                minHeight: "100%"
            }}
        >
            <div className="text-center mb-4">
                <img 
                    src={pegatronLogo} 
                    alt="Pegatron Logo"
                    style={{ 
                        width: "130px", 
                        filter: "invert(1)"
                    }} 
                />
            </div>
            <div 
                className="mb-3 ps-3 "
            >
                <Link 
                    to="/"
                >
                    Dashboard
                </Link>
                
            </div>

            <div className="mb-3 ps-3">
                <Link 
                    to="/stencils"
                >
                    Stencils
                </Link>
            </div>

            <div className="mb-3 ps-3">
                <Link 
                    to="/validations"
                >
                    Validations
                </Link>
            </div>

            <div className="mb-3 ps-3">
                <Link 
                    to="/timeline"
                >
                    Timeline
                </Link>
            </div>

            <div className="mb-3 ps-3">
                <Link 
                    to="/users"
                >
                    Users
                </Link>
            </div>
        </div>
    )
}