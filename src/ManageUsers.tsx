import Topbar from "./components/Topbar";
import "./ManageUsers.css";

function ManageUsers() {
    return (
        <div className="content">
            <Topbar></Topbar>

            <div className="panel managementPanel">
                <h1>User management</h1>

                <div className="buttonGroup">
                    <button>Reset</button>
                    <button>Delete</button>
                    <button>Block</button>
                    <button>Promote</button>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>0</td>
                            <td>JustAUser855</td>
                            <td>User</td>
                        </tr>

                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>0</td>
                            <td>JustAUser855</td>
                            <td>User</td>
                        </tr>
                        
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>0</td>
                            <td>JustAUser855</td>
                            <td>User</td>
                        </tr>
                        
                        <tr>
                            <td><input type="checkbox" /></td>
                            <td>0</td>
                            <td>JustAUser855</td>
                            <td>User</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ManageUsers;