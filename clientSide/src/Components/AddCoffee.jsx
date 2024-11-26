import React from "react";

const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const test = form.test.value;
    const category = form.category.value;
    const image = form.image.value;

    // Create object data
    const coffeesAllData = { name, chef, supplier, test, category, image };
    console.log(coffeesAllData);

    // google search: fetch upload json data
    fetch("http://localhost:5000/add-coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coffeesAllData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("inside post response", data);
        // data insert হবা র পরে এই alert টি দি বে ।
        if (data.insertedId) {
          alert("users added successfully");
          // form.reset();
        }
      });
  };

  return (
    <div className="w-3/4 border w-3/4 p-3 mx-auto mt-5 bg-green-200 rounded">
      <h1 className="text-center font-extrabold text-3xl">Add New Coffee</h1>

      <div>
        <form onSubmit={handleAddCoffee}>
          <div className="main p-4">
            <div className="single flex gap-4">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Coffee Name</span>
                </div>
                <input
                  type="text"
                  name="name"
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
                  placeholder="Image Url"
                  className="input input-bordered w-[100%]"
                />
              </label>
            </div>

            <input
              className="btn btn-info w-full mt-4"
              type="submit"
              value="Add New Coffee"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
