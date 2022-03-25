
import { Alert, Container, Row, Col } from 'react-bootstrap';
const Suggestion = ({activity}) => {

    return (
    <Container>
        <Row>
          <Col>
          {activity.error && 
          <Alert variant="warning">{activity.error}</Alert>
          }
          {!activity.error &&
            <Alert variant="success">
                Why don't you <strong>{activity.activity}</strong>?
            </Alert>
          }  
          </Col>
        </Row>
      </Container>
    )
    
}

export default Suggestion