import Image from "next/image";
import logoImage from '@/assets/images/logo.png'

export default function Footer() {
    return <section className="py-16">
        <div className="container">
            <div className="flex flex-col md:flex-rox md:justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    <Image src={logoImage} alt="layers Logo" className="h-9 w-auto md:w-auto" />
                    <span className="text-gray-300 text-lg md:text-xl font-bold">IPTV SERVICE </span>
                </div>
            </div>
        </div>
    </section>;
}
