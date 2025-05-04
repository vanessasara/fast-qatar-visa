'use client'
import Tag from "@/components/Tag";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
    {
        question: "What services do you offer?",
        answer: "We provide premium TV subscriptions at unbeatable prices. Get access to Netflix, HBO, YouTube Premium, and more—all in one affordable package.",
    },
    {
        question: "How does the subscription work?",
        answer: "Once you subscribe, you'll receive login credentials for your selected services. Enjoy uninterrupted streaming with secure and shared accounts.",
    },
    {
        question: "Is this service legal?",
        answer: "Yes, we comply with all regulations by offering shared accounts within the terms of service of each platform. We ensure a secure and seamless experience for our users.",
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept various payment methods, including Easypaisa, jazzcash,sadapay,nayapay, and through any bank. Our goal is to make your purchase as convenient as possible.",
    },

];

export default function Faqs() {
    const [selecedIndex, setSelecedIndex] = useState(0)

    return <section className="py-24" id="faqs">
        <div className="container">
            <div className="flex justify-center">
                <Tag>Faqs</Tag>
            </div>
            <h2 className="text-6xl font-medium mt-6 text-center ">
                Questions? we&apos;ve got <span className="text-lime-400">answers</span>
            </h2>

            <div className="mt-12 flex-col gap-6 max-w-xl mx-auto">
                {faqs.map((faq, faqIndex) => (
                    <div key={faq.question} className="bg-neutral-900 rounded-2xl border border-white/10 p-6">
                        <div className="flex justify-between items-center max-w-xl mx-auto "
                            onClick={() => setSelecedIndex(faqIndex)}
                        >
                            <h3 className="font-medium">{faq.question}</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                className={twMerge("feather feather-plus text-lime-400 flex-shrink-0 transition duration-300", selecedIndex === faqIndex && 'rotate-45')}
                            ><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                        </div>
                        <AnimatePresence>

                            {selecedIndex === faqIndex && (

                                <motion.div
                                    initial={{
                                        height: 0,
                                        marginTop: 0,
                                    }}
                                    animate={{
                                        height: 'auto',
                                        marginTop: 24,
                                    }}
                                    exit={{
                                        height: 0,
                                        marginTop: 0
                                    }}
                                    className=" overflow-hidden">

                                    <p className="text-white/50">{faq.answer}</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    </section>;
}
