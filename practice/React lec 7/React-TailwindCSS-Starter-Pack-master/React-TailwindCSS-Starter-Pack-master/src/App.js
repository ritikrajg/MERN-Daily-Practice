import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    country: "India",
    address: "",
    city: "",
    state: "",
    postalState: "",
    comments: false,
    candidate: false,
    offers: false,
    pushNotification: ""
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div className="max-w-3xl p-6 mx-auto mt-10 bg-white shadow-md rounded-xl">
      <form onSubmit={submitHandler} className="space-y-6">

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="block mb-1 font-medium">First name</label>
            <input
              type="text"
              placeholder="Ritik Raj"
              name="firstname"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              value={formData.firstname}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Last name</label>
            <input
              type="text"
              placeholder="Gupta"
              name="lastname"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              value={formData.lastname}
              onChange={changeHandler}
            />
          </div>
        </div>

        <div>
          <label className="block mb-1 font-medium">Email address</label>
          <input
            type="email"
            placeholder="ritikrajg@gmail.com"
            name="email"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            value={formData.email}
            onChange={changeHandler}
          />
        </div>

        <div>
          <label htmlFor="country" className="block mb-1 font-medium">Country</label>
          <select
            name="country"
            id="country"
            value={formData.country}
            onChange={changeHandler}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          >
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="Mexico">Mexico</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Street address</label>
          <input
            type="text"
            placeholder="Main Road"
            name="address"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            value={formData.address}
            onChange={changeHandler}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div>
            <label className="block mb-1 font-medium">City</label>
            <input
              type="text"
              placeholder="Warisaliganj"
              name="city"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              value={formData.city}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">State/Province</label>
            <input
              type="text"
              placeholder="Bihar"
              name="state"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              value={formData.state}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Zip/Postal code</label>
            <input
              type="text"
              placeholder="805130"
              name="postalState"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              value={formData.postalState}
              onChange={changeHandler}
            />
          </div>
        </div>

        <div className="space-y-4">
          <p className="font-semibold">By Email</p>

          <label className="flex items-start space-x-3">
            <input
              type="checkbox"
              name="comments"
              checked={formData.comments}
              className="w-5 h-5 mt-1 accent-blue-600"
              onChange={changeHandler}
            />
            <div>
              <span className="font-medium">Comments</span>
              <p className="text-sm text-gray-600">Get notified when someone posts a comment.</p>
            </div>
          </label>

          <label className="flex items-start space-x-3">
            <input
              type="checkbox"
              name="candidate"
              checked={formData.candidate}
              className="w-5 h-5 mt-1 accent-blue-600"
              onChange={changeHandler}
            />
            <div>
              <span className="font-medium">Candidates</span>
              <p className="text-sm text-gray-600">Get notified when a candidate applies for a job.</p>
            </div>
          </label>

          <label className="flex items-start space-x-3">
            <input
              type="checkbox"
              name="offers"
              checked={formData.offers}
              className="w-5 h-5 mt-1 accent-blue-600"
              onChange={changeHandler}
            />
            <div>
              <span className="font-medium">Offers</span>
              <p className="text-sm text-gray-600">Get notified when offers are accepted or rejected.</p>
            </div>
          </label>
        </div>

        <fieldset className="space-y-3">
          <legend className="font-semibold">Push Notifications</legend>
          <p className="mb-2 text-sm text-gray-600">These are delivered via SMS to your mobile phone.</p>

          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="pushNotification"
              value="Everything"
              checked={formData.pushNotification === "Everything"}
              className="w-5 h-5 accent-purple-600"
              onChange={changeHandler}
            />
            <span>Everything</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="pushNotification"
              value="Same-as-Email"
              checked={formData.pushNotification === "Same-as-Email"}
              className="w-5 h-5 accent-purple-600"
              onChange={changeHandler}
            />
            <span>Same as Email</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="pushNotification"
              value="No-Push-Notification"
              checked={formData.pushNotification === "No-Push-Notification"}
              className="w-5 h-5 accent-purple-600"
              onChange={changeHandler}
            />
            <span>No Push Notifications</span>
          </label>
        </fieldset>

        <div>
          <button
            type="submit"
            className="w-full py-2 text-white transition duration-300 bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
