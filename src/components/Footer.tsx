import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: 'https://github.com/shinehtetnyein',
      label: 'GitHub'
    },
    // {
    //   icon: <Linkedin size={20} />,
    //   href: 'https://linkedin.com',
    //   label: 'LinkedIn'
    // },
    {
      icon: <Mail size={20} />,
      href: 'mailto:shinehtetnyein05@gmail.com',
      label: 'Email'
    }
  ];

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#education', label: 'Education' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Sa Shine Htet Nyein</h3>
            <p className="text-primary-foreground/80 mb-4">
              Web Developer specializing in PHP, Laravel, MySQL, with experience in JavaScript and React.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-foreground/50"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary-foreground/50 rounded-sm px-1 py-1"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>121, Minyekyawswar road, Home Mission Compound, Ahlone, Yangon</p>
              <p>shinehtetnyein05@gmail.com</p>
              <p>09-978 868 561</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/80 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Sa Shine Htet Nyein. All rights reserved.
            </p>
            <div className="flex items-center text-primary-foreground/80 text-sm">
              <span>Made with</span>
              <Heart size={16} className="mx-1 text-red-400" />
              <span>using React & TypeScript</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;