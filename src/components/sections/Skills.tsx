import SectionHeading from "../ui/section-heading";
import { Monitor, Database as DBIcon, Cloud, Server, Smartphone } from "lucide-react";

const skillsData = [
  {
    label: "Frontend",
    icon: <Monitor className="w-6 h-6 text-blue-500" />,
    skills: [
      "JavaScript (ES6+)",
      "React",
      "Bootstrap",
      "TailwindCSS",
      "HTML"
    ]
  },
  {
    label: "Backend",
    icon: <Server className="w-6 h-6 text-green-600" />,
    skills: [
      "Java",
      "Spring Boot",
      "Node.js",
      "Python",
      "Flask"
    ]
  },
  {
    label: "Database",
    icon: <DBIcon className="w-6 h-6 text-purple-500" />,
    skills: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Firebase Realtime DB",
      "Firestore"
    ]
  },
  {
    label: "DevOps & Cloud",
    icon: <Cloud className="w-6 h-6 text-orange-400" />,
    skills: [
      "AWS",
      "GCP",
      "Docker"
    ]
  },
  {
    label: "Mobile Tech",
    icon: <Smartphone className="w-6 h-6 text-teal-500" />,
    skills: [
      "Flutter",
      "Android (Kotlin, Java)"
    ]
  }
];

const Skills = () => (
  <section id="skills" className="py-16 md:py-24 bg-secondary/50">
    <div className="container">
      <SectionHeading
        title="Skills & Technologies"
        subtitle="A breakdown of the tools & technologies I use"
        className="text-center"
      />

      <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-5 max-w-6xl mx-auto animate-fade-in">
        {skillsData.map((category, idx) => (
          <div
            key={idx}
            className="bg-card border border-muted rounded-lg shadow p-6 flex flex-col gap-4"
          >
            <div className="flex items-center gap-2 mb-2">
              {category.icon}
              <h3 className="text-lg font-semibold">{category.label}</h3>
            </div>
            <ul className="flex flex-col gap-2">
              {category.skills.map((skill, subIdx) => (
                <li key={subIdx} className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary" />
                  <span className="font-medium text-muted-foreground">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
