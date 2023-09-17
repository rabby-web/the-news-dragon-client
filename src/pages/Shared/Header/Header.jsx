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
            </Container>
        </div>
    );
};

export default Header;