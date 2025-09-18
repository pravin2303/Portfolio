import { motion } from 'framer-motion';
import { IconHeart, IconCode } from '@tabler/icons-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-background-secondary border-t border-border">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mb-8 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto hover-glow transition-all"
          >
            ↑
          </motion.button>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-muted-foreground"
            >
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <IconHeart className="w-4 h-4 text-red-500 fill-current" />
              </motion.div>
              <span>and</span>
              <IconCode className="w-4 h-4 text-primary" />
              <span>by Pravin</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-muted-foreground"
            >
              © {currentYear} All rights reserved.
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-8 pt-8 border-t border-border"
          >
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              Built with React, TypeScript, and Tailwind CSS. 
              Deployed on the modern web with performance and accessibility in mind.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;