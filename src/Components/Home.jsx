import React from 'react'
import img1 from '../Images/1 (1).jpg'
import img2 from '../Images/1 (2).jpg'
import img3 from '../Images/1 (3).jpg'


function Home() {
  return (
    <>
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" ></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item">
      <img class="d-block w-100" style={{height:"700px"}} src={img1} alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" style={{height:"700px"}} src={img2} alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" style={{height:"700px"}} src={img3} alt="Third slide"/>
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

    </>
  )
}

export default Home