import 'bootstrap-icons/font/bootstrap-icons.css'
import StencilsBoard from '../components/StencilsBoard'
import { useEffect, useState } from 'react'

export default function StencilsView() {
    const [stencils, setStencils] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedStatus, setSelectedStatus] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {

                const res = await fetch("http://localhost:8080/stencils")

                const data = await res.json()

                setStencils(data)

                setLoading(false)

            } catch (error) {

                console.error("Error fetchin Stencils information", error)

            }

        }

        fetchData()

    }, [])

    const filteredBoard = stencils.filter((stencil) => {
        return (
            stencil.number.toLowerCase().startsWith(searchTerm.toLowerCase()) && (
                selectedStatus === "" || stencil.status === selectedStatus
            )
        )
    }
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
                <select
                    onChange={e => setSelectedStatus(e.target.value)}
                >
                    <option value={""}>Filter</option>
                    <option value={"PASSED"}>PASSED</option>
                    <option value={"PENDING"}>PENDING</option>
                    <option value={"EXPIRED"}>EXPIRED</option>
                </select>
            </div>
            {
                loading ? (
                    <div className="d-flex align-items-center justify-content-center gap-2">
                        <div
                            className="spinner-border spinner-border"
                            style={{ width: "3rem", height: "3rem" }}
                            role="status"
                        >
                        </div>
                        <span className="text-muted fs-4">Loading stencils...</span>
                    </div>
                ) : (
                    <StencilsBoard stencils={filteredBoard} />
                )
            }
        </div >
    )
}