import { Flex } from "@chakra-ui/react";
import { FaCircle, FaMinusCircle, FaDotCircle } from "react-icons/fa";
import { useState } from "react";
export const TaskbarButtons = ({ setWindowOpenFunction }) => {
  return (
    <Flex
      justifyContent="flex-start"
      alignItems="center"
      direction={"row"}
      gap={2}
      mt={2}
      ml={2}
    >
      <ButtonHover
        defaultButton={<FaCircle size={16} color={"#d9515d"} />}
        hoveredButton={<FaDotCircle size={16} color={"#d9515d"} />}
        setWindowOpenFunction={setWindowOpenFunction}
      />
      <ButtonHover
        defaultButton={<FaCircle size={16} color={"#f7c500"} />}
        hoveredButton={<FaMinusCircle size={16} color={"#f7c500"} />}
        setWindowOpenFunction={setWindowOpenFunction}
      />
      <ButtonHover
        defaultButton={<FaCircle size={16} color={"#5dcf4d"} />}
        hoveredButton={<FaCircle size={16} color={"#5dcf4d"} />}
      />
    </Flex>
  );
};

const ButtonHover = ({
  defaultButton,
  hoveredButton,
  setWindowOpenFunction = () => {},
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Flex
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setWindowOpenFunction(false)}
    >
      {isHovered ? hoveredButton : defaultButton}
    </Flex>
  );
};
