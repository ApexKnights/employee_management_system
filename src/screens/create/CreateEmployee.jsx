import React, { useState } from 'react'
import "./styles.scss"
import { useDispatch } from 'react-redux'
import { createEmployee } from '../../redux/employeeSlice';
import Swal from 'sweetalert2';

const CreateEmployee = () => {
    const dispatch = useDispatch();
    const [formdata, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        image: '',
        age: '',
        salary: '',
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formdata, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            dispatch(createEmployee(formdata));
            setFormData({
                fullName: '',
                email: '',
                phone: '',
                image: '',
                age: '',
                salary: '',
            })
            Swal.fire({ title: "Form has been submitted", icon: "success" })
        } catch (error) {
            Swal.fire({
                Title: "Something Went Wrong, Try Again",
                icon: "error",
            })
        }
    }
    return (
        <div className='create-employee'>
            <h1>Create An Employee</h1>
            <form className="form" onSubmit={handleSubmit}>
                <div className='img-sec'>
                    <label>Paste Image Url :-</label>
                    <input className='img-url' type="text" placeholder='Paste Image Url' name='image' value={formdata.image} onChange={handleChange} />
                </div>
                <input className='inputs' type="text" placeholder='Enter Employee Name' name='fullName' value={formdata.fullName} onChange={handleChange} />
                <input className='inputs' type="number" placeholder='Enter Employee Phone Number' name='phone' value={formdata.phone} onChange={handleChange} />
                <input className='inputs' type="email" placeholder='Enter Employee Email' name='email' value={formdata.email} onChange={handleChange} />
                <input className='inputs' type="number" placeholder='Enter Employee Age' name='age' value={formdata.age} onChange={handleChange} />
                <input className='inputs' type="text" placeholder='Enter Employee Salary' name='salary' value={formdata.salary} onChange={handleChange} />
                <button>Create Employee</button>
            </form>
        </div>
    )
}

export default CreateEmployee
