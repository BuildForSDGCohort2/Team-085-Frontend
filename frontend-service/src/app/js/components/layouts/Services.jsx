import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
const Services = () => {
    return (      
        <div className="container mt-4">
            <h3>Popular services</h3>
            <div className="row mx-lg-n5">
                <div className="col-md-3">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(53).jpg" />
                        <Card.Body>
                            <Card.Title>Fashion Design</Card.Title>
                            {/* <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>*/}
                            <button className="btn btn-blue">See services</button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-3">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(53).jpg" />
                        <Card.Body>
                            <Card.Title>Interior decoration</Card.Title>
                            <button className="btn btn-blue">See services</button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-3">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(53).jpg" />
                        <Card.Body>
                            <Card.Title>Woodwork</Card.Title>
                            <button className="btn btn-blue">See services</button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-3">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(53).jpg" />
                        <Card.Body>
                            <Card.Title>Carpentry</Card.Title>
                            <button className="btn btn-blue">See services</button>
                        </Card.Body>
                    </Card>
                </div>
            </div>

        </div>
    );
  };
  
  export default Services;

