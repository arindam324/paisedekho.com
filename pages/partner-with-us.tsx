import Layout from "../components/Layout";
import Head from "next/head";

import { useForm } from "react-hook-form";
import Lottie from "react-lottie-player";

import useLottieAnimation from "../hooks/useLottieAnimation";

import { state } from "../data/State";
import animation from "../public/animations/partnership.json";

const PartnerWithUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const animationData = useLottieAnimation(
    "https://res.cloudinary.com/dmhxxjvna/raw/upload/v1677306687/animations/partnership_skc7ax.json"
  );

  return (
    <div className={"flex flex-col w-full min-h-screen"}>
      <Head>
        <title>Paisadekho - partner with us</title>
        <link rel={"icon"} href={"/favicon.ico"} />
      </Head>

      <Layout>
        <div
          className={
            "w-full lg:space-x-4 flex flex-col lg:flex-row items-center mt-10 lg:mt-16"
          }
        >
          {animationData && (
            <Lottie
              play
              loop
              animationData={animation}
              className="lg:w-[40%] w-[80%]"
            />
          )}

          <form
            className={
              "max-w-lg w-full flex flex-col items-center space-y-3  mx-auto"
            }
          >
            <div className={"form-container"}>
              <label className={"link-text"} htmlFor={"fullname"}>
                Full Name
              </label>
              <input
                type={"text"}
                className={"input"}
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
                className={"input"}
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
                {...register("phone", { required: true })}
                className={"input"}
                placeholder={"999 999 9999"}
              />
              {errors.phone && (
                <span role={"alert"}>This field is required</span>
              )}
            </div>
            <div className={"form-container"}>
              <label htmlFor={"country"} className={"link-text"}>
                Country
              </label>
              <input
                type={"text"}
                {...register("country", { required: true })}
                className={"input"}
                placeholder={"India"}
              />
              {errors.country && (
                <span role={"alert"}>This field is required</span>
              )}
            </div>
            <div className={"form-container"}>
              <label htmlFor={"State"}>State</label>
              <select
                className={"form-select input "}
                {...register("select", { required: true })}
              >
                <option value="">Please select an option</option>
                {state.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              {errors.select && (
                <span role={"alert"}>This field is required</span>
              )}
            </div>
            <div className={"form-container"}>
              <label className={"link-text"} htmlFor={"city"}>
                City
              </label>
              <input
                type={"text"}
                className={"input"}
                {...register("city", { required: true })}
                placeholder={"city"}
              />
              {errors.city && (
                <span role={"alert"}>This field is required</span>
              )}
            </div>
            <div className={"form-container"}>
              <label className={"link-text"} htmlFor={"city"}>
                Message
              </label>
              <textarea
                className={"form-textarea input"}
                {...register("message", { required: true })}
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

// @ts-ignore
export default PartnerWithUs;
