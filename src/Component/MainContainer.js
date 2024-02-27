import React from 'react';
import wix from '../Image/wix.png';
// import StarRating from './StarRating';
import './mainContainer.scss';

const MainContainer = ({ obj }) => {
  const isFourthRectangle = obj.numb === 4;
  return (
    <div className='mainContainer'>
      <div className='button'>
        {obj.button && (
          <button className='btn'>
            {obj.trophyicon && <obj.trophyicon sx={{ marginRight: '2px' }} />}
            {obj.button}
          </button>
        )}
      </div>
      <div className={`rectangle ${isFourthRectangle ? 'fourth-rectangle' : ''}`}>
        <div className='image-box'>
          <div className='number-box'>
            <h3>{obj.numb}</h3>
          </div>
          <img src={wix} alt='Wix' />
          <p className='build'>Builder 1</p>
        </div>
        <div className='topic'>
        <h1 className='headtext'>{obj.headtext}</h1>
          <p className='topicHead'>{obj.text}</p>
          <h4>{obj.mainhighlight}</h4>
          {Array.isArray(obj.highlight) ? (
            <ul>
              {obj.highlight.map(point => (
                <li key={point.text} className='point-item'>
                  <div className='row-container'>
                    <button className='rating-button'>
                      <span className='point-rating'>{point.rating}</span>
                    </button>
                    <p className='point-text'>{point.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>{obj.highlight}</p>
          )}
          {Array.isArray(obj.document) && obj.document.length > 0 && (
            <ol>
              <p className='doumentPara'>Why we love it</p>
              {obj.document.map((doc, index) => (
                <li key={index} className='document-item'>
                  <div className='row-container'>
                    {/* {doc.icon && React.createElement(doc.icon, { className: 'check-icon' })} */}
                    {doc.icon && <doc.icon sx={{ backgroundColor: ' #F3F9FF', borderRadius: '50%', color: '#074786', height: '20px' }} />}
                    <p className='document-text'>{doc.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          )}
          <button className={`showbtn ${isFourthRectangle ? 'fourth-rectangle-showbtn' : ''}`}>
            {obj.show}
            {obj.arrowdown && <obj.arrowdown sx={{ width: 15, height: 15, color: '#1B88F4', marginLeft: '5px' }} />}
          </button>
        </div>
        <div className='rating'>
          <div className='ratingicon'>
            {obj.icon && <obj.icon sx={{ width: 10, height: 10, color: '#4B5665', marginLeft: '100px', marginBottom: '20px' }} />}
            <p>{obj.rating}</p>
            <p className='review'>{obj.except}
              {obj.ratingIcon && <obj.ratingIcon name="rating" value={9.8} precision={0.1} readOnly />}
            </p>
          </div>
          <div>
            <button className='viewbtn'>{obj.viewbtn}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
