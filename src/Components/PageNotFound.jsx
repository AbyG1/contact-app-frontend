import React from 'react'
import imgerror from '../assets/notfound.jpg' 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function PageNotFound() {
  return (
    <div>

        <Container className='text-center'>
            <Row>
              <Col sm={12} md={12} lg={12} xl={12} className=''>
                <img src={imgerror} style={{height:'100vh'}} alt="404 error image" className='img-fluid' /> 
              </Col>


              <Col>
                  <h3 className='text-center text-success'>This page doesnot exist</h3>
              </Col>
            
           
           

            </Row>
           
        </Container>
        

    </div>
  )
}

export default PageNotFound