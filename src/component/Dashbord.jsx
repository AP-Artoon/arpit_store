import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Header from './Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Carouselfile from './carousel/Carouselfile';

const Dashbord = () => {

    const navigate = useNavigate()
    let local_store_data = localStorage.getItem('store-data')
    let store_data = []
    store_data = JSON.parse(local_store_data)


    // console.log('store_data', store_data);

    const dispatch = useDispatch();

    const addtocart = (id) => {
        dispatch({ type: 'ADDTOCART', payload: id })
        toast("Item Added to the Cart ");
    }

    const productpreview = (id) => {
        navigate(`/product/${id}`);
        console.log(id, "dashbord");
    }
    return (
        <div style={{ backgroundColor: '#f2f2f2' }}>
            <Header />
            <Carouselfile />
            <Container >
                <Row className='justify-content-center' >
                    {
                        store_data.map((data) => (
                            <Col sm={3} key={data.id} >

                                <div className="card "
                                    style={{ width: "18rem", height: 'auto', margin: '20px' }}
                                >
                                    <div
                                        className='img-container'
                                        style={{
                                            width: '200px',
                                            height: '200px',
                                            display: 'flex',
                                            alignSelf: 'center',
                                        }}
                                        onClick={() => productpreview(data.id)}
                                    >
                                        <img className="card-img-top h-5" src={data.image} alt="Card cap" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title mt-6">{data.title.substr(0, 20)}...</h5>
                                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item"> Price : {data.price} $</li>
                                        <li className="list-group-item">Category : {data.category}</li>
                                        <li className="list-group-item" > Rating : {data.rating.rate}⭐</li>
                                        {/* <li className="list-group-item">Vestibulum at eros</li> */}
                                    </ul>
                                    <div className="card-body hover-overlay">
                                        <Button className="btn btn-outline-danger" variant='outline' onClick={() => addtocart(data.id)}> Add to Cart</Button>
                                        <ToastContainer />
                                        {/* <a href="#" className="card-link">Another link</a> */}
                                    </div>
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    )
}

export default Dashbord