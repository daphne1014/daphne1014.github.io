import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Experience(){
  const workExperiences = [
    {
      company: "Spigen Inc,",
      position: "Software Developer",
      startDate: "Oct 2021",
      endDate: "Sep 2024",
      descriptions: ['Designed and developed web applications for internal use, focusing on sales and inventory analysis.', ' Created and maintained public websites for customers, ensuring responsive design and cross-browser compatibility.','Enhanced data processing and visualization, enabling more informed decision-making by the sales and inventory teams.',' Integrated RESTful APIs to streamline data flow between various internal systems.',' Collaborated with stakeholders to gather requirements and deliver custom solutions that improved operational efficiency.','Optimized application performance, reducing load times and improving the user experience.']
    },
    {
      company: "Spigen Inc,",
      position: "HR Specialist",
      startDate: "Feb 2019",
      endDate: "Oct 2021",
      descriptions: ['Regularly prepare and update employment records related to hiring, transferring, promoting, and terminating', 'Develop, organize and run new employee orientations - explain human resources policies, procedures, laws, and standards to new and existing employees', 'Process and complete new hire paperwork', 'Inform job applicants of job duties, responsibilities, benefits, schedules, working conditions, promotion opportunities, etc.' ,'Oversee hiring process - including coordinating job posts', 'Attend job fairs', 'Research and develop hiring policies including rehiring and position transitioning', 'Perform analysis, design, testing, and implementation of newly implemented SAP HR program.', 'Maintain SAP personnel data.']
    },
  ];
  return (
    <section className="min-h-[calc(100vh-5rem)] pt-20 bg-[url('/images/experienceBg.jpg')] bg-no-repeat bg-cover">
      <div className="w-full h-full backdrop-blur-md backdrop-brightness-105 backdrop-grayscale ">
        <div className="py-10 sm:py-12">
          <div className="max-w-2xl px-6 mx-auto lg:max-w-7xl lg:px-8">
            <h1 className="font-semibold text-center text-gray-800 text-lg/7">
              Work Experiences
            </h1>
            <VerticalTimeline layout={"1-column-left"}>
              {workExperiences.map((item, idx) => (
                <VerticalTimelineElement
                  key={item.startDate || idx} // Ensure unique keys for accessibility
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "#fff", // Use ternary operator for concise style
                    color: "rgb(55, 65, 81)",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid  #EEECF2",
                  }}
                  date={`${item.startDate} - ${item.endDate}`}
                  iconStyle={{ background: "#EEECF2", color: "#fff" }}
                >
                  <h3 className="text-lg font-semibold vertical-timeline-element-title">
                    {item.position}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle text-slate-500">
                    {item.company}
                  </h4>
                  <p className="text-base font-light leading-tight ms-12">
                    <ul>
                      {item.descriptions.map((description) => (
                        <li>- {description}</li>
                      ))}
                    </ul>
                  </p>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </section>
  );
}