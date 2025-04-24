"use client"
import { useState } from "react";

// Contact Form Component
export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for form submission logic
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-600 focus:ring-indigo-600"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-600 focus:ring-indigo-600"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-600 focus:ring-indigo-600"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}