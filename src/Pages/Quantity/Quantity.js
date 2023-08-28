import React, { useEffect, useRef, useState } from "react";
import { useLoaderData } from "react-router-dom";
import "./Quantity.css";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import toast, { Toaster } from "react-hot-toast";
import bd from "../../Static/Images/bd.svg";
import us from "../../Static/Images/us.svg";
import pk from "../../Static/Images/pk.svg";
import cam from "../../Static/Images/CamLogo.svg";
import PhoneField from "../../Components/PhoneField/PhoneField";
const Quantity = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const service = useLoaderData();

  const onSubmit = (data) => {
    console.log(data);
    toast("Paypent options work in progress.");
  };

  return (
    <section className="container mx-auto px-6 my-8">
      <Toaster
        toastOptions={{
          style: { background: "rgb(251 191 36)" },
          duration: 3000,
        }}
        autoClose={1000}
      />
      ;
      <h2 className="text-4xl xl:w-[30rem]">
        {" "}
        Please fill up below fields in order to confirm a booking for{" "}
        {service.name} photography.
      </h2>
      <form
        action=""
        className="w-2/4 mx-auto my-16"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form-control my-4 flex flex-row justify-between text-2xl font-semibold">
          <h2 className="">{service.name} Photography</h2>
          <p>Per Photo: ${service.price}</p>
        </div>
        <div className="form-control my-4">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            placeholder="email"
            className="input input-bordered"
            {...register("email", { required: "This field is required" })}
          />
          <ErrorMessage
            errors={errors}
            name="email"
            as={"p"}
            className="error"
          />
        </div>
        <PhoneField register={register} />

        <ErrorMessage errors={errors} name="phone" as={"p"} className="error" />
        <div className="form-control mt-6">
          <label className="label">
            <span className="label-text">Number of pictures</span>
          </label>
          <input
            type="number"
            step={1}
            placeholder="Quantity"
            className="input input-bordered"
          />
        </div>
        <div className="form-control mt-6">
          <label className="label">
            <span className="label-text">Delivery within</span>
          </label>
          <input type="date" className="input input-bordered" />
        </div>
        <div className="form-control mt-6">
          <label className="label">
            <span className="label-text">Personal note</span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div className="form-control my-6">
          <p className="text-2xl font-semibold">Total: ${service.price}</p>
        </div>
        <div className="form-control mt-4">
          <button type="submit" className="btn btn-info">
            Confirm
          </button>
        </div>
      </form>
    </section>
  );
};

export default Quantity;
