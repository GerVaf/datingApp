import React from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Nav from "./views/Nav";

const Layout = ({ children }) => {
  const location = useLocation();

  const navVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  return (
    <div>
      <div></div>
      {children}

      <AnimatePresence>
        {location.pathname !== '/' && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={navVariants}
            transition={{ duration: 0.2 }}
          >
            <Nav />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Layout;
