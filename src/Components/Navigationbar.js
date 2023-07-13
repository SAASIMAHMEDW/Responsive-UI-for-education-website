import {Nav,Navbar,NavLink} from "react-bootstrap";
import {Link} from "react-router-dom"
// import "bootstrap/dist/css/bootstrap.css"
// import "bootstrap/dist/js/bootstrap.bundle.js"

const Navigationbar = ()=>{
    return (
        <>
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="navbarScroll" data-bs-target="#navbarScroll"/>
            <Navbar.Collapse id="navbarScroll">
                <Nav>
                    <NavLink eventKey="1" as={Home} to="/">Home</NavLink>
                    <NavLink eventKey="2" as={Link} to="/About">About</NavLink>
                    <NavLink eventKey="3" as={Link} to="/Course">Course</NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </>
    )
}

export default Navigationbar;
