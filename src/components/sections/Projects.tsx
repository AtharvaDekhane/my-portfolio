
import SectionHeading from "../ui/section-heading";
import ProjectCard from "../ui/project-card";

const Projects = () => {
  const projects = [
    {
      title: "Drug-Pill Detection System",
      description: "An AI-powered system designed to detect and identify pills or drugs from images using machine learning and computer vision, aimed at assisting healthcare professionals and consumers in verifying medications.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&h=600&q=80",
      technologies: ["Html", "CSS", "JavaScript", "Python", "Machine Learning", "PostgreSQl"],
      githubUrl: "https://github.com/AtharvaDekhane/Drug-pill-recognition-system.git",
      liveUrl: "https://example.com",
      featured: true,
    },
    {
      title: "Face Mask Detection App",
      description: "A real-time computer vision application that detects whether individuals are wearing face masks using deep learning models, helping to enforce safety protocols in public spaces",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&h=500&q=80",
      technologies: ["Android", "Kotlin", "Java", "PostgreSQL"],
      githubUrl: "https://github.com/AtharvaDekhane/Facemask-Detection-Application.git",
      liveUrl: "https://example.com",
    },
    {
      title: "E-commerce Shopping  UI",
      description: "A visually engaging and responsive e-commerce frontend UI/UX design showcasing product listings, shopping cart, and checkout pages built with modern web technologies.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&h=500&q=80",
      technologies: ["React.js", "JavaScript", "Tailwind CSS"],
      githubUrl: "https://github.com/AtharvaDekhane/ECommerce-Webpage.git",
      liveUrl: "https://example.com",
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-secondary/30">
      <div className="container">
        <SectionHeading
          title="Projects"
          subtitle="Check out some of the projects I've worked on recently."
          className="text-center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            View more projects on my{" "}
            <a
              href="https://github.com/AtharvaDekhane"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline-offset-4 hover:underline"
            >
              GitHub profile
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;

