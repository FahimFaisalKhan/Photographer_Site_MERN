import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import "./Quantity.css";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import toast, { Toaster } from "react-hot-toast";
const Quantity = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const service = useLoaderData();
  console.log(service);

  const [countryCode, setCountryCode] = useState("");

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
        Please fill up below fields in order to confirm a service booking.
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
        <label className="label mt-4">
          <span className="label-text">Phone</span>
        </label>
        <div className=" flex flex-row border-2  rounded-lg ">
          <select
            className="rounded-none focus:outline-none p-3 rounded-l-lg text-base-200 bg-gray-700"
            name=""
            id=""
            onChange={(e) => setCountryCode(e.target.value)}
          >
            <option selected className="w-full rounded-none" value="+88">
              Bangladesh
            </option>
            <option className="w-full" value="+66">
              Pakistan
            </option>
            <option className="w-full" value="+1">
              USA
            </option>
          </select>
          <input
            defaultValue={countryCode || "+88"}
            className="number-field px-2"
            type="text"
            placeholder="number"
            name="phone"
            {...register("phone", {
              required: "this field is required",
              minLength: {
                value: 5,
                message: "error ok",
              },
            })}
          />
        </div>
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
