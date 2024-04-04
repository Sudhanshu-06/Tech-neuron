import React from "react";
import Cards from "./Cards";
import list from "../../public/list.json";
import {Link} from "react-router-dom";

function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20-px-4"></div>
      <div className="mt-28 items-center justify-center text-center">
        <h1 className="text-2xl  md:text-4xl">
          We're delighted to have you{" "}
          <span className="text-pink-500">Here!:)</span>
        </h1>
        <p className="mt-9">
          Contrary to popular belief Lorem Ipsum is not simply random text It
          has roots in a piece of classical Latin literature from making it over
          years old Richard McClintock, a Latin professor at Hampden-Sydney
          College in Virginia, looked up one of the more obscure Latin words,
          consectetur, from a Lorem Ipsum passage, and going through the cites
          of the word in classical literature, discovered the undoubtable source
        </p>
       <Link to="/">
       <button className=" mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-500 duration-700">
       Back
     </button>
       </Link>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
      {
        list.map((item)=>(
          <Cards key={item.id} item={item}/>
        ))
      }
      </div>
    </>
  );
}
export default Course;
