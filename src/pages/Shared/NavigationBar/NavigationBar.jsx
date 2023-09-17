import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';

const NavigationBar = () => {
    const {user} = useContext(AuthContext)
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                  <Navbar.Brand href="#home"></Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Link to="/category/0">Home</Link>
                      <Nav.Link href="#About">About</Nav.Link>
                      <Nav.Link href="#Career">Career</Nav.Link>
                      
                    </Nav>
                    <Nav className='d-flex justify-content-center align-items-center'>
                      {/* {user.displayName} */}
                        {
                        user && <FaUserCircle className='fs-2'></FaUserCircle>
                        }
                      {user ?
                        <Button variant="secondary">Logout</Button> :
                        <Link to="/login">
                        <Button variant="secondary">Login</Button>
                        </Link>
                        }
                    </Nav>
                  </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;