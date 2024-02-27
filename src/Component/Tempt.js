import React from 'react'
import RelatedDetails from './RelatedDetails'
import parentdata from './Parentdata';
import './tempt.scss'
const Tempt = () => {
    return (
        <div className='tempt'>
            <div className='details_head'>
                <h1>Related deals you might like for</h1>
            </div>
            <div className='alphadata'>
                <RelatedDetails alpha={parentdata[0]} />
                <RelatedDetails alpha={parentdata[1]} />
                <RelatedDetails alpha={parentdata[2]} />
            </div>
        </div>
    )
}

export default Tempt
