"use client"

import { useState } from "react"
import { ChevronRight, ChevronDown, GraduationCap } from "lucide-react"

const ReferralBenefits = () => {
  const [isShowMore, setIsShowMore] = useState(false)

  const programs = [
    {
      id: 1,
      name: "Professional Certificate Program in Product Management",
      referrerBonus: "₹ 7,000",
      refereeBonus: "₹ 9,000",
    },
    {
      id: 2,
      name: "PG Certificate Program in Strategic Product Management",
      referrerBonus: "₹ 9,000",
      refereeBonus: "₹ 11,000",
    },
    {
      id: 3,
      name: "Executive Program in Data Driven Product Management",
      referrerBonus: "₹ 10,000",
      refereeBonus: "₹ 10,000",
    },
    {
      id: 4,
      name: "Executive Program in Product Management and Digital Transformation",
      referrerBonus: "₹ 10,000",
      refereeBonus: "₹ 10,000",
    },
    {
      id: 5,
      name: "Executive Program in Product Management",
      referrerBonus: "₹ 10,000",
      refereeBonus: "₹ 10,000",
    },
    {
      id: 6,
      name: "Advanced Certification in Product Management",
      referrerBonus: "₹ 10,000",
      refereeBonus: "₹ 10,000",
    },
    {
      id: 7,
      name: "Executive Program in Product Management and Project Management",
      referrerBonus: "₹ 10,000",
      refereeBonus: "₹ 10,000",
    },
  ]

  const sidebarItems = [
    { id: "all", name: "ALL PROGRAMS", active: true },
    { id: "product", name: "PRODUCT MANAGEMENT" },
    { id: "strategy", name: "STRATEGY & LEADERSHIP" },
    { id: "business", name: "BUSINESS MANAGEMENT" },
    { id: "fintech", name: "FINTECH" },
    { id: "senior", name: "SENIOR MANAGEMENT" },
    { id: "data", name: "DATA SCIENCE" },
    { id: "digital", name: "DIGITAL TRANSFORMATION" },
    { id: "analytics", name: "BUSINESS ANALYTICS" },
  ]

  return (
    <div className="max-w-[1280px] mx-auto px-4 py-8 bg-white">
      {/* Header */}
      <div className="mb-8" id="benefitsSection">
        <h1 className="text-[28px] font-semibold text-center mb-6">
          What Are The <span className="text-[#1A73E8]">Referral Benefits</span>?
        </h1>
        <div className="flex justify-end mb-6">
          <div className="flex items-center text-[14px] text-gray-600">
            <span className="mr-3">Enrolled</span>
            <div className="w-10 h-5 bg-[#E8F0FE] rounded-full relative cursor-pointer">
              <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-[#1A73E8] rounded-full shadow-sm transition-all duration-200"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <div className="lg:w-72 flex-shrink-0">
          <div className="bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] overflow-hidden">
            {sidebarItems.map((item) => (
              <div
                key={item.id}
                className={`flex items-center justify-between px-6 py-4 cursor-pointer border-b border-gray-100 last:border-b-0 transition-colors duration-200 ${
                  item.active ? "bg-[#1A73E8] text-white hover:bg-[#1557B0]" : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <span className="text-[13px] font-medium tracking-wide">{item.name}</span>
                <ChevronRight className="h-4 w-4" />
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-grow">
          <div className="bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] overflow-hidden">
           {/* Table Header */}
<div className="bg-[#1A73E859]">
  <div className="grid grid-cols-2 text-[14px] font-medium text-gray-700">
    <div className="px-6 py-4 text-[#1A73E8] text-center">Programs</div>
    <div className="flex justify-between px-6 py-4 text-center text-[#1A73E8]"><div className="w-1/2"> Referrer Bonus</div> <div className="w-1/2"> Referee Bonus</div>  </div>
  </div>
</div>

{/* Table Body */}
<div className="divide-y divide-gray-100">
  {programs.map((program) => (
    <div
      key={program.id}
      className="grid grid-cols-2 text-[14px] hover:bg-gray-50 transition-colors duration-200"
    >
      {/* Left side: Program Name */}
      <div className="px-6 py-2 flex items-start gap-3 border-r border-gray-200">
        <GraduationCap className="h-5 w-5 text-[#1A73E8] flex-shrink-0 mt-0.5" />
        <span className="text-gray-700 leading-normal">{program.name}</span>
      </div>

      {/* Right side: Referrer Bonus and Referee Bonus */}
      <div className="flex justify-between px-6 py-4 text-center text-gray-700">
        <div className="w-1/2 border-r border-gray-200">{program.referrerBonus}</div>
        <div className="w-1/2">{program.refereeBonus}</div>
      </div>
    </div>
  ))}
</div>


          </div>

          {/* Show More Button */}
          <div className="flex justify-end mt-6 mr-4">
            <button
              onClick={() => setIsShowMore(!isShowMore)}
              className="flex items-center text-[#1A73E8] hover:text-[#1557B0] text-[14px] font-medium transition-colors duration-200"
            >
              Show More
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
          </div>

          {/* Refer Now Button */}
          <div className="flex justify-center mt-8">
            <button className="bg-[#1A73E8] hover:bg-[#1557B0] text-white px-10 py-3 rounded-lg text-[15px] font-medium transition-colors duration-200">
              Refer Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReferralBenefits

