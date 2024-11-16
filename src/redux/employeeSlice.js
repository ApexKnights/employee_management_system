import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


const url = "https://interviewtesting.onrender.com/v1"


// Api Calls
export const fetchAllEmployees = createAsyncThunk('employee/fetchAll', async () => {
    const response = await axios.get(`${url}/users/employee/list`);
    return response.data.data
})

export const createEmployee = createAsyncThunk('create/employee', async (employeedata) => {
    const res = await axios.post(`${url}/users/employee/create`, employeedata)
    return res.data.data;
})

export const deleteEmployee = createAsyncThunk('delete/employee', async (id) => {
    await axios.delete(`${url}/users/employee-remove/${id}`);
    return id;
})

export const fetchEmployeeById = createAsyncThunk('fetchemployee/id', async (id) => {
    const response = await axios.get(`${url}/users/employee/${id}`);
    return response.data.data
})

export const updateEmployee = createAsyncThunk('employee/update', async ({ paramsId, formdata }) => {
    const response = await axios.put(`${url}/users/employee-update/${paramsId}`, formdata);
    return response.data.data
})


const initialState = {
    employees: [],
    status: "idle",
    error: null,
};


// Reducers
const EmployeeSlice = createSlice({
    name: "employees",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllEmployees.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchAllEmployees.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.employees = action.payload
            })
            .addCase(createEmployee.fulfilled, (state, action) => {
                state.employees.push(action.payload)
            })
            .addCase(deleteEmployee.fulfilled, (state, action) => {
                state.employees = state.employees.filter(emp => emp._id !== action.payload)
            })
            .addCase(fetchEmployeeById.fulfilled, (state, action) => {
                state.employees = action.payload
            })
            .addCase(updateEmployee.fulfilled, (state, action) => {
                state.employees = action.payload
            })
    }
})





export default EmployeeSlice.reducer