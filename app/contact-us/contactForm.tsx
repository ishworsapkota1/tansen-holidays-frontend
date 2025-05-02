"use client"
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

// Define types
interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

// Contact Form Component
export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when field is being edited
    if (errors[name as keyof FormData]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    let isValid = true;

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    // Validate phone
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^\+?[0-9\s-]{8,15}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
      isValid = false;
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error("Please fix the errors in the form", {
        duration: 3000,
        position: "top-center",
        style: {
          background: "#FEF2F2",
          color: "#991B1B",
          border: "1px solid #FEE2E2",
        },
        iconTheme: {
          primary: "#EF4444",
          secondary: "#FFFFFF",
        },
      });
      return;
    }
    
    // Placeholder for form submission logic
    console.log("Form submitted:", formData);
    
    // Show success toast
    toast.success("Your message has been sent successfully!", {
      duration: 3000,
      position: "top-center",
      style: {
        background: "#F0FDF4",
        color: "#166534",
        border: "1px solid #DCFCE7",
      },
      iconTheme: {
        primary: "#16A34A",
        secondary: "#FFFFFF",
      },
    });
    
    // Reset form
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <div className="relative h-full">
      {/* Toast container */}
      <Toaster />
      
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 md:p-8 h-full flex flex-col">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-4 flex-grow">
          {/* Name and Phone in the same row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Full name"
                value={formData.name}
                onChange={handleChange}
                className={`mt-1 w-full rounded-lg border ${errors.name ? "border-red-500" : "border-gray-300"} shadow-sm p-2 focus:border-indigo-600 focus:ring-indigo-600`}
              />
              {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleChange}
                className={`mt-1 w-full rounded-lg border ${errors.phone ? "border-red-500" : "border-gray-300"} shadow-sm p-2 focus:border-indigo-600 focus:ring-indigo-600`}
              />
              {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
            </div>
          </div>
          
          {/* Email in its own row */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              className={`mt-1 w-full rounded-lg border ${errors.email ? "border-red-500" : "border-gray-300"} shadow-sm p-2 focus:border-indigo-600 focus:ring-indigo-600`}
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
          </div>
          
          {/* Message in its own row */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className={`mt-1 w-full rounded-lg border ${errors.message ? "border-red-500" : "border-gray-300"} shadow-sm p-2 focus:border-indigo-600 focus:ring-indigo-600`}
            />
            {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
          </div>
          
          <button
            type="submit"
            className="w-full bg-purple-800 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-primary-100 transition-colors duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}