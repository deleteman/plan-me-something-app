
import { Container, Col, Form, Row, Button } from 'react-bootstrap';

const SearchForm = ({setResult, fetcher}) => {
const getSomething = async (evt) => {
    evt.preventDefault()
    let form = evt.target

    let API_URL = "/api/activity?"

    /*
    if((Math.random()*100) > 80) {
      API_URL = "/invalid/path?"
    }
    */

    let getParams = {}
    if(form.participants.value !== '') {
      getParams.participants = form.participants.value
    }

    if(form.priceRange.value !== '') {
      let prices = form.priceRange.value.split("_")
      getParams.minprice = prices[0]
      getParams.maxprice = prices[1]
    }

    getParams.phonenumber = form.phoneNumber.value

    let results = await fetcher(API_URL + new URLSearchParams(getParams), {
        mode: 'no-cors'
    })
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
       <Col>
          <Form.Group controlId='phoneNumber'>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type='number' name="phoneNumber" placeholder='Enter your phone number here please'></Form.Control>
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