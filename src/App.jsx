import { useState } from 'react'


function App() {

  const [formData,setFormData] = useState({
    name:"",
    email:"",
    message:""
  })

  const [submittedData,setSubmittedData] = useState(null);

  const onSubmit = (e)=>{
    e.preventDefault();
    const {name,email,message} = formData;
    if(!name || !email || !message){
      alert("Please fill all the details");
      return;
    }

    setSubmittedData({
      name,
      email,
      message
    });

    setFormData({
      name:"",
      email:"",
      message:""
    })


  }



  return <div>

    <h1>Fill the form</h1>

    <form onSubmit={onSubmit}>

    <label htmlFor="name">Name:</label>

    <input 
    type='text'
    name='name'
    value={formData.name}
    onChange={(e)=> setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })}
    />

    <br/>
      
    <label htmlFor="email">Email:</label>


    <input 
    type='text'
    name='email'
    value={formData.email}
    onChange={(e)=> setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })}
    />

    
    <br/>
    <label htmlFor="message">Message:</label>

    <input 
    type='text'
    name='message'
    value={formData.message}
    onChange={(e)=> setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })}
    />

    <br />
    <br />

    <button type='submit'>Submit</button>

    </form>

    <h1>User Details</h1>
    {submittedData &&
    <ul>
      <li>name:{submittedData.name}</li>
      <li>email:{submittedData.email}</li>
      <li>message:{submittedData.message}</li>
      
    </ul>
    }
    

  </div>
  
}

export default App
