import { useAppContext } from '../../Application';
import './style.css';

const Header = () => {
    const {navigate, labels} = useAppContext();
    return (
        <>
            <header>
                <div className="header">
                    <div onClick={()=>navigate("/")} className='title'>
                        {labels["project_name"]}
                    </div>
                </div>
            </header>
        </> 
    );
}

export default Header;
