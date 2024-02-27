import React from 'react'
import './heading.scss'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Heading = () => {
    return (
        <div className='heading'>
            <h1>Best Website builders in the US</h1>
            <div className='para'>
                <CheckCircleOutlineIcon sx={{ width: 20, height: 20, color: '#4B5665' }} />
                <p>Last Updated -</p><span>February 22, 2020</span>
                <InfoOutlinedIcon sx={{ width: 20, height: 20, color: '#4B5665', marginLeft: '30px' }} />
                <p>Advertising Disclosure</p>
                <div className='toprelevant'>
                    <p className='top'>Top Relevant<KeyboardArrowDownIcon sx={{ width: 20, height: 20, color: '#4B5665' }} /></p>
                </div></div>
            <div className="header2">
                <p className='hov'>Tools</p>
                <p className='hov'>AWS Builder</p>
                <p className='hov'>Start Builds</p>
                <p className='hov'>Bulid Supplies</p>
                <p className='hov'>Tooling</p>
                <p className='hov'>Blue Hosting</p>
            </div>
            <div className='header3'>
                <ul className='breadcrumb'>
                    <li>Home <ArrowForwardIosIcon sx={{ width: 15, height: 15, color: '#4B5665' }} /></li>
                    <li>Hosting for all <ArrowForwardIosIcon sx={{ width: 15, height: 15, color: '#4B5665' }} /></li>
                    <li>Hosting <ArrowForwardIosIcon sx={{ width: 15, height: 15, color: '#4B5665' }} /></li>
                    <li>Hosting6 <ArrowForwardIosIcon sx={{ width: 15, height: 15, color: '#4B5665' }} /></li>
                    <li>Hosting5</li>
                </ul>
            </div>

        </div>
    )
}

export default Heading;
