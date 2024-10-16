import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import ProjectCard from "../../components/Cards/ProjectCard";

export default function Projects(){
    const projects = [
      {
        name: "Sales & Inventory Analytics Tool",
        height: "h-72",
        description: "Designed a versatile sales and inventory solution that offers personalized insights, data input flexibility, and seamless integration with EDI systems.",
        bgImage: "bg-[url('/images/projects/salesInventoryAnalyticsBg.jpg')]",
        link: "#/projects",
        languages: ['PHP', 'Laravel', 'MySQL', 'Bootstrap']
      },
      {
        name: "Brand & Quotes Website",
        height: "h-64",
        description: "Designed and developed a comprehensive brand website, featuring product introductions, a user-friendly interface, and quotes & inquiry capabilities.",
        bgImage: "bg-[url('/images/projects/brandingWebsiteBg.jpg')]",
        link: "#/projects",
        languages: ['React', 'Typescript', 'TailwindCSS']
      },
    ];
    return (
      <section className="min-h-[calc(100vh-5rem)] pt-20 bg-white bg-no-repeat bg-cover">
        <div className="w-full h-full backdrop-blur-md backdrop-brightness-105">
          <div className="container flex justify-center mx-auto">
            <div className="min-h-[calc(100vh-5rem)] w-full lg:w-3/5 my-10">
              <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2 }}>
                <Masonry gutter="1.5rem">
                  {projects.map((project, idx) => (
                    <ProjectCard project={project} key={idx} />
                    ))}
                </Masonry>
              </ResponsiveMasonry>
            </div>
          </div>
        </div>
      </section>
    );
}