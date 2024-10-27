import { useState } from "react";
import "/src/style.css";
const Testimonials = () => {
    const [currentIndex,setCurrentIndex] = useState(0);

    const testimonials = [
        {
            quote:"This is the best product I've ever used!",
            author: "John Doe",
        },
        {
            quote: "I highly recommend this product to everyone!",
            author: "John Smith",
        },
        {
            quote:"I am using this product for last 2 months. It was great!",
            author:"Nick",
        },
        {
            quote:"The product was amazing! Highly recomended",
            author:"Troy",
        },
    ];

    const handlePrevClick = () =>{
        setCurrentIndex(currentIndex-1);
    }
    const handleNextClick = () =>{
       setCurrentIndex(currentIndex+1);
    }
  return (
    <div className="testimonials">
       <div className="testimonials-quote">
       {testimonials[currentIndex].quote}
       </div>

       <div className="testimonials-author">
       {testimonials[currentIndex].author}
       </div>

       <div className="testimonials-nav">
        <button onClick={handlePrevClick}> Prev</button>
        <button onClick={handleNextClick}> Next</button>
       </div>
    </div>
  )
}

export default Testimonials
