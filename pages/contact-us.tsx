import Head from "next/head";
import Layout from "@components/Layout";
import Image from "next/image";

const ContactUs =() => {
    return (
        <div className={"w-full min-h-screen"}>
            <Head>
                <title>PaisaDkeho - Contact us</title>
                <link rel={"icon"} href={"/favicon.ico"}/>
            </Head>
            <Layout>
                <div className={"relative w-full z-10 rounded-lg h-[200px] lg:h-[360px]"}>
                    <Image className={"object-cover rounded-lg" }  src={"https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"} fill alt={""} />
                   <div className={"overlay  z-20  opacity-50 "} />
                </div>
                <div className={"grid grid-cols-1 max-w-[95%] w-full mx-auto relative z-50 -mt-16 gap-5 lg:grid-cols-3"}>
                    <div className="shadow-lg hover:-translate-y-8 bg-white lg:h-[300px] duration-100 ease-out cursor-pointer transition shadow-gray-300 rounded-lg  p-10">
                        <h2 className="text-[#004AAD]  text-lg font-bold leading-relaxed">
                            India's larger consumer credit marketplace
                        </h2>
                        <p className="text-zinc-500 text-sm lg:text-base mt-6">
                            Paisedekho was was India’s largest digital consumer credit
                            marketplace with a 51.4% market share, based on disbursals in
                            2020, as per Frost & Sullivan.
                        </p>
                    </div>
                    <div className="shadow-lg hover:-translate-y-8 bg-white lg:h-[300px] duration-100 ease-out cursor-pointer transition shadow-gray-300 rounded-lg  p-10">
                        <h2 className="text-[#004AAD] relative z-20  text-lg font-bold leading-relaxed">
                            India's larger consumer credit marketplace
                        </h2>
                        <p className="text-zinc-500 text-sm lg:text-base mt-6">
                            Paisedekho was was India’s largest digital consumer credit
                            marketplace with a 51.4% market share, based on disbursals in
                            2020, as per Frost & Sullivan.
                        </p>
                    </div>
                    <div className="shadow-lg hover:-translate-y-8 bg-white lg:h-[300px] duration-100 ease-out cursor-pointer transition shadow-gray-300 rounded-lg  p-10">
                        <h2 className="text-[#004AAD] relative z-20  text-lg font-bold leading-relaxed">
                            India's larger consumer credit marketplace
                        </h2>
                        <p className="text-zinc-500 text-sm lg:text-base mt-6">
                            Paisedekho was was India’s largest digital consumer credit
                            marketplace with a 51.4% market share, based on disbursals in
                            2020, as per Frost & Sullivan.
                        </p>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default ContactUs