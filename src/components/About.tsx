import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { IconCalendar, IconMapPin, IconCoffee, IconCode } from '@tabler/icons-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      type: 'education',
      title: 'SSLC',
      company: 'AKT Acdemy Matric Higher Secondary School',
      period: '2020 ',
      description: 'Led development of scalable web applications using React, Node.js, and cloud technologies.'
    },
    {
      type: 'education',
      title: 'HSC',
      company: 'AKT Acdemy Matric Higher Secondary School',
      period: '2022',
      description: 'Intensive program covering modern web development technologies and best practices.'
    },
    
    {
      type: 'education',
      title: 'B.E Computer Science',
      company: 'Vel Tech High Tech',
      period: '2022 - 2026- Present',
      description: 'Graduated Magna Cum Laude with focus on software engineering and algorithms.'
    },    
    {
      type: 'work',
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      period: '2020 - 2022',
      description: 'Built responsive user interfaces and improved user experience for e-commerce platform.'
    }
    
    
  ];

  const stats = [
    { icon: IconCode, label: 'Projects Completed', value: '5+' },
    { icon: IconCoffee, label: 'Cups of Coffee', value: '100+' },
    { icon: IconCalendar, label: 'Project Experience', value: '4+' },
    { icon: IconMapPin, label: 'Happy Clients', value: '3+' }
  ];

  return (
    <section id="about" className="py-20 bg-background-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate full-stack developer with a love for creating innovative solutions 
            that bridge the gap between design and functionality.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-display font-semibold mb-6">My Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                My journey into software development began during my university years, where I discovered the power of code to solve real-world problems. What started as curiosity quickly grew into a genuine passion for building meaningful digital experiences.
              </p>
              <p>
                Over the past 4+ years, I’ve collaborated with talented teams and worked with a variety of clients, delivering projects that span from dynamic small business websites to robust, enterprise-level applications. My expertise lies in React, Node.js, and modern web technologies, with a focus on crafting scalable, efficient, and highly user-centric solutions
              </p>
              <p>
                When I’m not coding, I enjoy exploring new technologies, contributing to open-source projects, and planning my next big idea—often with a good cup of coffee in hand.
              </p>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <Card key={index} className="bg-gradient-card border-border hover-glow">
                <CardContent className="p-6 text-center">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                  <div className="text-2xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl font-display font-semibold text-center mb-12">
            Experience & <span className="gradient-text">Education</span>
          </h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-secondary opacity-30"></div>
            
            <div className="space-y-12">
              {experiences.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className="flex-1 lg:px-8">
                    <Card className={`bg-gradient-card border-border hover-glow ${
                      index % 2 === 0 ? 'lg:ml-8' : 'lg:mr-8'
                    }`}>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`w-3 h-3 rounded-full ${
                            item.type === 'work' ? 'bg-primary' : 'bg-accent'
                          }`}></div>
                          <span className="text-sm text-muted-foreground">{item.period}</span>
                        </div>
                        <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                        <p className="text-primary font-medium mb-3">{item.company}</p>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="hidden lg:block w-6 h-6 bg-primary rounded-full border-4 border-background relative z-10"></div>
                  
                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;