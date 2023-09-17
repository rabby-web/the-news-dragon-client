import { Container, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <Container className="w-25 mx-auto border border-secondary-subtle rounded-3">
            <h3>Please Register</h3>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control type="text" name="name" placeholder="Your Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Photo URL</Form.Label>
                  <Form.Control type="text" name="url" placeholder="Photo URL" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" name="password" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" name="accept" label="Accept Terms and Condition" />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
                    <br />
                <Form.Text className="text-secondary">
                    Already Have an Account? <Link to="/login">Login</Link>
                  </Form.Text>

                <Form.Text className="text-success">
                  </Form.Text>
                <Form.Text className="text-danger">
                  </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;