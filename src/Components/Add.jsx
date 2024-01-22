import axios from 'axios';
import img from '../assets/add-contact.jpg'
import React, { useState } from 'react';
import {  MDBInputGroup,MDBInput } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';


function Add() {

        const [id,setId] = useState()
        const [username,setUname] = useState('')
        const [firstname,setFname] = useState('')
        const [lastname,setLname] = useState('')
      
        const [email,setEmail] = useState('')
        const [phone,setPno] = useState('')
        const [city,setCity] = useState('')
        const [state,setState] = useState('')

        const location = useNavigate()

        const base_url='http://localhost:8000/add-contact'
        const addContact = async(e) => {
            e.preventDefault()
            //add contact - api call
           
            
             //api call to add employee details to the mongodb
                const body = {id,username,firstname,lastname,email,city,state,phone}
                console.log('Request Body:', body);
                const result = await axios.post(base_url,body).then((result) => {
                alert(result.data.message)
                console.log(result)
                location("/")
                }).catch((error) => {
                alert("User already exist")
                })




        }



  return (
    <>
        <div className="container-fluid p-5">
            <div className="row justify-content-center">
                <div className="col-md-3">
                    <img src={img}  className="img-fluid" alt="img represting add contact" />
                </div>
                <div className="col-md-8">
                        <h2>Add New Contact</h2>
                        <div>
                            <form action="">

                                <MDBInput onChange={(e) => setId(e.target.value)} label='ID' className='mb-2' id='formControlDefault1' type='number' />

                                <MDBInput onChange={(e) => setUname(e.target.value)} className='mb-2' label='Username' id='formControlDefault2' type='text' />
                                
                                <MDBInputGroup className='mb-2'>
                                    <MDBInput onChange={(e) => setFname(e.target.value)} className='form-control' label='First Name' type='text' />
                                    
                                    <MDBInput onChange={(e) => setLname(e.target.value)} className='form-control' label='Last Name' type='text' />
                                </MDBInputGroup>
                               
                               
                                <MDBInput label='Email' onChange={(e) => setEmail(e.target.value)} className='mb-2' id='formControlDefault4' type='email' />

                                <MDBInput label='Phone' onChange={(e) => setPno((e.target.value))} className='mb-2' id='formControlDefault5' type='text' />

                                <div className='mb-2'>
                                    <label htmlFor="">Address 
                                            <MDBInput label='City' onChange={(e) => setCity(e.target.value)} className='mb-1' id='formControlDefault6' type='text' />
                                            <MDBInput label='State'onChange={(e) => setState(e.target.value)} className='mb-1' id='formControlDefault7' type='text' />
                                    </label>
                                </div>

                                <div className='text-center'>
                                    <button onClick={(e) => addContact(e)} className='btn buttons '>Add <i className="fa-solid fa-user-plus"></i> </button>
                                </div>


                            </form>


                        </div>
                </div>

            </div>





        </div>
    
    
    
    
    </>
  )
}

export default Add