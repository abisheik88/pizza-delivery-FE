import React from 'react'
import "./home.css";
import logo from './step-1.jpg';
import step2 from './step-2.jpg';
import step3 from './step-3.jpg';
import step4 from './step-4.jpg';
import cally from './OIP (1).png';
import John from './OIP.png';
import home from './home-img.png';
import office from './office.png'


function Home() {
  
  return (
 <>

<section class="home" id="home">

    <div class="content">
        <h3>The Fastest in
        Delivery Food
        </h3>
        <p>Our Job Is To Filling Your Tummy With Delicious <br/>Food And Fast Delivery</p>
        <a href="/login" class="btn">Order Now</a>
    </div>

    <div class="image">
    <img src={home}/> 
    </div>
 {/* About Us */}
</section>
<section class="about" id="about">

    <h3 class="heading"> about us </h3>
    <h1 class="heading"> why choose us? </h1>

    <div class="row">

        <div class="image">
            <img src="https://img.freepik.com/free-photo/delicious-fried-chicken-plate_144627-27383.jpg?w=1380&t=st=1673967239~exp=1673967839~hmac=24b720036ed06a5b5527d1ce4b05dc73239e14496a35270ff82c87e1f6beda5d" alt="" />
        </div>

        <div class="content">
            <h3>best food in the country</h3>
            <p>Big plate chicken is a type of chicken stew that is generally said to have been created by a migrant from Sichuan, living in Shawan County in northern Xinjiang, who mixed hot chili peppers with chicken and potatoes in an attempt to reproduce a Sichuan taste.</p>
          
            <div class="icons-container">
                <div class="icons">
                    <i class="fas fa-shipping-fast"></i>
                    <span>free delivery</span>
                </div>
                <div class="icons">
                    <i class="fas fa-dollar-sign"></i>
                    <span>easy payments</span>
                </div>
                <div class="icons">
                    <i class="fas fa-headset"></i>
                    <span>24/7 service</span>
                </div>
            </div><br/>
            <a href="/login" class="btn">Oder Now</a>
        </div>

    </div>

</section>
<br />
<div class="step-container">

    <h3 class="heading">how it works</h3>

    <section class="steps">

        <div class="box">
           

            <img src={logo}  /> 
           
           
           
            <h3>choose foods</h3>
        </div>
        <div class="box">
            <img src={step2} alt="" />
            <h3>fast delivery</h3>
        </div>
        <div class="box">
            <img src={step3} alt="" />
            <h3>easy payments</h3>
        </div>
        <div class="box">
            <img src={step4} alt="" />
            <h3>enjoy your food</h3>
        </div>
    
    </section><br /><br />
    
<section class="review" id="review">

<h3 class="heading"> our customers <span>reviews</span> </h3>

<div class="box-container">

    <div class="box">
    <img src={cally} alt="" />
        <h3>Lucy</h3>
        <div class="stars">
            <i class="fas fa-star" style={{ color: "#FDCC0D"}}></i>
            <i class="fas fa-star" style={{ color: "#FDCC0D"}}></i>
            <i class="fas fa-star" style={{ color: "#FDCC0D"}}></i>
            <i class="fas fa-star" style={{ color: "#FDCC0D"}}></i>
            <i class="far fa-star" style={{ color: "#FDCC0D"}}></i>
        </div>
        <p>The fastest way to search for great places to eat around you</p>
    </div>
    <div class="box">
    <img src={John} alt="" />
        <h3>John Doe</h3>
        <div class="stars">
            <i class="fas fa-star" style={{ color: "#FDCC0D"}}></i>
            <i class="fas fa-star" style={{ color: "#FDCC0D"}}></i>
            <i class="fas fa-star" style={{ color: "#FDCC0D"}}></i>
            <i class="fas fa-star" style={{ color: "#FDCC0D"}}></i>
            <i class="far fa-star" style={{ color: "#FDCC0D"}}></i>
        </div>
        <p>The ease of using the app. The UI of the app. Delivery services are amazing. Sending updates on your order is one of the finest thing </p>
    </div>
    <div class="box">
    <img src={office} alt="" />
        <h3>Ruhaiz</h3>
        <div class="stars">
            <i class="fas fa-star" style={{ color: "#FDCC0D"}}></i>
            <i class="fas fa-star"style={{ color: "#FDCC0D"}}></i>
            <i class="fas fa-star" style={{ color: "#FDCC0D"}}></i>
            <i class="fas fa-star" style={{ color: "#FDCC0D"}}></i>
            <i class="far fa-star" style={{ color: "#FDCC0D"}}></i>
        </div>
        <p>Ordering food from your favourite restaurant with fast delivery and polite delivery services always you can think of when you want to order food </p>
    </div>

</div>
<br/>
<br/>
<br/><br/><br/>

</section>

<section class="footer">

    <div class="box-container">

        <div class="box">
            <h3>locations</h3>
            <a href="#">Chennai</a>
            <a href="#">Trichy</a>
            <a href="#">Tirunelveli</a>
            <a href="#">Coimbatore</a>
            <a href="#">Madurai</a>
        </div>

        <div class="box">
            <h3>quick links</h3>
            <a href="/home">home</a>
            <a href="/login">login</a>
            <a href="/cart">cart</a>
         
        </div>

        <div class="box">
            <h3>contact info</h3>
            <a href="#">+91 9080676118</a>
            <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=abishekvijayarangan@gmail.com">abishekvijayarangan@gmail.com</a>
            <a href="https://en.wikipedia.org/wiki/Chennai">Chennai, India - 600000</a>
        </div>

        <div class="box">
            <h3>follow us</h3>
            <a href="https://www.instagram.com/abisheik_99/?igshid=ZDdkNTZiNTM%3D">instagram</a>
            <a href="https://www.linkedin.com/in/abisheik-vijayarangan-49a753192/">linkedin</a>
        </div>

    </div>

    <div class="credit"> copyright @ 2023 by <span>Abisheik</span> </div>

</section>


</div>



 </>



  )
}

export default Home;
