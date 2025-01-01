import { Box, HStack, Image, Text } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <HStack
      w={"full"}
      h={"fit"}
      p={"4"}
      justify={"space-between"}
      position={"sticky"}
      top={"0"}
      bgColor={"white"}
      zIndex={"1"}
    >
      <Box></Box>
      <Box>
        <Text fontWeight={"500"}>Home</Text>
      </Box>
      <Box>
        <Button size={"sm"} borderRadius={"lg"}>
          Login
        </Button>
      </Box>
    </HStack>
  );
};

export default Navbar;
