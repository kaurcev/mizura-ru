import { useAppContext } from '../../Application';
import './style.css';

const Header = () => {
    const { navigate, labels, logo } = useAppContext();
    return (
        <>
            <header>
                <div className="header">
                    <div onClick={() => navigate("/")} className='title'>
                        <img className="logo" src={logo} alt={labels["project_name"]} />
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;