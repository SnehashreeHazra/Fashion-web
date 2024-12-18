import React from 'react';
import cardImage1 from "../../assets/card-image1.png";
import cardImage2 from '../../assets/card-image2.png';
import cardImage3 from '../../assets/card-image3.png';
import './Arrival-section.css';

function ArrivalSection() {
  const cards = [
    {
      title: "Hoodies & Sweatshirt",
      image: cardImage1,
      description: "Explore Now!"
    },
    {
      title: "Coats & Parkas",
      image: cardImage2,
      description: "Explore Now!"
    },
    {
      title: "Tees & T-Shirt",
      image: cardImage3,
      description: "Explore Now!"
    }
  ]
  return (
    
          <div className='container'>
      <div className="new-arrivals">
          <h2>NEW ARRIVALS</h2>
      </div>
      <div className='card-container'>
        {cards.map((card,index)=>(
          <div className='card' key={index}>
            <img src={card.image} alt={card.title} className='card-image' />
            <div className='together'>
            <div>
            <h3 className='card-title'>{card.title}</h3>
            <p className='card-description'>{card.description}</p>
            </div>
            <span className='arrow'>&rarr;</span>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    
  )
}

export default ArrivalSection;