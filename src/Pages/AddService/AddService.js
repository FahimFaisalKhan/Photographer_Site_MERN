import React from "react";
import { Button } from "react-daisyui";
import toast, { Toaster } from "react-hot-toast";
import { useTitle } from "../../hooks/useTitle";
const AddService = () => {
  useTitle("FC - Add services");
  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.serviceName.value;
    const description = form.description.value;

    const picture = form.cover.value;
    const price = form.price.value;
    const reating = form.rating.value;
    const ap1 = form?.ap1?.value;
    const ap2 = form?.ap2?.value;
    const serToAdd = {
      name,
      price,
      reating,
      description,

      picture,
    };
    serToAdd["service-description"] = form.serviceDescription.value;
    if (ap1) {
      serToAdd.ap1 = ap1;
    }
    if (ap2) {
      serToAdd.ap2 = ap2;
    }
    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(serToAdd),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast("Successfully added a Service, Check services page.");
          form.reset();
        }
      });
    console.log(serToAdd);
  };
  return (
    <div>
      <section className="text-base-content">
        <Toaster
          toastOptions={{
            style: { background: "rgb(34 197 94)" },
            duration: 3000,
          }}
          autoClose={1000}
        />
        <div className="container p-12 mx-auto">
          <div className="flex flex-col-reverse w-full px-0 mx-auto md:flex-row md:gap-8">
            <div className="flex flex-col md:w-full">
              <h2 className="mb-20 font-bold md:text-4xl text-heading self-center">
                Add a new service
              </h2>
              <form
                onSubmit={handleAddService}
                className="justify-center w-full mx-auto"
              >
                <div className="">
                  <div className="space-x-0 lg:flex lg:space-x-4">
                    <div className="w-full ">
                      <label
                        htmlFor="serviceName"
                        className="block mb-3 text-sm font-semibold text-gray-500"
                      >
                        Service Name
                      </label>
                      <input
                        name="serviceName"
                        type="text"
                        placeholder="Service Name"
                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                        required
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="w-full">
                      <label
                        htmlFor="price"
                        className="block mb-3 text-sm font-semibold text-gray-500"
                      >
                        Price in $
                      </label>
                      <input
                        name="price"
                        type="number"
                        placeholder="Enter service price"
                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                        step={0.01}
                        required
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="w-full">
                      <label
                        htmlFor="rating"
                        className="block mb-3 text-sm font-semibold text-gray-500"
                      >
                        Inital rating
                      </label>
                      <input
                        name="rating"
                        type="number"
                        placeholder="Add an initial rating not above 5"
                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                        step={0.01}
                        max={5}
                        required
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="w-full">
                      <label
                        htmlFor="description"
                        className="block mb-3 text-sm font-semibold text-gray-500"
                      >
                        Description
                      </label>
                      <textarea
                        className="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                        name="description"
                        cols="20"
                        rows="4"
                        placeholder="Write a description of what this service is about"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="relative pt-3 xl:pt-6">
                    <label
                      htmlFor="serviceDescription"
                      className="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      Service Description
                    </label>
                    <textarea
                      name="serviceDescription"
                      className="flex items-center w-full px-4 py-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                      rows="4"
                      placeholder="Write a detail description about your service"
                      required
                    ></textarea>
                  </div>
                  <div className="mt-4">
                    <div className="w-full">
                      <label
                        htmlFor="cover"
                        className="block mb-3 text-sm font-semibold text-gray-500"
                      >
                        Cover Photo URL
                      </label>
                      <input
                        name="cover"
                        type="url"
                        placeholder="Add service cover photo URL"
                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                      />
                    </div>
                  </div>

                  <div className="space-x-0 lg:flex lg:space-x-4 mt-4">
                    <div className="w-full lg:w-1/2">
                      <label
                        htmlFor="ap1"
                        className="block mb-3 text-sm font-semibold text-gray-500"
                      >
                        Additional photo 1 (Optional)
                      </label>
                      <input
                        name="ap1"
                        type="url"
                        placeholder="Add an additional service photo"
                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                      />
                    </div>
                    <div className="w-full lg:w-1/2">
                      <label
                        htmlFor="ap2"
                        className="block mb-3 text-sm font-semibold text-gray-500"
                      >
                        Additional photo 2 (Optional)
                      </label>
                      <input
                        name="ap2"
                        type="url"
                        placeholder="Add an additional service photo"
                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button
                      type="submit"
                      className="w-full px-6 py-2  border-none capitalize"
                    >
                      Add
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddService;
