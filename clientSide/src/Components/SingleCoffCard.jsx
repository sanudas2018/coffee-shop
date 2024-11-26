import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const SingleCoffCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, chef, supplier, test, category, image } = coffee;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });

              const remaining = coffees.filter( coff => coff._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="">
      <div className="card card-side bg-base-100 shadow-xl  flex justify-between items-center gap-2">
        <figure>
          <img src={image} alt="Coffee Image" />
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
              <Link to={`/updateCoffee/${_id}`}>
                <button className="btn btn-primary bg-success w-[75px]">
                  Edit
                </button>
              </Link>
            </div>
            <div className="card-actions justify-end">
              <button
                onClick={() => handleDelete(_id)}
                className="btn btn-primary bg-red-400"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCoffCard;
