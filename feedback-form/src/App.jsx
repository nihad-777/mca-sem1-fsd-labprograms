import { useState } from 'react';
export default function App(){
  const [data,setData]=useState({name:"",email:"",feedback:""});
  const [errors,setErrors]=useState({});
  const[submitted,setSubmitted]=useState(false);
  const change=e => setData({...data,[e.target.name]:e.target.value});
  const submit=e =>{
    e.preventDefault();
    const err={
      name:!data.name.trim() && "Name is required",
      email:!data.email.includes("@") && "Valid email required",
      feedback:!data.feedback.trim() && "Feedback cannot be empty"
    };
    const errors=Object.fromEntries(Object.entries(err).filter(([k,v])=>v));
    setErrors(errors);
    setSubmitted(!Object.keys(errors).length);
  };
  return(
    <div>
      <h1>Feedback Form</h1>
      <form onSubmit={submit}>
        {['name','email','feedback'].map(field=>(
          <div key={field}>
            <label>{field}</label>
            {field === 'feedback' ? (
              <textarea
                name={field}
                value={data[field]}
                onChange={change}
              />
            ):(
              <input
                name={field}
                value={data[field]}
                onChange={change}
              />
            )}
            <small>{errors[field]}</small>
          </div>
        ))}
        <button type='submit'>Submit</button>
      </form>
      {submitted && (
        <div>
          <h2>Submitted Data</h2>
          {Object.entries(data).map(([key,value]) =>(
            <p key={key}>{key}:{value}</p>
          ))}
        </div>
      )}
    </div>

  );
}