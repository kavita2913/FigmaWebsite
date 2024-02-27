import React from 'react'
import './relatedDetails.scss'
import wix from '../Image/wix.png';

const RelatedDetails = ({ alpha }) => {
  return (
    <div>

      <div className='details'>
        <div className='detailsbox'>
          <div className='card'>
            <div className='image-box'>
              <img src={wix} alt='Wix' />
            </div>
            <div className='detailbutton'>
              <button>{alpha.button}</button>
              <button>{alpha.button1}</button>
            </div>
            <h1>{alpha.heading}</h1>
            <p>{alpha.para}</p>

            <div className='price'>
              <p className='disprice'>{alpha.price.discounted}</p>
              <p className='original'>{alpha.price.original}</p>
              <p className='discount'>({alpha.price.discountPercentage})</p>

            </div>
            <button className='viewbtn'>{alpha.viewbtn}</button>

          </div>
        </div>

      </div>
    </div>
  )
}

export default RelatedDetails
