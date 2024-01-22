
import axios from 'axios';
import img from '../assets/add-contact.jpg'
import React, { useEffect, useState } from 'react';
import {  MDBInputGroup,MDBInput } from 'mdb-react-ui-kit';
import { useNavigate, useParams } from 'react-router-dom';


function Edit() {


    const{id} = useParams()
    const base_url = 'http://localhost:8000'
    
    const [username,setUname] = useState('')
    const [firstname,setFname] = useState('')
    const [lastname,setLname] = useState('')
  
    const [email,setEmail] = useState('')
    const [phone,setPno] = useState('')
    const [city,setCity] = useState('')
    const [state,setState] = useState('')

    //get a particular employee details
    const getContact = async(id) => {
        const result = await axios.get(`${base_url}/get-a-contact/${id}`)//contact details
        console.log(result.data.contact)
    
      
       setUname(result.data.contact.username)
       setFname(result.data.contact.firstname)
       setLname(result.data.contact.lastname)
       setEmail(result.data.contact.email)
       setPno(result.data.contact.phone)
       setCity(result.data.contact.city)
       setState(result.data.contact.state)
    }
  
      useEffect(() => {
        getContact(id)
      },[])

    const location = useNavigate('/')

    //Update function

    //api call to update an employee details
  
  const updateContact = async(e) => {
    e.preventDefault()
    const body = {
        username,
        firstname,
        lastname,
        email,
        phone,
        city,
        state
    }

      const result = await axios.post( `${base_url}/update-a-contact/${id}`,body)
      console.log(result)
      alert(result.data.message)
      location('/')//back to admin
  }


  

  return (
    <>
    <div className="container-fluid p-5">
        <div className="row justify-content-center">
            <div className="col-md-3">
                <img src={img}  className="img-fluid" alt="img represting add contact" />
            </div>
            <div className="col-md-8">
                    <h2>Edit Contact</h2>
                    <div>
                        <form action="">

                            <MDBInput  readOnly placeholder='ID' className='mb-2' id='formControlDefault1' type='number' />

                            <MDBInput onChange={(e) => setUname(e.target.value)} value={username} className='mb-2' label='Username' id='formControlDefault2' type='text' />
                            
                            <MDBInputGroup className='mb-2'>
                                <MDBInput onChange={(e) => setFname(e.target.value)} value={firstname} className='form-control' label='First Name' type='text' />
                                
                                <MDBInput onChange={(e) => setLname(e.target.value)} value={lastname} className='form-control' label='Last Name' type='text' />
                            </MDBInputGroup>
                           
                           
                            <MDBInput label='Email' onChange={(e) => setEmail(e.target.value)} value={email} className='mb-2' id='formControlDefault4' type='email' />

                            <MDBInput label='Phone' onChange={(e) => setPno((e.target.value))} value={phone} className='mb-2' id='formControlDefault5' type='text' />

                            <div className='mb-2'>
                                <label htmlFor="">Address 
                                        <MDBInput label='City' onChange={(e) => setCity(e.target.value)} value={city} className='mb-1' id='formControlDefault6' type='text' />
                                        <MDBInput label='State' onChange={(e) => setState(e.target.value)} value={state} className='mb-1' id='formControlDefault7' type='text' />
                                </label>
                            </div>

                            <div className='text-center'>
                                <button onClick={(e) => updateContact(e)} className='btn buttons '>Update <i className="fa-solid fa-pen"></i> </button>
                            </div>


                        </form>


                    </div>
            </div>

        </div>





    </div>




</>
  )
}

export default Edit