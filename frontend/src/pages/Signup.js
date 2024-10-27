import React, { useState } from 'react'
import { Container, Col, Form, Row, Button } from 'react-bootstrap'
import "./Signup.css";
import { Link } from 'react-router-dom';
import botImg from '../assets/edit.jpeg'



function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');


  //image upload
  const [image, setImage] = useState(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);


  function validateImg(e) {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  }

  async function uploadImage(e) {
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'eyqb50gv')
    try {
      setUploadingImage(true);
      let res = await fetch('https://api.cloudinary.com/v1_1/ddv4cb3u5/image/upload', {
        method: 'post',
        body: data
      });
      const urlData = await res.json();
      setUploadingImage(false);
      return urlData.url;
    } catch(error){
      setUploadingImage(false);
      console.log(error);
    }
  }

  async function handleSignup(e) {
    e.preventDefault();
    if(!image) {
      return alert("Bạn chưa thêm ảnh đại diện");
    }
    const url = await uploadImage(image);
    console.log(url);
    //signup the user
  }


  return (
    <Container>
      <Row>
        <Col md={7} className="d-flex align-items-center justify-content-center flex-direction-column">
          <Form style={{ width: "80%", maxWidth: 500 }} onSubmit={handleSignup}>
            <h1 className='text-center'>Đăng ký</h1>
            <div className="signup-profile-pic__container">
              <img src={ imagePreview || botImg} className='signup-profile-pic'/>
              <label htmlFor='image-upload' className='image-upload-label'>
                <i className='fas fa-plus-circle add-picture-icon'></i>
              </label>
              <input type='file' id="image-upload" hidden accept='image/png, image/jpeg' onChange={validateImg}/>
            </div>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name: </Form.Label>
                <Form.Control type="text" placeholder="Nhập Tên..." onChange={(e) => setName(e.target.value)} value={name}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email: </Form.Label>
              <Form.Control type="email" placeholder="Nhập email..." onChange={(e) => setEmail(e.target.value)} value={email}/>
              <Form.Text className="text-muted">Chúng tôi sẽ không bao giờ chia sẻ email của bạn với bất kỳ ai khác.</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password:</Form.Label>
              <Form.Control type="password" placeholder="Nhập password..." onChange={(e) => setPassword(e.target.value)} value={password}/>
            </Form.Group>
            <Button variant="primary" type="submit">
              {uploadingImage ? "Đang chờ..." : "Đăng ký"}
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