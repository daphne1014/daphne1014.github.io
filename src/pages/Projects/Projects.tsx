import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ProjectCard from "../../components/Cards/ProjectCard";
import { ReactNode, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import ColorBadge from "../../components/Badges/ColorBadge";

interface ProjectProps {
  name: string;
  height: string;
  description: string;
  bgImage: string;
  technologies: string[];
  background: ReactNode;
  link: string|null;
  github: string|null;
}

export default function Projects() {
  const projects: ProjectProps[] = [
    {
      name: "Sales & Inventory Analytics Tool",
      height: "h-72",
      description:
        "Designed a versatile sales and inventory solution that offers personalized insights, data input flexibility, and seamless integration with EDI systems.",
      bgImage: "bg-[url('/images/projects/salesInventoryAnalyticsBg.jpg')]",
      technologies: ["PHP", "Laravel", "MySQL", "Bootstrap", "EDI"],
      background: (
        <span>
          To address the inefficiencies associated with manual processing of
          Purchase Orders, Advanced Shipping Notices, and InvoicesElectronic
          Data Interchange (EDI) system was first implemented at my former
          company. This technology streamlined data exchange with trading
          partners, significantly improving operational efficiency and accuracy.{" "}
          <br />
          <br />
          Building upon the success of the EDI system, I further expanded its
          capabilities to automate and streamline additional processes. This
          included integrating the system with the company's existing
          information system to enable comprehensive analysis of sales and
          inventory data.
          <br />
          <br />
          The enhanced system empowered users to generate customized reports,
          gain valuable insights, and make data-driven decisions. By
          centralizing and automating routine tasks, I reduced manual workload,
          minimized errors, and streamlined operations, ultimately enhancing
          overall business performance.
        </span>
      ),
      link: null,
      github: null,
    },
    {
      name: "Brand & Quotes Website",
      height: "h-80",
      description:
        "Designed and developed a comprehensive brand website, featuring product introductions, a user-friendly interface, and quotes & inquiry capabilities.",
      bgImage: "bg-[url('/images/projects/brandingWebsiteBg.jpg')]",
      technologies: ["React", "Typescript", "TailwindCSS"],
      background: (
        <span>
          I developed a robust brand promotion platform designed to effectively
          showcase the various services offered by the company. The platform
          features a visually appealing interface that highlights key services,
          including detailed descriptions and relevant visuals. To attract
          potential customers, the platform incorporates promotional features
          such as special offers, discounts, and limited-time promotions. <br />
          <br />
          To simplify the inquiry process, I implemented a user-friendly form
          that allows visitors to input their specific needs and receive a
          personalized estimate. This streamlines the communication process and
          helps potential customers understand the costs associated with
          different services. <br />
          <br /> Additionally, I created a secure administrative dashboard that
          empowers administrators to manage pricing, update terms and
          conditions, and monitor platform performance. This centralized control
          panel ensures that the platform remains up-to-date and aligned with
          the company's evolving needs. <br />
          <br />
          Overall, this brand promotion platform is a valuable tool for
          generating leads, showcasing the company's offerings, and providing
          potential customers with a seamless experience.
        </span>
      ),
      link: null,
      github: null,
    },
  ];
  const [open, setOpen] = useState(false);
  const [panelTitle, setPanelTitle] = useState(projects[0].name);
  const [panelDescription, setPanelDescription] = useState(
    projects[0].description
  );
  const [panelTechnology, setPanelTechnology] = useState(
    projects[0].technologies
  );
  const [panelBackground, setPanelBackground] = useState(
    projects[0].background
  );
  const [panelLink, setPanelLink] = useState(
    projects[0].link
  );
  const [panelGithub, setPanelGithub] = useState(
    projects[0].github
  );

  const handleCardClick = (idx: number) => {
    setPanelTitle(projects[idx].name);
    setPanelDescription(projects[idx].description);
    setPanelTechnology(projects[idx].technologies);
    setPanelBackground(projects[idx].background);
    setPanelLink(projects[idx].link);
    setPanelGithub(projects[idx].github);
    setOpen(true);
  };

  return (
    <section className="min-h-[calc(100vh-5rem)] pt-20 bg-white bg-no-repeat bg-cover">
      <div className="w-full h-full backdrop-blur-md backdrop-brightness-105">
        <div className="container flex justify-center mx-auto">
          <div className="min-h-[calc(100vh-5rem)] w-full lg:w-3/5 my-10">
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2 }}>
              <Masonry gutter="1.5rem">
                {projects.map((project, idx) => (
                  <ProjectCard
                    project={project}
                    key={idx}
                    onClick={() => handleCardClick(idx)}
                  />
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </div>
        </div>
      </div>
      <Dialog open={open} onClose={setOpen} className="relative z-10 my-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
        />
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="fixed inset-y-0 right-0 flex max-w-full pl-10 pointer-events-none">
              <DialogPanel
                transition
                className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
              >
                <div className="flex flex-col h-full py-6 pt-24 overflow-y-scroll bg-white shadow-xl">
                  <div className="flex flex-col px-4 sm:px-6">
                    <DialogTitle className="text-lg font-semibold leading-6 text-gray-900">
                      {panelTitle}
                    </DialogTitle>
                    <p className="text-sm font-normal text-gray-700">
                      {panelDescription}
                    </p>
                  </div>
                  <div className="relative flex flex-col flex-1 gap-2 px-4 mt-6 sm:px-6">
                    <h2 className="text-base font-semibold text-gray-900">
                      Technology
                    </h2>
                    <div className="flex gap-2">
                      {panelTechnology.map((technology, idx) => (
                        <ColorBadge
                          content={technology}
                          bgColor="bg-gray-50"
                          textColor="text-gray-600"
                          key={idx}
                        />
                      ))}
                    </div>
                    <h2 className="text-base font-semibold text-gray-900">
                      Background
                    </h2>
                    <p className="text-sm font-normal text-gray-700">
                      {panelBackground}
                    </p>
                    <h2 className="text-base font-semibold text-gray-900">
                      Website
                    </h2>
                    {panelLink != null ? (
                      <a
                        className="rounded-md bg-gray-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 flex gap-1 items-center justify-center"
                        href={panelLink}
                        target="_blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-6"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM6.262 6.072a8.25 8.25 0 1 0 10.562-.766 4.5 4.5 0 0 1-1.318 1.357L14.25 7.5l.165.33a.809.809 0 0 1-1.086 1.085l-.604-.302a1.125 1.125 0 0 0-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 0 1-2.288 4.04l-.723.724a1.125 1.125 0 0 1-1.298.21l-.153-.076a1.125 1.125 0 0 1-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 0 1-.21-1.298L9.75 12l-1.64-1.64a6 6 0 0 1-1.676-3.257l-.172-1.03Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        Visit website
                      </a>
                    ) : (
                      <h3 className="text-sm italic font-light text-gray-700">
                        Website link is unavailable
                      </h3>
                    )}
                    <h2 className="text-base font-semibold text-gray-900">
                      Github
                    </h2>
                    {panelGithub != null ? (
                      <a
                        className="rounded-md bg-gray-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 flex gap-1 items-center justify-center"
                        href={panelGithub}
                        target="_blank"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          className="size-6 fill-slate-900"
                        >
                          <path
                            fill="currentColor"
                            d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"
                          ></path>
                        </svg>
                        Github
                      </a>
                    ) : (
                      <h3 className="text-sm italic font-light text-gray-700">
                        Github is unavailable
                      </h3>
                    )}
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
    </section>
  );
}
