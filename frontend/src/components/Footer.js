import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <div className='contact'>
        <h1>Contact Us</h1>
        <p>Ishaan Garg</p>
        <p>Kritika</p>
        <p>Pranshu Goyal</p>
      </div>
      <Container>
        <Row>
          <Col className='text-center py-3'>Copyright &copy; ShopEasy</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
