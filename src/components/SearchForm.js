
import { Container, Col, Form, Row, Button } from 'react-bootstrap';

const SearchForm = ({setResult}) => {
const getSomething = async (evt) => {
    evt.preventDefault()
    let form = evt.target

    const API_URL = new URL("http://www.boredapi.com/api/activity?")
    let getParams = {}
    if(form.participants.value != '') {
      getParams.participants = form.participants.value
    }

    if(form.priceRange.value != '') {
      let prices = form.priceRange.value.split("_")
      getParams.minprice = prices[0]
      getParams.maxprice = prices[1]
    }

    let results = await fetch(API_URL + new URLSearchParams(getParams))
    setResult(await results.json())

    return false
  }


    return (
        <Container>
        <Form onSubmit={getSomething}>
          <Row>
            <Col>
          <Form.Group controlId='participants' >
            <Form.Label>Participants</Form.Label>
            <Form.Control type='text' name="totalParticipants" placeholder='Leave empty if you dont care...'></Form.Control>
          </Form.Group>
          </Col>
            <Col>
          <Form.Group controlId='priceRangeId'>
            <Form.Label>Price range</Form.Label>
            <Form.Select name="priceRange" >
              <option value="" >Select one or leave empty if you dont care</option>
              <option value="0.0">Free</option>
              <option value="0.1_0.5">Cheap</option>
              <option value="0.6_1.0">Expensive</option>
            </Form.Select>
          </Form.Group>
          </Col>
          </Row>
          <Row className='m-3'>
            <Col>
            <Form.Group>
              <Button variant="primary" type="submit">Get me something!</Button>
            </Form.Group>
            </Col>
          </Row>
        </Form>
      </Container>
    )
}

export default SearchForm