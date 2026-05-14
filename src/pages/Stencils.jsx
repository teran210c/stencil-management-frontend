import 'bootstrap-icons/font/bootstrap-icons.css'

export default function Stencils() {
    return (
        <div
            className="p-4"
        >
            <h1>
                Manage and monitor stencil validation
            </h1>
            <form style={{ maxWidth: '350px' }}>
                <div className="input-group input-group-sm mb-3">
                    <span className="input-group-text" id="basic-addon1">
                        <i className="bi bi-search"></i>
                    </span>
                    <input
                        type="search"
                        placeholder="Search Stencil"
                        // value={searchTerm}
                        // onChange={handleChange}
                        className="form-control"
                    />
                </div>
            </form >
        </div >
    )
}