import React from 'react'
import { useState } from 'react'

const initFormData ={
    name:" ",
    email: "",
    country:"India",
    status:false
}
const FormInput = () => {
    const [formData, setFormData] = useState(initFormData);

    const handleChange = (e) => {
        const {value, name, type, checked}= e.target;

        const valueToupdate = type ==="Checkbox" ? checked:value;

        setFormData({
            ...formData,
            [name]:valueToupdate
        })
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formData)
    }
  return (
    <div>
        <h1>Form</h1>
        <form action="">
            <div>
                <input onChange={handleChange} type="text" placeholder="name" name="name" value={formData.name}  />
            </div>
            <div>
                <input onChange={handleChange} name="email" value={formData.email}  type="text" placeholder='email' />
            </div>
            <div>
                <select onChange={handleChange}  name="country" value={formData.country} id="">
                    <option key="India" >India</option>
                    <option key="Australia" >Australia</option>
                    <option key="USA" >USA</option>
                </select>
            </div>
            <div>
                <input name="status" onChange={handleChange} checked={formData.status} type="checkbox" />
                <label htmlFor="">Currently Working</label>
            </div>
        </form>
        <div>
            <ul>
                <li>Name: {formData.name}</li>
                <li>Email: {formData.email}</li>
                <li>Country: {formData.country}</li>
                <li>Currently Working : {formData.status? "Yes":"No"}</li>
            </ul>
        </div>

        <div>
            <input onClick={handleSubmit} type="submit" />
        </div>
        <div>

        </div>
    </div>
  )
}

export default FormInput