import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {
    MDBCardImage,
    MDBCol,
    MDBInput,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";

const Prevorder = (props) => {

    let PLACE_ORDER = JSON.parse(localStorage.getItem('PLACE-ORDER'));
    let index = PLACE_ORDER.findIndex(data => (data.id === props.id))

    const curent_order_index = PLACE_ORDER[index];
    const curent_order = curent_order_index ? curent_order_index.cart : []

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.id}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>


                {
                    curent_order.map((data) => (
                        <MDBRow className="mb-4 d-flex justify-content-between align-items-center" key={data.id}>

                            <MDBCol md="2" lg="2" xl="2" className='img-container'>
                                <MDBCardImage
                                    src={data.image}
                                    fluid className="rounded-3" alt="Cotton T-shirt" />
                            </MDBCol>

                            <MDBCol md="3" lg="3" xl="3">
                                <MDBTypography tag="h6" className="text-muted">
                                    {data.category}
                                </MDBTypography>
                                <MDBTypography tag="h6" className="text-black mb-0">
                                    {data.title.substr(0, 20)}...
                                </MDBTypography>
                            </MDBCol>

                            <MDBCol md="3" lg="3" xl="3" className="d-flex align-items-center">

                                <MDBInput type="number" min="0" max="9" value={data.quantity} size="sm" />

                            </MDBCol>

                            <MDBCol md="3" lg="2" xl="2" className="text-end">
                                <MDBTypography tag="h6" className="mb-0">
                                    $ {data.updateprice ? data.updateprice : data.price}
                                </MDBTypography>
                            </MDBCol>

                            <hr className="my-4" />

                        </MDBRow>
                    ))
                }
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );

}

export default Prevorder;