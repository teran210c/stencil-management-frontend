export default function UsersView() {

    return (
        <div className="container py-4">


                <h1 className="mb-4">
                    Users
                </h1>

                <div className="card shadow-sm">

                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-hover">

                                <thead>

                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Role</th>
                                    </tr>

                                </thead>

                                <tbody>

                                    <tr>
                                        <td>1</td>
                                        <td>Javier</td>
                                        <td>ADMIN</td>
                                    </tr>

                                    <tr>
                                        <td>2</td>
                                        <td>Technician 1</td>
                                        <td>TECHNICIAN</td>
                                    </tr>

                                    <tr>
                                        <td>3</td>
                                        <td>Technician 2</td>
                                        <td>TECHNICIAN</td>
                                    </tr>

                                </tbody>

                            </table>
                        </div>

                    </div>

                </div>

            </div>
   
    )

}