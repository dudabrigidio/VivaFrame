import { useRouter } from "next/router";

export default function Cabecalho() {
    const router = useRouter();

    const route = () => {
        router.push('/outra-pagina');
    };
    return (
        
        <>
            <button onClick={route}>Nossos Serviços</button>
    
        </>
    );
}