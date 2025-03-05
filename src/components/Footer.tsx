
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link
              to="/"
              className="text-xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-research-blue to-research-purple"
            >
              VibrantResearch
            </Link>
            <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-md">
              A modern platform for academic research and scientific discovery. Committed to advancing knowledge through rigorous peer review and open access publication.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="text-slate-600 dark:text-slate-300 hover:text-research-blue dark:hover:text-research-teal transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-600 dark:text-slate-300 hover:text-research-blue dark:hover:text-research-teal transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/editorial" className="text-slate-600 dark:text-slate-300 hover:text-research-blue dark:hover:text-research-teal transition-colors">
                  Editorial Board
                </Link>
              </li>
              <li>
                <Link to="/submit" className="text-slate-600 dark:text-slate-300 hover:text-research-blue dark:hover:text-research-teal transition-colors">
                  Submit Paper
                </Link>
              </li>
              <li>
                <Link to="/archives" className="text-slate-600 dark:text-slate-300 hover:text-research-blue dark:hover:text-research-teal transition-colors">
                  Archives
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-slate-600 dark:text-slate-300">
                info@vibrantresearch.org
              </li>
              <li className="text-slate-600 dark:text-slate-300">
                +1 (555) 123-4567
              </li>
              <li className="text-slate-600 dark:text-slate-300">
                123 Research Avenue, Science City, SC 10101
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
          <p className="text-center text-sm text-slate-500 dark:text-slate-400">
            &copy; {currentYear} VibrantResearch. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
