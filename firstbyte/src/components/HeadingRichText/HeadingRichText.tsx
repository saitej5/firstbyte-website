/** @format */

import React from "react";
import "../../styles/css/HeadingRichText/headingRichText.css";
import { motion } from "framer-motion";

type HeadingRichTextProps = {
  text: string;
  illuminateText: string;
  backText: string;
};

const HeadingRichText: React.FC<HeadingRichTextProps> = ({
  text,
  illuminateText,
  backText,
}) => {
  return (
    <>
      <div className="grid grid-cols-1 gap-px">
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{
            duration: 0.1,
            delay: 0,
            type: "spring",
            stiffness: 200,
          }}>
          <div className="text-3xl text-center py-20 text-[#546c54] font-bold hover:text-6xl transition-all md:text-5xl">
            <span className="text-2xl text-gray-500 px-6 font-light md:text-3xl">
              {text}
            </span>
            {illuminateText}
            <span className="text-2xl text-gray-500 px-6 font-light md:text-3xl">
              {backText}
            </span>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default HeadingRichText;
