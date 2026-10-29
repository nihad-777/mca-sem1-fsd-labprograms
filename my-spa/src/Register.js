import React,{useState} from 'react';

function Register(){
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        alert("Registration Successful");
    };

    return(
        <div>
            <h2>Register Form</h2>

            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    required
                />
                <br/><br/>

                <label>Email: </label>
                <input
                    type="email"
                    placeholder='Email'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    required
                />
                <br/><br/>

                <label>Password: </label>
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    required
                />
                <br/><br/>

                <button type="submit">Register</button>                
                
            </form>
        </div>
    );
}

export default Register;