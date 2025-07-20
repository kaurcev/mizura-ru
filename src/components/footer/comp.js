import { useAppContext } from '../../Application';
import './style.css';

const Footer = () => {
    const {version, versionstate} = useAppContext();
    return (
        <>
            <footer>
                <div className="footer">
                    mizura.ru, 2025 v{version} ({versionstate})
                </div>
            </footer>
        </>
    );
}

export default Footer;
