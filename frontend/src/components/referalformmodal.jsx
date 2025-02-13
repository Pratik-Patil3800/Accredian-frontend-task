import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { X, ChevronLeft } from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";
import * as z from "zod";

// Step 1: Friend's Details Schema
const step1Schema = z.object({
  refereeName: z.string().min(3, "Friend's name must be at least 3 characters"),
  refereeEmail: z.string().email("Invalid email address"),
  refereeMobile: z.string().regex(/^\d{10}$/, "Enter a valid 10-digit mobile number"),
  courseId: z.string().min(1, "Please select a course"),
});

// Step 2: Referrer's Details Schema
const step2Schema = z.object({
  referrerName: z.string().min(3, "Your name must be at least 3 characters"),
  referrerEmail: z.string().email("Invalid email address"),
  referrerMobile: z.string().regex(/^\d{10}$/, "Enter a valid 10-digit mobile number"),
});

// Courses List
const courses = [
  { id: "1", name: "Web Development" },
  { id: "2", name: "Data Science" },
  { id: "3", name: "AI & Machine Learning" },
  { id: "4", name: "Cyber Security" },
];

const ReferralModal = ({ isOpen, onClose }) => {
  const [isloading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [referralData, setReferralData] = useState({});  // Store data for both steps

  // Dynamically switch schema based on step
  const schema = step === 1 ? step1Schema : step2Schema;

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      referrerName: "",
      referrerEmail: "",
      referrerMobile: "",
      refereeName: "",
      refereeEmail: "",
      refereeMobile: "",
      courseId: "",
    },
  });

  // Step 1 Submission (Move to Step 2)
  const onSubmitStep1 = (data) => {
    console.log("Step 1 Data:", data);
    setReferralData((prevData) => ({
      ...prevData,
      ...data, // Add Step 1 data to referralData state
    }));
    setStep(2);
  };

  // Final Submission (Submit Data to API)
  const onSubmitFinal = async (data) => {
    const finalData = { ...referralData, ...data }; // Combine Step 1 and Step 2 data
    setIsLoading(true);
    try {
      // console.log("Referral Submitted:", finalData);
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URI}/api/referrals`,
        finalData,
        { headers: { "Content-Type": "application/json" } }
      );
      // console.log(response);
      reset();
      setStep(1);
      setReferralData({}); 
      toast.success("Referral submitted successfully!");
      onClose(false);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong, please try again later!");
      onClose(false);
    }
    finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-lg">
        {/* Close Button */}
        <button onClick={() => onClose(false)} className="absolute right-4 top-4 text-gray-500 hover:text-gray-700">
          <X size={20} />
        </button>

        <div className="p-6">
          <div className="flex items-center mb-6">
            {step === 2 && (
              <button onClick={() => setStep(1)} className="mr-4 text-blue-600 hover:text-blue-700 flex items-center">
                <ChevronLeft size={20} />
                <span className="ml-1">Back</span>
              </button>
            )}
            <h2 className="text-2xl font-semibold">
              Refer your <span className="text-blue-600">friend!</span>
            </h2>
          </div>

          {/* Progress Bar */}
          <div className="relative mb-8 h-1 bg-gray-200 rounded">
            <div
              className="absolute h-full bg-blue-600 rounded transition-all duration-300"
              style={{ width: step === 1 ? "50%" : "100%" }}
            />
          </div>

          <div className="flex justify-between mb-8">
            <span className={step === 1 ? "text-blue-600 font-medium" : "text-gray-700"}>Friend's details</span>
            <span className={step === 2 ? "text-blue-600 font-medium" : "text-gray-700"}>Your details</span>
          </div>

          {/* Step 1: Friend's Details */}
          {step === 1 ? (
            <form onSubmit={handleSubmit(onSubmitStep1)} className="space-y-4">
              <input {...register("refereeName")} type="text" placeholder="Enter friend's name" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" />
              {errors.refereeName && <p className="text-red-500 text-sm">{errors.refereeName.message}</p>}

              <input {...register("refereeEmail")} type="email" placeholder="Enter friend's email" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" />
              {errors.refereeEmail && <p className="text-red-500 text-sm">{errors.refereeEmail.message}</p>}

              <input {...register("refereeMobile")} type="tel" placeholder="Friend's phone number" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" />
              {errors.refereeMobile && <p className="text-red-500 text-sm">{errors.refereeMobile.message}</p>}

              <Controller
                name="courseId"
                control={control}
                render={({ field }) => (
                  <select {...field} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500">
                    <option value="">Select Course</option>
                    {courses.map((course) => (
                      <option key={course.id} value={course.id}>
                        {course.name}
                      </option>
                    ))}
                  </select>
                )}
              />
              {errors.courseId && <p className="text-red-500 text-sm">{errors.courseId.message}</p>}

              <button type="submit" className="w-full p-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                Next
              </button>
            </form>
          ) : (
            // Step 2: Referrer's Details
            <form onSubmit={handleSubmit(onSubmitFinal)} className="space-y-4">
              <input {...register("referrerName")} type="text" placeholder="Enter your name" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" />
              {errors.referrerName && <p className="text-red-500 text-sm">{errors.referrerName.message}</p>}

              <input {...register("referrerEmail")} type="email" placeholder="Enter your email" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" />
              {errors.referrerEmail && <p className="text-red-500 text-sm">{errors.referrerEmail.message}</p>}

              <input {...register("referrerMobile")} type="tel" placeholder="Your phone number" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" />
              {errors.referrerMobile && <p className="text-red-500 text-sm">{errors.referrerMobile.message}</p>}

              <button type="submit" className="w-full p-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700" disabled={isloading}>
                {isloading? "Submitting..." : "Refer Now"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReferralModal;
