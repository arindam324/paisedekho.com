import {useState} from "react";
import Layout from "@components/Layout";

const calculator = () => {
    const [loanAmount, setLoanAmount] = useState(0);
    const [interestRate, setInterestRate] = useState(0);
    const [loanTerm, setLoanTerm] = useState(0);
    const [monthlyPayment, setMonthlyPayment] = useState(0);
    const [totalPayment, setTotalPayment] = useState(0);
    const [totalInterest, setTotalInterest] = useState(0);

    const calculateLoan = () => {
        // Calculate the monthly payment
        const monthlyInterestRate = interestRate / 100 / 12;
        const numPayments = loanTerm * 12;
        const denominator = Math.pow(1 + monthlyInterestRate, numPayments) - 1;
        const monthlyPayment = (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numPayments)) / denominator;
        setMonthlyPayment(monthlyPayment);

        // Calculate the total payment and total interest
        const totalPayment = monthlyPayment * numPayments;
        const totalInterest = totalPayment - loanAmount;
        setTotalPayment(totalPayment);
        setTotalInterest(totalInterest);
    };

    return (
        <div className={"w-full min-h-screen"}>
            <Layout>
                <div className="max-w-xl w-full  mt-12 mx-auto">

                    <div className="mb-4">
                        <label htmlFor="loan-amount" className="block font-bold mb-2">
                            Loan amount: {loanAmount} ₹
                        </label>
                        <input
                            type="range"
                            id="loan-amount"
                            className="border border-gray-400 p-2 w-full"
                            min="0"
                            max="1000000"
                            value={loanAmount}
                            onChange={(e) => setLoanAmount(parseFloat(e.target.value))}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="interest-rate" className="block font-bold mb-2">
                            Interest rate: {interestRate}%
                        </label>
                        <input
                            type="range"
                            id="interest-rate"
                            className="border border-gray-400 p-2 w-full"
                            min="0"
                            max="50"
                            value={interestRate}
                            onChange={(e) => setInterestRate(parseFloat(e.target.value))}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="loan-term" className="block font-bold mb-2">
                            Loan term: {loanTerm} years
                        </label>
                        <input
                            type="range"
                            id="loan-term"
                            className="border border-gray-400 p-2 w-full"
                            min="0"
                            max="30"
                            value={loanTerm}
                            onChange={(e) => setLoanTerm(parseFloat(e.target.value))}
                        />
                    </div>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={calculateLoan}
                    >
                        Calculate
                    </button>
                    <div className="mt-4">
                        <p className="font-bold">Monthly Payment: {monthlyPayment.toFixed(2)}₹</p>
                        <p className="font-bold">Total Payment: {totalPayment.toFixed(2)} ₹</p>
                        <p className="font-bold">Total Interest: {totalInterest.toFixed(2)} ₹</p>
                    </div>
                </div>
            </Layout>
        </div>
    )
}


export default calculator