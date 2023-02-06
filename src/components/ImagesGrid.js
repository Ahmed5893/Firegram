import React from "react";
import useFirestore from "./hooks/useFirestore";
import classes from "./ImagesGrid.module.css";
import { motion } from "framer-motion";

const ImagesGrid = ({ setSelected }) => {
  const { docs } = useFirestore("images");
  console.log(docs);
  return (
    <div className={classes["img-grid"]}>
      {docs &&
        docs.map((doc) => (
          <motion.div
            className={classes["img-wrap"]}
            key={doc.id}
            onClick={() => setSelected(doc.url)}
            layout
            whileHover={{ opacity: 1 }}
          >
            <motion.img
              src={doc.url}
              alt="uploaded "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{delay:1}}
            />
          </motion.div>
        ))}
    </div>
  );
};

export default ImagesGrid;
