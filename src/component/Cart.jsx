import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardText,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";
import React, { useState } from "react";
import Header from "./Header";
import './cart.css'
import { useDispatch, useSelector } from "react-redux";
import ArrowAnimation from "./ArrowAnimation";
import { useNavigate } from "react-router-dom";
import Prevorder from "./Prevorder";



const Cart = () => {

    // const cart = JSON.parse(localStorage.getItem('current-user-data'))
    const navigate = useNavigate();
    // debugger
    const value = useSelector((state) => state.value)
    const local_place_order = useSelector((state) => state.placedOrder)

    // console.log('local_place_order', local_place_order);

    const local_cart_data = value.cart

    let local_place_data = local_place_order.cart
    // console.log(local_place_data, "local_place_data");
    // const cart_lenth = local_cart_data.length;
    let Total = 0;

    const dispatch = useDispatch()

    const deletebtn = (id) => {
        dispatch({ type: 'DELETE-FROM-CART', payload: id })
        // console.log('id', id);
    }

    const productpreview = (id) => {
        // dispatch({ type: 'PREVIEW-PRODUCT', payload: id })
        navigate(`/product/${id}`);
    }

    const plusbtn = (id) => {

        dispatch({ type: 'PLUS-COUNT-BTN-CART', payload: id })

    }

    const minusbtn = (id) => {

        dispatch({ type: 'MINUS-COUNT-BTN-CART', payload: id })

    }

    const placeorder = () => {

        dispatch({ type: 'PLACE-ORDER' })

    }


    const [modalShow, setModalShow] = React.useState(false);

    // function MyVerticallyCenteredModal(props) {

    //     return (
    //         <Modal
    //             {...props}
    //             size="lg"
    //             aria-labelledby="contained-modal-title-vcenter"
    //             centered
    //         >
    //             <Modal.Header closeButton>
    //                 <Modal.Title id="contained-modal-title-vcenter">
    //                     Modal heading
    //                 </Modal.Title>
    //             </Modal.Header>
    //             <Modal.Body>
    //                 <h4>Centered Modal</h4>
    //                 <p>
    //                     Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
    //                     dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
    //                     consectetur ac, vestibulum at eros.
    //                 </p>
    //             </Modal.Body>
    //             <Modal.Footer>
    //                 <Button onClick={props.onHide}>Close</Button>
    //             </Modal.Footer>
    //         </Modal>
    //     );
    // }

    const [placeorderid, setPlaceorderid] = useState()

    const oderpreview = (id) => {

        setModalShow(true)
        setPlaceorderid(id)



        // dispatch({ type: 'ORDER-PREVIEW', payload: id })

    }


    return (
        <section className="h-100 h-custom" style={{ backgroundColor: "#eee", minHeight: '100vh' }}>
            <Header />
            <MDBContainer className="py-5 h-100">
                <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol size="12">
                        <MDBCard className="card-registration card-registration-2" style={{ borderRadius: "15px" }}>
                            <MDBCardBody className="p-0">
                                <MDBRow className="g-0">
                                    <MDBCol lg="8">
                                        <div className="p-5">
                                            <div className="d-flex justify-content-between align-items-center mb-5">
                                                <MDBTypography tag="h1" className="fw-bold mb-0 text-black">
                                                    Shopping Cart
                                                </MDBTypography>
                                                <MDBTypography className="mb-0 text-muted">
                                                    {/* {cart_lenth} items */}
                                                </MDBTypography>
                                            </div>

                                            <hr className="my-4" />

                                            {
                                                local_cart_data.map((data, index) => {


                                                    let num1 = data.updateprice ? data.updateprice : data.price
                                                    let num2 = Total
                                                    Total = num1 + num2


                                                    return (
                                                        <MDBRow className="mb-4 d-flex justify-content-between align-items-center" key={data.id}>

                                                            <MDBCol md="2" lg="2" xl="2" className='img-container' onClick={() => productpreview(data.id)} >
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
                                                                {data.quantity <= 1 ?
                                                                    <MDBBtn color="link" className="px-2" onClick={() => deletebtn(data.id)} >
                                                                        <MDBIcon fas icon="trash" />
                                                                    </MDBBtn>
                                                                    :
                                                                    <MDBBtn color="link" className="px-2" onClick={() => minusbtn(data.id)} >
                                                                        <MDBIcon fas icon="minus" />
                                                                    </MDBBtn>
                                                                }
                                                                <MDBInput type="number" min="0" max="9" value={data.quantity} size="sm" />

                                                                <MDBBtn color="link" className="px-2" onClick={() => plusbtn(data.id)} >
                                                                    <MDBIcon fas icon="plus" />
                                                                </MDBBtn>
                                                            </MDBCol>

                                                            <MDBCol md="3" lg="2" xl="2" className="text-end">
                                                                <MDBTypography tag="h6" className="mb-0">
                                                                    $ {data.updateprice ? data.updateprice : data.price}
                                                                </MDBTypography>
                                                            </MDBCol>

                                                            <MDBCol md="1" lg="1" xl="1" className="text-end" >
                                                                <MDBBtn className="text-dark bg-body btn-outline-danger" onClick={() => deletebtn(data.id)} >
                                                                    <MDBIcon fas icon="times" />
                                                                </MDBBtn>
                                                            </MDBCol>

                                                            <hr className="my-4" />

                                                        </MDBRow>
                                                    )

                                                })
                                            }
                                            {/* <div className="pt-5">
                                                <MDBTypography tag="h6" className="mb-0">
                                                    <MDBCardText tag="a" href="/dashbord" className="text-body">
                                                        <span> <ArrowAnimation /></span> <span style={{ position: 'relative', left: '50px', top: '4px', }} > Back to shop</span>
                                                    </MDBCardText>
                                                </MDBTypography>
                                            </div> */}
                                        </div>

                                        <MDBCol lg="8">
                                            <div className="p-5" style={{ width: '550px' }} >
                                                <div className="d-flex justify-content-between align-items-center mb-5">
                                                    <MDBTypography tag="h1" className="fw-bold mb-0 text-black">
                                                        Placed Order
                                                    </MDBTypography>



                                                    <MDBTypography className="mb-0 text-muted">
                                                        {/* {cart_lenth} items */}
                                                    </MDBTypography>
                                                </div>

                                                <hr className="my-4" />


                                                {
                                                    local_place_order.map((data) => {

                                                        return (
                                                            <MDBRow className="mb-2 d-flex justify-content-between align-items-center w- p-3" key={data.id}>

                                                                {/* <MDBCol md="2" lg="2" xl="2" className='img-container' onClick={() => productpreview(data.id)} >
                                                                    <MDBCardImage
                                                                        src={data.image}
                                                                        fluid className="rounded-3" alt="Cotton T-shirt" />
                                                                </MDBCol> */}

                                                                <MDBCol md="3" lg="3" xl="3">
                                                                    {/* <MDBTypography tag="h6" className="text-muted">
                                                                        {data.category}
                                                                    </MDBTypography> */}
                                                                    <MDBTypography tag="h5" className="text-black mb-0" onClick={() => { oderpreview(data.id); }} style={{ width: '550px' }}>
                                                                        {data.id}
                                                                    </MDBTypography>
                                                                </MDBCol>

                                                                <Prevorder show={modalShow} onHide={() => setModalShow(false)} id={placeorderid} />

                                                                {/* <MDBCol md="3" lg="3" xl="3" className="d-flex align-items-center">

                                                                    <MDBInput type="number" min="0" max="9" value={data.quantity} size="sm" />

                                                                </MDBCol> */}

                                                                {/* <MDBCol md="3" lg="2" xl="2" className="text-end">
                                                                    <MDBTypography tag="h6" className="mb-0">
                                                                        $ {data.updateprice ? data.updateprice : data.price}
                                                                    </MDBTypography>
                                                                </MDBCol> */}

                                                                <hr className="my-4" />

                                                            </MDBRow>
                                                        )

                                                    })
                                                }




                                                <div className="pt-5">
                                                    <MDBTypography tag="h6" className="mb-0">
                                                        <MDBCardText tag="a" href="/dashbord" className="text-body">
                                                            <span> <ArrowAnimation /></span> <span style={{ position: 'relative', left: '50px', top: '4px', }} > Back to shop</span>
                                                        </MDBCardText>
                                                    </MDBTypography>
                                                </div>
                                            </div>
                                        </MDBCol>
                                    </MDBCol>
                                    <MDBCol lg="4" className="bg-grey">
                                        <div className="p-5">
                                            <MDBTypography tag="h3" className="fw-bold mb-5 mt-2 pt-1">
                                                Summary
                                            </MDBTypography>

                                            <hr className="my-4" />

                                            <div className="d-flex justify-content-between mb-4">
                                                <MDBTypography tag="h5" className="text-uppercase">
                                                    {/* items {cart_lenth} */}
                                                </MDBTypography>
                                                <MDBTypography tag="h5">$ {Total}</MDBTypography>
                                            </div>

                                            <MDBTypography tag="h5" className="text-uppercase mb-3">
                                                Shipping
                                            </MDBTypography>

                                            <div className="mb-4 pb-2">
                                                <select className="select p-2 rounded bg-grey" style={{ width: "100%" }}>
                                                    <option value="1">Standard-Delivery- $5.00</option>
                                                    {/* <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                    <option value="4">Four</option> */}
                                                </select>
                                            </div>

                                            <MDBTypography tag="h5" className="text-uppercase mb-3">
                                                Give code
                                            </MDBTypography>

                                            <div className="mb-5">
                                                <MDBInput size="lg" label="Enter your code" />
                                            </div>

                                            <hr className="my-4" />

                                            <div className="d-flex justify-content-between mb-5">
                                                <MDBTypography tag="h5" className="text-uppercase">
                                                    Total price
                                                </MDBTypography>
                                                <MDBTypography tag="h5">$ {Total + 5}</MDBTypography>
                                            </div>

                                            <MDBBtn color="dark" block size="lg" onClick={() => placeorder()}>
                                                place order
                                            </MDBBtn>
                                        </div>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer >
        </section >
    );
}

export default Cart