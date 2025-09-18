import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { IconDownload, IconChevronDown } from '@tabler/icons-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/profile-image.jpg';

const Hero = () => {
  const [currentTypeText, setCurrentTypeText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const typeTexts = [
    'Full-Stack Developer',
    'React Developer',
    'Cloud Enginner',
    'Linux Administator'
  ];

  useEffect(() => {
    const currentText = typeTexts[currentIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && currentTypeText === currentText) {
        // Finished typing, start deleting after pause
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentTypeText === '') {
        // Finished deleting, move to next text
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % typeTexts.length);
      } else {
        // Continue typing or deleting
        setCurrentTypeText(
          isDeleting
            ? currentText.substring(0, currentTypeText.length - 1)
            : currentText.substring(0, currentTypeText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentTypeText, currentIndex, isDeleting]);

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-primary">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl lg:text-7xl font-display font-bold mb-6"
            >
              Hi, I'm{' '}
              <span className="gradient-text">Pravin</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl lg:text-3xl mb-8 h-12"
            >
              <span className="text-muted-foreground">I'm a </span>
              <span className="text-primary font-semibold">
                {currentTypeText}
                <span className="animate-pulse">|</span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-muted-foreground mb-8 max-w-2xl"
            >
              Passionate about creating innovative web solutions with modern technologies. 
              I build scalable applications that deliver exceptional user experiences and 
              robust backend systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="bg-gradient-secondary hover:bg-gradient-accent text-white font-semibold px-8 py-6 text-lg hover-glow"
              >
                <IconDownload className="mr-2" size={20} />
                Download Resume
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={scrollToNext}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg"
              >
                View My Work
              </Button>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                className="relative z-10"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={profileImage}
                  alt="Pravin - Software Developer"
                  className="w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-primary shadow-elegant animate-float"
                />
              </motion.div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-secondary rounded-full blur-3xl opacity-20 animate-glow"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToNext}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-primary hover:text-primary-glow transition-colors"
        >
          <IconChevronDown size={32} />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;