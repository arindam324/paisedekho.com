import Head from 'next/head'
import Image from 'next/image'
import Layout from "@components/Layout";
import MultiStepForm from "@components/MultiStepForm";
import Container from "@components/product/Layout";
import FeaturesAndBenefits from "@components/product/FeaturesAndBenefits";


const CreditImprovementService = () => {
    return (
        <div className={"w-full min-h-screen"}>
            <Head>
                <title>PaisaDekho - Credit-improvement-service</title>
            </Head>

            <Layout>
                <div className={"mt-12 w-full space-y-4 flex flex-col  "}>
                    <h2 className={"text-3xl font-semibold "}>Credit-improvement-service</h2>
                    <Container>
                        <Image src={"/images/Credit Card.svg"} width={300} height={300} alt={""}/>
                        <MultiStepForm/>
                    </Container>
                    <FeaturesAndBenefits/>
                </div>
            </Layout>

        </div>
    )
}


export default CreditImprovementService