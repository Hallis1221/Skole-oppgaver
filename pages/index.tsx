import { Button } from '@nextui-org/react'
import type { NextPage } from 'next'
import { motion } from "framer-motion"

const Home: NextPage = () => {
  return (
   <div style={{
     display: "flex",
     height: "100%",
    justifyContent: "center",
    backgroundColor: "black"
   }}>
      <motion.div
    initial= {{
      scale: 1,
      rotate: 0,
    }}
    animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
  >
    <div style={{
      height: "50px",
      borderRadius: "10%",

      width: "50px",
      backgroundColor: "red"
    }}></div>
  </motion.div>
   </div>
  )
}

export default Home
