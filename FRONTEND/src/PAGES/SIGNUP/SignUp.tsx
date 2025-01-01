import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../ASSETS/logo.svg";
import { FaCircleInfo } from "react-icons/fa6";
import { useState } from "react";
import toast from "react-hot-toast";
import { validateForm } from "../../COMMON/helper";
import BtnLoader from "../../COMPS/BtnLoader";
import axiosInstance from "../../LIB/axios";
import { useDispatch } from "react-redux";
import { updateUser } from "../../LIB/REDUX/SLICES/useSlice";
import { Flex, HStack, Image, Input, Stack, Text } from "@chakra-ui/react";
import { PasswordInput } from "@/components/ui/password-input";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";

const SignUp = () => {
  // CONTROL THE COMPONENT
  const [control, setControl] = useState({
    btnloader: false,
  });

  // NAVIAGTE HOOK
  const navigate = useNavigate();

  //  DISPATCH FROM THE  REDUX
  const dispatch = useDispatch();

  // SIGN UP BTN HANDLER
  const signUpBtnHanlder = async () => {
    try {
      // GET FORM ELEMENT
      const signUpForm = document.getElementById("signup") as HTMLFormElement;

      // CHECK IS VALID OR NOT
      const isValid = validateForm(signUpForm);

      console.log(isValid);

      if (!isValid) {
        toast.error("Invalid inputs");
        return null;
      }

      const data = new FormData(signUpForm);

      const json = Object.fromEntries(data);

      console.log(json);

      //  TRIGGER THE BTN LOADER

      setControl((prev: any) => {
        const clone = { ...prev };
        clone.btnloader = true;
        return clone;
      });

      const response = await axiosInstance.post("/users/signup", json);

      console.log(response);

      if (response?.data?.success) {
        const { data } = response?.data;
        toast.success("Sign Up Successfully");
        dispatch(updateUser({ ...data }));
        navigate("/");
      }
    } catch (err) {
      console.error(err);
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
            <Image src={logo} alt="logo" />
            <Text fontWeight={"700"} fontSize={"xl"}>
              Sign Up
            </Text>
          </HStack>

          <Field label="Full Name" required>
            <Input
              type="text"
              name="fullname"
              id="fullname"
              focusRing={"inside"}
              focusRingColor={"gray.600"}
              borderRadius={"md"}
              placeholder="full name"
            />
          </Field>

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
              You have account <NavLink to={"/login"}>Log In</NavLink>
            </HStack>
          </Text>

          <HStack>
            <Button onClick={signUpBtnHanlder} w={"full"} borderRadius={"md"}>
              {control.btnloader ? <BtnLoader /> : null}
              {control.btnloader ? "Loading..." : "Sign Up"}
            </Button>
          </HStack>
        </Stack>
      </form>
    </Flex>
  );
};

export default SignUp;

