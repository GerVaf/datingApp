import React from "react";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { BsPostcardFill } from "react-icons/bs";
import { GiClover } from "react-icons/gi";
import { BsPatchPlusFill } from "react-icons/bs";
import { MdAdminPanelSettings } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const Nav = () => {
  const location = useLocation();
  const routePath = location.pathname;

  const navData = [
    {
      id: 3,
      path: "/posts",
      icon: <BsPostcardFill />,
    },
    {
      id: 1,
      path: "/chat",
      icon: <HiChatBubbleLeftRight />,
    },
    {
      id: 2,
      path: "/like-list",
      icon: <GiClover />,
    },
    {
      id: 4,
      path: "/follow",
      icon: <BsPatchPlusFill />,
    },
    {
      id: 5,
      path: "/setting",
      icon: <MdAdminPanelSettings />,
    },
  ];

  const isActive = (path) => routePath === path;
  // console.log(isActive());

  const navItemVariants = {
    active: { y: -30 },
    inactive: { y: 0 },
  };

  return (
    <div className="w-full flex items-center justify-center absolute bottom-3">
      <div className="w-[95%] h-[10vh] self-center bg-violet-600 rounded-3xl z-10 relative ">
        <div className="flex w-full h-full justify-around items-center ">
          {navData.map((el) => (
            <div
              key={el.id}
              className="flex w-[20%] justify-center items-center"
            >
              <AnimatePresence>
                <motion.div
                  className={`text-2xl text-violet-600 border-2 border-violet-600 p-3 bg-white rounded-full absolute z-20`}
                  variants={navItemVariants}
                  animate={isActive(el.path) ? "active" : "inactive"}
                >
                  <Link to={el.path}>{el.icon}</Link>
                </motion.div>
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nav;
