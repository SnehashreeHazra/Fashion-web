import React from 'react'
import './FavouriteSection.css'
import Image1 from '../../assets/favourite-img1.png'
import Image2 from '../../assets/favourite-img2.png'
import LeafImage from '../../assets/leaf.png'

function FavouriteSection() {
  const items = [
    {
      title: "Trending on Instagram",
      image: Image1,
      description: "Explore Now!"
    },
    {
      title: "Coats & Parkas",
      image: Image2,
      description: "Explore Now!"
    }
    
  ]
  return (
    <div className='whole-container'>
      <div className="youngs-favourite">
      <span>Young's Favourite</span>
      <img src={LeafImage} alt="Leaf Underline" className='underline' />
      </div>
      <div className='cards-container'>
        {items.map((card,index)=>(
          <div className='cards' key={index}>
            <img src={card.image} alt={card.title} className='cards-image' />
            <div className='together'>
            <div>
            <h3 className='cards-title'>{card.title}</h3>
            <p className='cards-description'>{card.description}</p>
            </div>
            <span className='arrow'>&rarr;</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FavouriteSection
