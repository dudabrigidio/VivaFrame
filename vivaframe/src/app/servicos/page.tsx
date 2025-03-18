"use client";
import CabecalhoCinza from "@/components/Cabecalho/CabecalhoCinza";
import Carousel from "@/components/Carousel";
import Rodape from "@/components/Rodape/Rodape";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function Servicos() {

    const endRef = useRef<HTMLDivElement>(null);
    
    const scrollToEnd = () => {
        endRef.current?.scrollIntoView({ behavior: 'smooth' });
    }

    const imagesCarouselShow= [
        "/img/show1.svg",
        "/img/show2.svg",
        "/img/show3.svg",
        "/img/show4.svg",
        "/img/show5.svg",
    ];

    const imagesCarouselEventos= [
        "/img/retiro1.svg",
        "/img/retiro2.svg",
        "/img/retiro3.svg",
        "/img/retiro4.svg",
        "/img/retiro5.svg",
        "/img/retiro6.svg",
        "/img/retiro7.svg",
    ];

    return (
        <main className="w-max-full overflow-x-hidden">

        <section className="w-full h-screen flex text-grayDark min-h-screen">
                <div className="flex flex-row lg:flex-col min-h-screen py-20 md:py-0 md:mt-20 ml-0 items-center overflow-hidden">
                        
                    <div className="absolute top-0 left-0 w-full" >
                        <CabecalhoCinza scrollToEnd={scrollToEnd} />
                    </div>
                        
                    <div className="flex flex-row md:flex-col md:gap-y-20 justify-center items-center h-screen m-20 mb-0 pt-20 gap-x-20 md:ml-20 md:mt-20 md:mr-8 lg:mt-0">

                        <div className="flex flex-col gap-y-10 my-0 justify-center items-center md:text-end h-[45%] w-[50%] lg:w-[90%] lg:h-full lg:h-[30%]">
                            <h1 className="text-[3.8rem] lg:text-[3.0rem] leading-none tracking-tight h-min">Transformando eventos em memórias inesquecíveis</h1>
                            <p className=" w-[90%] text-[1.0rem] md:w-full">Oferecemos fotografias e vídeos para casamentos, festas, shows, eventos corporativos e empresariais. <br/> Nosso foco é registrar detalhes únicos e transformar cada momento em histórias contadas com qualidade</p>
                        </div>
                        
                        <div className="flex md:items-center">
                            <Image 
                                src="/img/servicos1.svg" 
                                alt="cantor"
                                width={500} 
                                height={500} 
                                className="h-[100%] w-[900px] h-[700px] lg:w-[100%] md:w-[90%] md:h-[300px] md:mt-20 "
                            />
                        </div>
                        
                    </div>
                </div>
            </section>
            

            <section className="flex flex-col bg-grayLight text-white p-10 py-20 px-20 gap-y-20 items-center overflow-hidden md:p-10 md:gap-y-20">
                <div className="flex flex-row min-h-[480px] md:flex-col md:gap-y-20 md:mt-10">
                    <div className="flex flex-col mr-20 gap-10 justify-center md:items-center md:mr-0">
                        <h1 className="text-[3.5rem] ">CASAMENTOS</h1>
                        <p className="text-[1.1rem] w-[90%] md:text-center ">Registre o dia mais especial da sua vida com fotos e vídeos que eternizam cada detalhe, emoção e sorriso. Transformamos o seu casamento em uma história para ser revivida para sempre.</p>
                    </div>
                    <Image 
                        src="/img/casamento.svg" 
                        alt="casamento"
                        width={600} 
                        height={200} 
                        className="max-h-[480px]" 
                    />

                </div>

                <div className="flex flex-row md:flex-col-reverse items-center min-h-[480px] md:p-10 md:gap-y-20 ">
                    
                    <Carousel images={imagesCarouselShow}/>

                    <div className="flex flex-col gap-10 justify-center items-end md:items-center">
                        <h1 className="text-[3.5rem]">SHOWS</h1>
                        <p className="text-[1.1rem] text-right w-[90%]  md:text-center ">Imortalize a energia e a emoção do seu evento musical com registros únicos que capturam a vibração do público e a intensidade das apresentações.</p>

                    </div>

                </div>

                <div className="flex flex-row md:flex-col min-h-[480px] md:p-10 md:gap-y-20 ">
                    <div className="flex flex-col mr-20 gap-10 md:justify-center lg:justify-start md:items-center md:mr-0">
                        <h1 className="text-[3.5rem] md:text-center">EMPRESARIAL & CORPORATIVO</h1>
                        <p className="text-[1.1rem] w-[90%]  md:text-center">Destaque sua marca com fotos e vídeos profissionais para eventos corporativos, conferências, treinamentos, workshops e eventos empresariais. Registros que traduzem profissionalismo e impacto, fortalecendo sua imagem e comunicação com qualidade e elegância.</p>

                    </div>
                    <video 
                        src="/videos/empresa.mp4" 
                        width={600} 
                        height={200} 
                        className="max-h-[480px]" 
                        controls 
                        autoPlay 
                        loop 
                        muted 
                    />


                </div>

                <div className="flex flex-row md:flex-col-reverse min-h-[800px] md:p-10 md:gap-y-20 ">

                    <Carousel images={imagesCarouselEventos}/>

                    <div className="flex flex-col gap-10 justify-center md:items-center items-end">
                        <h1 className="text-[3.5rem]">EVENTOS & FESTAS</h1>
                        <p className="text-[1.1rem] w-[90%] text-right xl:ml-20">Seja aniversário, formatura, retiro ou uma comemoração especial, capturamos a alegria e os momentos inesquecíveis com imagens e vídeos cheios de vida.</p>     
                    </div>
                    

                </div>


                <Link href="https://wa.me/5511991344975?text=Gostaria%20de%20um%20or%C3%A7amento%20para%20fotos%20e%20v%C3%ADdeos%20com%20a%20VivaFrame!"> 
                    <button className="uppercase border-2 py-6 px-[100px] text-s tracking-widest my-20">
                    FAÇA O ORÇAMENTO
                    </button>
                </Link>

            </section>

            <Rodape/>
        </main>
    );
}