import { useLocation, Link } from 'react-router-dom';
import './appHeader.scss';

const AppHeader = () => {
    const location = useLocation();

    return (
        <header className="app__header">
            <h1 className="app__title">
                <a href="#top">
                    <span>Marvel</span> information portal
                </a>
            </h1>
            <nav className="app__menu">
                <ul>
                    <li>
                        <Link to="/characters" style={{ color: `${location.pathname === '/characters' ? '#9F0013' : 'black'}` }}>
                            Characters
                        </Link>
                    </li>
                    /
                    <li>
                        <Link to="/comics" style={{ color: `${location.pathname === '/comics' ? '#9F0013' : 'black'}` }}>
                            Comics
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;
