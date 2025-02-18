import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const MeetOurDevelopers = () => {
  const developers = [
    {
      name: "Anyy",
      role: "Frontend Developer",
      image: "https://th.bing.com/th/id/OIP.mMVd8JlNazaLDCB3l2xKYgAAAA?rs=1&pid=ImgDetMain",
    },
    {
      name: "Lucyy",
      role: "Backend Developer",
      image: "https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Alishaa",
      role: "Full Stack Developer",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Riyaa",
      role: "UI/UX Designer",
      image: "https://th.bing.com/th/id/OIP.mMVd8JlNazaLDCB3l2xKYgAAAA?rs=1&pid=ImgDetMain",
    },
  ];

  return (
    <section className="bg-gray-100 text-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet Our Developers</h2>
          <p className="text-gray-400 italic">
            "Add a qoutation here ." –  Be active buddyy
          </p>
        </div>

        {/* Developer Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {developers.map((developer, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
            >
              <img
                src={developer.image}
                alt={developer.name}
                className="w-24 h-24 rounded-full mb-4 object-center object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-900 text-style-shadow">{developer.name}</h3>
              <p className="text-sm text-gray-700">{developer.role}</p>
              <p className="text-sm">Lorem ipsum dolor sit amet consectetur Consectetur placeat quos similique deleniti quasi repellat voluptatibus distinctio quia odit.</p>
              <div className=" grid grid-cols-3 gap-3 py-3">
                <FaLinkedin className="size-5 text-[#0077B5]" />
                <FaXTwitter className="size-5 text-[#111]"/>
                <FaInstagram className="size-5 text-[#E4405F]"/>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default MeetOurDevelopers;
