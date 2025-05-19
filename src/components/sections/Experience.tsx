
import SectionHeading from "../ui/section-heading";
import ExperienceItem from "../ui/experience-item";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Experience = () => {
  const experiences = [
    {
      title: "Associate Full Stack Engineer",
      company: "Digi Prodigy",
      period: "Oct 2024 - Present",
      description: [
        "Explored and applied microservices architecture for building scalable backend systems.",
        "Built a cross-platform mobile application using Flutter and Firebase.",
        "Developed responsive and accessible user interfaces using modern frontend technologies.",
        "Gained practical experience in designing and managing full-stack application flows.",
        "Improved understanding of state management, API integration, and user-centric design."
      ],
      technologies: ["Spring Boot", "GCP", "Flutter", "Firebase", "Microservices"],
    },
    // {
    //   title: "Full Stack Developer",
    //   company: "WebSolutions Agency",
    //   period: "2019 - 2021",
    //   description: [
    //     "Developed and maintained client websites and web applications across various industries.",
    //     "Built custom API integrations with third-party services like payment gateways and CRMs.",
    //     "Implemented responsive designs and ensured cross-browser compatibility.",
    //     "Participated in daily stand-ups and sprint planning meetings in an Agile environment."
    //   ],
    //   technologies: ["JavaScript", "React", "Express", "PostgreSQL", "Redux", "Heroku"],
    // },
    // {
    //   title: "Frontend Developer",
    //   company: "StartApp Ventures",
    //   period: "2017 - 2019",
    //   description: [
    //     "Collaborated with UI/UX designers to implement pixel-perfect interfaces.",
    //     "Optimized application performance by implementing code splitting and lazy loading.",
    //     "Built reusable component libraries to ensure design consistency across projects.",
    //     "Created interactive data visualizations using D3.js for analytics dashboards."
    //   ],
    //   technologies: ["JavaScript", "React", "CSS3", "SASS", "Webpack", "D3.js"],
    // },
  ];

  const education = [
    {
      title: "Bachelor of Engineering in Computer Science",
      company: "Dhole Patil College of Engineering",
      period: "2021 - 2024",
      description: [
        "Specialized in Web Technologies and Data Science",
        "Thesis: 'Optimizing Performance in Single Page Applications'",
        "GPA: 7.5/10.00"
      ],
      technologies: ["Algorithms", "Data Structures", "Machine Learning", "Software Engineering"],
    },
    {
      title: "Diploma in Computer Science",
      company: "AISSMS Polytechnic",
      period: "2011 - 2015",
      description: [
        "Gained practical skills in developing desktop and web applications.",
        "Learned core computing technologies including programming, data structures, and algorithms.",
        "Studied fundamental concepts of software development and system design."
      ]
      ,
      technologies: ["Java", "Python", "C++", "Database Systems"],
    },
  ];

  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container">
        <SectionHeading 
          title="Experience & Education" 
          subtitle="My professional journey and academic background."
        />
        
        <Tabs defaultValue="work" className="mt-8">
          <TabsList className="grid w-full grid-cols-2 max-w-[400px] mx-auto mb-8">
            <TabsTrigger value="work">Work Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>
          
          <TabsContent value="work" className="space-y-6">
            {experiences.map((item, index) => (
              <ExperienceItem key={index} {...item} />
            ))}
          </TabsContent>
          
          <TabsContent value="education" className="space-y-6">
            {education.map((item, index) => (
              <ExperienceItem key={index} {...item} />
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Experience;
