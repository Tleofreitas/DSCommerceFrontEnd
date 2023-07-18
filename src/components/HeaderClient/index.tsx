import { Link } from 'react-router-dom';
import CartIcon from '../CartIcon';
import './styles.css';

export default function HeaderClient() {

    return (
        <header className="dsc-header-client">
            <nav className="dsc-container">
                <Link to="/">
                    <h1>DSCommerce</h1>
                </Link>
                <div className="dsc-navbar-right">
                    <div className="dsc-menu-items-container">
                        <Link to="/cart">
                            <div className="dsc-menu-item">
                                <CartIcon />
                            </div>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}