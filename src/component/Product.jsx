// import React, { useState } from 'react'
// import { useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom';
import ArrowAnimation from './ArrowAnimation';
import './product.css'
import ReactImageMagnify from "react-image-magnify";


const Product = () => {


    var value = []
    // const cart = useSelector((state) => state.cart)
    const cart = JSON.parse(localStorage.getItem('store-data'))
    const { id } = useParams();
    const navigate = useNavigate()

    let index = cart.findIndex(data => (data.id === parseInt(id)))
    value = ([cart[index]])

    console.log(value);

    // console.log(curent_value);   
    return (
        value.map((data, index) => {
            return (
                <>
                    <div key={index} className='snippet-body' >
                        <div className="containerone">
                            <div className="cardtwo">
                                <div className="watchBackground">
                                    <img src="https://i.imgur.com/pVNHUJN.png" alt="hello" className="logo" />

                                    {/* <img
                                        src={data.image}
                                        alt="hello"
                                        
                                        color="blue"
                                    /> */}
                                    <div style={{ width: 400, height: 250 }} >
                                        <ReactImageMagnify
                                            {...{
                                                className: "watch show",
                                                smallImage: {
                                                    isFluidWidth: true,
                                                    src: data.image,
                                                    width: 400,
                                                    height: 250,

                                                },
                                                largeImage: {
                                                    src: data.image,
                                                    width: 1200,
                                                    height: 1800
                                                },
                                                enlargedImageContainerDimensions: {
                                                    width: "200%",
                                                    height: "100%"
                                                }
                                            }}
                                        />
                                    </div>

                                </div>
                                <div className="info">
                                    <div className="watchName">
                                        <div>
                                            <h1 className="big">{data.title}</h1>
                                            <span className="new">new</span>
                                        </div>
                                        <h3 className="small">{data.category}</h3>
                                    </div>
                                    <div className="description">
                                        <p className="text">
                                            {data.description}
                                        </p>
                                    </div>
                                    <div className="color-container">
                                        <h3 className="title">Rate Count</h3>
                                        {data.rating.count}
                                    </div>
                                    <div className="ratings-container">
                                        <h3 className="title">Rattings</h3>
                                        <div className="rating" style={{ color: "#db6777" }}>
                                            {data.rating.rate} ⭐
                                            <i className="fas fa-star"></i> <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i> <i className="fas fa-star"></i>
                                            <i className="fas fa-star-half"></i>
                                        </div>
                                    </div>
                                    <div className="watch-name"><span></span></div>
                                    <div className="buy-price">
                                        <p style={{ height: '40px', width: '40px' }} onClick={() => navigate(-1)}> <ArrowAnimation /> </p>
                                        <div className="price">
                                            <i className="fas fa-dollar-sign"></i>
                                            <h1>{data.price}</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </>

            )
        })
    )
}
export default Product
