import React, {ChangeEvent, useState} from 'react';

function SalaryForm() {

    const [selectedRange, setSelectedRange] = useState("");

    const salaryRanges = [
        "10k - 50k",
        "50k - 1L",
        "1L - 5L",
        "5L - 10L",
        "10L - 50L",
        "50L - 1Cr",
        "1Cr - 5Cr",
    ];

    const handleRangeSelect = (range: string) => {
        setSelectedRange(range);
    };

    const [salaryType, setSalaryType] = useState<'salaried' | 'Self-Employee'>(
        'salaried'
    );
    const handleSalaryTypeChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setSalaryType(event.target.value as 'salaried' | 'Self-Employee');
    };


    return (
        <form className={"max-w-xl mx-auto"}>
            <p className={"text-sm text-gray-500 mb-2"}>Select Employment Status </p>
            <div className={"space-x-5 flex  mb-5"}>
                <div className={"space-x-2"}>
                    <label>
                        Salaried
                    </label>
                    <input
                        type="radio"
                        name="salary-type"
                        value="salaried"
                        checked={salaryType === 'salaried'}
                        onChange={handleSalaryTypeChange}
                    />
                </div>
                <div className={"space-x-2"}>
                    <label className={"space-x-2"}>
                        Non-Salaried
                    </label>
                    <input
                        type="radio"
                        name="salary-type"
                        value="non-salaried"
                        checked={salaryType === 'Self-Employee'}
                        onChange={handleSalaryTypeChange}
                    />
                </div>
            </div>
            <div className="relative max-w-xl group">
                <input
                    type="text"
                    value={selectedRange}
                    className="w-full py-2 pl-3 pr-10 border border-gray-300 rounded-md"
                    placeholder="Select Salary Range"
                    readOnly
                />
                <ul className="absolute hidden group-hover:block  z-10 w-full py-2 mt-1 overflow-auto bg-white rounded-md shadow-lg max-h-60">
                    {salaryRanges.map((range, index) => (
                        <li
                            key={index}
                            onClick={() => handleRangeSelect(range)}
                            className={`px-3 py-2 cursor-pointer hover:bg-gray-200 ${
                                selectedRange === range && "bg-gray-200 font-semibold"
                            }`}
                        >
                            {range}
                        </li>
                    ))}
                </ul>
            </div>
        </form>
    );
}

export default SalaryForm