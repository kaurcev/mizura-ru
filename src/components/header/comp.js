import { useAppContext } from '../../Application';
import './style.css';

const Header = () => {
    const {navigate} = useAppContext();
    return (
        <>
            <header>
                <div className="header">
                    <div onClick={()=>navigate("/")} className='title'>
                        Mizura Platform
                    </div>
                </div>
            </header>
        </> 
    );
}

export default Header;
