import './carousel.css'
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";


const Carouselfile = () => {
    return (
        <div>
            <Carousel
                showThumbs={false}
                showStatus={false}
                infiniteLoop
                // emulateTouch
                autoPlay
                useKeyboardArrows
                transitionTime={1000}
                // axis="vertical"
                // selectedItem={1}
                width="100%"
            >

                <div className="slide-holder">
                    <img
                        alt=""
                        src="https://www.topgear.com/sites/default/files/2022/07/01%20BUGATTI_CSS300%2B-last-delivery_Record.jpg"
                    />
                    <div className="text-container">
                        <h2>Bugatti Chiron Super Sport 300</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua se. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>
                <div className="slide-holder">
                    <img
                        alt=""
                        src="https://im.indiatimes.in/content/2017/Nov/in6_1509613195.jpg"
                    />
                    <div className="text-container">
                        <h2>Hennessey Venom F5</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua se. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>
                <div className="slide-holder">
                    <img
                        alt=""
                        src="https://cdn.motor1.com/images/mgl/pqbN0/s4/2020-ssc-tuatara.jpg"
                    />
                    <div className="text-container">
                        <h2>SSC Tuatara: 300+ mph*</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua se. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>
                <div className="slide-holder">
                    <img
                        alt=""
                        src="https://i0.wp.com/racingmaster.info/wp-content/uploads/2022/08/Koenigsegg-Agera-RS-Racing-Master.jpg?resize=1188.75%2C539&ssl=1"
                    />
                    <div className="text-container">
                        <h2>Koenigsegg Agera RS 278 mph</h2>
                        <p>
                            Koenigsegg set an insane average speed of 277.9 mph in two runs of a stretch of highway in Nevada back in November, potentially making the Agera RS the fastest production car ever, and finally giving the company the opportunity to test at the limit in the real world.
                        </p>
                    </div>
                </div>
                <div className="slide-holder">
                    <img
                        alt=""
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCZtGieuJCS6qvANGfYMKmeahHZyM17qzC8w&usqp=CAU"
                    />
                    <div className="text-container">
                        <h2>Bugatti Veyron Super Sport 268 mph</h2>
                        <p>
                            The Bugatti Veyron 16.4 Super Sport World Record Edition - (formerly) the fastest road legal production car attaining a top speed of 431 km/h (268 mph)
                            Engine: 8.0 L (488 cu in) quad-turbocharged ...
                            Power output: Standard (Coupé), Grand Sport ...
                            Kerb weight: 1,838-1,990 kg (4,052-4,387 lb)

                        </p>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}

export default Carouselfile

