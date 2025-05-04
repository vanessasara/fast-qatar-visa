import Tag from "@/components/Tag";
import huluLogo from '@/assets/images/hulu-logo.jpg'
import hboLogo from '@/assets/images/hbo-logo.jpg'
import netflixLogo from '@/assets/images/netflix-logo.jpg'
import vimeoLogo from '@/assets/images/vimeo-logo.jpg'
import youtubeLogo from '@/assets/images/youtube-logo.jpg'
import vuduLogo from '@/assets/images/vudu-logo.jpg'
import IntegrationsColumn from "@/components/IntegrationsColumn";


const integrations = [
    { name: "Hulu", icon: huluLogo, description: "Hulu is a streaming service offering a variety of TV shows, movies, and original content." },
    { name: "HBO MAX", icon: hboLogo, description: "HBO Max is a premium streaming platform featuring HBO originals, movies, and exclusive content." },
    { name: "Netflix", icon: netflixLogo, description: "Netflix is a global streaming service providing a vast library of TV series, films, and documentaries." },
    { name: "Vimeo", icon: vimeoLogo, description: "Vimeo is a video-sharing platform focused on high-quality, ad-free streaming for creators." },
    { name: "YouTube TV", icon: youtubeLogo, description: "YouTube TV is a live TV streaming service with major broadcast and cable networks." },
    { name: "Vudu", icon: vuduLogo, description: "Vudu is a digital video rental and streaming service offering movies and TV shows on demand." },
];


export type IntegrationsType = typeof integrations

export default function Integrations() {
    return <section className="py-24 overflow-hidden" id="integrations">
        <div className="container">
            <div className="grid lg:grid-cols-2 items-center lg:gap-16">

                <div>
                    <Tag>Integrations</Tag>
                    <h2 className="text-6xl font-medium mt-6">Plays well with <span className="text-lime-400">Others</span></h2>
                    <p className="text-white/50 mt-4 text-lg">
                        Seamlessly connect with top streaming platforms like Hulu, HBO Max, Netflix, Vimeo, YouTube TV, and Vudu.
                        Enjoy a hassle-free experience with your favorite content providers, all in one place.
                    </p>

                </div>
                <div>

                    <div className="h-[400px] lg:h-[800px] mt-8 lg:mt-0 overflow-hidden grid md:grid-cols-2 gap-4 [mask-image:linear-gradient(to_bottom,transparent,transparent,black_10%,black_90%,transparent)]">
                        <IntegrationsColumn integrations={integrations} />
                        <IntegrationsColumn integrations={integrations.slice().reverse()}
                            reverse
                            className="hidden md:flex" />
                    </div>
                </div>
            </div>
        </div>
    </section>;
}
