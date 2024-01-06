
import React from 'react'
//import { Button } from 'bootstrap'
import {Link} from 'react-router-dom'
const HeaderComponent = () => {
    return (
        <div>
            <header>
                <nav className = "navbar navbar-expand-md navbar-dark bg-dark">
                    <div>
                        <a href = "https://javaguides.net" className = "navbar-brand">
                            FITNESS FREAKS
                        </a>
                         
                <Link to='/about' >About</Link>
                    <Link to='/contact'>Contact</Link>
                    <Link to='/detail'>Detail</Link>
                    <Link to='/blog'>Blog</Link>

                    
                    </div>

                </nav>
            </header>
        </div>
    )
}

export default HeaderComponent