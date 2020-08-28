import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Home() {
    return (
        <>
    <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
  <Navbar.Brand href="#home">Admin</Navbar.Brand>
  </Container>
</Navbar>


<h2>Users</h2>
<Table responsive striped bordered hover variant="light">
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Email</th>
      <th>City</th>
      <th>Speciality</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2</td>
      <td>Tincidut</td>
      <td>Tincidut@email.com</td>
      <td>Oslo</td>
      <td>Cows</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Ullamcorper</td>
      <td>Ullamcorper@email.com</td>
      <td>Bergen</td>
      <td>Mud</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Pretium</td>
      <td>Pretium@email.com</td>
      <td>Oslo</td>
      <td>Sand castle</td>
    </tr>
    <tr>
      <td>10</td>
      <td>Libero</td>
      <td>Libero@email.com</td>
      <td>Bergen</td>
      <td>Puppets</td>
    </tr>
    <tr>
      <td>14</td>
      <td>Tellus</td>
      <td>Tellus@email.com</td>
      <td>Oslo</td>
      <td>Donkeys</td>
    </tr>
  </tbody>
</Table>


<h2>Features</h2>

<Row>
    <Col xs={7} md={4}>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180?text=Placeholder image" />
  <Card.Body>
    <Card.Title>Card 1</Card.Title>
    <Card.Text>
    Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a rutrum justo eros pretium libero.
    </Card.Text>
  </Card.Body>
</Card>
    </Col>
    <Col xs={7} md={4}>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180?text=Placeholder image" />
  <Card.Body>
    <Card.Title>Card 2</Card.Title>
    <Card.Text>
    Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a rutrum justo eros pretium libero.
    </Card.Text>
  </Card.Body>
</Card>
    </Col>
    <Col xs={7} md={4}>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180?text=Placeholder image" />
  <Card.Body>
    <Card.Title>Card 3</Card.Title>
    <Card.Text>
    Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a rutrum justo eros pretium libero.
    </Card.Text>
  </Card.Body>
</Card>
    </Col>
  </Row>

<Container>
<Row>
    <Col>
    
    </Col>
    <Col>
    
    </Col>
    <Col>
    
    </Col>
  </Row>
</Container>



<Accordion defaultActiveKey="0" className="d-md-none">
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Lorem
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna. </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        Ipsem
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>Hello! Im ipsem</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        Dolor
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>Hello! I'm Dolor</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        Porta
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>Hello! I'm Porta</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>

        <Form>
        <h2>Submit a comment</h2>
            <Form.Group>
                <Form.Control type="text" placeholder="Name" />
            </Form.Group>

            <Form.Group>
                <Form.Control type="email" placeholder="Email" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>

</>
    )
}

export default Home
