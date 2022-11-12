import React from "react";
import list from "./img/list.svg";
import chart from "./img/chart.svg";
import record from "./img/record.svg";

//conditional content if log
const Home = () => {
  const content = [
    {
      title: "Record Daily Expenses",
      img: record,
      desc: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    },
    {
      title: "List All Earnings",
      img: list,
      desc: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    },
    {
      title: "Profit Status",
      img: chart,
      desc: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    },
  ];

  return (
    <div>
      <span className="grid px-3 pt-6 pb-5 bg-white mb-5 rounded-bl-3xl rounded-br-3xl shadow-sm border">
        <p className="m-auto text-center text-xl text-gray-600 mt-1 mb-1 font-semibold mx-5">
          AppName
        </p>
        <span className="text-gray-400 text-center text-sm w-72 m-auto">
          Lorem ipsum dolor sit amet, officia excepteur  fugiat reprehenderit
          enim labore culpa sint ad nisi Lorem pariatur mollit 
          exercitation amet. Nisi anim cupidatat excepteur officia. Voluptate
        </span>
      </span>

      <span className="grid p-3">
        {content.map((c) => (
          <section className="bg-white p-4 m-auto mb-8 rounded-md max-w-sm shadow-md text-center border border-gray-200 ">
            <img
              src={c.img}
              className="m-auto w-36 my-2  drop-shadow-md"
              alt=""
            />
            <p className="text-gray-500 font-regular mt-4 mb-2 text-xl">
              {c.title}
            </p>
            <p className="text-gray-400 text-sm">{c.desc}</p>
          </section>
        ))}
      </span>
    </div>
  );
};

export default Home;
