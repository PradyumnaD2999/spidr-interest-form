import { useState } from 'react';

export default function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    guess: '',
    pin: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Auto-format the PIN input with dashes (####-####-####-####)
    if (name === 'pin') {
      const raw = value.replace(/\D/g, '').slice(0, 16); // Only digits
      const formatted = raw.replace(/(.{4})/g, '$1-').replace(/-$/, '');
      setFormData({ ...formData, [name]: formatted });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Display form data in cbrowser console after submitting
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  // Render the form in DOM
  return (
    <div className="min-h-screen bg-neutral-900 text-white flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-neutral-800 p-8 rounded-xl shadow-xl space-y-6"
      >
        {/* Form Title */}
        <h1 className="text-3xl font-bold text-blue-200 text-center mb-4">Spidr Air Fryer Interest Form</h1>

        {/* Input field: First Name */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-blue-200">First Name</label>
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="mt-1 px-3 py-2 rounded bg-neutral-700 text-white"
            required
          />
        </div>

        {/* Input field: Last Name */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-blue-200">Last Name</label>
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="mt-1 px-3 py-2 rounded bg-neutral-700 text-white"
            required
          />
        </div>

        {/* Input field: Phone Number */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-blue-200">Phone Number</label>
          <input
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 px-3 py-2 rounded bg-neutral-700 text-white"
            required
          />
        </div>

        {/* Input field: Email */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-blue-200">Email Address</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 px-3 py-2 rounded bg-neutral-700 text-white"
            required
          />
        </div>

        {/* Input field: Cost Estimate */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-blue-200">Guess the Air Fryer’s Cost ($)</label>
          <input
            name="guess"
            type="number"
            value={formData.guess}
            onChange={handleChange}
            className="mt-1 px-3 py-2 rounded bg-neutral-700 text-white"
          />
        </div>

        {/* Input field: PIN */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold text-blue-200">Secret 16-digit Spidr PIN</label>
          <input
            name="pin"
            value={formData.pin}
            onChange={handleChange}
            placeholder="####-####-####-####"
            className="mt-1 px-3 py-2 rounded bg-neutral-700 text-white"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-200 text-black font-semibold py-2 rounded hover:bg-black hover:text-white transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}