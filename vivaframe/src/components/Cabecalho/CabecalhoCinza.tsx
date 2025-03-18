
"use client";

import Image from "next/image";
import Link from "next/link";




export default function CabecalhoCinza({scrollToEnd} : {scrollToEnd: () => void}){
    

    
    return (
        <div className="flex flex-row items-center mt-5">
            <Image  
                src="/img/viva-logo-c.png" 
                alt="logo"
                width={60} 
                height={60} 
                className="ml-10 w-[70px] h-[60px] md:w-[50px] md:h-[40px] md:ml-2" 
                
                />
            <div className="flex gap-8 md:gap-4 justify-end items-center w-full absolute pr-10 sm:pr-4 sm:text-[15px]">
                <Link href="/"> 
                    <button>
                    HOME
                    </button>
                </Link>
                <button onClick={scrollToEnd}>CONTATO</button>

                <Link  href="https://www.instagram.com/viva.frame?igsh=M2p6d29nM2RqZGtr&utm_source=qr" className="">
                    <Image 
                    src="/img/insta-c.png" 
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