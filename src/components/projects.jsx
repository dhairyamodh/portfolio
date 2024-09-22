const Projects = () => {
  const projectList = [
    {
      title: "Experivise",
      image: "/projects/experivise/experivise.jpg",
      icon: "/projects/experivise/experivise_logo.png",
      link: "https://experivise.tech/",
    },
    {
      title: "Trendlyne",
      image: "/projects/tl/tl.jpg",
      icon: "/projects/tl/TL-logo.webp",
      link: "https://trendlyne.com/features/",
    },
    {
      title: "Techlead Solution",
      image: "/projects/techlead/techlead.jpg",
      icon: "/projects/techlead/tl-logo.png",
      link: "https://experience.techleadsolution.in/room/",
    },
    {
      title: "Jewellery CMS",
      image: "/projects/mahakali/mahakali.jpg",
      icon: "/projects/mahakali/mahakali-logo.png",
      link: "https://main--willowy-alfajores-a70044.netlify.app/order/list",
    },
  ];

  return (
    <div className="pt-20 pb-20 md:pb-40" id="projects">
      <h5 className="text-3xl md:text-5xl font-medium mb-10">
        Featured Projects
      </h5>
      <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-1 gap-6 md:gap-16">
        {projectList?.map((item, index) => {
          return (
            <a href={item.link} title={item.title} key={index} target="_blank">
              <div
                className="relative mx-10 md:mx-0"
                style={{
                  top: window.innerWidth > 768 ? `${index * 50}px` : 0,
                }}
              >
                <div className="overflow-hidden rounded-3xl cursor-pointer">
                  <img
                    src={item?.image}
                    className="object-fill w-full h-auto duration-500 hover:scale-125 transition-all"
                  />
                </div>
                <p className="mt-3">{item?.title}</p>
                <div className="w-16 h-16 p-4 bg-black flex justify-center items-center text-white rounded-2xl absolute -right-7 bottom-3">
                  <span className="text-4xl">0{index + 1}</span>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
