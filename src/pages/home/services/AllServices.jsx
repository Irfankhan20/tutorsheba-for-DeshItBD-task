import useServices from "../../../hooks/useServices";

const AllServices = () => {
  const [services] = useServices();

  // Filter services by category
  const banglaMediumServices = services.filter(
    (service) => service.category === "Bangla Medium"
  );
  const englishMediumServices = services.filter(
    (service) => service.category === "English Medium"
  );
  const religiousStudiesServices = services.filter(
    (service) => service.category === "Religious Studies"
  );
  const admissionTestServices = services.filter(
    (service) => service.category === "Admission Test"
  );
  const professionalskillDevelopmentServices = services.filter(
    (service) => service.category === "Professional Skill Development"
  );
  const languageLearningServices = services.filter(
    (service) => service.category === "Language Learning"
  );
  const testPreparationServices = services.filter(
    (service) => service.category === "Test Preparation"
  );

  return (
    <div className="w-10/12 mx-auto mb-16 md:mb-24 mt-20">
      <h1 className="md:text-[36px] text-[25px] md:leading-[45px] leading-[34px] font-semibold text-[#05264E] text-center">
        Our Services
      </h1>
      <p className="md:text-[24px] text-[20px] md:leading-[26px] font-medium text-[#66789C] text-center pt-3">
        Here are services we provide
      </p>

      {/* Bangla Medium Section */}
      <div className="mt-10">
        <p className="text-[24px] font-bold lg:leading-[30px] text-[#05264E] border-b-2 border-[#800080] inline-block pb-1 pt-2">
          Bangla Medium
        </p>

        {banglaMediumServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-3">
            {banglaMediumServices.map((service) => (
              <div
                key={service._id}
                className="transition-all duration-300 border border-[#e4e1e1] flex flex-col items-center justify-center text-white text-xl font-bold shadow-lg rounded-md p-6 hover:cursor-pointer hover:-translate-y-1"
              >
                <div className="lg:w-[250px] w-[250px] md:w-[150px] md:h-[200px] lg:h-[250px] h-[250px] overflow-hidden flex items-center justify-center">
                  <img
                    className="w-full h-full object-cover rounded-md"
                    src={service?.photo}
                    alt={service?.title || "Service Image"}
                    loading="lazy"
                  />
                </div>
                <h1 className="text-[20px] lg:leading-[26px] font-semibold text-center text-[#05264E] mt-4">
                  {service?.title || "No Title"}
                </h1>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-5">
            No Bangla Medium services available.
          </p>
        )}
      </div>
      {/* English Medium Section */}
      <div className="mt-10">
        <p className="text-[24px] font-bold lg:leading-[30px] text-[#05264E] border-b-2 border-[#800080] inline-block pb-1 pt-2">
          English Medium
        </p>

        {englishMediumServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-3">
            {englishMediumServices.map((service) => (
              <div
                key={service._id}
                className="transition-all duration-300 border border-[#e4e1e1] flex flex-col items-center justify-center text-white text-xl font-bold shadow-lg rounded-md p-6 hover:cursor-pointer hover:-translate-y-1"
              >
                <div className="lg:w-[250px] w-[250px] md:w-[150px] md:h-[200px] lg:h-[250px] h-[250px] overflow-hidden flex items-center justify-center">
                  <img
                    className="w-full h-full object-cover rounded-md"
                    src={service?.photo}
                    alt={service?.title || "Service Image"}
                    loading="lazy"
                  />
                </div>
                <h1 className="text-[20px] lg:leading-[26px] font-semibold text-center text-[#05264E] mt-4">
                  {service?.title || "No Title"}
                </h1>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-5">
            No English Medium services available.
          </p>
        )}
      </div>
      {/* Religious Studies Section */}
      <div className="mt-10">
        <p className="text-[24px] font-bold lg:leading-[30px] text-[#05264E] border-b-2 border-[#800080] inline-block pb-1 pt-2">
          Religious Studies
        </p>

        {religiousStudiesServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-3">
            {religiousStudiesServices.map((service) => (
              <div
                key={service._id}
                className="transition-all duration-300 border border-[#e4e1e1] flex flex-col items-center justify-center text-white text-xl font-bold shadow-lg rounded-md p-6 hover:cursor-pointer hover:-translate-y-1"
              >
                <div className="lg:w-[250px] w-[250px] md:w-[150px] md:h-[200px] lg:h-[250px] h-[250px] overflow-hidden flex items-center justify-center">
                  <img
                    className="w-full h-full object-cover rounded-md"
                    src={service?.photo}
                    alt={service?.title || "Service Image"}
                    loading="lazy"
                  />
                </div>
                <h1 className="text-[20px] lg:leading-[26px] font-semibold text-center text-[#05264E] mt-4">
                  {service?.title || "No Title"}
                </h1>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-5">
            No Religious Studies services available.
          </p>
        )}
      </div>
      {/* Admission Test Section */}
      <div className="mt-10">
        <p className="text-[24px] font-bold lg:leading-[30px] text-[#05264E] border-b-2 border-[#800080] inline-block pb-1 pt-2">
          Admission Test
        </p>

        {admissionTestServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-3">
            {admissionTestServices.map((service) => (
              <div
                key={service._id}
                className="transition-all duration-300 border border-[#e4e1e1] flex flex-col items-center justify-center text-white text-xl font-bold shadow-lg rounded-md p-6 hover:cursor-pointer hover:-translate-y-1"
              >
                <div className="lg:w-[250px] w-[250px] md:w-[150px] md:h-[200px] lg:h-[250px] h-[250px] overflow-hidden flex items-center justify-center">
                  <img
                    className="w-full h-full object-cover rounded-md"
                    src={service?.photo}
                    alt={service?.title || "Service Image"}
                    loading="lazy"
                  />
                </div>
                <h1 className="text-[20px] lg:leading-[26px] font-semibold text-center text-[#05264E] mt-4">
                  {service?.title || "No Title"}
                </h1>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-5">
            No Admission Test services available.
          </p>
        )}
      </div>
      {/* Professional skill Development Section */}
      <div className="mt-10">
        <p className="text-[24px] font-bold lg:leading-[30px] text-[#05264E] border-b-2 border-[#800080] inline-block pb-1 pt-2">
          Professional Skill Development
        </p>

        {professionalskillDevelopmentServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-3">
            {professionalskillDevelopmentServices.map((service) => (
              <div
                key={service._id}
                className="transition-all duration-300 border border-[#e4e1e1] flex flex-col items-center justify-center text-white text-xl font-bold shadow-lg rounded-md p-6 hover:cursor-pointer hover:-translate-y-1"
              >
                <div className="lg:w-[250px] w-[250px] md:w-[150px] md:h-[200px] lg:h-[250px] h-[250px] overflow-hidden flex items-center justify-center">
                  <img
                    className="w-full h-full object-cover rounded-md"
                    src={service?.photo}
                    alt={service?.title || "Service Image"}
                    loading="lazy"
                  />
                </div>
                <h1 className="text-[20px] lg:leading-[26px] font-semibold text-center text-[#05264E] mt-4">
                  {service?.title || "No Title"}
                </h1>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-5">
            No Professional skill Development services available.
          </p>
        )}
      </div>
      {/* Language Learning Section */}
      <div className="mt-10">
        <p className="text-[24px] font-bold lg:leading-[30px] text-[#05264E] border-b-2 border-[#800080] inline-block pb-1 pt-2">
          Language Learning
        </p>

        {languageLearningServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-3">
            {languageLearningServices.map((service) => (
              <div
                key={service._id}
                className="transition-all duration-300 border border-[#e4e1e1] flex flex-col items-center justify-center text-white text-xl font-bold shadow-lg rounded-md p-6 hover:cursor-pointer hover:-translate-y-1"
              >
                <div className="lg:w-[250px] w-[250px] md:w-[150px] md:h-[200px] lg:h-[250px] h-[250px] overflow-hidden flex items-center justify-center">
                  <img
                    className="w-full h-full object-cover rounded-md"
                    src={service?.photo}
                    alt={service?.title || "Service Image"}
                    loading="lazy"
                  />
                </div>
                <h1 className="text-[20px] lg:leading-[26px] font-semibold text-center text-[#05264E] mt-4">
                  {service?.title || "No Title"}
                </h1>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-5">
            No Language Learning services available.
          </p>
        )}
      </div>
      {/* Test Preparation Section */}
      <div className="mt-10">
        <p className="text-[24px] font-bold lg:leading-[30px] text-[#05264E] border-b-2 border-[#800080] inline-block pb-1 pt-2">
          Test Preparation
        </p>

        {testPreparationServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-3">
            {testPreparationServices.map((service) => (
              <div
                key={service._id}
                className="transition-all duration-300 border border-[#e4e1e1] flex flex-col items-center justify-center text-white text-xl font-bold shadow-lg rounded-md p-6 hover:cursor-pointer hover:-translate-y-1"
              >
                <div className="lg:w-[250px] w-[250px] md:w-[150px] md:h-[200px] lg:h-[250px] h-[250px] overflow-hidden flex items-center justify-center">
                  <img
                    className="w-full h-full object-cover rounded-md"
                    src={service?.photo}
                    alt={service?.title || "Service Image"}
                    loading="lazy"
                  />
                </div>
                <h1 className="text-[20px] lg:leading-[26px] font-semibold text-center text-[#05264E] mt-4">
                  {service?.title || "No Title"}
                </h1>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-5">
            No Test Preparation services available.
          </p>
        )}
      </div>
    </div>
  );
};

export default AllServices;
