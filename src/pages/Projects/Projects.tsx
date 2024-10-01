import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

export default function Projects(){
    const projects = [
      {
        name: "Project 1",
        height: "h-72",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt felis arcu, vitae congue dolor placerat nec. Nam vitae maximus mi. Maecenas accumsan diam dui, vitae maximus dui consequat in. Morbi gravida gravida commodo. Aliquam erat volutpat. Aenean imperdiet arcu purus, at posuere lectus hendrerit in.",
        link: "",
        bgImage: "",
      },
      {
        name: "Project 2",
        height: "h-60",
        description: "",
        link: "",
        bgImage: "",
      },
      {
        name: "Project 3",
        height: "h-56",
        description: "",
        link: "",
        bgImage: "",
      },
      {
        name: "Project 4",
        height: "h-64",
        description: "",
        link: "",
        bgImage: "",
      },
      {
        name: "Project 5",
        height: "h-52",
        description: "",
        link: "",
        bgImage: "",
      },
      {
        name: "Project 6",
        height: "h-60",
        description: "",
        link: "",
        bgImage: "",
      },
      {
        name: "Project 7",
        height: "h-56",
        description: "",
        link: "",
        bgImage: "",
      },
      {
        name: "Project 8",
        height: "h-72",
        description: "",
        link: "",
        bgImage: "",
      },
    ];
    return (
      <section className="min-h-[calc(100vh-5rem)] pt-20 bg-[url('/images/bgImg.jpg')] bg-no-repeat bg-cover">
        <div className="w-full h-full backdrop-blur-md backdrop-brightness-105">
          <div className="container flex justify-center mx-auto">
            <div className="min-h-[calc(100vh-5rem)] w-full lg:w-3/5 my-10">
              <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2 }}>
                <Masonry gutter="1.5rem">
                  {projects.map((project, idx) => (
                    <a
                      key={idx}
                      href={project.link}
                      className={`w-full ${project.height} bg-white rounded-lg overflow-hidden`}
                    >
                      <div className="flex flex-col justify-end w-full h-full px-6 py-4 shadow-inset-bottom-xl bg-gradient-to-b from-transparent via-10% via-light-shadow-black to-dark-shadow-black to-80% text-white opacity-0 hover:opacity-100 transform translate-y-10 hover:translate-y-0 transition-all duration-500 ease-in-out">
                        <h2 className="text-2xl font-semibold y-[-10%]">
                          {project.name}
                        </h2>
                        <p className="text-sm font-semibold leading-tight">
                          {project.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </Masonry>
              </ResponsiveMasonry>
            </div>
          </div>
        </div>
      </section>
    );
}