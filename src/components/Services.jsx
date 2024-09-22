const Services = () => {
  return (
    <div className="pt-0 md:pt-40 pb-20" id="services">
      <div className="grid grid-cols-1 md:grid-cols-2 grid-row-1 gap-10 items-center">
        <div className="w-full md:w-[80%]">
          <h5 className="text-3xl md:text-5xl font-medium mb-5 md:mb-10">
            Services I Am Providing
          </h5>
          <p className="font-medium text-muted-dark text-lg mb-10">
            I am giving all king of Website and mobile service you need with
            good price. I am ensure quality with best design and service.
          </p>
          <a href="mailto:modhdhairya@gmail.com" target="_blank">
            <button className="bg-primary p-3 px-10 rounded-full font-medium transition-all text-white outline outline-[3px] outline-[transparent] hover:outline-secondary flex items-center gap-2">
              Get In Touch
            </button>
          </a>
        </div>

        <div className="grid grid-cols-1 grid-rows-1 gap-4">
          <div className="w-full h-56 bg-black rounded-2xl p-4 md:p-8 relative overflow-hidden flex md:flex-row flex-col gap-2 md:gap-0 items-center justify-between">
            <div className="flex items-center justify-between">
              <div className="text-white">
                <h6 className="font-medium text-2xl">Website development</h6>
                <p className="text-sm text-white/70">
                  Crafting fast, responsive websites optimized for user
                  experience and performance.
                </p>
              </div>
            </div>
            <img
              src="/services/web-developement.png"
              className="w-[300px] h-full md:h-[300px] object-cover relative top-0 md:top-10"
            />
          </div>
          <div className="w-full h-56 bg-[#FE8F3C]  rounded-2xl p-4 md:p-8 relative overflow-hidden flex md:flex-row flex-col gap-2 md:gap-0 items-center justify-between">
            <div className="flex items-center justify-between">
              <div className="text-black">
                <h6 className="font-medium text-2xl">Mobile development</h6>
                <p className="text-sm text-black/70">
                  Building high-performance mobile applications tailored to your
                  business needs.
                </p>
              </div>
            </div>
            <img
              src="/services/mobile-development.png"
              className="w-[500px] md:w-[300px] h-[450px] md:h-[450px] object-cover top-0 right-auto md:-right-20 md:top-24 relative"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
