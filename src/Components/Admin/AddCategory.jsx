
import { Button, Col, Container, Form, Row } from "react-bootstrap";


const Category= ()=> {
  return (
    <div className="form">
    <Form classname="formtable">
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Container fluid>
      <Row className="row">
        <Col><Form.Label>Add Category</Form.Label><br/><br/></Col>
      </Row>
    </Container>
      
        <Form.Label>Category Title</Form.Label><br/>
        <Form.Control type="text" placeholder="enter title" />
      </Form.Group>
      <br/>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Category Description</Form.Label><br/>
        <Form.Control as="textarea" rows={3}  placeholder="enter description"/>
      </Form.Group>
      <br/>
      <Button as="input" type="submit" value="Add Category" className="button" />
    </Form>
    </div>
  );
}
export default Category;
