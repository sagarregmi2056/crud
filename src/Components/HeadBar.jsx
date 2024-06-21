import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const HeadBar = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/Create">Create</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/read">Read</Nav.Link>
            <Nav.Link href="/update">update</Nav.Link>
            <Nav.Link href="/delete">delete</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default HeadBar;
