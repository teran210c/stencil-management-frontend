import { Link } from "react-router-dom"

export default function StencilsBoard({ stencils }) {

    return (
        <div 
            className="table-responsive overflow-y-auto"
            style={{ maxHeight: '60vh' }}
        >
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
                    {stencils.map((s, i) => {
                        return (
                            <tr
                                key={i}
                            >
                                <td>
                                    {s.number}
                                </td>
                                <td>
                                    toBeCompleted
                                </td>
                                <td>
                                    {s.status}
                                </td>
                                <td>
                                    toBeCompleted
                                </td>
                                <td>
                                    null
                                </td>
                                <td>
                                    <Link
                                        to={`/details/${s.id}`}
                                    >
                                        VIEW
                                    </Link>                                    
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}