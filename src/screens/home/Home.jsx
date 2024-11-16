import React, { useEffect, useState } from 'react'
import "./styles.scss"
import { Space, Spin, Table } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteEmployee, fetchAllEmployees } from '../../redux/employeeSlice';
import Swal from 'sweetalert2';

const Home = () => {
    const dispatch = useDispatch();
    const { employees, status, error } = useSelector(state => state.employees)
    const [data, setData] = useState([])

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchAllEmployees())
        }

    }, [status, dispatch])

    const handleDelete = (id) => {
        try {
            dispatch(deleteEmployee(id));
            Swal.fire({
                title: "Deleted Successfully",
                icon: "success",
            })
        } catch (error) {
            Swal.fire({
                title: "Cannot Be Deleted !!",
                icon: "error",
            })
        }
    }




    const dataSource = [
        {
            id: '1',
            name: 'Mike',
            email: "mike@gmail.com",
            phone: "7980944324",
            age: 32,
            salary: 20000,

        }

    ];

    const columns = [
        {
            title: 'Full Name',
            dataIndex: 'fullName',
            key: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Salary',
            dataIndex: 'salary',
            key: 'salary',
        },
        {
            title: 'Actions',
            key: 'action',
            render: (_, record) => (
                <Space size="middle" >
                    <Link className='edit' to={`/update-employee/${record._id}`} onClick={() => console.log(record._id)}>Edit</Link>
                    <button onClick={() => handleDelete(record._id)} className='delete'>Delete</button>
                </Space>
            ),
        },
    ];
    return (
        <div className='home'>
            <h1>List of Employees</h1>
            <div className="table">
                {
                    status === "loading" ? <div className="spin">
                        <Spin size='large' />
                    </div> : <Table dataSource={Array.isArray(employees) ? employees : data} columns={columns} pagination={{ pageSize: 6 }} />
                }


            </div>
        </div>
    )
}

export default Home
