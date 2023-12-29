import { Alert, Button, Col, Container, Row, Table } from "react-bootstrap";
import './myCart.css'
import { MDBContainer, MDBFooter } from "mdb-react-ui-kit";

export function MyCart(){
    return(
        <Container fluid="md">
        <Row> 
          <div id="container"><Col><h1>My Cart</h1></Col></div>
        </Row>

        <Table className="mt-4 sm-8 lg md">
        <thead id="tbl_head">
            <tr >
                <th>Food</th>
                <th>Food Name</th>
                <th>Category</th>
                <th>Cafe </th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>

        </tbody>
       </Table>

       <MDBFooter className='text-center text-white' >
      <MDBContainer className='p-4'></MDBContainer>

      <div className='text-center p-3' id="footer">
      <Button variant="danger" id="btn">CheckOut</Button>{' '}
      </div>
    </MDBFooter>
      </Container>
    );
}