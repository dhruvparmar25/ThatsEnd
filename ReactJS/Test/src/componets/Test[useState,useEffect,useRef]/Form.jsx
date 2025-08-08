import React, { useState } from "react";

function Form() {
    const [formData, setFormData] = useState({
        userName: "",
        email: "",
        address: "",
    });

    const [errors, setErrors] = useState({});

    const handelChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handelSubmit = (e) => {
        e.preventDefault();

        let newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        //BLANK CHAECK ALL FILED
        for (let key in formData) {
            console.log("formdata",formData,"key",key);
            
            if (!formData[key].trim()) {
                console.log("formdate key",formData[key]);
                
                newErrors[key] = `Please Filed the ${key}`;
                console.log("newErrors",newErrors);
                
            } 
        }
        //EMAIL CHECK
         if (formData.email.trim() && !emailRegex.test(formData.email)) {
                newErrors.email = "Please enter a valid email address";

            }

            //SET ERROR
        if (Object.keys(newErrors).length > 0) {
            console.log("SetError",Object.keys(newErrors));
            
            setErrors(newErrors);
        } else {
            setErrors("");
        }
    };
    return (
        <div className="formValidatin" >
            <h1 className='title'>Form-Validation</h1>
            <form onSubmit={handelSubmit}>
                <div>
                    <label>USer Name :- </label>
                    <input
                        name="userName"
                        type="text"
                        value={formData.userName}
                        onChange={handelChange}
                    />
                    <p>
                        {errors.userName}
                    </p>
                </div>
              
                <div>
                    <label>email :- </label>
                    <input name="email" value={formData.email} onChange={handelChange} />
                    <p>
                        {errors.email}
                    </p>
                </div>
              
                <div>
                    <label>Address :- </label>
                    <input
                        name="address"
                        type="text"
                        value={formData.address}
                        onChange={handelChange}
                    />
                    <p>
                        {errors.address}
                    </p>
                </div>
              
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Form;
