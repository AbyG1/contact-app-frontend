import React, { useEffect, useState } from 'react'
import cbook from '../assets/contact-book.png'
import { MDBCard, MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function View() {

    
  const base_url = 'http://localhost:8000'
  const [contactData,setContactData] = useState({})



  const {id} = useParams()
  console.log(id)
  //get a particular employee details
  const getContact = async(id) => {
    const result = await axios.get(`${base_url}/get-a-contact/${id}`)
    console.log(result.data.contact)
    setContactData(result.data.contact)
  }
  
  useEffect(()=>{
    getContact(id) 
  },[id])




  return (
    <>
        <div className="container">
            <div className="row">

             

              <div className="col-md-3 my-4">

                  <img src={cbook} className="img-fluid" alt="" />

              </div>
              <div className="col-md-4 my-5">
              <h2 className='text-center'>Contact Details</h2>
              <MDBCard>
                    <MDBListGroup >
                      <MDBListGroupItem>Username: {contactData.username}</MDBListGroupItem>
                      <MDBListGroupItem>FirstName: {contactData.firstname}</MDBListGroupItem>
                      <MDBListGroupItem>LastName: {contactData.lastname}</MDBListGroupItem>
                      <MDBListGroupItem>Email: {contactData.email}</MDBListGroupItem>
                      <MDBListGroupItem>Phone: {contactData.phone}</MDBListGroupItem>
                    
                      <MDBListGroupItem>City: {contactData.city}</MDBListGroupItem>
                      <MDBListGroupItem>State: {contactData.state}</MDBListGroupItem>
                    </MDBListGroup>
            </MDBCard>


              </div>
              <div className="col-md-4">
                  <div className=' mt-2 text-center'>
                    <button className='btn buttons me-4'>Delete Contact</button>
                    <button className='btn buttons'>Edit Contact</button>
                  </div>


              </div>



            </div>



        </div>
    
    
    
    </>
  )
}

export default View