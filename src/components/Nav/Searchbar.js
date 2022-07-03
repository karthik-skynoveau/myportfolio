import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineSearch } from "react-icons/ai";
import './Searchbar.css'

function Searchbar() {

    return (
        <div>
            <div className="searchContainer">
                <div className='searchSubContainer'>
                    <input type="text" placeholder='Search..' className="Search" />
                    <Link style={{ color: 'white' }}>
                        <AiOutlineSearch className='searchicon' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Searchbar
