
function Footer() {
    return (
        <footer className="footer-container">
            <h1><b>Pinterest</b></h1>
            <input type="button" onClick={() => window.location.href='https://nl.pinterest.com/brritneyy/this-is-blondies-world-and-were-just-living-in-it/'} className="btnFooter" value="Pinterest"/>
            <p>Inspired by <i>
                This is blondie's world and we're just living in it</i> pinterest board</p>
            <br />
            <p>Made by Britney Paul</p>
            <div>
                © {new Date().getFullYear()} Copyright
            </div>
        </footer>
    );
}

export default Footer;

