import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/style.css'
class Footer extends React.Component{
  render(){
    const year = new Date()
    return(
        <footer className="my-footer">
          <Container fluid>
            <Row noGutters>
              <Col xs={12} className="text-center">
                <p>
                  Copyright © {year.getFullYear()} PeGu. All Rights Reserved. Designed and Developed by <a href="https://thulina2004.netlify.app/" target="_blank" rel="noreferrer">Thulina Perera</a>
                </p>
              </Col>
            </Row>
          </Container>
        </footer>
    )
  }
}
export default Footer
