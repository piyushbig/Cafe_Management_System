import { Alert, Col, Container, Row, Table } from "react-bootstrap";
import './Styles/CafeList.css';

export default function AllCafe(){
    return(
        <Container fluid="md">
        <Row className="list"> 
          <div id="container"><Col><h1>All Cafes</h1></Col></div>
        </Row>

        <Table className="mt-4 list">
        <thead id="tbl_head">
            <tr >
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