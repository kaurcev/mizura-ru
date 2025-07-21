import { Link } from 'react-router-dom';
import { useAppContext } from '../../Application';
import './style.css';

const Footer = () => {
    const {
        version,
        versionstate,
        author,
        kaurcevdev,
        github,
        language,
        setLanguage,
        labels
    } = useAppContext();

    return (
        <footer>
            <div className="footer">
                <p>mizura.ru, 2025 v{version} ({versionstate})</p>
                <p className='row center'>
                    <Link to='/privacy'>Политика конфиденциальности</Link>
                    <Link to='/tos'>Пользовательское соглашение</Link>
                    <Link to='/cookies'>Политика использования файлов cookie</Link>
                </p>
                <p className='row center'>
                    <Link target='_blank' to={github}>
                        <i className="fa fa-github" aria-hidden="true"></i> <span>{labels.project_info}</span>
                    </Link>
                    <Link to={kaurcevdev}>{author}</Link>
                </p>
                <div className="center language-switcher">
                    <button
                        className={language === 'ru' ? 'active' : ''}
                        onClick={() => setLanguage('ru')}
                    >
                        RU
                    </button>
                    <button
                        className={language === 'en' ? 'active' : ''}
                        onClick={() => setLanguage('en')}
                    >
                        EN
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;