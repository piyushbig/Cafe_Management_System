import { Alert, Col, Container, Row, Table } from "react-bootstrap";
import './CafeList.css'

export function AllCafe(){
    return(
        <Container fluid="md">
        <Row> 
          <div><Col><h1>All Cafes</h1></Col></div>
        </Row>

        <Table className="mt-4">
        <thead >
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email Id</th>
                <th>Phone No </th>
                <th>Address </th>
                <th>Action </th>
            </tr>
        </thead>
        <tbody>

        </tbody>
        </Table>
      </Container>
    );
}