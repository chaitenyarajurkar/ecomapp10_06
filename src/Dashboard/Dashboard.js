import React, { useState } from 'react';

const Dashboard = () => {
    const [slideItem,setSlideItem] = useState(0)
    
    const onScrollItem = ()=>{
        if(slideItem ===3){
            setSlideItem(0)
        }else{

            setSlideItem(slideItem +1 )
        }
    }
    const onScrollItemreverse = ()=>{
        if(slideItem ===0){
            setSlideItem(2)
        }else{

            setSlideItem(slideItem - 1 )
        }
    }
    return (
        <div className='pt-3'>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                
                <div className="carousel-inner ">
                    <div className={slideItem===0 ?"carousel-item active carousel-item-left" : "carousel-item"}>
                        <img className="d-block w-100" src="https://sathya.in/media/3420/catalog/mobiles.jpg" alt="First slide" />
                    </div>
                    <div className={slideItem===1 ?"carousel-item active carousel-item-left" : "carousel-item"}>
                        <img className="d-block w-100" src="https://www.intel.in/content/dam/www/central-libraries/us/en/images/2022-05/laptop-marquee-16x9.png.rendition.intel.web.864.486.png" alt="Second slide" />
                    </div>
                    <div className={slideItem===2 ?"carousel-item active carousel-item-left" : "carousel-item"}>
                        <img className="d-block w-100" src="https://images.blackmagicdesign.com/images/home/plates/2023/pocket-cinema-camera-vertical-aspect-ratio/pocket-cinema-camera-vertical-aspect-ratio-lg.jpg?_v=1681448975" alt="Third slide" />
                    </div>
                    <div className={slideItem===3 ?"carousel-item active carousel-item-left" : "carousel-item"}>
                        <img className="d-block w-100" src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Header__PixelTablet-Ecosystem_ke.width-1000.format-webp.webp" alt="Third slide" />
                    </div>
                </div>
                <p className="carousel-control-prev "  >
                    <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"  onClick={onScrollItemreverse}></span>
                    <span className="sr-only ">Previous</span>
                </p>
                <p className="carousel-control-next "  onClick={onScrollItem}  >
                    <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
                    <span className="sr-only" >Next</span>
                </p>
            </div>
        </div>
    );
};

export default Dashboard;