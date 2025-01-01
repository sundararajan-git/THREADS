import { Container, VStack } from "@chakra-ui/react";
import PostCard from "./PostCard";

const TrendPage = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <Container maxW={"2xl"}>
      <VStack
        w={"full"}
        h={"full"}
        gap={"8"}
        borderWidth={"1px"}
        borderRadius={"2xl"}
      >
        {arr.map((item) => {
          return <PostCard />;
        })}
      </VStack>
    </Container>
  );
};

export default TrendPage;
