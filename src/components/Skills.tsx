import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  IconBrandReact, 
  IconBrandNodejs, 
  IconBrandTypescript, 
  IconBrandJavascript,
  IconBrandPython,
  IconBrandMongodb,
  IconBrandMysql,
  IconBrandAws,
  IconBrandDocker,
  IconBrandGit,
  IconBrandFigma,
  IconApi
} from '@tabler/icons-react';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 95, icon: IconBrandReact, color: 'text-blue-400' },
        { name: 'TypeScript', level: 90, icon: IconBrandTypescript, color: 'text-blue-600' },
        { name: 'JavaScript', level: 95, icon: IconBrandJavascript, color: 'text-yellow-400' },
      
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 90, icon: IconBrandNodejs, color: 'text-green-500' },
        { name: 'Python', level: 80, icon: IconBrandPython, color: 'text-yellow-500' },
        { name: 'REST APIs', level: 75, icon: IconApi, color: 'text-purple-400' },
      
      ]
    },
    {
      title: 'Database',
      skills: [
        { name: 'MongoDB', level: 85, icon: IconBrandMongodb, color: 'text-green-600' },
        { name: 'MySQL', level: 80, icon: IconBrandMysql, color: 'text-blue-500' },
        { name: 'PostgreSQL', level: 75, icon: IconBrandMysql, color: 'text-blue-700' },
        
      ]
    },
    {
      title: 'DevOps & Tools',
      skills: [
        { name: 'AWS', level: 80, icon: IconBrandAws, color: 'text-orange-400' },
        { name: 'Docker', level: 85, icon: IconBrandDocker, color: 'text-blue-500' },
        { name: 'Git', level: 95, icon: IconBrandGit, color: 'text-orange-600' },
      
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks that I use to build exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <Card className="bg-gradient-card border-border hover-glow h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-display font-semibold mb-6 text-center gradient-text">
                    {category.title}
                  </h3>
                  
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ 
                          duration: 0.6, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.05 
                        }}
                        className="group"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <skill.icon 
                            className={`w-6 h-6 ${skill.color} group-hover:scale-110 transition-transform`} 
                          />
                          <span className="font-medium text-sm">{skill.name}</span>
                        </div>
                        
                        <div className="relative">
                          <div className="w-full bg-secondary rounded-full h-2">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={inView ? { width: `${skill.level}%` } : {}}
                              transition={{ 
                                duration: 1.5, 
                                delay: categoryIndex * 0.2 + skillIndex * 0.1,
                                ease: "easeOut"
                              }}
                              className="bg-gradient-secondary h-2 rounded-full relative overflow-hidden"
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-gradient"></div>
                            </motion.div>
                          </div>
                          <span className="text-xs text-muted-foreground mt-1 block text-right">
                            {skill.level}%
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Interactive Skills Cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-display font-semibold mb-8">
            Technologies I Work With
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'React', 'Node.js', 'TypeScript', 'Python', 'MongoDB', 'AWS', 
              'Docker', 'GraphQL', 'Next.js', 'Express.js', 'PostgreSQL', 
              'Redis', 'Jest', 'Tailwind CSS', 'Git', 'Figma'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: 1 + index * 0.05,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-secondary rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;