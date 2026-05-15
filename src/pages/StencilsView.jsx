import 'bootstrap-icons/font/bootstrap-icons.css'
import StencilsBoard from '../components/SetencilsBoard'
import { useEffect, useState } from 'react'

export default function StencilsView() {
    const [stencils, setStencils] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    useEffect (() => {
        const fetchData = async () => {
            try {
            
            const res = await fetch("http://localhost:8080/stencils")

            const data = await res.json()

            setStencils(data)


        } catch (error) {

            console.error("Error fetchin Stencils information", error)
            
        }

        }

        fetchData()
        
    }, [])
    
    const filteredBoard = stencils.filter((stencil) => 
        stencil.number.toLowerCase().startsWith(searchTerm.toLowerCase())
    )

    return (
        <div
            className="p-4"
        >
            <h1 className='mb-4'>
                Manage and monitor stencil validation
            </h1>
            <form style={{ maxWidth: '350px' }} onSubmit={e => e.preventDefault()}>
                <div className="input-group input-group-sm mb-3">
                    <span className="input-group-text" id="basic-addon1">
                        <i className="bi bi-search"></i>
                    </span>
                    <input
                        type="search"
                        placeholder="Search Stencil"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        className="form-control"
                    />
                </div>
            </form >
            <div className='mb-4'>
            <select>
                <option>Filter</option>
                <option>Approved</option>
                <option>Expring</option>
                <option>Expired</option>
            </select>
            </div>
            <StencilsBoard stencils={filteredBoard}/>
        </div >
    )
}