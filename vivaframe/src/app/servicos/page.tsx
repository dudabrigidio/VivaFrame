import Rodape from "@/components/Rodape/Rodape";
import Image from "next/image";

export default function Servicos() {

    return (
        <>

            <section className="flex flex-row bg-ice text-grayDark justify-center items-center h-screen p-20 gap-x-20">
                <div className="flex flex-col gap-y-10 justify-center  h-[45%]">
                    <h1 className="flex-1 text-[3.8rem] leading-none tracking-tight h-min">Transformando eventos em memórias inesquecíveis</h1>
                    <p className="flex-2 w-[90%] text-[1.0rem]">Oferecemos fotografias e vídeos para casamentos, festas, shows, eventos corporativos e empresariais. <br/> Nosso foco é registrar detalhes únicos e transformar cada momento em histórias contadas com qualidade</p>

                </div>
                
                <Image 
                        src="/img/servicos1.svg" 
                        alt="cantor"
                        width={500} 
                        height={500} 
                        className="h-[75%]"
                    />
            </section>

            <section className="flex flex-col">
                <div className="flex flex-row">
                    <div className="flex flex-col">
                        <h2>CASAMENTOS</h2>
                        <p>Registre o dia mais especial da sua vida com fotos e vídeos que eternalizam cada detalhe, emoção e sorriso. Transformamos o seu casamento em uma história para ser revivida para sempre</p>
                    </div>
                    

                </div>

                <div className="flex flex-row">
                    img

                    <div className="flex flex-col">
                        <h2>SHOWS</h2>
                        <p></p>
                    </div>

                </div>

                <div className="flex flex-row">
                    <div className="flex flex-col">
                        <h2>EMPRESARIAL & CORPORATIVO</h2>
                        <p></p>
                    </div>
                    img

                </div>

                <div className="flex flex-row">
                    <div className="flex flex-col">
                        <h2>EVENTOS & FESTAS</h2>
                        <p>e</p>
                    </div>
                    img

                </div>


                <button>FAÇA O ORÇAMENTO</button>

            </section>

            <Rodape/>
        </>
    );
}