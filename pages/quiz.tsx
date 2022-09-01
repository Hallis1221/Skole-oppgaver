import { Card, Text, Col } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useState } from "react";

const QuizPage = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#FFFAFA",
      }}
    >
   <h1 
   style={{
    fontSize: "4rem",
    display: "flex",
    justifyContent: "center",
    width: "100%",
   }}
   >Hva er en cpu?</h1>
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gridTemplateRows: "repeat(2,1fr)",
        }}
      >
        <AnswerCard text={"Du"} />
        <AnswerCard text={"Meg"} />
        <AnswerCard text={"Oss"} />
        <AnswerCard text={"Alle"} />
      </div>
    </div>
  );
};

export default QuizPage;

function AnswerCard({
  text,isCorrect = false
}:{
  text: string,
  isCorrect?: boolean
}): JSX.Element {
  const [isClicked, setIsClicked] = useState(false);

  return (
   <div style={{
    width: "100%",
    padding: "1rem"

   }}>
  <Card isPressable isHoverable variant="bordered" css={{ mw: "1000px"  }} style={{
    height: "100%",
    textAlign: "center",
  }}
  onClick={() => setIsClicked(true)}
  >
      <Card.Body>
        <Text>{text}</Text>
      </Card.Body>
    </Card>
   </div>
  );
}

function FillScreen(
  {
    animate
  }:
  {
    animate?: boolean
  }
): JSX.Element {
  return (
    <motion.div
      style={{
        borderRadius: "100%",
        overflow: "hidden",
      }}
      initial={{
        width: "40px",
        height: "25px",
        borderRadius: "25%",
      }}
      animate={animate ? {
        scale: 1,
        width: "100%",
        height: "100vh",
        borderRadius: "0%",
      }: "initial"}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
    >
      <div
        style={{
          height: "100%",
          backgroundColor: "#4BB543",
          width: "100%",
        }}
      >
        {" "}
      </div>
    </motion.div>
  );
}
