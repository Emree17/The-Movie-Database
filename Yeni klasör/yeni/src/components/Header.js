import React from 'react'
import {Link} from 'react-router-dom'

const header = () => {
  return (
    <header>
        <div className='container'>
            <div className='inner-content' >
                <div className='brand' >
                    <Link to={"/"}>─░zlenecekler</Link>
                </div>

            <ul className='nav-links' >
            <li>
                <Link to={"/watched"}>─░zlenenler</Link>
            </li>
            <li>
                <Link to={"/add"} className="btn">
                <i className='fas fa-plus'>Anasayfa</i>
                </Link>
            </li>

            </ul>


            </div>
        </div>
    </header>
  )
}

export default header
