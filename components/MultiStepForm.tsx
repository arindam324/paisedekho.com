import React, {useState} from 'react';
import {Stepper, Button, Group} from '@mantine/core';

import BasicInfo from '../components/forms/BasicInfo'
import SalaryForm from "@components/forms/SalaryForm";
import SelectCity from "@components/forms/SelectCity";
import ConfettiComponent from "@components/common/ConfettiComponent";


type TurnoverOption = {
    label: string;
    value: number;
};

const TURNOVER_OPTIONS: TurnoverOption[] = [
    {label: '1 Year', value: 1},
    {label: '3 Year', value: 3},
    {label: '5 Year', value: 5},
];


const MultiStepForm = () => {
    const [active, setActive] = useState(0);
    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));


    const [selectedOption, setSelectedOption] = useState(TURNOVER_OPTIONS[0]);
    const [selectedCity, setSelectedCity] = useState<string>("")

    const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedIndex = event.target.selectedIndex;
        setSelectedOption(TURNOVER_OPTIONS[selectedIndex]);
    };

    return (
        <div className={"flex flex-col shadow-xl col-span-2 rounded-xl px-10 py-20"}>
            <Stepper active={active} color="teal" onStepClick={setActive} breakpoint="sm">
                <Stepper.Step label="First step" description="Create an account">
                    <BasicInfo/>
                </Stepper.Step>
                <Stepper.Step label="Second step" description="Verify email">
                    <SalaryForm/>
                </Stepper.Step>
                <Stepper.Step label="Final step" description="Get full access">
                    <div className={"max-w-xl space-y-2 mx-auto"}>
                        <div>
                            <label className={"text-sm mb-4 text-gray-400"} htmlFor="amount">Desired Loan Amount</label>
                            <div className="flex w-full items-center rounded-md border border-gray-300">
                                <input
                                    id={"amount"}
                                    className="w-full py-2 pl-3 border-none form-input focus:outline-none pr-10 rounded-md "
                                    type="text"
                                    placeholder="Amount"
                                />
                                <span
                                    className="inline-block  px-3 py-2 whitespace-no-wrap text-gray-700">
                                         &#x20B9;
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="turnover" className="text-gray-400 text-sm ">
                                Turnover Period
                            </label>
                            <select
                                id="turnover"
                                name="turnover"
                                className="block w-full border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none bg-white border-gray-300"
                                onChange={handleOptionChange}
                                value={selectedOption.value}
                            >
                                {TURNOVER_OPTIONS.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <SelectCity label={"select your city"} name={"select your city"} value={selectedCity}
                                    onChange={(e) => setSelectedCity(e.target.value)}/>
                    </div>
                </Stepper.Step>
                <Stepper.Completed>
                    <ConfettiComponent isConfettiActive={active === 3}/>
                    <h2 className={"text-3xl font-semibold text-center"}>Your Application Is Submitted</h2>
                </Stepper.Completed>
            </Stepper>

            <Group position="center" mt="xl">
                <button
                    onClick={prevStep}
                    className={"px-10 py-2 rounded-lg bg-gradient-to-b from-blue-600 text-white to-indigo-600 "}>Back
                </button>

                <button
                    onClick={nextStep}
                    className={"px-10 py-2 rounded-lg bg-gradient-to-b from-blue-600 text-white to-indigo-600 "}>Next
                    Step
                </button>
            </Group>
        </div>
    );
}


export default MultiStepForm