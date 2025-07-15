import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-12">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-300">
              © {currentYear} Veradia. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <Link 
              to="/privacy-policy" 
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms-of-service" 
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
            >
              Terms of Service
            </Link>
            <a 
              href="mailto:contact@veradia.org" 
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
        
        <div className="mt-4 text-center md:text-left">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Veradia is not a substitute for professional medical, legal, financial, or psychological advice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
