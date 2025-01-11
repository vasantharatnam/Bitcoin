const Team = () => {
    const teamMembers = [
      {
        name: "John Smith",
        designation: "Designation here",
        image: "john.png", // Replace with actual image URLs
        description:
          "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociosqu laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada enim mi gravida praesent interdum.",
      },
      {
        name: "Elina Williams",
        designation: "Designation here",
        image: "elina.png", // Replace with actual image URLs
        description:
          "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociosqu laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada enim mi gravida praesent interdum.",
      },
      {
        name: "John Smith",
        designation: "Designation here",
        image: "sandeep.png", // Replace with actual image URLs
        description:
          "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociosqu laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada enim mi gravida praesent interdum.",
      },
    ];
  
    return (
      <div className="p-6 bg-white shadow-md rounded-lg">
        {/* Title */}
        <h2 className="text-xl font-bold mb-4">Team</h2>
        <p className="text-sm text-gray-600 mb-6">
          Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
          nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
          quam. Facilisis purus convallis quam augue.
        </p>
  
        {/* Team Members */}
        <div className="space-y-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-gray-50 p-4 rounded-lg shadow-sm"
            >
              {/* Member Image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-20 h-20 rounded-full object-cover"
              />
              {/* Member Info */}
              <div>
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{member.designation}</p>
                <p className="text-sm text-gray-600">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Team;
  