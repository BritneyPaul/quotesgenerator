import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <Link to={'/'} style={{textDecoration:'none',textAlign: 'left', color:'black'}}><h1>Aesthetically a swiftie</h1></Link>
            <Link to={'/about'} style={{fontSize: '1.125rem'}} className='navlink' >About</Link>
            {/* <p style={{textAlign: 'left'}}>insert some ts quote here oh an idea.... insert blondies world pinterest board photos.</p> */}

            <h2 className='header_banner'>Taylor swift quotes</h2>
        </header>
    );
}

export default Header;

