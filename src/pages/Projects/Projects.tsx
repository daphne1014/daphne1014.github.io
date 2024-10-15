import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

export default function Projects(){
    const projects = [
      {
        name: "Sales & Inventory Analytics Tool",
        height: "h-72",
        description: "Designed a versatile sales and inventory solution that offers personalized insights, data input flexibility, and seamless integration with EDI systems.",
        bgImage: "/images/projects/salesInventoryAnalyticsBg.jpg",
        link: "",
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
                      className={`w-full ${project.height} bg-[url('${project.bgImage}')] rounded-lg overflow-hidden`}
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