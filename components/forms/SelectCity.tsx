import React, {useState} from "react";
import cities from "../../data/cities.json"; // assumes a JSON file containing all cities in India

interface SelectProps {
    label: string;
    name: string;
    value?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Select: React.FC<SelectProps> = ({label, name, value, onChange}) => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredCities = cities.filter((city) =>
        city.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex flex-col">
            <label className=" text-sm text-gray-400 my-2" htmlFor={name}>
                {label}
            </label>
            <div className="relative">
                <input
                    className="block w-full bg-white border border-gray-300 rounded-lg shadow-sm py-2 px-3 pr-8 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    list={`${name}-options`}
                    name={name}
                    value={value}
                    onChange={onChange}
                />

                <datalist id={`${name}-options`} className={"absolute top-0 left-0"}>
                    {filteredCities.map((city) => (
                        <option key={city.id} value={city.name}/>
                    ))}
                </datalist>
            </div>
        </div>
    );
};

export default Select;
