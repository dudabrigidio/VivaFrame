import Image from "next/image";
import Link from "next/link";

export default function Rodape() {
    return (
        <footer >

            <div className="flex flex-row w-screen text-grayDark bg-white md:my-20">

                <div className="flex-1 flex flex-col justify-center items-center ml-10 md:ml-0 md:mt-5">
                    <h1 className="text-[3rem] md:text-[2.3rem]">CONTATOS</h1>
                    
                    <h3 className="pt-10 pb-2">EMAIL</h3>
                    <a href="email:vivaframe.oficial@gmail.com">vivaframe.oficial@gmail.com</a>
                
                    <h3 className="pt-10 pb-2">TELEFONE</h3>
                    <a href="tel:+551199134-4975">(11) 99134-4975</a>

                    <div className="flex flex-row gap-4 pt-10">
                    <Link href="https://www.instagram.com/viva.frame?igsh=M2p6d29nM2RqZGtr&utm_source=qr" className="">
                        <Image 
                        src="/img/icon1.png" 
                        alt="Instagram"
                        width={40} 
                        height={40} 
                        className="" 
                        
                        />
                    </Link>
                    <Link  href="https://wa.me/5511991344975?text=Gostaria%20de%20um%20or%C3%A7amento%20para%20fotos%20e%20v%C3%ADdeos%20com%20a%20VivaFrame!" >
                        <Image 
                        src="/img/icon2.png" 
                        alt="Instagram"
                        width={40} 
                        height={40} 
                        className="" 
                        
                        />
                    </Link>

                    </div>
                    
                </div>
                

                <div className="flex-2 md:absolute b-0 md:opacity-0">
                    <Image 
                    src="/img/viva-rodape.svg" 
                    alt="Rodape-logo"
                    width={600} 
                    height={300} 
                    className="" 
                    />
                </div>
                
            </div>
            
        </footer>
    );
}