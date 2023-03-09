import Layout from "../components/Layout";
import Head from "next/head";
import Image from "next/image";

import {useForm} from "react-hook-form";

const PartnerWithUs = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    return (
        <div className={"flex flex-col w-full min-h-screen"}>
            <Head>
                <title>Paisadekho - partner with us</title>
                <link rel={"icon"} href={"/favicon.ico"}/>
            </Head>

            <Layout>
                <h2 className={"text-5xl mt-12 text-transparent font-semibold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text"}>Partner with us</h2>
                <div
                    className={
                        " flex items-center w-full "
                    }
                >
                    <div className={"relative w-[100%] h-[800px]"}>
                        <Image
                          className={"object-contain"}
                            src={"https://res.cloudinary.com/dmhxxjvna/image/upload/v1678090599/77755e565ef7ddbff2546231cd8732bf_jbhwdw.png"}
                            fill alt={""}/>
                    </div>
                    <form
                        className={
                            "max-w-xl shadow-xl shadow-orange-200 w-full bg-white p-10  rounded-lg flex flex-col items-center space-y-4 mx-auto"
                        }
                    >
                        <div className={"form-container"}>
                            <label className={"link-text"} htmlFor={"fullname"}>
                                Full Name
                            </label>
                            <input
                                type={"text"}
                                className={"input_with_us"}
                                id={"fullname"}
                                {...register("fullname")}
                                placeholder={"full name"}
                            />
                            {errors.fullname && (
                                <span role={"alert"}>This field is required</span>
                            )}
                        </div>
                        <div className={"form-container"}>
                            <label htmlFor={"email"} className={"link-text"}>
                                Email Address
                            </label>
                            <input
                                type={"email"}
                                id={"email"}
                                className={"input_with_us"}
                                {...register("email")}
                                placeholder={"abc@gmail.com"}
                            />
                            {errors.email && (
                                <span role={"alert"}>This field is required</span>
                            )}
                        </div>
                        <div className={"form-container"}>
                            <label htmlFor={"phone"} className={"link-text"}>
                                Phone Number
                            </label>
                            <input
                                type={"tel"}
                                {...register("phone", {required: true})}
                                className={"input_with_us"}
                                placeholder={"999 999 9999"}
                            />
                            {errors.phone && (
                                <span role={"alert"}>This field is required</span>
                            )}
                        </div>

                        <div className={"form-container"}>
                            <label className={"link-text"} htmlFor={"meesage"}>
                                Message
                            </label>
                            <textarea
                                className={"form-textarea input_with_us"}
                                {...register("message", {required: true})}
                            />
                            {errors.message && (
                                <span role={"alert"}>This field is required</span>
                            )}
                        </div>
                        <input
                            className={
                                "w-full cursor-pointer mt-4 bg-[#FF6300] text-white py-2 shadow-lg  rounded-lg"
                            }
                            type={"submit"}
                            value={"submit"}
                        />
                    </form>

                </div>
            </Layout>
        </div>
    );
};

export default PartnerWithUs;
