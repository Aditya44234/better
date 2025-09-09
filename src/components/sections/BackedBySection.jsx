import React from "react";

const BackedBySection = () => {
  const logos = [
    {
      name: "SoftBank",
      src: "https://download.logo.wine/logo/SoftBank_Group/SoftBank_Group-Logo.wine.png",
    },
    {
      name: "Ally",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmM27IY99OcGghd2_HIOfNZoMsvnfqP5zBJQ&s",
    },
    {
      name: "Citi",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmCTjo1Es9jDTyz5gXepwuTgSBJcGimuG6CA&s",
    },
    {
      name: "Ping An Bank",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4QiD7L8LgjCEl9HFSO2xt6-FlCPyLW04mMQBcpbFTnjzavw3gi42j565TSmJ0cHOfLCI&usqp=CAU",
    },
    {
      name: "Goldman Sachs",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFdw0ytlkYWP-85tEWY6eBDwp50ZDiGvYPUpsFYVv2_zmkmfsH4YELp7GNdDwjL6uGHwo&usqp=CAU",
    },
    {
      name: "KPCB",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHw6Uk3WqJ_-M4l70EyX6P7VuIgFuRDpHJ6g&s",
    },
    {
      name: "American Express",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxP4xQ-nlgA_JGkjK899xwHgUWlZh9ZEBPyw&s",
    },
  ];

  return (
    <section className="bg-white py-16 px-6 rounded-2xl shadow-md text-center w-full">
      <h2 className="text-2xl md:text-3xl font-semibold text-[#004336] mb-10">
        Backed by
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-4 items-center justify-center">
        {logos.map((logo) => (
          <div key={logo.name} className="flex items-center justify-evenly">
            <img
              src={logo.src}
              alt={logo.name}
              className="h-10 md:h-20 object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BackedBySection;
