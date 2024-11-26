import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from "sweetalert2";

const UpdateCoffee = () => {

    const coffee = useLoaderData();
    const { _id, name, chef, supplier, test, category, image } = coffee;

    const handleUpdateCoffee = (event) => {
        event.preventDefault();
        const form = event.target;
    
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const test = form.test.value;
        const category = form.category.value;
        const image = form.image.value;
    
        // Create object data
        const updatedCoffee = { name, chef, supplier, test, category, image };
        console.log(updatedCoffee);
    
        // google search: fetch upload json data
        fetch(`http://localhost:5000/updateCoffee/${_id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updatedCoffee),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("inside post response", data);
            // data insert হবা র পরে এই alert টি দি বে ।
            if (data.modifiedCount > 0) {
              Swal.fire({
                title: 'Success!',
                text: 'Updated Successfly Coffee',
                icon: 'success',
                confirmButtonText: 'Close'
              })
            //   form.reset();
            }
          });
      };


    return (
        <div className="w-3/4 border w-3/4 p-3 mx-auto mt-5 bg-green-200 rounded">
        <h1 className="text-center font-extrabold text-3xl">Update Coffee</h1>
  
        <div>
          <form onSubmit={handleUpdateCoffee}>
            <div className="main p-4">
              <div className="single flex gap-4">
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Coffee Name</span>
                  </div>
                  <input
                    type="text"
                    name="name"
                    defaultValue={name}
                    placeholder="Name"
                    className="input input-bordered w-full max-w-xs"
                  />
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Chef</span>
                  </div>
                  <input
                    type="text"
                    name="chef"
                    defaultValue={chef}
                    placeholder="Enter Coffee Cheff"
                    className="input input-bordered w-full max-w-xs"
                  />
                </label>
              </div>
              <div className="single flex gap-4">
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Supplier</span>
                  </div>
                  <input
                    type="text"
                    name="supplier"
                    defaultValue={supplier}
                    placeholder="Supplier Name"
                    className="input input-bordered w-full max-w-xs"
                  />
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Test</span>
                  </div>
                  <input
                    type="text"
                    name="test"
                    defaultValue={test}
                    placeholder="Coffee Test"
                    className="input input-bordered w-full max-w-xs"
                  />
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Category</span>
                  </div>
                  <input
                    type="text"
                    name="category"
                    defaultValue={category}
                    placeholder="Coffee Category"
                    className="input input-bordered w-full max-w-xs"
                  />
                </label>
              </div>
              <div className="single ">
                <label className="form-control ">
                  <div className="label">
                    <span className="label-text">Images</span>
                  </div>
                  <input
                    type="text"
                    name="image"
                    defaultValue={image}
                    placeholder="Image Url"
                    className="input input-bordered w-[100%]"
                  />
                </label>
              </div>
  
              <input
                className="btn btn-info w-full mt-4"
                type="submit"
                value="Update Coffee"
              />
            </div>
          </form>
        </div>
      </div>
    );
};

export default UpdateCoffee;