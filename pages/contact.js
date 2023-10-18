import React, { useState } from "react";

const Contact = () => {
  const [email, getEmail] = useState("")
  const [name, getName] = useState("")
  const [phone, getPhone] = useState("")
  const [desc, getDescription] = useState("")
  const [result, getResult] = useState("")

  const submitting = async(e) =>{

    let data1 = {name,email,desc,phone}

    e.preventDefault()
    const response = await fetch('http://localhost:3000/api/contact',{method: 'POST',headers:{'Content-Type': 'application/json'},body:JSON.stringify(data1)})
    const data = await response.json()
    getResult('your request has been sent successfully')
    console.log(data)

    

  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="d-flex flex-row justify-content-center">
            <div className="col-lg-6">
              <h3>Contact Us!</h3>
              <hr />
              <br />
              <form onSubmit={submitting}>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={email}
                    onChange={(e)=>{getEmail(e.target.value)}}
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    value={name}
                    onChange={(e)=>{getName(e.target.value)}}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone Number</label>
                  <input type="text" className="form-control" value={phone}
                    onChange={(e)=>{getPhone(e.target.value)}} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea name="" id="" cols="10" rows="5" className="form-control" value={desc}
                    onChange={(e)=>{getDescription(e.target.value)}}></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
                <p>{result}</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
