import React from "react";
import TextoPrincipal from "./Texto_Principal";
import Imagem from "./Imagem";
import "./Quem_Somos.css";
import TituloSubtitulo from "./Titulo_Subtitulo";

export default function Quem_Somos() {
    return (
        <div className="quem-somos-section">
            <TituloSubtitulo />
            <div className="conteudo">
                <TextoPrincipal />
                <Imagem />
            </div>
        </div>
    );
}
