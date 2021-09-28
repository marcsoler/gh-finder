import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons/faGithub';

type NavbarProps = {
    title?: string,
};

const Navbar = ({title = 'Default'}: NavbarProps) => {
    return (
        <nav className="navbar bg-primary">
            <h1><FontAwesomeIcon icon={faGithub}/> {title}</h1>
        </nav>
    );
}

export default Navbar;
