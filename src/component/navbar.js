import '../style/navbar.css'
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { useState } from "react"

function NavBar(){
    const [toggleOpen, toggleState] = useState(false);

    return (
        <nav className='nav'>
            <div>Anthony LO</div>
            <div className='toggle' onClick={() => {
                toggleState(!toggleOpen);
            }}>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </div>
            <ul className={toggleOpen ? "open": ''}>
                <CustomLink to="/website">Home</CustomLink>
                <CustomLink to="/about">About</CustomLink>
                <CustomLink to="/skills">Skills</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props}){
    const useResolvePath = useResolvedPath(to)
    const isActive = useMatch({path: useResolvePath.pathname, end: true})
    return(
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    );
}

export default NavBar