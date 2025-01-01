import { VStack } from "@chakra-ui/react";
import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = (props: any) => {
  // PROPS
  const { isValidUser } = props;

  // PRODUCT THE HOMEPAGE
  if (!isValidUser) {
    return <Navigate to="/login" />;
  }

  return (
    <VStack w={"full"} h={"100vh"}>
      <Outlet />
    </VStack>
  );
};

export default AuthLayout;
