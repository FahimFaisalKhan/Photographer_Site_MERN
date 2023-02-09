import React from "react";

const Faq = () => {
  return (
    <section className="dark:bg-neutral-focus dark:text-gray-100 py-10 my-32">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              How to hire for a photography service?
            </summary>
            <div className="px-4 pb-4">
              <p>
                To hire you need to first choose a photography service you want
                to hire me for. Then you have to select quantity, prefered
                delivery deadline. After that to confirm the service you need to
                pay 10% in advance throught your selected payment option. You
                will recieve a confirmation email. You can also leave messege
                with instructions while confirmation process.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              Is there any service free?
            </summary>
            <div className="px-4 pb-4">
              <p>No. Unfortunately none of the services are free.</p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              What equipments do you use?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                voluptates aspernatur dolores in consequatur doloremque
                inventore reprehenderit, consequuntur perspiciatis architecto.
              </p>
              <p>
                Sed consectetur quod tenetur! Voluptatibus culpa incidunt
                veritatis velit quasi cupiditate unde eaque! Iure, voluptatibus
                autem eaque unde possimus quae.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Faq;
