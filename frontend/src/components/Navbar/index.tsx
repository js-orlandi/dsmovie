import { ReactComponent as GithubIcon } from 'assets/img/github.svg'
import './styles.css';

function Navbar() {

    return (
        <header>
            <nav className='container'>
                <div className='dsmovie-nav-content'>
                    <h1>DSMovie</h1>
                    <a href="https://github.com/js-orlandi">
                        <div className='dsmovie-contact-container'>
                            <GithubIcon />
                            <p className='dsmovie-contact-link'>/js-orlandi</p>

                        </div>
                    </a>

                </div>
            </nav>
        </header>
    );
}

export default Navbar;