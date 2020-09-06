import React from 'react';

const Info = () => {
    return (
        <div className="container">
            <div className="row mt-4 mb-4">
                <div className="col-md-6 mt-4 mb-4">
                    <h2 className="mb-4" >Get task(s) easily done</h2>
                    <ul style={{listStyleType: "square"}}>
                        <li>
                            <h4 className="text-blue">Find a service</h4>
                            <p>Choose the service you need from the categories listed</p>
                        </li>
                        <li>
                            <h4 className="text-blue">Select an artisan </h4>
                            <p>Browse through artisan that offer such services</p>
                        </li>
                        <li>
                            <h4 className="text-blue">Book an appointment</h4>
                            <p>Discuss with the artisan and get the service delivered</p>
                        </li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <img src={process.env.PUBLIC_URL + '/images/artisan-services.png'} className="img-fluid" alt="artisan vector"/>
                </div>
            </div>
        </div>
    );
  };
  
  export default Info;

