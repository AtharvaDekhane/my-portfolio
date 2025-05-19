
import { useState } from "react";
import SectionHeading from "../ui/section-heading";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Github, Linkedin, Mail, MapPin, Send, Smartphone } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
        duration: 5000,
      });
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary/30">
      <div className="container">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind or just want to say hello? Feel free to reach out."
          className="text-center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mt-12">
          <Card className="lg:col-span-3 p-6 border-border/40">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-[150px]"
                />
              </div>
              <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </Card>

          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6 border-border/40">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <a href="mailto:atharvadekhane5@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      atharvadekhane5@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Smartphone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Phone</p>
                    <a href="tel:+918788963690" className="text-muted-foreground hover:text-primary transition-colors">
                      +91 87889 63690
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Location</p>
                    <p className="text-muted-foreground">
                      Pune, Maharastra, India
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <p className="text-sm font-medium mb-3">Connect with me</p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/AtharvaDekhane"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary p-2 rounded-full hover:bg-secondary/70 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/atharva-dekhane-59a081258/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary p-2 rounded-full hover:bg-secondary/70 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="mailto:atharvadekhane5@gmail.com"
                    className="bg-secondary p-2 rounded-full hover:bg-secondary/70 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
