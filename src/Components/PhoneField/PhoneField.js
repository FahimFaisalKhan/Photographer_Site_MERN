import React, { useEffect, useRef, useState } from "react";
import bd from "../../Static/Images/bd.svg";
import us from "../../Static/Images/us.svg";
import pk from "../../Static/Images/pk.svg";
import { AiOutlineDown } from "react-icons/ai";

const PhoneField = ({ register }) => {
  const counData = [
    {
      img: bd,
      code: "+88",
      maxLength: 14,
      pattern: /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/,
    },
    {
      img: pk,
      code: "+92",
      maxLength: 13,
      pattern: /^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/gm,
    },
    {
      img: us,
      code: "+1",
      maxLength: 12,
      pattern: /\(?\d{3}\)?-? *\d{3}-? *-?\d{4}/,
    },
  ];
  const [dropdownHidden, setDropDownHidden] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState(counData[0]);
  const inpRef = useRef(null);
  useEffect(() => {
    if (inpRef.current) {
      inpRef.current.value = selectedCountry?.code;
    }
  }, [selectedCountry]);
  const { ref, ...rest } = register("phone", {
    required: "This field is required",
    maxLength: {
      value: selectedCountry.maxLength,
      message: "Phone number incorrect",
    },
    pattern: {
      //   value: /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/,
      value: selectedCountry.pattern,
      message: "Number is not valid",
    },
  });
  return (
    <div>
      <label className="label">
        <span className="label-text">Phone</span>
      </label>
      <div className="flex w-full relative">
        <div className="w-[12%]  bg-slate-800  rounded-l-lg flex ">
          <div
            className="w-3/4  rounded-l-lg "
            style={{
              backgroundImage: `url(${selectedCountry.img})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
          <div
            onClick={() => setDropDownHidden(!dropdownHidden)}
            className="grow cursor-pointer flex justify-center items-center px-[9px]"
          >
            <AiOutlineDown color="white" />
          </div>
        </div>
        <ul
          className={`mt-0.5 absolute top-full w-[11.8%] h-[7rem]  bg-slate-800 transition-all flex flex-col gap-y-1 border-2 border-t-0 border-slate-800 rounded-b-lg ${
            dropdownHidden ? "opacity-0 max-h-0 invisible " : "max-h-[7rem]"
          }`}
        >
          {counData.map((c, i) => (
            <li
              onClick={() => {
                setSelectedCountry(c);
                setDropDownHidden(true);
              }}
              key={i}
              className=" w-full h-2/4 flex cursor-pointer"
            >
              <div
                className="w-3/4  h-full  "
                style={{
                  backgroundImage: `url(${c.img})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></div>
              <p className="h-full text-sm px-1 text-white flex justify-center items-center min-w-[40%]">
                {c.code}
              </p>
            </li>
          ))}
        </ul>

        <input
          className="w-[90%] p-2.5 border-[1px] border-[rgba(31,41,55,.2)] border-l-0 rounded-r-lg focus:outline-none"
          type="text"
          name="phone"
          {...rest}
          ref={(e) => {
            ref(e);
            inpRef.current = e;
          }}
        />
      </div>
    </div>
  );
};

export default PhoneField;
