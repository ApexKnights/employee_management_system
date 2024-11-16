import React, { useEffect, useState } from 'react'
import "./styles.scss"
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployeeById, updateEmployee } from '../../redux/employeeSlice';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateEmployee = () => {
    const paramsId = useParams().id;
    const dispatch = useDispatch();
    const { employees, status, error } = useSelector(state => state.employees)
    const [formdata, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        image: '',
        age: '',
        salary: '',
    })

    useEffect(() => {
        if (paramsId) {
            dispatch(fetchEmployeeById(paramsId))
        }

    }, [paramsId, status])
    console.log(employees)
    useEffect(() => {
        if (employees) {
            setFormData(employees)
        }
    }, [employees])

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(updateEmployee({ paramsId, formdata }))
        await Swal.fire({
            title: "Successfully updated",
            icon: "success",
            timer: 1500,
        })
        window.location.reload()
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formdata, [name]: value });
    }
    return (
        <div className="update">
            <div className="profile">
                <img src={employees.image} alt="" />
                <h3>{employees.fullName}</h3>
            </div>
            <div className='update-employee'>
                <h1>Update An Employee</h1>
                <form className="form" onSubmit={handleSubmit}>
                    <div className='img-sec'>
                        <label>Paste Image Url :-</label>
                        <input className='img-url' type="text" placeholder='Paste Image Url' name='image' value={formdata.image} onChange={handleChange} />
                    </div>
                    <input
                        className='inputs'
                        type="text"
                        placeholder='Enter Employee Name'
                        name='fullName'
                        value={formdata.fullName}
                        onChange={handleChange} />

                    <input
                        className='inputs'
                        type="number"
                        placeholder='Enter Employee Phone Number' name='phone'
                        value={formdata.phone}
                        onChange={handleChange}
                    />
                    <input
                        className='inputs'
                        type="email"
                        placeholder='Enter Employee Email'
                        name='email'
                        value={formdata.email}
                        onChange={handleChange}
                    />
                    <input
                        className='inputs'
                        type="number"
                        placeholder='Enter Employee Age'
                        name='age' value={formdata.age}
                        onChange={handleChange}
                    />
                    <input className='inputs' type="text" placeholder='Enter Employee Salary' name='salary' value={formdata.salary} onChange={handleChange} />

                    <button>Update Employee</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateEmployee
