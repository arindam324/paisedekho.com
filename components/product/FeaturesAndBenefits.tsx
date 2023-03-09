import React from "react";
import useLottieAnimation from "../../hooks/useLottieAnimation";
import Lottie from "react-lottie-player";

const DATA = [
    {
        id: 0,
        title: "Loan upto 200% ",
        animation:
            "https://res.cloudinary.com/dmhxxjvna/raw/upload/v1677306685/animations/PersonalizerOffer_lbcnfn.json",
        description:
            "We value customer first, so we offer the tailor made, specially curated and personalised financial product exclusive for you that meets your goal.",
    },
    {
        id: 1,
        title: " Rc transfer",
        animation:
            "https://res.cloudinary.com/dmhxxjvna/raw/upload/v1677306684/animations/FastDisbursement_yzx5dg.json",
        description:
            " We understand your precious time and value it by offering you the fastest disbursal or delivery of service guaranteed irrespective of the product you choose.",
    },
    {
        id: 2,
        title: "Realtime Tracking",
        animation:
            "https://res.cloudinary.com/dmhxxjvna/raw/upload/v1677306686/animations/wide-choice_udlrzs.json",
        description:
            "   Not just 1 or 2, you get multiple choices of our products as we have partnered with multiple banks, NBFC’s.",
    },
    {
        id: 3,
        title: "Lowest Interest rates",
        animation:
            "https://res.cloudinary.com/dmhxxjvna/raw/upload/v1677306683/animations/BankTransfer_ourgs1.json",
        description:
            "  Getting the loan amount directly into your bank account within a minute as soon as the disbursement is made, is only possible with Paisa Dekho",
    },
]


const FeaturesAndBenefits = () => {
    return (
        <div className={"grid lg:grid-cols-3 grid-cols-1 gap-4"}>
            {DATA.map(item => (
                <Card key={item.id} animation={item.animation} name={item.title} description={item.description}/>
            ))}
        </div>
    )
}


const Card: React.FC<{ animation: string, name: string, description: string }> = ({animation, name, description}) => {
    const animationData = useLottieAnimation(animation);
    return (
        <article className={"flex shadow-lg p-5  rounded-lg flex-col items-center"}>
            {animationData && (
                <Lottie
                    play
                    loop
                    animationData={animationData}
                    className="w-[100px] h-[100px]"
                />
            )}
            <h2 className={"text-2xl font-semibold text-gray-800"}>{name}</h2>
            <p className={"text-sm  text-center text-gray-500"}>{description}</p>
        </article>
    )
}

export default FeaturesAndBenefits