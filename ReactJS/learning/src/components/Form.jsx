import React, { useState } from "react";

function Form() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    city: "",
  });

  const [isSubmited, setIsSubmited] = useState(false);

  const handelUpdate = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmited(true);
    console.log("Form Data", form);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">React Form</h1>

      <form
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Name:</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handelUpdate}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Email:</label>
          <input
            type="text"
            name="email"
            value={form.email}
            onChange={handelUpdate}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">City:</label>
          <input
            type="text"
            name="city"
            value={form.city}
            onChange={handelUpdate}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition-all"
        >
          Submit
        </button>
      </form>

      {isSubmited && (
        <div className="bg-white p-6 mt-6 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-xl font-bold mb-4 text-green-600">Preview</h2>
          <p><span className="font-semibold">Name:</span> {form.name}</p>
          <p><span className="font-semibold">Email:</span> {form.email}</p>
          <p><span className="font-semibold">City:</span> {form.city}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
