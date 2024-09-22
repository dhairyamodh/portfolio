const Hero = () => {
  return (
    <div
      id="about"
      className="flex flex-col justify-start md:justify-around min-h-auto md:min-h-[100vh] box-border pt-32 md:pt-20"
    >
      <div className="flex flex-col items-start">
        <h1 className="text-5xl md:text-8xl leading-tight mb-3 md:mb-5">
          <span className="font-light">
            My name
            <br />
          </span>{" "}
          is <span className="font-medium">Dhairya</span>
        </h1>
        <p className="font-medium text-muted-dark text-md md:text-lg mb-6 w-full md:w-[40%]">
          I am a frontend developer with more than 5 years of experience
          building responsive web applications and leading teams to deliver
          business-driven solutions.
          {/* <br className="hidden md:block" /> 5 years of experience */}
        </p>
        <a href="mailto:modhdhairya@gmail.com" target="_blank">
          <button className="bg-primary p-2 md:p-3 px-8 md:px-10 rounded-full font-medium transition-all text-white outline outline-[3px] outline-[transparent] hover:outline-secondary flex items-center gap-2">
            Hire Me
          </button>
        </a>
      </div>
      <div className="flex flex-col gap-3 mt-16 md:mt-0">
        <div className="flex items-center gap-3">
          <div className="bg-[#FE8F3C] p-4 py-2 rounded-xl">
            <h6 className="text-md md:text-2xl">React js</h6>
          </div>
          <div className="bg-primary text-white p-4 py-2 rounded-xl">
            <h6 className="text-md md:text-2xl">Javascript</h6>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-black p-4 py-2 rounded-xl">
            <h6 className="text-md md:text-2xl text-white">Next js</h6>
          </div>
          <div className="bg-muted p-4 py-2 rounded-xl">
            <h6 className="text-md md:text-2xl">Node js</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
