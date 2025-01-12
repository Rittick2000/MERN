import { useState } from 'react'
import { useForm } from 'react-hook-form';
import './App.css'

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors,isSubmitting },
  } = useForm();

  async function onSubmit(data){
    console.log("submitting",data);
    await new Promise((resolve)=>setTimeout(resolve,5000));
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>First Name:</label>
          <input type="text" 
          {...register("firstName")}/>
        </div>

        <div>
          <label>Middle Name:</label>
          <input type="text" 
          {...register("middleName")}
          />
        </div>

        <div>
          <label>Last Name:</label>
          <input type="text"
          {...register("lastName")} 
          />
        </div>

        <input type="submit" value={isSubmitting? "submitting" : "submit"} />
      </form>
    </>
  )
}

export default App
