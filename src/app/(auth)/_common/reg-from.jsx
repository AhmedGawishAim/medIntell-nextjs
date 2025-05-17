"use client";

import React, { useState } from "react";
import { toast,cssTransition } from "react-toastify";
import Textinput from "@/components/ui/Textinput";
import Checkbox from "@/components/ui/Checkbox";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { handleRegister } from "./store";

const schema = yup
  .object({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .max(20, "Password shouldn't be more than 20 characters")
      .required("Please enter password"),
    confirmpassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Please confirm your password"),
  })
  .required();

const RegForm = () => {
  const dispatch = useDispatch();
  const router = useRouter(); 
  const [checked, setChecked] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });

  const bounce = cssTransition({
    enter: "flip-horizontal-bottom",
    exit: "flip-horizontal-upward"
});

const onSubmit = (data) => {
  if (!checked) {
    toast.error("You must accept the terms to proceed.",{ autoClose: 500,closeOnClick: true, transition: bounce});
    return;
  }

  // dispatch user register
  const result = dispatch(handleRegister(data));

  // Access updated state
  const userExists = result.payload?.exists;
  console.log(result.payload);
  

  if (userExists) {
    toast.error("User already exists",{ autoClose: 500,closeOnClick: true, transition: bounce});
  } else {
    // const id = toast.success("Registration successful!.",{ autoClose: 500,closeOnClick: true, transition: bounce});
    // setTimeout(() => {
    //   toast.dismiss(id); 
    //   router.push("/")
    // }, 1500);

  }
};


  //  const onSubmit = async(data) => {
  //   try {
    
  //     if (!checked) {
  //       toast.error("You must accept the terms to proceed.",{ autoClose: 500, transition: bounce});
  //      return;
  //    }
  //     const resultAction = await dispatch(handleRegister(data));
  
  //     if (handleRegister.fulfilled.match(resultAction)) {
  //       console.log(22);
        
  //       toast.success("Registration successful!");
  //       // optional: redirect
  //       setTimeout(() => {
  //         router.push("/");
  //       }, 1500);
  //     } else {
  //        toast.error("Registration failed.");
  //     }
  //   } catch (error) {
  //     // toast.error("Something went wrong.");
  //   }
  // }



  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <h1 onClick={()=>dispatch(handleRegister({name:"ahmed"})) } >000000000</h1>
      <Textinput
        name="name"
        label="Name"
        type="text"
        placeholder="Enter your name"
        register={register}
        error={errors.name}
      />
      <Textinput
        name="email"
        label="Email"
        type="email"
        placeholder="Enter your email"
        register={register}
        error={errors.email}
      />
      <Textinput
        name="password"
        label="Password"
        type="password"
        placeholder="Enter your password"
        register={register}
        error={errors.password}
      />
      <Textinput
        name="confirmpassword"
        label="Confirm Password"
        type="password"
        placeholder="Confirm your password"
        register={register}
        error={errors.confirmpassword}
      />
      <Checkbox
        label="You accept our Terms and Conditions and Privacy Policy"
        value={checked}
        onChange={() => setChecked(!checked)}
      />
      <button type="submit" className="btn btn-dark block w-full text-center">
        Create an account
      </button>
    </form>
  );
};

export default RegForm;
