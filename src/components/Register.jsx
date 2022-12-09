import { useState } from "react";
import Navbar from "./Navbar";
import './style.css';
const Register = ()=>{
    const [name,setName]=useState("");
    const [age,setAge]=useState("");
    const [mobileNo,setMobileNo]=useState("");
    const [email,setEmail]=useState("");
    const [gender,setGender]=useState();
    const [batch,setBatch]=useState("");

    const formSubmitHandler =(e)=>{
        e.preventDefault();
        console.log(name,age,mobileNo,email,batch,gender)
    }

    return(
        <div>
        <Navbar/>
        <div className="form_wrapper">
  <div className="form_container">
    <div className="title_container">
      <h2>Responsive Registration Form</h2>
    </div>
    <div className="row clearfix">
      <div className="">
        <form>
          <div className="input_field"> <span><i aria-hidden="true" className="fa fa-envelope"></i></span>
            <input  name="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name" required />
          </div>
          <div className="input_field"> <span><i aria-hidden="true" className="fa fa-envelope"></i></span>
            <input type="number" name="age" value={age} onChange={(e)=>setAge(e.target.value)} placeholder="Age" required />
          </div>
          <div className="input_field"> <span><i aria-hidden="true" className="fa fa-envelope"></i></span>
            <input  name="mobile" value={mobileNo} onChange={(e)=>setMobileNo(e.target.value)} placeholder="Mobile" required />
          </div>
          <div className="input_field"> <span><i aria-hidden="true" className="fa fa-envelope"></i></span>
            <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" required />
          </div>
          
            	
              <div className="input_field select_option">
                <select defaultValue="Select a Gender" value={gender} onChange={(e)=>setGender(e.target.value)}>
                  <option>Male</option>
                  <option>Female</option>
                </select>
                <div className="select_arrow"></div>
              </div>
              <div className="input_field select_option">
                <select defaultValue="Select a Batch" value={batch} onChange={(e)=>setBatch(e.target.value)}>
                  <option>6-7AM</option>
                  <option>7-8AM</option>
                  <option>8-9AM</option>
                  <option>5-6PM</option>
                </select>
                <div className="select_arrow"></div>
              </div>
          <button className="button" type="submit" onClick={formSubmitHandler} value="Register" >Pay ₹500 and Register </button>
        </form>
      </div>
    </div>
  </div>
</div>
       </div>
    )
}

export default Register;