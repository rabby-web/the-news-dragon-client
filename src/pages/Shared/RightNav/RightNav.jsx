import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from "../QZone/QZone";
import bgImg from '../../../assets/bg1.png'

const RightNav = () => {
    return (
        <div>
            <div>
                <h4>Login With</h4>
                <Button className="mb-2" variant="outline-primary"><FaGoogle/> Login with Google</Button>
                <Button variant="outline-secondary"><FaGithub/> Login with GitHub</Button>
                <div className="mt-2">
                    <h5>Find Us On</h5>
                    <ListGroup>
                        <ListGroup.Item><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                        <ListGroup.Item><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                        <ListGroup.Item><FaInstagram></FaInstagram> Instagram</ListGroup.Item>
                    </ListGroup>
                </div>
                <div>
                    <QZone></QZone>
                </div>
                <div>
                    <img className="fluid" src={bgImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RightNav;