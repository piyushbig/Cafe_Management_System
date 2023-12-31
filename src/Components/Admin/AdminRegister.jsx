import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const AdminRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(newEmail)) {
      setEmailError("Enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    // Password validation regex
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(newPassword)) {
      setPasswordError(
        "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character."
      );
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
  };

  return (
    <div className="form">
      <Form className="formtable" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Container fluid>
            <Row className="row">
              <Col>
                <Form.Label>Admin Register</Form.Label>
                <br />
                <br />
              </Col>
            </Row>
          </Container>

          <Form.Label>Email Id</Form.Label>
          <br />
          <Form.Control
            type="email"
            placeholder="enter your email"
            value={email}
            onChange={handleEmailChange}
          />
          {emailError && <p style={{ color: "red" }}>{emailError}</p>}
          <br />
          <Form.Label>Password</Form.Label>
          <br />
          <Form.Control
            type="password"
            placeholder="enter your password"
            value={password}
            onChange={handlePasswordChange}
          />
          {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
        </Form.Group>
        <br />
        <Button as="input" type="submit" value="Register" className="button" />
      </Form>
    </div>
  );
};

export default AdminRegister;
