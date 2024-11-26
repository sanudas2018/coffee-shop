import React from "react";

const SingleCoffCard = ({ coffee }) => {
  const { _id, name, chef, supplier, test, category, image } = coffee;

  return (
    <div className="">
      <div className="card card-side bg-base-100 shadow-xl  flex justify-between items-center gap-2">
        <figure>
          <img
            src={image}
            alt="Coffee Image"
          />
        </figure>
        <div className="card-body flex flex-row justify-between items-center gap-2">
          <div className="">
            <h2 className="card-title ">Coffee Name: {name}</h2>
            <p>Chef: {chef}</p>
            <p>Supplier: {supplier}</p>
            <p>Test: {test}</p>
            <p>Category: {category}</p>
          </div>

          {/* All Button */}
          <div className="flex flex-col justify-between items-end gap-2">
            <div className="card-actions justify-end">
              <button className="btn btn-primary">View</button>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary bg-success w-[75px]">Edit</button>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary bg-red-400">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCoffCard;
