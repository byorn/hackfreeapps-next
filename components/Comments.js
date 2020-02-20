import { FormControl, Button, Col, Row, Form } from 'react-bootstrap';
const Comments = () => {

    const buttonStyle = {
        border: '1px solid',

    };

    return (
        <>
            <Row>
                <Col xs={4}></Col>
                <Col xs={4}><Form.Label>Share your thoughts on this project! Leave a comment below:</Form.Label></Col>
                <Col xs={4}> </Col>
            </Row>

            <Row>
                <Col xs={4}> </Col>
                <Col xs={4}>  <Form.Control as="textarea" rows="3" /></Col>
                <Col xs={4}> </Col>
            </Row>
            <Row>
                <Col xs={4}> </Col>
                <Col xs={4}> <Col xs={1}><Button type="button" variant="primary" style={buttonStyle}>Post</Button></Col></Col>
                <Col xs={4}> </Col>
            </Row>

        </>
    );

}

export default Comments;