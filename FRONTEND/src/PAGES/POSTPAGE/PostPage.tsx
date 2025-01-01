import { Container, VStack } from "@chakra-ui/react";
import PostCard from "../TRENDPAGE/PostCard";
import RealtedPost from "./RealtedPost";
import ReplyPost from "./ReplyPost";

const PostPage = () => {
  return (
    <Container maxW={"2xl"}>
      <VStack
        w={"full"}
        h={"full"}
        gap={"8"}
        borderWidth={"1px"}
        borderRadius={"2xl"}
      >
        <PostCard />
        <ReplyPost />
        <RealtedPost />
      </VStack>
    </Container>
  );
};

export default PostPage;
