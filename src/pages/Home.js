import React from 'react';
import styled from 'styled-components';
import './Home.css';
const theme = {
    blue: {
        default: '#3f51b5',
        hover: '#283593'
    }
}



const Button = styled.button`
background-color: ${props => theme[props.theme].default};
color: white;
padding: 5px 15px;
border-radius: 5px;
outline: 0;
text-transform: uppercase;
margin: 10 px 0px;
cursor: pointer;
box-shadow: 0px 2px 2px lightgray;
transition: ease background-color 250ms;
&:hover {
    background-color: ${props => theme[props.theme].hover};
}
`

Button.defaultProps = {
    theme: 'blue'

}






function Homepage() {
  return (
 
   <div>
   <h1>The Only Fitness App You Need</h1>
  <a href="/Login" target="_blank">
   <Button>
Get Started
   </Button>
   </a>
   <main>
   <body>
   <div class="image-grid">
    <img class="image-grid-col-2 image-grid-row-2" src="https://www.eatthis.com/wp-content/uploads/sites/4/2020/01/man-weight-lifting-training-workout-gym.jpg?quality=82&strip=1&w=640" alt="lifting-weights"></img>
   
   <p className="why">why you should join? we offer an expert level of instructions and Transform your health, fitness and mindset with Oscar Hernandez's team of world-class experts . Follow personalized workout programs in one easy-to-use digital platform.</p>
   </div>
   <div className="offerbutton">
   <a href="#!" class="modal-close waves-effect waves-green btn-flat">
   <button type="button" >PRO OFFER: save 25%</button>
</a>
    </div>
    </body>
<section className="box-root">
    <div className="box1">
    <div className="box2">
   
    <div className="box3">
    <h2 className="specialized">Specialized programs</h2>
    <div className="box4">
    <h3 className="Find">Find the perfect short-term training program for your goals.</h3>
    </div>
    </div>
    <div className="box-root2">
        <span className="prevlabel">
         <button className="prevbutton" type="button" aria-label="previous-program">   <i className="material-icons">arrow_back</i></button>
        </span>
    
    
<span className="folllabel">
<button className="nextbutton" type="button" aria-label="following-program">   <i className="material-icons">arrow_forward</i></button>

</span>
<div className="bicont">
<div className="draggablecont">
<div className="carouselcont">
<img className="runninggirl" src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/rockcms/2021-12/211208-working-out-stock-mn-1310-55e1c7.jpg" alt= "" />
</div>
</div>
</div>
</div>
    </div>
    </div>
    </section>

</main>
</div>
   
  );
}
export default Homepage;  


