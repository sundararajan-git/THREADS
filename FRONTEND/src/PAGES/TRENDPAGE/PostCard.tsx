import { Avatar } from "@/components/ui/avatar";
import { Box, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { MdVerified } from "react-icons/md";
import { IoEllipsisHorizontalSharp, IoPaperPlaneOutline } from "react-icons/io5";
import { FiHeart } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa6";
import { LuGitCompareArrows } from "react-icons/lu";

const PostCard = () => {
  return (
    <VStack borderBottomWidth={"1px"} p={"4"} w={"full"}>
      <Stack gap="8">
        <HStack gap="4" align={"start"}>
          <Avatar name={"Arun"} size="md" src={""} />
          <Stack gap="0">
            <HStack w={"full"} align={"center"} justify={"space-between"}>
              <HStack>
                <Text fontWeight="medium">Arun K</Text>
                <MdVerified color={"blue"} />
              </HStack>
              <IoEllipsisHorizontalSharp color="gray" />
            </HStack>
            <Text color="fg.muted" textStyle="sm" textAlign={"justify"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              numquam cupiditate sequi ea quam nemo commodi.
            </Text>
          </Stack>
        </HStack>
      </Stack>
      <Box p={"4"}>
        <Image
          src={
            "https://wallpapers.com/images/featured/horror-geg5qaw6axcmxou6.jpg"
          }
          alt="img"
          borderRadius={"xl"}
        />
      </Box>
      <HStack p={"2"} w={"full"} gap={"5"} color={"gray"}>
        <HStack align={"center"}>
          <FiHeart size={"18"} />
          <Text fontSize={"md"}>5</Text>
        </HStack>
        <HStack align={"center"}>
          <FaRegComment size={"18"} />
          <Text fontSize={"md"}>5</Text>
        </HStack>
        <HStack align={"center"}>
          <IoPaperPlaneOutline size={"18"} />
        </HStack>
        <HStack align={"center"}>
          <LuGitCompareArrows size={"18"} />
        </HStack>
      </HStack>
    </VStack>
  );
};

export default PostCard;
