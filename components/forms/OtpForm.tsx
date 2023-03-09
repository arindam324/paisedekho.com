import React, {ChangeEvent, FormEvent, useState} from "react";

const OtpForm: React.FC<{ otp: number, setOtp: (otp: number) => void, handleSubmit: (e: FormEvent<HTMLFormElement>) => void }> = ({
                                                                                                                                      otp,
                                                                                                                                      setOtp,
                                                                                                                                      handleSubmit
                                                                                                                                  }) => {
    function handleOtpChange(event: ChangeEvent<HTMLInputElement>) {
        setOtp(Number(event.target.value));
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="otp" className="block font-medium text-gray-700">
                OTP
            </label>
            <div className="mt-1">
                <input
                    max={6}
                    id="otp"
                    name="otp"
                    type="number"
                    autoComplete="one-time-code"
                    required
                    value={otp}
                    onChange={handleOtpChange}
                    className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
            </div>
            <div className="mt-4">
                <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Submit
                </button>
            </div>
        </form>
    );
}


export default OtpForm