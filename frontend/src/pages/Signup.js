import React, { useState } from 'react'
import { Container, Col, Form, Row, Button } from 'react-bootstrap'
import "./Signup.css";
import { Link } from 'react-router-dom';
import botImg from '../assets/edit.jpeg'

function validateImg() {

}
function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  return (
    <Container>
      <Row>
        <Col md={7} className="d-flex align-items-center justify-content-center flex-direction-column">
          <Form style={{ width: "80%", maxWidth: 500 }}>
            <h1 className='text-center'>Đăng ký</h1>
            <div className="signup-profile-pic__container">
              <img src={botImg} className='signup-profile-pic'/>
              <label htmlFor='image-upload' className='image-upload-label'>
                <i className='fas fa-plus-circle add-picture-icon'></i>
              </label>
              <input type='file' id="image-upload" hidden accept='image/png, image/jpeg'/>
            </div>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name: </Form.Label>
                <Form.Control type="text" placeholder="Nhập Tên..." />
                <Form.Text className="text-muted">Chúng tôi sẽ không bao giờ chia sẻ email của bạn với bất kỳ ai khác.</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email: </Form.Label>
              <Form.Control type="email" placeholder="Nhập email..." />
              <Form.Text className="text-muted">Chúng tôi sẽ không bao giờ chia sẻ email của bạn với bất kỳ ai khác.</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password:</Form.Label>
              <Form.Control type="password" placeholder="Nhập password..." />
            </Form.Group>
            <Button variant="primary" type="submit">
              Đăng ký
            </Button>
            <div className='py-4'>
              <p className='text-center'>
                Bạn đã có tài khoản ? <Link to="/signup">Đăng nhập</Link>
              </p>
            </div>
          </Form>
        </Col>
        <Col md={5} className="signup__bg"></Col>
      </Row>
    </Container>
  )
}

export default Signup