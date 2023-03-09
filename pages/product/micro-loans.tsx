import Head from 'next/head'
import Image from 'next/image'
import Layout from "@components/Layout";
import MultiStepForm from "@components/MultiStepForm";
import Container from "@components/product/Layout";
import FeaturesAndBenefits from "@components/product/FeaturesAndBenefits";

const MicroLoan = () => {
    return (
        <div className={"w-full min-h-screen"}>
            <Head>
                <title>PaisaDekho - MicroLoan</title>
            </Head>

            <Layout>
                <div className={"mt-12 w-full space-y-4 flex flex-col  "}>
                    <h2 className={"text-3xl font-semibold "}>Micro Loan </h2>
                    <Container>
                        <Image src={"/images/Micro Loans.svg"} width={300} height={300} alt={""}/>
                        <MultiStepForm/>
                    </Container>
                    <FeaturesAndBenefits/>
                </div>
            </Layout>

        </div>
    )
}


export default MicroLoan