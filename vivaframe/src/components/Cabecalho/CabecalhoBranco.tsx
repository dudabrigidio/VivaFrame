
"use client";

import Image from "next/image";
import Link from "next/link";




export default function CabecalhoBranco({scrollToEnd} : {scrollToEnd: () => void}){
    

    
    return (
        <div className="flex flex-row items-center mt-5">
            <Image  
                src="/img/viva-logo-b.png" 
                alt="logo"
                width={60} 
                height={60} 
                className="ml-10 w-[60px] h-[60px] md:w-[40px] md:h-[40px]" 
                
                />
            <div className="flex gap-8 md:gap-4 justify-end items-center w-full absolute pr-10 sm:pr-4 sm:text-[15px]">
                <Link href="/servicos"> 
                    <button>
                    NOSSOS SERVIÇOS
                    </button>
                </Link>
                <button onClick={scrollToEnd}>CONTATO</button>

                <Link  href="https://www.instagram.com/viva.frame?igsh=M2p6d29nM2RqZGtr&utm_source=qr" className="">
                    <Image 
                    src="/img/insta-b.png" 
                    alt="Instagram"
                    width={24} 
                    height={20} 
                    className="md:ml-2" 
                    
                    />
                </Link>
            </div>
            
        </div>
    );
}