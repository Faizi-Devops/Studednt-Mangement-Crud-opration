import Button from "../Button/Button";

const Students = () => {
    return (
        <div>
            <div className="d-flex justify-content-center mb-5 mt-5">
                <div className="card" style={{ width: "18rem" }}>

                    <div className="card-body">
                        <h5 className="card-title">Input Form</h5>
                        <hr />
                        <div className="mb-3">
                            <input type="email" className="form-control"  placeholder="Please enter your Name" />
                        </div>
                        <div className="mb-3">
                            <input type="email" className="form-control"  placeholder="Please enter your Class Name" />
                        </div>
                        <div className="mb-3">
                            <input type="email" className="form-control"  placeholder="Please enter your Batch Name" />
                        </div>
                        <div className="mb-3">
                            <input type="email" className="form-control"  placeholder="Please enter your Gende" />
                        </div>
                        <div className="text-center">
                            <Button value="Add Students" color="btn btn-primary"/>

                        </div>

                    </div>
                </div>

            </div>


        </div>

    )
}
export default Students;