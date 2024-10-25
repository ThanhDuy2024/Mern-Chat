import React from 'react'
import { Container, Col, Form, Row, Button } from 'react-bootstrap'
import "./login.css";
import { Link } from 'react-router-dom';

function Login() {
  return (
    <Container>
      <Row>
        <Col md={5} className="login__bg"></Col>

        <Col md={7} className="d-flex align-items-center justify-content-center flex-direction-column">
          <Form style={{ width: "80%", maxWidth: 500 }}>
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
              Đăng nhập
            </Button>
            <div className='py-4'>
              <p className='text-center'>
                Bạn chưa có tài khoản ? <Link to="/signup">Đăng ký</Link>
              </p>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Login