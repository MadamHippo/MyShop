import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'

const Footer = () => {
  return ( // JSX - javascript extensions below. Collides with JSX vs regular JS so we need to replace 'class' with 'className'
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            Copyright &copy; Lily @ Kal Academy
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer