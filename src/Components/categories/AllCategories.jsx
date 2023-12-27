import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Table } from 'react-bootstrap';
import "./AllCategories.css";
 
    
function AllCategories() {
  const categories = [
    { id: 1, category: "Chicken", description: "All the food will be made of Chicken", action: <div><button className='update'>Update</button> <button className='delete'>Delete</button></div> },
    { id: 2, category: "Pizza", description: "this will contain Pizza",  action: <div><button className='update'>Update</button> <button className='delete'>Delete</button></div> },
    { id: 3, category: "Burger", description: "this will contain Burgers", action: <div><button className='update'>Update</button> <button className='delete'>Delete</button></div> },
    { id: 4, category: "Veg", description: "this will contain all veg foods",  action: <div><button className='update'>Update</button> <button className='delete'>Delete</button></div> },
  ];

  return (
    <Container className='container mt-5 bg-light'>
      <Row className="justify-content-center">
        <Col xs={12} md={12}>
          <div className="all-categories">
            <h1 className="text-center mb-5">All Categories</h1>
            <Table bordered hover className="table category-table">
              <thead >
                <tr>
                  <th className="text-center bg-danger text-light">Category ID</th>
                  <th className="text-center bg-danger text-light">Category</th>                 
                  <th className="text-center bg-danger text-light">Description</th>
                  <th className="text-center bg-danger text-light">Action</th>
                </tr>
              </thead>
              <tbody className='tablerow'>
                {categories.map((category) => (
                  <tr key={category.id}>
                    <td className="text-center">{category.id}</td>
                    <td className="text-center">{category.category}</td>                 
                    <td className="text-center">{category.description}</td>
                    <td className="text-center">{category.action}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AllCategories;
