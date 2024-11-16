import { configureStore } from "@reduxjs/toolkit";
import employeereducer from "../redux/employeeSlice"

export const Store = configureStore({
    reducer: {
        employees: employeereducer,
    }
})