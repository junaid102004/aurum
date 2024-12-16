import React from 'react'

const UnitPlan3DView = () => {
    const toggleTile=(title)=>{
      
    }
    const LivingSpace=[{
        title:"Bedroom",
        features:[
            {Fun_and_Playful_Design:"Bright colors and themed decor for a cheerful atmosphere."},{Safe_Enivironment:"Child-friendly materials and furnishings for peace of mind.."},
            {Ample_storage:"Built-in closets and shelving for toys and books."}]    ,
            src:"/uploads/image88.png"
    },{
        title:"Dinng Room",
        features:[
            {Fun_and_Playful_Design:"Bright colors and themed decor for a cheerful atmosphere."},{Safe_Enivironment:"Child-friendly materials and furnishings for peace of mind.."},
            {Ample_storage:"Built-in closets and shelving for toys and books."}]    ,
            src:"/uploads/image88.png"
    },{
        title:"Kids BedRoom",
        features:[
            {Fun_and_Playful_Design:"Bright colors and themed decor for a cheerful atmosphere."},{Safe_Enivironment:"Child-friendly materials and furnishings for peace of mind.."},
            {Ample_storage:"Built-in closets and shelving for toys and books."}]    ,
            src:"/uploads/image88.png"
    },{
        title:"Kitchen",
        features:[
            {Fun_and_Playful_Design:"Bright colors and themed decor for a cheerful atmosphere."},{Safe_Enivironment:"Child-friendly materials and furnishings for peace of mind.."},
            {Ample_storage:"Built-in closets and shelving for toys and books."}]    ,
            src:"/uploads/image88.png"
    },{
        title:"Master Bedroom ",
        features:[
            {Fun_and_Playful_Design:"Bright colors and themed decor for a cheerful atmosphere."},{Safe_Enivironment:"Child-friendly materials and furnishings for peace of mind.."},
            {Ample_storage:"Built-in closets and shelving for toys and books."}]    ,
            src:"/uploads/image88.png"
    },{
        title:"Outdoor Living",
        features:[
            {Fun_and_Playful_Design:"Bright colors and themed decor for a cheerful atmosphere."},{Safe_Enivironment:"Child-friendly materials and furnishings for peace of mind.."},
            {Ample_storage:"Built-in closets and shelving for toys and books."}]    ,
            src:"/uploads/image88.png"
    },]
  return (
    <>
    <div>
    <div className="flex w-full">
    <div className="w-full md:w-1/2 h-[250px] cxs:h-[300px] sm:h-[320px] md:h-[420px] relative rounded-3xl overflow-hidden">
        <img
          src="https://via.placeholder.com/600x400" // Replace with your image URL
          alt="Living Room"
          className="object-cover rounded-3xl cursor-pointer object-contain w-full h-full"
        />
      </div>
      {/* Left Side: Description */}
     
      <div className="w-full md:w-1/2 lg:w-auto md:pl-6 lg:pl-9 pt-0 lg:pt-2 xl:pt-4 flex flex-col justify-start max-h-[500px] overflow-auto">
        <h4 className="font-supera700 text-[30px] lg:text-[39px] text-[#000] capitalize">
          Living Room
        </h4>
        <div className="flex flex-col gap-y-3 xl:gap-y-5 mt-4 xl:mt-6" style={{ opacity: 1 }}>
          <div>
            <h6 className="font-supera600 text-[14px] lg:text-[15px] xl:text-[17.61px] text-[#5E5D59] capitalize">
              Spacious and Well-Lit
            </h6>
            <p className="mt-1 font-supera600 w-full xl:max-w-[450px] leading-tight text-[13.5px] xl:text-[15px] text-[#000] capitalize">
              Large windows for natural light and a warm ambiance.
            </p>
          </div>
          <div>
            <h6 className="font-supera600 text-[14px] lg:text-[15px] xl:text-[17.61px] text-[#5E5D59] capitalize">
              Stylish Furnishings
            </h6>
            <p className="mt-1 font-supera600 w-full xl:max-w-[450px] leading-tight text-[13.5px] xl:text-[15px] text-[#000] capitalize">
              Modern furniture that combines comfort and elegance.
            </p>
          </div>
          <div>
            <h6 className="font-supera600 text-[14px] lg:text-[15px] xl:text-[17.61px] text-[#5E5D59] capitalize">
              Entertainment Ready
            </h6>
            <p className="mt-1 font-supera600 w-full xl:max-w-[450px] leading-tight text-[13.5px] xl:text-[15px] text-[#000] capitalize">
              Equipped with audio-visual setup for movie nights and gatherings.
            </p>
          </div>
        </div>
      </div>
     
      {/* Right Side: Image */}
   
    </div>
    
    </div>
    <div>
    <li className="bg-[#000] text-[#fff] cursor-pointer shadow-[0px_0px_4.8px_0px_rgba(255,211,171,0.5)] border-[0.6px] border-[#000] rounded-[22px] flex gap-x-2.5 items-center py-1.5 px-5">
  <div className="fill-[#fff]">
    <svg
      width="22"
      height="24"
      viewBox="0 0 22 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="stroke-[#fff]"
    >
      <path
        d="M2.70985 12.0272V22.5633M19.5675 12.0272V22.5633M1.65625 12.0272H20.6211M2.70985 17.2952H19.5675M10.0851 14.6612H12.1923M11.1387 6.75922V12.0272M13.6526 2.91884C13.5437 2.73903 13.4454 2.57221 13.3576 2.41838C13.0942 1.95164 12.9614 1.71879 12.7507 1.605C12.54 1.49121 12.2597 1.49121 11.6981 1.49121H10.5803C10.0187 1.49121 9.73738 1.49121 9.52666 1.605C9.31594 1.71879 9.18529 1.95269 8.92084 2.41838C8.82522 2.58679 8.72687 2.75363 8.62583 2.91884C7.3594 4.99339 6.72619 6.03013 6.97905 6.39468C7.23191 6.75922 8.42038 6.75922 10.7973 6.75922H11.48C13.857 6.75922 15.0454 6.75922 15.2983 6.39468C15.5512 6.03013 14.919 4.99339 13.6526 2.91884Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
  <h6 className="whitespace-nowrap font-supera600 text-[14.5px] xl:text-[15.5px] tracking-wide">Living Room</h6>
</li>
<li className="bg-[#000] text-[#fff] cursor-pointer shadow-[0px_0px_4.8px_0px_rgba(255,211,171,0.5)] border-[0.6px] border-[#000] rounded-[22px] flex gap-x-2.5 items-center py-1.5 px-5">
  <div className="fill-[#fff]">
    <svg
      width="22"
      height="24"
      viewBox="0 0 22 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="stroke-[#fff]"
    >
      <path
        d="M2.70985 12.0272V22.5633M19.5675 12.0272V22.5633M1.65625 12.0272H20.6211M2.70985 17.2952H19.5675M10.0851 14.6612H12.1923M11.1387 6.75922V12.0272M13.6526 2.91884C13.5437 2.73903 13.4454 2.57221 13.3576 2.41838C13.0942 1.95164 12.9614 1.71879 12.7507 1.605C12.54 1.49121 12.2597 1.49121 11.6981 1.49121H10.5803C10.0187 1.49121 9.73738 1.49121 9.52666 1.605C9.31594 1.71879 9.18529 1.95269 8.92084 2.41838C8.82522 2.58679 8.72687 2.75363 8.62583 2.91884C7.3594 4.99339 6.72619 6.03013 6.97905 6.39468C7.23191 6.75922 8.42038 6.75922 10.7973 6.75922H11.48C13.857 6.75922 15.0454 6.75922 15.2983 6.39468C15.5512 6.03013 14.919 4.99339 13.6526 2.91884Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
  <h6 className="whitespace-nowrap font-supera600 text-[14.5px] xl:text-[15.5px] tracking-wide">Living Room</h6>
</li>

    </div>
</>  )
}

export default UnitPlan3DView