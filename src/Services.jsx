import React from "react";
const Services = () => {
    return <section className="services text-black py-10">
      <h2 className="mb-6 text-4xl font-bold text-center">My Services</h2>

    <div className="services-container flex justify-center items-center gap-6 flex-wrap">
      <div className="services-box bg-blue-200 p-8 text-center rounded-lg shadow-md w-80">
      <h3 className="text-xl font-semibold mb-4">Web Development</h3>
      <p className="mb-4 text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit.
Praesentium accusantium sequi repellendus saepe minima.</p>
        <a href="#" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
        Read More</a>
      </div>

      <div className="services-box bg-blue-200 p-8 text-center rounded-lg shadow-md w-80">
      <h3 className="text-xl font-semibold mb-4">UI/UX Design</h3>
      <p className="mb-4 text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit.
Praesentium accusantium sequi repellendus saepe minima.</p>
      <a href="#" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
      Read More</a>
      </div>

      <div className="services-box bg-blue-200 p-8 text-center rounded-lg shadow-md w-80">
      <h3 className="text-xl font-semibold mb-4">App Development</h3>
      <p className="mb-4 text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit.
Praesentium accusantium sequi repellendus saepe minima.</p>
      <a href="#" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
      Read More</a>
      </div>
    </div>
    </section>
};
export default Services;