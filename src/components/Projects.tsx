import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { IconExternalLink, IconCode, IconFilter } from '@tabler/icons-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import projectsData from '@/data/projects.json';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
}

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];

  useEffect(() => {
    setProjects(projectsData);
    setFilteredProjects(projectsData);
  }, []);

  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter((project) => project.category === activeFilter));
    }
  }, [activeFilter, projects]);

  const handleFilterChange = (category: string) => {
    setActiveFilter(category);
  };

  return (
    <section id="projects" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            A showcase of my recent work, featuring full-stack applications, frontend interfaces,
            and backend systems built with modern technologies.
          </p>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center flex-wrap gap-4"
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? 'default' : 'outline'}
                onClick={() => handleFilterChange(category)}
                className={`${
                  activeFilter === category
                    ? 'bg-primary text-primary-foreground'
                    : 'border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                }`}
              >
                <IconFilter className="w-4 h-4 mr-2" />
                {category}
              </Button>
            ))}
          </motion.div>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-display font-semibold text-center mb-8">
            Featured Projects
          </h3>

          <div className="grid lg:grid-cols-2 gap-8">
            {filteredProjects
              .filter((project) => project.featured)
              .slice(0, 2)
              .map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <Card className="bg-gradient-card border-border hover-glow overflow-hidden group">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex gap-2">

                            <Button
                              size="sm"
                              variant="outline"
                              className="border-white text-white hover:bg-white hover:text-black"
                              onClick={() => window.open(project.githubUrl, '_blank')}
                            >
                              <IconCode className="w-4 h-4 mr-2" />
                              Code
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-xl font-semibold">{project.title}</h4>
                        <Badge variant="secondary" className="text-xs">
                          {project.category}
                        </Badge>
                      </div>

                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs border-primary/20 text-primary"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </div>
        </motion.div>

        {/* All Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-2xl font-display font-semibold text-center mb-8">
            All Projects
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.05 }}
                layout
              >
                <Card className="bg-gradient-card border-border hover-glow overflow-hidden group h-full">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-2 left-2 right-2">
                        <div className="flex gap-1">

                          <Button
                            size="sm"
                            variant="outline"
                            className="border-white text-white hover:bg-white hover:text-black text-xs"
                            onClick={() => window.open(project.githubUrl, '_blank')}
                          >
                            <IconCode className="w-3 h-3 mr-1" />
                            Code
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold">{project.title}</h4>
                      <Badge variant="secondary" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>

                    <p className="text-muted-foreground mb-3 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-xs border-primary/20 text-primary"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge
                          variant="outline"
                          className="text-xs border-primary/20 text-primary"
                        >
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
