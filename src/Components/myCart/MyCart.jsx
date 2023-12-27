import { Alert, Col, Container, Row, Table } from "react-bootstrap";
import './myCart.css'

export function MyCart(){
    return(
        <Container fluid="md">
        <Row> 
          <div id="container"><Col><h1>My Cart</h1></Col></div>
        </Row>

        <Table className="mt-4">
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
      </Container>
    );
}