import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// const logoVariants = {
//   initial: { scale: 0.9 },
//   visible: {
//     scale: 1.1,
//     textShadow: "0px 0px 8px rgb(0, 0, 0, 0.5)",
//     // boxShadow: "0px 0px 8px rgb(0, 0, 0, 0.5)",
//     transition: {
//       duration: 1.5,
//       repeat: Infinity,
//       // repeatType: "reverse",
//     },
//   },
// };
// variants={logoVariants} initial="initial" animate="visible"
const Logo = () => {
  return (
    <div className="rounded-2xl pl-2 pr-2 block cursor-pointer">
      <div />

      <div className="mt-1 flex gap-2">
        <Image src="/logo.png" alt="logo" width={50} height={40} />
        <div>
          <p className="text-2xl">
            me<span className="text-red-400">cn</span>omit
          </p>
        </div>
      </div>
    </div>
  );
};

export default Logo;
