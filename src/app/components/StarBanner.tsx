import Hero2 from "./Hero2";

export default function StatsBanner() {
  const stats = [
    "2+ Years of Innovation",
    "Serving 10+ Global Brands",
    "Impacting 5+ Industries",
    "96% Client Satisfaction",
  ];

  return (
    <>
      <div>

        <div className="bg-[#0cc0df] text-white py-3 lg:py-6 absolute left-0 right-0 mt-16  font-roboto">
          <div className="container justify-start items-start  flex flex-col md:flex-row md:justify-around md:items-center gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-3">
                {/* Icon Container */}
                <div className="w-6 h-6 flex items-center justify-center bg-white rounded-full shadow-md">
                  <svg
                    className="w-5 h-5 lg:w-7 lg:h-7 text-[#0cc0df]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>

                {/* Text */}
                <span className="font-semibold text-lg font-roboto">{stat}</span>

              </div>
            ))}
          </div>
        </div>

            <div className="pt-[350px]">
                      <Hero2 />
              

            </div>
      </div>


    </>
  );
}
