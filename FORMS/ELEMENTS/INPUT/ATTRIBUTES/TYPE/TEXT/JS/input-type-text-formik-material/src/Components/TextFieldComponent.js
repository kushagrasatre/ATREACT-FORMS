// import TextFieldStyled from "./TextFieldStyled"
import * as React from 'react';
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';


const TextFieldComponent = ({queryTextMethod}) => {
    const formik = useFormik({
        initialValues: {
            searchField: ""
        },
        validate:(values)=>{
            queryTextMethod(values)
        }
    });

    // {values: {…}, errors: {…}, touched: {…}, status: undefined, isSubmitting: false, …}
    return (
        <TextField id="outlined-basic" name="searchField" value={formik.values.searchField} onChange={formik.handleChange} placeholder="Search Name" variant="outlined" />
    )
}
export default TextFieldComponent;