import React from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const Top = () => {
    return (
        <div className="container">
            <div className="row mt-4 mb-4">
                <div className="col-md-6 mt-4 mb-4">
                    <h1 className="text-white">Find the perfect artisan for your need</h1>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-4" />
                        <Button variant="btn btn-success">Search</Button>
                    </Form>
                </div>
                <div className="col-md-6">
                    <img src={process.env.PUBLIC_URL + '/images/artisan.png'} className="img-fluid" alt="artisan vector"/>
                </div>
            </div>
        </div>
    );
  };
  
  export default Top;

