import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../ASSETS/logo.svg";
import { FaCircleInfo } from "react-icons/fa6";
import { useState } from "react";
import BtnLoader from "../../COMPS/BtnLoader";
import { validateForm } from "../../COMMON/helper";
import toast from "react-hot-toast";
import axiosInstance from "../../LIB/axios";
import { useDispatch } from "react-redux";
import { updateUser } from "../../LIB/REDUX/SLICES/useSlice";
import { Input, Flex, Stack, HStack, Text, Image } from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";
import { Field } from "@/components/ui/field";
import { PasswordInput } from "@/components/ui/password-input";
import { Button } from "@/components/ui/button";

const Login = () => {
  // CONTROL THE COMPONENT
  const [control, setControl] = useState({
    btnloader: false,
  });

  const { colorMode, toggleColorMode } = useColorMode();

  //  DISPATCH FROM THE  REDUX
  const dispatch = useDispatch();

  // NAVIGATE HOOK
  const navigate = useNavigate();

  // LOGIN BTN HANDLER
  const loginBtnHandler = async () => {
    try {
      const loginForm = document.getElementById("login") as HTMLFormElement;

      const isValid = validateForm(loginForm);

      if (!isValid) {
        toast.error("Invalid Inputs !");
        return;
      }

      const data = new FormData(loginForm);

      const json = Object.fromEntries(data);

      console.log(json);

      setControl((prev: any) => {
        const clone = { ...prev };
        clone.btnloader = true;
        return clone;
      });

      const response = await axiosInstance.post("/users/login", json);

      if (response?.data?.success) {
        const { data } = response?.data;
        dispatch(updateUser(data));
        setTimeout(() => {
          toast.success("Sign In Successfully");
          navigate("/");
        }, 1000);
      }
    } catch (error) {
      const err = error as Error;
      toast.error(err?.message);
    }
  };

  return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      w={"full"}
      h={"full"}
      direction="row"
    >
      <form id="login">
        <Stack gap={4} w={"xs"}>
          <HStack>
            <Image src={logo} alt="logo" onClick={toggleColorMode} />
            <Text fontWeight={"700"} fontSize={"xl"}>
              Log In
            </Text>
          </HStack>

          <Field label="Email" required>
            <Input
              type="email"
              name="email"
              id="email"
              focusRing={"inside"}
              focusRingColor={"gray.600"}
              borderRadius={"md"}
              placeholder="me@example.com"
            />
          </Field>

          <Stack>
            <Field label="Password" required>
              <PasswordInput
                focusRing={"inside"}
                focusRingColor={"gray.600"}
                borderRadius={"md"}
                placeholder="******"
              />
            </Field>
          </Stack>

          <Text fontSize={"sm"}>
            <HStack>
              <FaCircleInfo />
              You don't have account <NavLink to={"/signup"}>Sign Up</NavLink>
            </HStack>
          </Text>

          <HStack>
            <Button onClick={loginBtnHandler} w={"full"} borderRadius={"md"}>
              {control.btnloader ? <BtnLoader /> : null}
              {control.btnloader ? "Loading..." : "log In"}
            </Button>
          </HStack>
        </Stack>
      </form>
    </Flex>
  );
};

export default Login;
