import React, { useState } from 'react'

export default function Form() {
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [dob, setdob] = useState("")
  const [place, setPlace] = useState("")
  const [phnno, setPhnno] = useState("")
  const [email, setEmail] = useState("")
  const [gender, setGender] = useState("")
  const [Checkbox, setCheckbox] = useState(false)
  //const[submit,setSubmit]=useState(false)

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted")
    console.log(name,surname,dob,place,phnno,email,gender,Checkbox)
    
  }
  function display(){
    return <h1>Hiii My Name is {name}</h1>
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <table >
          <tr>
            <td>
              <label htmlFor='name'>Enter Your Name :</label>
            </td>
            <td>
              <input type="text" onChange={(e) => setName(e.target.value)}></input>
            </td>
          </tr><br />

          <tr>
            <td>
              <label htmlFor='Surname'>Enter Your SurName :</label>
            </td>
            <td>
              <input type="text" onChange={(e) => setSurname(e.target.value)} ></input>
            </td>
          </tr><br />

          <tr>
            <td>
              <label htmlFor='dob'>Enter Your Date of Birth :</label>
            </td>
            <td>
              <input type="date" onChange={(e) => setdob(e.target.value)}></input>
            </td>
          </tr><br />

          <tr>
            <td>
              <label htmlFor='place'>Enter Your place :</label>
            </td>
            <td>
              <select onChange={(e) => setPlace(e.target.value)}>
                <option>---Select---</option>
                <option>India</option>
                <option>US</option>
                <option>UK</option>
                <option>Australia</option>
              </select>
            </td>
          </tr><br />

          <tr>
            <td>
              <label htmlFor='phnNo' >Enter Your Phone Number</label>
            </td>
            <td>
              <input type='telnum' onChange={(e) => setPhnno(e.target.value)}></input>
            </td>
          </tr><br />


          <tr>
            <td>
              <label htmlFor='Email'>Enter Your Email</label>
            </td>
            <td>
              <input type='Email' onChange={(e) => setEmail(e.target.value)}></input>
            </td>
          </tr><br />

          {/* Problem In onChange setgender */}
          <tr>
            <td>
              <label htmlFor='gender'>Enter Your Gender</label>
            </td>
            <td>
              <input type='radio' id='Male' name="gender" onChange={(e) => setGender(e.target.value)}></input>
              <label>Male</label>
              <input type='radio' id='Female' name='gender' onChange={(e) => setGender(e.target.value)}></input>
              <label>Female</label>
            </td>
          </tr><br />


          {/* Problem In onChange setCheckbox */}
          <tr>
            <td> 
              <input type='checkbox'></input>
              <label htmlFor='TnC' onChange={(e) => setCheckbox(e.target.checked)}>Accept Terms and Conditions</label>
            </td>
          </tr>
        </table>

        <button type='submit'>Submit</button>
        <button>Clear</button>

      </form>



      
    </div >
  )
}
