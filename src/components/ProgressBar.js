import React, { useEffect } from "react";
import useStorage from "./hooks/useStorage";
import classes from "./Progress.module.css";
import { motion } from "framer-motion"

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);
  console.log(url,progress);
  useEffect(() => {
    if(url){
    setFile(null)}
  }, [url,setFile])
  
  return (
    <motion.div
      className={classes["progress-bar"]}
     initial={{width:0}}
     animate={{width:progress + '%'}}
    ></motion.div>
  );
};

export default ProgressBar;
