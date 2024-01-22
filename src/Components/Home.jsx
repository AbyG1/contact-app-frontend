import React, { useEffect, useState } from 'react'
import './Home.css'
import contactimg from '../assets/find-contacts.jpg'
import contactbook from '../assets/contact-book.png'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios, { all } from 'axios'




function Home() {

    const [allContacts,setAllContacts] = useState([])

    const base_url = 'http://localhost:8000'
    

        const fetchData = async() => {
            const result = await axios.get(`${base_url}/get-all-contacts`)
           
            setAllContacts(result.data.contacts)
        }
        console.log(allContacts)

        useEffect(() => {
            fetchData()
          },[])




  return (
    <>
        <div className="container-fluid">

            <div className="row py-3 justify-content-center">

                <div className="col-md-3 p-md-1 ">

                    <img src={contactimg} alt="A contact list image" className='img-fluid' />
                    <h3 className='p-2'>Connecting Your World: Streamlining Contacts, Enhancing Relationships.</h3>

                </div>
                <div className="col-md-8 border-start  border-dark">

                    <h2 className='p-3'><span><img src={contactbook} alt="contact book logo " style={{width:'40px'}} /></span>Contacts</h2>
                       <div className=''>
                            <button className='btn buttons '>Add <i className="fa-solid fa-user-plus"></i> </button>
                            
                       </div>
                       <MDBTable hover className='my-3 '>
                                <MDBTableHead>
                                    <tr className='table-head '>
                                    <th scope='col'>Id</th>
                                    <th scope='col'>Username</th>
                                    <th scope='col'>Name</th>
                                    <th scope='col'>Email</th>
                                    <th scope='col'>Phone</th>
                                    
                                    
                                    </tr>
                                </MDBTableHead>
                                <MDBTableBody>
                                    {
                                      allContacts.map((item)=>(
                                        <tr>
                                        <th scope='row'>{item.id}</th>
                                                <td>{item.username}</td>
                                                <td>{item.name.firstname+' '+item.name.lastname}</td>
                                                <td>{item.email}</td>
                                                <td>{item.phone}</td>
                                        </tr>




                                      )
                                        

                                      )
                                        
                                        
                                    }
                                    
                                </MDBTableBody>
                        </MDBTable>


                </div>

            </div>



        </div>
    
    
    </>
  )
}

export default Home