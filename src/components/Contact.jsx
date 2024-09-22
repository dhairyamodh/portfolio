const Contact = () => {
  return (
    <div id="contact">
      <div className="py-10 md:py-20 bg-black">
        <div className="container mx-auto md:p-0 px-4">
          <div className="flex items-center flex-col gap-5 md:gap-10 justify-center">
            <h5 className="text-2xl md:text-5xl font-medium text-white text-center">
              Have an exciting project idea?
              <br />
              Let&apos;s bring it to life.
            </h5>
            <a href="mailto:modhdhairya@gmail.com" target="_blank">
              <button className="bg-primary p-3 px-10 rounded-full font-medium transition-all text-white outline outline-[3px] outline-[transparent] hover:outline-white flex items-center gap-2">
                Hire Me
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-10 md:py-20 md:p-0 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-10">
          <div>
            <h6 className="font-semibold text-xl mb-2 md:mb-4 text-primary">
              Dhairya Modh
            </h6>
            <p className="font-medium text-muted-dark text-lg">
              I am a frontend developer with over 5 years of experience. In this
              time, I&apos;ve collaborated with various companies and startups,
              delivering high-quality, impactful solutions.
            </p>
          </div>
          <div className="flex gap-5 items-center justify-center md:justify-end">
            <a
              href="https://www.linkedin.com/in/dhairya-modh-987613187/"
              target="_blank"
              className="hover:scale-110 transition-transform"
            >
              <img src="/linkedin.png" className="w-8 h-8" />
            </a>
            <a
              href="https://github.com/dhairyamodh"
              target="_blank"
              className="hover:scale-110 transition-transform"
            >
              <img src="/github.png" className="w-8 h-8" />
            </a>
            <a
              href="mailto:modhdhairya@gmail.com"
              target="_blank"
              className="hover:scale-110 transition-transform"
            >
              <img src="/email.png" className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
