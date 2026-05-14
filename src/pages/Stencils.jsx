import 'bootstrap-icons/font/bootstrap-icons.css'

export default function Stencils() {
    return (
        <div
            className="p-4"
        >
            <h1 className='mb-4'>
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
            <div className='mb-4'>
            <select>
                <option>Filter</option>
                <option>Approved</option>
                <option>Expring</option>
                <option>Expired</option>
            </select>
            </div>
            <div className="table-responsive">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>
                                Code
                            </th>
                            <th>
                                Model
                            </th>
                            <th>
                                Status
                            </th>
                            <th>
                                Expiration
                            </th>
                            <th>
                                Location
                            </th>
                            <th>
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                ABU8-424B01
                            </td>
                            <td>
                                BCM031
                            </td>
                            <td>
                                APPROVED
                            </td>
                            <td>
                                May 18
                            </td>
                            <td>
                                null
                            </td>
                            <td>
                                VIEW
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div >
    )
}