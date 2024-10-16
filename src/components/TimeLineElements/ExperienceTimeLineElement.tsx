import {  VerticalTimelineElement }  from 'react-vertical-timeline-component';

interface ExperienceTimeLineElementProps {
  content: {
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    descriptions: string[];
  };
}

export default function ExperienceTimeLineElement({content}: ExperienceTimeLineElementProps){
    return (
        <VerticalTimelineElement // Ensure unique keys for accessibility
        className="vertical-timeline-element--work"
        contentStyle={{
          background: "#fff", // Use ternary operator for concise style
          color: "rgb(55, 65, 81)",
        }}
        contentArrowStyle={{
          borderRight: "7px solid  #EEECF2",
        }}
        date={`${content.startDate} - ${content.endDate}`}
        iconStyle={{ background: "#EEECF2", color: "#fff" }}
      >
        <h3 className="text-lg font-semibold vertical-timeline-element-title">
          {content.position}
        </h3>
        <h4 className="vertical-timeline-element-subtitle text-slate-500">
          {content.company}
        </h4>
        <p className="text-base font-light leading-tight ms-12">
          <ul>
            {content.descriptions.map((description) => (
              <li>- {description}</li>
            ))}
          </ul>
        </p>
      </VerticalTimelineElement>
    )
}