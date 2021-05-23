import React from 'react';

const Slider = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" class="carousel slide active" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner mt-5">
                    <div class="carousel-item active">
                    <img class="d-block w-100 h-20" src="https://moodle.eapcivilsociety.eu/pluginfile.php/80/course/overviewfiles/business-contemporary-company-strategy-firm-PS6GZ8C.jpg" alt="First slide"/>
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100 h-20" src="https://cdn.phenompeople.com/CareerConnectResources/DISYUS/en_us/common/image_gallery/Hero%20Image%20-%20Man%20on%20Computer-1546552083291.jpg" alt="Second slide"/>
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100 h-20" src="https://cdn.phenompeople.com/CareerConnectResources/SAMAUS/en_us/common/image_gallery/INFORM~1-1546601218902.JPG" alt="Third slide"/>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
}

export default Slider;