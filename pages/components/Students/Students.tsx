import { useState } from "react";
import Button from "../Button/Button";
type stu = {
    Name: string,
    Class: string,
    Batch: string | number,
    Gender: string
}

const Students = () => {
    const [data, setData] = useState<stu[]>([])
    const [naming, setNaming] = useState<string>("")
    const [classing, setClassing] = useState<string>("")
    const [batching, setBatching] = useState<string>("")
    const [gendering, setGendering] = useState<string>("")
    const alpha = (e: any) => {
        setNaming(e.target.value)

    }
    const beta = (e: any) => {
        setClassing(e.target.value)

    }
    const gema = (e: any) => {
        setBatching(e.target.value)

    }
    const peta = (e: any) => {
    setGendering(e.target.value)

    }
    const onctaHandler = () => {
        let AddStudent = {
            Name: naming,
            Class: classing,
            Batch: batching,
            Gender: gendering


        }
        setData([...data, AddStudent])

    }

    return (
        <div>
            <div className="d-flex justify-content-center mb-5 mt-5">
                <div className="card" style={{ width: "18rem" }}>

                    <div className="card-body">
                        <h5 className="card-title">Input Form</h5>
                        <hr />
                        <div className="mb-3">
                            <input type="email" className="form-control" placeholder="Please enter your Name" onChange={alpha} />
                        </div>
                        <div className="mb-3">
                            <input type="email" className="form-control" placeholder="Please enter your Class Name" onChange={beta} />
                        </div>
                        <div className="mb-3">
                            <input type="email" className="form-control" placeholder="Please enter your Batch Name" onChange={gema} />
                        </div>
                        <div className="mb-3">
                            <input type="email" className="form-control" placeholder="Please enter your Gende" onChange={peta} />
                        </div>
                        <div className="text-center">
                            <Button value="Add Students" onCLickHandler={onctaHandler} color="btn btn-primary" />

                        </div>

                    </div>
                </div>

            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Class</th>
                        <th scope="col">Batch</th>
                        <th scope="col">Gender</th>
                    </tr>
                </thead>
                {
                    data.map((value,index)=>{
                        return(
                            <tbody>
                    <tr>
                        <td>{index+1}</td>
                        <td>{value.Name}</td>
                        <td>{value.Class}</td>
                        <td>{value.Batch}</td>
                        <td>{value.Gender}</td>
                    </tr>

                </tbody>

                        )
                    })
                }
                
            </table>


        </div>

    )
}
export default Students;