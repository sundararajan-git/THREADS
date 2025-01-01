import { VStack } from "@chakra-ui/react";
import { Navigate, Outlet } from "react-router-dom";

const PublicLayout = (props: any) => {
  // PROPS
  const { isValidUser } = props;

  // REDIRECT THE THE HOME PAGE
  if (isValidUser) {
    return <Navigate to="/" replace />;
  }

  return (
    <VStack w={"full"} h={"100vh"} >
      <Outlet />
    </VStack>
  );
};

export default PublicLayout;
