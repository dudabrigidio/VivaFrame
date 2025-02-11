
"use client";

import Image from "next/image";
import Link from "next/link";




export default function Cabecalho({scrollToEnd} : {scrollToEnd: () => void}){
    

    
    return (
        <div className="flex flex-row items-center mt-5">
            <Image  
                src="/img/viva-logo.png" 
                alt="logo"
                width={60} 
                height={50} 
                className="ml-10 " 
                
                />
            <div className="flex gap-8 justify-end w-full absolute pr-10">
                <Link href="/servicos"> 
                    <button>
                    NOSSOS SERVIÇOS
                    </button>
                </Link>
                <button onClick={scrollToEnd}>CONTATO</button>

                <Link  href="" className="">
                    <Image 
                    src="/img/insta.png" 
                    alt="Instagram"
                    width={24} 
                    height={20} 
                    className="" 
                    
                    />
                </Link>
            </div>
            
        </div>
    );
}