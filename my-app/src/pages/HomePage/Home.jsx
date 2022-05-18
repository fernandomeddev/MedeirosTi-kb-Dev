import React, {useState} from "react";

import Loading from "../../components/Loading";
import Menu from '../../components/Menu';
import Content from "../../components/Content";
import Footer from "../../components/Footer";



function Home() {
    
    //Simulador de um loading State usando o Hook (useState do React)
    const [doLoading, setdoLoading] = useState(true)

    function stopLoading(){
        setdoLoading(false)
    }

    function startLoading(){
        setdoLoading(true)
    }

    if(doLoading){
        return(
            <div>
                <Loading />

                <button className="btn btn-warning" type="button" onClick={stopLoading}>
                    Parar o Carregamento da Página.
                </button>
            </div>
        )
    }

    return (
        
        <div className="container-fluid">
            <Menu />

            <Content />

            <Footer />

            <button className="btn btn-warning" type="button" onClick={startLoading}>
                Simular o  Carregamento da Página.
            </button>

        </div>
    )
}

export default Home;