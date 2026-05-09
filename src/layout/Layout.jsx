import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function Layout () {
    return (
        <div 
            className="d-flex flex-grow-1"
            style={{ backgroundColor: "#F1F5F9" }}
        >
            <div style={{width: "220px"}}>
                <Sidebar />
            </div>
            <div 
                className="flex-grow-1"
            >
                <Topbar />
            </div>
            
        
        </div>
    )
    
}