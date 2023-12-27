import { Alert, Col, Container, Row, Table } from "react-bootstrap";
import './myOrder.css'

export function MyOrder(){
    return(
        <Container fluid="md">
        <Row> 
          <div id="container"><Col><h1>My Orders</h1></Col></div>
        </Row>

        <Table className="mt-4">
        <thead id="tbl_head">
            <tr >
                <th>Order Id</th>
                <th>Food</th>
                <th>Food Name</th>
                <th>Category</th>
                <th>Cafe </th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Order Time</th>
                <th>Order Status</th>
                <th>Delivery Person</th>
                <th>Delivery Contact</th>
                <th>Delivery Time</th>

            </tr>
        </thead>
        <tbody>

        </tbody>
        </Table>
      </Container>
    );
}