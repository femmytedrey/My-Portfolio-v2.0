export interface ProjectType {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: "web" | "mobile" | "fullstack" | "design";
  featured: boolean;
  liveUrl?: string;
  githubUrl: string;
  date: string;
  status: string;
}