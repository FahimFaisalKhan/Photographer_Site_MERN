import React, { useEffect, useState } from "react";
import { Button, Card, Carousel, Rating } from "react-daisyui";
import { Link } from "react-router-dom";
import RatingStar from "../Rating/RatingStar";
import styles from "./PopServices.module.css";
const Carsl = ({ services }) => {
  return (
    <div className="container mx-auto mt-64">
      <h1 className="text-center text-6xl font-semibold mb-16">
        My top services
      </h1>
      <div className="flex flex-col gap-16">
        {services.map((ser, index) => {
          return (
            <div>
              <Card side="lg" className={index === 1 && styles.reverse}>
                <figure className={styles.figure}>
                  <img
                    src={`http://localhost:5000/images/${ser.picture}.jpg`}
                    alt="Shoes"
                    className={`${
                      index === 1
                        ? "rounded-r-2xl rounded-l-none"
                        : "rounded-l-2xl rounded-r-none"
                    } h-full `}
                  />
                </figure>

                <Card.Body className="">
                  <Card.Title className="text-2xl" tag="h2">
                    {ser.name}
                  </Card.Title>
                  <p className="min-w-[70rem]">
                    {ser.description.split(" ").length >= 100
                      ? ser.description.split(" ").splice(0, 100).join(" ") +
                        "....."
                      : ser.description}
                  </p>
                  <p className="font-semibold text-primary">
                    Price: ${ser.price}
                  </p>
                  <p className="font-medium">Rating:</p>
                  <RatingStar rating={ser.reating}></RatingStar>
                  <Card.Actions
                    className={`${
                      index === 1 ? "justify-start" : "justify-end"
                    } mt-5 `}
                  >
                    <Link to={`/services/${ser._id}`}>
                      <Button className="capitalize">View Details</Button>
                    </Link>
                  </Card.Actions>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
      <div className="text-center my-24">
        <Link to={"/services"}>
          <Button className="w-44 capitalize text-lg py-3 h-auto rounded-3xl">
            See All
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Carsl;
