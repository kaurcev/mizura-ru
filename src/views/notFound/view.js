import Header from "../../components/header/comp";
import Footer from "../../components/footer/comp";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useAppContext } from "../../Application";

export default function E404View(){    
    const { setTitle, labels } = useAppContext();
    
    useEffect(() => {
        setTitle(labels.title_notfound);
    }, [setTitle, labels]);
    return (
        <>
        <Header />
            <main className="centered">
                <h1>404</h1>
                <p>{labels["info_notFound"]}</p>
                <Link to="/">{labels["to_home"]}</Link>
            </main>
        <Footer />
        </>
    )
}