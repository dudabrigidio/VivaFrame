"use client";
import BackgroundVideo from "@/components/Background";
import Cabecalho from "@/components/Cabecalho/Cabecalho";
import Rodape from "@/components/Rodape/Rodape";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";


export default function App() {

  const endRef = useRef<HTMLDivElement>(null);

  const scrollToEnd = () => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <main>

      
        <section className="w-full h-screen flex text-white min-h-screen">
        <BackgroundVideo/>
        <div className="flex min-h-screen">

            <div>
                <Cabecalho scrollToEnd={scrollToEnd}/>
            </div>
            
            <div className="flex flex-col justify-center items-center uppercase mt-20">
              
                <h1 className="text-[4.7rem]">VIVAFRAME</h1>
                <p className="text-justify tracking-widest">Especialistas em fotografia e vídeos <br />para eventos sociais e corporativos</p>
                <button onClick={scrollToEnd} className="uppercase border py-2 w-[60%] my-10 text-xs tracking-widest" >Entre em contato</button>
                
            </div>
        </div>
            
            
        </section>




        <section className="flex flex-col bg-ice text-grayDark justify-center items-center py-20">
            <h1 className="text-[3.0rem] ">NOSSOS SERVIÇOS</h1>
            <div className="flex flex-row gap-20 my-20 mx-20 ">

              <div className="flex flex-col gap-10 items-center">
                <Image 
                src="/img/servico1.png" 
                alt="Instagram"
                width={200} 
                height={200} 
                className="" 
                />
                <p className="text-center">Registros autênticos que capturam a essência de cada momento</p>
                
              </div>
              
              <div className="flex flex-col gap-10 items-center">

                <Image 
                src="/img/servico2.png" 
                alt="Instagram"
                width={200} 
                height={200} 
                className="" 
                />
                <p className="text-center">Produções com qualidade de cinema para eternizar o seu evento.</p>
                
              </div>

              <div className="flex flex-col gap-10 items-center">
                <Image 
                src="/img/servico3.png" 
                alt="Instagram"
                width={200} 
                height={200} 
                className="" 
                />
                <p className="text-center">Do início ao fim, cada detalhe do seu evento registrado com excelência</p>
              </div>

              <div className="flex flex-col gap-10 items-center">
                <Image 
                src="/img/servico4.png" 
                alt="Instagram"
                width={200} 
                height={200} 
                className="" 
                />
                <p className="text-center">Conteúdo impactante e criativo para destacar seu evento nas plataformas digitais.</p>
              </div>


            </div>
        </section>

        <section className="bg-foto min-h-screen text-white">
            <h1 className="text-[3.8rem] tracking-tighter leading-none ml-20 pt-20">Sua história contada em cada imagem,<br/> vivida em cada vídeo</h1>
            <Link href="/servicos"> 
                    <button className="uppercase border-2 py-4 w-[28%] mt-10 text-s ml-20 tracking-widest">
                    NOSSOS SERVIÇOS
                    </button>
            </Link>
        </section>


        <section ref={endRef}>
            <Rodape/>
        </section>
        


      </main>
    </>
  );
}
