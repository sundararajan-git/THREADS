import { Box, Image, VStack } from "@chakra-ui/react";
import { GoHomeFill } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import {
  FaBarsStaggered,
  FaPlus,
  FaRegHeart,
  FaRegUser,
} from "react-icons/fa6";
import { LuPin } from "react-icons/lu";
import logo from "../../ASSETS/logo.svg";

const SideBar = () => {
  return (
    <VStack
      minW={"14"}
      h={"full"}
      justify={"space-between"}
      p={"4"}
      position={"sticky"}
      left={"0"}
      top={"0"}
      bottom={"0"}
    >
      <Box>
        <Image src={logo} alt="logo" />
      </Box>
      <VStack gap={"10"} color="gray">
        <GoHomeFill size={24}  color="black" />
        <FiSearch size={22} />
        <FaPlus size={24} />
        <FaRegHeart size={24} />
        <FaRegUser size={24} />
      </VStack>

      <VStack gap={"6"} color="gray">
        <LuPin size={24} />
        <FaBarsStaggered size={24} />
      </VStack>
    </VStack>
  );
};

export default SideBar;
