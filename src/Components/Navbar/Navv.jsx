import Styles from "./Navbar.module.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom"

export const Navv = () => {
  return (
    <div className={Styles.navbar}>
      <Navbar collapseOnSelect expand="lg" className={Styles.navbar}>
      <Container>
        <Navbar.Brand href="/" className="me-auto">
          <img src="/Images/coinlogo.png" alt="logo" className={Styles.logo}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mx-auto form" id={Styles.from} style={{ margin: "1rem 0", justifyContent: "flex-end" }}>
          <Form className="d-flex" >
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" id={Styles.fc}/>
            <Button variant="warning" className={Styles.searchBtn}>Search</Button>
          </Form>
        </Nav>
        <Nav>
          <div>
          <Link to="/coins"><button className={Styles.btn}>Coins</button></Link>
          </div>
         
          <Nav.Link href="" >
            <Button variant="outline-warning"  style={{ margin: "1rem 0" }}>Sign in</Button>
          </Nav.Link>
          <Nav.Link eventKey={2} href="">
            <Button variant="warning" style={{ margin: "1rem 0" }}>Try for free</Button>
          </Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
    </div>
  )
}
