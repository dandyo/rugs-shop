import { Link } from "react-router-dom";

function AdminTest() {

    return <>
        <div className="container-xl">
            <h1>Test</h1>
            <form method="post">
                <div className="form-group">
                    <input class="form-control" type="file" id="formFile" />
                </div>
            </form>
        </div>
    </>
}

export default AdminTest;