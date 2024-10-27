import React from 'react'
import { Form, FormControl, FormGroup, Col, Row, Button } from 'react-bootstrap';
import './MassageForm.css';


function MessageForm() {
  function handleSubmit(e) {
    e.preventDefault();

  }

  return (
    <>
      <div className='message-output'> </div>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={11}>

            <Form.Group>
              <Form.Control type='text' placeholder='Tin nhắn của bạn'>

              </Form.Control>
            </Form.Group>
         </Col>

          <Col md={1} style={{position: "relative"}}>
            <Button variant='primary' type='submit' style={{ width: '100%', backgroundColor: 'orange', position: "absolute"}}>
              <i className="fas fa-paper-plane"></i>
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  )
}

export default MessageForm;
