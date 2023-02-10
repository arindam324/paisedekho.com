import React from "react";

import { TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import Cookies from "js-cookie";
import axios from "axios";

import Router from "next/router";

const Login = () => {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  return (
    <div className="flex w-full min-h-screen items-center justify-center">
      <form
        className="max-w-lg w-full mx-auto"
        onSubmit={form.onSubmit(async (values) => {
          try {
            const data = await axios.post("/api/login", {
              name: values.name,
              email: values.email,
              password: values.password,
            });
            Cookies.set("token", data.data.accessToken, { expires: 30 });
            Router.push("/admin/dashboard");
          } catch (err) {
            console.error(err);
          }
        })}
      >
        <TextInput
          withAsterisk
          label="Full name"
          placeholder="Jhon doe"
          {...form.getInputProps("name")}
        />

        <TextInput
          withAsterisk
          mt="md"
          label="Email Address"
          placeholder="abc@gmail.com"
          {...form.getInputProps("email")}
        />

        <TextInput
          withAsterisk
          mt="md"
          label="password"
          type={"password"}
          {...form.getInputProps("password")}
        />

        <button className="w-full bg-black text-white mt-4 py-2 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
