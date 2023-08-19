import { Button, Container } from 'react-bootstrap';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import Marquee from "react-fast-marquee";

const Header = () => {
    
    return (
        <div>
            <Container>
            <div className='text-center'>
                <img src={logo} alt="" />
                <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex bg-secondary p-2 rounded'>
                <Button className='me-3' variant="danger">Latest</Button>
                <Marquee className='text-light' speed={50}>
                    Match Highlights: Germany vs Spain — as it happened ! Match Highlights: Germany vs Spain as... Match Highlights: Germany vs Spain — as it happened  ! Match Highlights: Germany vs Spain as...
                </Marquee>
            </div>
            <div>
            {/* <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                  <Navbar.Brand href="#home"></Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                      <Nav.Link href="#Home">
                        <Link to="/">Home</Link>
                      </Nav.Link>
                      <Nav.Link href="#About">About</Nav.Link>
                      <Nav.Link href="#Career">Career</Nav.Link>
                      
                    </Nav>
                    <Nav className='d-flex justify-content-center align-items-center'>
                      {user && <Nav.Link href="#deets">
                        <FaUserCircle className='fs-2'></FaUserCircle>
                      </Nav.Link>}
                      <Nav.Link eventKey={2} href="#memes">
                      {user ?
                        <Button variant="secondary">Logout</Button> :
                        <Link to="/login">
                        <Button variant="secondary">Login</Button>
                        </Link>
                        }
                      </Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
            </Navbar> */}
            </div>
            </Container>
        </div>
    );
};

export default Header;