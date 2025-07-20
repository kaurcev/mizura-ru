import React, { useEffect } from "react";
import Header from "../../components/header/comp";
import Footer from "../../components/footer/comp";
import { useAppContext } from "../../Application";

export default function HomeView() {   
    const { setTitle, labels } = useAppContext();
    
    useEffect(() => {
        setTitle(labels.title_welcome);
    }, [setTitle, labels]);
    
    return (
        <>
            <Header />
            <main className="page">
                <h1>{labels["project_name"]}</h1>
                <p>{labels["project_desc"]}</p>
                <p className="mini">{labels["project_warn"]}</p>
            </main>
            <Footer />
        </>
    );
}