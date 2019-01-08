import React , {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../main/Main.css";
import 'materialize-css/dist/css/materialize.min.css';
import {Carousel} from 'react-responsive-carousel';
import SearchBar from '../search/SearchBar';

//images for carousel
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpeg';

//setup main landing page with image carousel
//search bar placed below


class Main extends Component{
    render(){
        return(
            <div id = "mainCarousel">
                <h1 id = "title"> NBA 2018 Rosters </h1>
                <Carousel  showThumbs={false} showArrows={false} showStatus={false} autoPlay = {false} infiniteLoop = {true}>
                     <div className = "imageCarousel">
                         <img  src = {image1} alt = "image1"/> 
                     </div>

                      <div className = "imageCarousel">
                         <img  src = {image2} alt = "image2"/> 
                     </div>

                      <div className = "imageCarousel">
                         <img  src = {image3} alt = "image3"/> 
                     </div>
                 </Carousel> 
                 <SearchBar/>
            </div>
        );
    }
}

export default Main;
