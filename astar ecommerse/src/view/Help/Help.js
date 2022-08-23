import React from 'react';

import './Help.css'

import action from '../../images/action.png'
import airpod from '../../images/airpod.png'
import bag from '../../images/bag.jpg'
import camera from '../../images/camera.png'
import drone from '../../images/drone.png'
import lights from '../../images/lights.png'
import mic from '../../images/mic.png'
import mobile from '../../images/mobile.jpg'
import setup from '../../images/setup.png'
import shoies from '../../images/shoies.jpg'
import singlelight from '../../images/singlelight.png'
import tripod from '../../images/tripod.png'
import bigcamera from '../../images/bigcamera.png'




const Help = () => {
    return (
        <div>








<header>
        <main>

            <h3 class="s">Influencer products</h3>

            {/* <!-- part-1 --> */}
            <section class="part-1">

                <div class="big-camera">
                    <h1>Start your Journey as </h1>
                    <h1>Influencer</h1>
                    <p>Number-1 camera in the world , you must need to buy it before stock out</p>
                    <a class="anchor-button" target="_blank" href="https://www.facebook.com/">Press Here <span><i
                                class="fas fa-hand-pointer"></i></span> </a>
                </div>
                


                <div>
                    <img src={bigcamera} alt=""/>
                </div>
            </section>




            {/* <!--  part-2 --> */}


            <h2 class="center">Popular collection</h2>
            <section class="popular-collection">


                {/* <!-- 1 --> */}

                <div class="photo-album">

                    <div class="photo-frame">
                        <div class="photo">
                            <img src={action} alt=""/>
                        </div>

                        <div class="photo-details">


                            <h2>Action Camera</h2>
                            <p>$50.48</p>
                            <i class="fas fa-star star"></i>
                            <i class="fas fa-star star"></i>
                            <i class="fas fa-star star"></i>
                            <i class="fas fa-star star"></i>
                            <i class="fas fa-star star"></i>
                            <i class="fas fa-star empty"></i>
                            <span class="rating"> Rating 5</span>
                            <p>Best camera </p>


                        </div>
                    </div>
                </div>


                {/* <!-- 2 --> */}
                <div class="photo-album">

                    <div class="photo-frame">
                        <div class="photo">
                            <img src={airpod} alt=""/>
                        </div>

                        <div class="photo-details">


                            <h2>Airbuds</h2>
                            <p>$100.00</p>
                            <i class="fas fa-star star"></i>
                            <i class="fas fa-star star"></i>
                            <i class="fas fa-star star"></i>
                            <i class="fas fa-star star"></i>
                            <i class="fas fa-star star"></i>
                            <i class="fas fa-star star"></i>
                            <span class="rating"> Rating 6</span>
                            <p>Best airpod </p>


                        </div>
                    </div>
                </div>
                {/* <!-- 3 --> */}
                <div class="photo-album">

                    <div class="photo-frame">
                        <div class="photo">
                            <img src={camera} alt=""/>
                        </div>

                        <div class="photo-details">


                            <h2>Vlogging Camera</h2>
                            <p>$180.80</p>
                            <i class="fas fa-star star"></i>
                            <i class="fas fa-star star"></i>
                            <i class="fas fa-star star"></i>
                            <i class="fas fa-star star"></i>
                            <i class="fas fa-star empty"></i>
                            <i class="fas fa-star empty"></i>
                            <span class="rating"> Rating 4</span>
                            <p>Wordwide Vlogging </p>


                        </div>
                    </div>
                </div>

                {/* <!-- 4 --> */}
                <div class="photo-album">

                    <div class="photo-frame">
                        <div class="photo">
                            <img src={drone} alt=""/>
                        </div>

                        <div class="photo-details">


                            <h2>Drone</h2>
                            <p>$980.25</p>
                            <i class="fas fa-star star"></i>
                            <i class="fas fa-star star"></i>
                            <i class="fas fa-star star"></i>
                            <i class="fas fa-star star"></i>
                            <i class="fas fa-star star"></i>
                            <i class="fas fa-star empty"></i>
                            <span class="rating"> Rating 5.5</span>
                            <p> Drone for picture</p>


                        </div>
                    </div>
                </div>


                {/* <!-- 5 --> */}
                <div class="photo-album">

                    <div class="photo-frame">
                        <div class="photo">
                            <img src={lights}alt=""/>
                        </div>

                        <div class="photo-details">


                            <h2>Light Setup</h2>
                            <p>$120.00</p>
                            <i class="fas fa-star star"></i>
                            <i class="fas fa-star star"></i>
                            <i class="fas fa-star star"></i>
                            <i class="fas fa-star empty"></i>
                            <i class="fas fa-star empty"></i>
                            <i class="fas fa-star empty"></i>
                            <span class="rating"> Rating 3</span>
                            <p>Light setup for fresh picture </p>


                        </div>
                    </div>
                </div>

                {/* <!-- 6 --> */}
                <div class="photo-album">

                    <div class="photo-frame">
                        <div class="photo">
                            <img src={mic} alt=""/>
                        </div>

                        <div class="photo-details">


                            <h2>Microphone</h2>
                            <p>$120.25</p>
                            <i class="fas fa-star star"></i>
                            <i class="fas fa-star star"></i>
                            <i class="fas fa-star star"></i>
                            <i class="fas fa-star star"></i>
                            <i class="fas fa-star star"></i>
                            <i class="fas fa-star star"></i>
                            <span class="rating"> Rating 6</span>
                            <p>Sony mic </p>


                        </div>
                    </div>
                </div>


                {/* <!-- 7 --> */}
                <div class="photo-album">

                    <div class="photo-frame">
                        <div class="photo">
                            <img src={setup} alt=""/>
                        </div>

                        <div class="photo-details">


                            <h2>PhootoShoot set</h2>
                            <p>$820.40</p>
                            <i class="fas fa-star star"></i>
                            <i class="fas fa-star star"></i>
                            <i class="fas fa-star star"></i>
                            <i class="fas fa-star star"></i>
                            <i class="fas fa-star star"></i>
                            <i class="fas fa-star empty"></i>
                            <span class="rating"> Rating 5</span>
                            <p>Good for photoshoot</p>


                        </div>
                    </div>
                </div>


                {/* <!-- 8 --> */}
                <div class="photo-album">

                    <div class="photo-frame">
                        <div class="photo">
                            <img src={singlelight} alt=""/>
                        </div>

                        <div class="photo-details">


                            <h2>Green Screen</h2>
                            <p>$25.48</p>
                            <i class="fas fa-star star"></i>
                            <i class="fas fa-star star"></i>
                            <i class="fas fa-star empty"></i>
                            <i class="fas fa-star empty"></i>
                            <i class="fas fa-star empty"></i>
                            <i class="fas fa-star empty"></i>
                            <span class="rating"> Rating 2</span>
                            <p>Best for background </p>


                        </div>
                    </div>
                </div>


                {/* <!-- 9 --> */}
                <div class="photo-album">

                    <div class="photo-frame">
                        <div class="photo">
                            <img src={tripod} alt=""/>
                        </div>

                        <div class="photo-details">


                            <h2>Flex Tripod</h2>
                            <p>$50.48</p>
                            <i class="fas fa-star star"></i>
                            <i class="fas fa-star star"></i>
                            <i class="fas fa-star star"></i>
                            <i class="fas fa-star star"></i>
                            <i class="fas fa-star star"></i>
                            <i class="fas fa-star star"></i>
                            <span class="rating"> Rating 6</span>
                            <p>Best over the world</p>


                        </div>
                    </div>
                </div>


                <a class="anchor" target="_blank" href="https://www.facebook.com/">Press Here <span><i
                            class="fas fa-sign-in-alt"></i></span> </a>
            </section>


            {/* <!-- part-4 --> */}

            <h2 class="center">Spical Adventure</h2>
            <section class="bonus">
                <div class="photo-album-2">
                    <div class="photo-frame-2">
                        <div class="photo-2">
                            <img src={bag} alt=""/>
                        </div>

                        <div class="photo-detail-2">
                            <p class="h">Most flexible bag for Influencer and very much flexible and so much comfortable
                                to use </p>

                        </div>

                    </div>
                </div>



                <div class="photo-album-2">
                    <div class="photo-frame-2">
                        <div class="photo-2">
                            <img src={mobile} alt=""/>
                        </div>

                        <div class="photo-detail-2">
                            <p class="h">Most latest mobile phone among the other models and very much flixble and so
                                good for use and also manu updated feture here us for use and so much responsive </p>

                        </div>

                    </div>
                </div>


            </section>





        </main>
    </header>
    <footer class="end">
    <p>Influencer product</p>
    <p>copy right <i class="far fa-copyright">2022</i></p>
    <p>all right reserve</p>
    <p>social media icon <i class="fab fa-twitter-square"></i> <i class="fab fa-facebook-square"></i> <i
            class="fab fa-whatsapp-square"></i> <i class="fab fa-google"></i> <i class="fab fa-instagram-square"></i>
    </p>
</footer>












        </div>
    );
};

export default Help;