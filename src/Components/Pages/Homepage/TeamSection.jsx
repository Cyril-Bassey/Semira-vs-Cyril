import React, { useState } from 'react';

const teamRoles = [
  {
    id: 'accountManager',
    title: 'Account Manager',
    description:
      'Account managers take care of every need you might have and outline the objectives to launch a successful campaign. With an industry pro in every niche, we’ll find the most relevant AM to lead your project.',
    image: 'https://placehold.co/100', // Replace with the appropriate image link
    video: 'https://www.youtube.com/embed/sample', // Video URL (standby mode)
  },
  {
    id: 'sdr',
    title: 'SDR',
    description:
      'SDRs are responsible for reaching out to potential clients and helping to grow your business pipeline.',
    image: 'https://placehold.co/100', // Replace with the appropriate image link
    video: 'https://www.youtube.com/embed/sample',
  },
  {
    id: 'leadResearcher',
    title: 'Lead Researcher',
    description:
      'Lead researchers work to ensure the quality and accuracy of the leads sourced for your campaign.',
    image: 'https://placehold.co/100', // Replace with the appropriate image link
    video: 'https://www.youtube.com/embed/sample',
  },
  {
    id: 'CopyWriter',
    title: 'CopyWriter',
    description:
      'Lead researchers work to ensure the quality and accuracy of the leads sourced for your campaign.',
    image: 'https://placehold.co/100', // Replace with the appropriate image link
    video: 'https://www.youtube.com/embed/sample',
  },
  {
    id: 'Test',
    title: 'Test content',
    description:
      'Lead researchers work to ensure the quality and accuracy of the leads sourced for your campaign.',
    image: 'https://placehold.co/100', // Replace with the appropriate image link
    video: 'https://www.youtube.com/embed/sample',
  },
];

const TeamSection = () => {
  const [selectedRole, setSelectedRole] = useState(teamRoles[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleRoleChange = (roleId) => {
    const selected = teamRoles.find((role) => role.id === roleId);
    setSelectedRole(selected);
    setDropdownOpen(false); // Close dropdown after selecting
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="bg-gray-950 py-10 px-4 md:px-10 text-center flex flex-col justify-center items-center w-full">
      {/* Title */}
      <h2 className="text-2xl lg:text-4xl text-gray-300 font-montserrat md:text-3xl font-bold mb-8">
        Meet the people <br className="hidden md:block" /> behind your project
      </h2>

      {/* Mobile Dropdown Selector */}
      <div className="md:hidden mb-6 w-full">
        <button
          className="bg-yellow-400 w-full py-2 px-4 rounded-lg text-white font-semibold"
          onClick={toggleDropdown}
        >
          {selectedRole.title}
          <span className="ml-2">&#9660;</span>
        </button>

        {dropdownOpen && (
          <ul className="mt-2 bg-white shadow-lg rounded-lg overflow-hidden">
            {teamRoles.map((role) => (
              <li
                key={role.id}
                className={`cursor-pointer px-4 py-2 text-left hover:bg-gray-100 ${
                  selectedRole.id === role.id ? 'bg-gray-200' : ''
                }`}
                onClick={() => handleRoleChange(role.id)}
              >
                {role.title}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Desktop Role Selector */}
      <div className="hidden md:flex flex-wrap lg:items-center lg:justify-between lg:w-[85%] space-x-2 md:space-x-4 mb-6">
        {teamRoles.map((role) => (
          <label key={role.id} className="cursor-pointer ">
            <input
              type="radio"
              name="role"
              value={role.id}
              checked={selectedRole.id === role.id}
              onChange={() => handleRoleChange(role.id)}
              className="hidden"
            />
            <div
              className={`px-2 py-2 rounded-lg lg:w-[180px] lg:h-[100px] flex justify-center items-center border-2 shadow-lg font-montserrat ${
                selectedRole.id === role.id
                  ? 'bg-[#90902b] text-white'
                  : 'bg-neutral-50 text-gray-600'
              }`}
            >
              {role.title}
            </div>
          </label>
        ))}
      </div>

      {/* Role Details */}
      <div className="flex flex-col md:flex-row justify-between bg-gray-100 w-full max-w-5xl rounded-lg items-start">
        <div className="flex flex-col items-start w-full md:w-1/2 p-10">
          {/* Team Member Info */}
          <div className="flex flex-col mb-4 w-full">
            <div className="flex space-x-3 mb-4">
              <img
                src={selectedRole.image}
                alt={`${selectedRole.title} Image`}
                className="h-12 w-12 rounded-full"
              />
              <img
                src={selectedRole.image}
                alt={`${selectedRole.title} Image`}
                className="h-12 w-12 rounded-full"
              />
            </div>
            {/* Display Title and Description */}
            <div className="text-left">
              <h3 className="text-xl font-semibold">{selectedRole.title}</h3>
              <p className="text-sm mt-2">{selectedRole.description}</p>
            </div>
            {/* Discover More Button */}
            <button className="mt-4 bg-yellow-400 w-full md:w-1/2 text-gray-200 rounded-full py-2 px-4 hover:bg-yellow-500 hover:text-white transition">
              Discover details
            </button>
          </div>
        </div>

        {/* Video Placeholder */}
        <div className="mt-6 md:mt-0 w-full md:w-1/2 p-5">
          <iframe
            className="rounded-2xl"
            width="100%"
            height="315"
            src={selectedRole.video}
            title={`${selectedRole.title} Video`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
