import {useForm} from 'react-hook-form'
import React, {ChangeEvent, useState} from "react";

const CheckboxOption: React.FC<{ id: string, value: string, isChecked: boolean, onChange: () => void }> = ({
                                                                                                               id,
                                                                                                               value,
                                                                                                               isChecked,
                                                                                                               onChange
                                                                                                           }) => {
    return (
        <div className="flex items-center">
            <input
                id={id}
                name="gender"
                type="checkbox"
                value={value}
                checked={isChecked}
                onChange={onChange}
                className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor={id} className="ml-2 block text-sm text-gray-900">
                {value}
            </label>
        </div>
    );
}


const BasicInfo = () => {
    const {register, handleSubmit} = useForm()
    const [selectedOption, setSelectedOption] = useState('male');

    function handleOptionChange(event: ChangeEvent<HTMLInputElement>) {
        setSelectedOption(event.target.value);
    }

    return (
        <form className={"max-w-xl mx-auto "}>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-500">
                    Email Address
                </label>
                <div className="mt-1">
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="shadow-sm focus:ring-gray-100 focus:border-gray-100 bg-gray-200 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                </div>
            </div>
            <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number
                </label>
                <div className="mt-1">
                    <input
                        id="phone"
                        name="phone"
                        type="number"
                        autoComplete="number"
                        required
                        className="shadow-sm focus:ring-gray-100 focus:border-gray-100 bg-gray-200 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                </div>
            </div>
            <div className={"flex items-center space-x-4 mt-4"}>
                <div className="flex items-center">
                    <input
                        id="male"
                        name="gender"
                        type="radio"
                        className="h-5 w-5 text-gray-400 focus:ring-gray-400 border-gray-300 rounded-full "
                    />
                    <label htmlFor="male" className="ml-2 block text-sm text-gray-900">
                        Male
                    </label>
                </div>
                <div className="flex items-center">
                    <input
                        id="female"
                        name="gender"
                        type="radio"
                        className="h-5 w-5 text-gray-400 focus:ring-gray-400 border-gray-300 rounded-full"
                    />
                    <label htmlFor="female" className="ml-2 block text-sm text-gray-900">
                        Female
                    </label>
                </div>
                <div className="flex items-center">
                    <input
                        id="other"
                        name="gender"
                        type="radio"
                        className="h-5 w-5 text-gray-400 focus:ring-gray-400 border-gray-300 rounded-full"
                    />
                    <label htmlFor="female" className="ml-2 block text-sm text-gray-900">
                        other
                    </label>
                </div>
            </div>
        </form>
    )
}


export default BasicInfo