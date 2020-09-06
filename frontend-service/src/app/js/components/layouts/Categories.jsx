import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarehouse, faWallet, faWrench, faUnlock, faTv, faTrophy, faTools} from '@fortawesome/free-solid-svg-icons';

const Categories = () => {
    return (
        <div className="container">
            <h2 className="mb-4" >Browse various artisan services</h2>
            <div className="row " style={{margin:"0 auto", textAlign:"center"}}>
                <div className="col-md-3">
                    <FontAwesomeIcon className="mb-4 text-light-blue" icon={faWallet} style={{fontSize: "70px"}} />
                    <div className="mb-4 border-bottom" style={{width:"50%", margin:"0 auto"}}></div> 
                    <h3>Painting</h3>
                </div>
                
                <div className="col-md-3">
                    <FontAwesomeIcon className="mb-4 text-light-blue" icon={faTv} style={{fontSize: "70px"}} />
                    <div className="mb-4 border-bottom" style={{width:"50%", margin:"0 auto"}}></div> 
                    <h3>Fashion design</h3>
                </div>
                
                <div className="col-md-3">
                    <FontAwesomeIcon className="mb-4 text-light-blue" icon={faUnlock} style={{fontSize: "70px"}} />
                    <div className="mb-4 border-bottom" style={{width:"50%", margin:"0 auto"}}></div> 
                    <h3>Plumbering</h3>
                </div>
                
                <div className="col-md-3">
                    <FontAwesomeIcon className="mb-4 text-light-blue" icon={faTrophy} style={{fontSize: "70px"}} />
                    <div className="mb-4 border-bottom" style={{width:"50%", margin:"0 auto"}}></div> 
                    <h3>Pastery</h3>
                </div>
                
                <div className="col-md-3">
                    <FontAwesomeIcon className="mb-4 text-light-blue" icon={faTools} style={{fontSize: "70px"}} />
                    <div className="mb-4 border-bottom" style={{width:"50%", margin:"0 auto"}}></div> 
                    <h3>Laundry & Cleaning</h3>
                </div>
                
                <div className="col-md-3">
                    <FontAwesomeIcon className="mb-4 text-light-blue" icon={faWarehouse} style={{fontSize: "70px"}} />
                    <div className="mb-4 border-bottom" style={{width:"50%", margin:"0 auto"}}></div> 
                    <h3>Brick laying</h3>
                </div>
                
                <div className="col-md-3">
                    <FontAwesomeIcon className="mb-4 text-light-blue" icon={faTv} style={{fontSize: "70px"}} />
                    <div className="mb-4 border-bottom" style={{width:"50%", margin:"0 auto"}}></div> 
                    <h3>Electrical work</h3>
                </div>
                
                <div className="col-md-3">
                    <FontAwesomeIcon className="mb-4 text-light-blue" icon={faWrench} style={{fontSize: "70px"}} />
                    <div className="mb-4 border-bottom" style={{width:"50%", margin:"0 auto"}}></div> 
                    <h3>Mechanics</h3>
                </div>
                
            </div>
            <div className="mt-4 center">
                <button className="btn btn-success">SEE ALL SERVICES</button>
            </div>
        </div>
    );
  };
  
  export default Categories;

