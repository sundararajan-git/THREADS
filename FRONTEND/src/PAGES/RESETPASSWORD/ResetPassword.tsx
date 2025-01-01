import toast from "react-hot-toast";
import logo from "../../ASSETS/logo.svg";
import { validateForm } from "../../COMMON/helper";
import { useState } from "react";
import BtnLoader from "../../COMPS/BtnLoader";
import axiosInstance from "../../LIB/axios";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateUser } from "../../LIB/REDUX/SLICES/useSlice";
import { Flex, HStack, Image, Input, Stack, Text } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { Button } from "@/components/ui/button";

const ResetPassword = () => {
  // CONTROL THE COMPONENT
  const [control, setControl] = useState({
    btnloader: false,
  });

  //  USE DISPATCH
  const dispatch = useDispatch();

  // USE LOCATION
  const location = useLocation();

  // RESET BTN HANDLER
  const resetBtnHandler = async () => {
    try {
      const resetPasswordForm = document.getElementById(
        "resetpassword"
      ) as HTMLFormElement;

      const isvalid = validateForm(resetPasswordForm);

      if (!isvalid) {
        toast.error("Invalid Inputs");
        return;
      }

      setControl((prev: any) => {
        const clone = { ...prev };
        clone.btnloader = true;
        return clone;
      });
      const data = new FormData(resetPasswordForm);
      const json = Object.fromEntries(data);
      console.log(json);

      const token = location.pathname.split("/")[2];
      const response = await axiosInstance.put(
        `/users/resetpassword/${token}`,
        json
      );

      console.log(response);

      if (response?.data?.success) {
        toast.success("Password updated");
        const { data } = response?.data;
        dispatch(updateUser({ ...data }));
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
      <form id="resetpassword">
        <Stack gap={4} w={"xs"}>
          <HStack>
            <Image src={logo} alt="logo" />
            <Text fontWeight={"700"} fontSize={"xl"}>
              Reset Password
            </Text>
          </HStack>

          <Field label="Password" required>
            <Input
              type="password"
              name="password"
              id="password"
              focusRing={"inside"}
              focusRingColor={"gray.600"}
              borderRadius={"md"}
              placeholder="******"
            />
          </Field>

          <HStack>
            <Button onClick={resetBtnHandler} w={"full"} borderRadius={"md"}>
              {control.btnloader ? <BtnLoader /> : null}
              {control.btnloader ? "Loading..." : "Update"}
            </Button>
          </HStack>
        </Stack>
      </form>
    </Flex>
  );
};

export default ResetPassword;
