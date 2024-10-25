import React from 'react';
import { Row, Col, Button, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Home.css';
function Home() {
  return (
    <Container>
      <Row>
        <Col md={6} className='d-flex flex-column align-items-center justify-content-center'>
          <div>
            <h1>Chia sẻ nhiều điều thú vị với bạn bè của bạn</h1>
            <p>Ứng dụng trò chuyện cho phép bạn kết nối thế giới</p>
            <LinkContainer to="/chat">
              <Button variant="success">
                Bắt đầu <i className="fas fa-comments home-message-icon"></i>
              </Button>
            </LinkContainer>
          </div>
        </Col>
        <Col md={6} className="home__bg">
        </Col>
      </Row>
    </Container>
  )
}

export default Home