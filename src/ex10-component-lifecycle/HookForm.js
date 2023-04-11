import React from 'react';
import { useForm } from 'react-hook-form';

const HookForm = () => {

    const {register, handleSubmit, formState: {errors}} = useForm();

    const saveData = (data) => {
        console.log("DATA",  data);
    }

    return (
        <div className='container mt-3'>
            <form onSubmit={handleSubmit(saveData)}>
                    <div className='mb-3'>
                        <input type="text" {...register("firstName", {required: true, maxLength: 40})} className='form-control' id='firstName' name='firstName' placeholder='Enter your first name..' />
                        {errors.firstName && errors.firstName.type === "required" && (<span className='text-danger'>First name is required</span>) }
                        {errors.firstName && errors.firstName.type === "maxLength" && (<span className='text-danger'>Max length is exceeded</span>) }
                        
                    </div>

                    <div className='mb-3'>
                        <input type="text" {...register("lastName", {required: true, maxLength: 40})}  className='form-control' id='lastName' name='lastName' placeholder='Enter your last name..' />
                        {errors.lastName && errors.lastName.type === "required" && (<span className='text-danger'>Last name is required</span>) }
                        {errors.lastName && errors.lastName.type === "maxLength" && (<span className='text-danger'>Max length is exceeded</span>) }
                    
                    </div>

                    <div className='mb-3'>
                        <button type='submit' className='btn btn-info' >Click Me</button>
                        </div>
                </form>
        </div>
    );
};

export default HookForm;