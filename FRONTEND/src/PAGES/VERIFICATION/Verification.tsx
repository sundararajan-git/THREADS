import { useState } from "react";
import logo from "../../ASSETS/logo.svg";
import BtnLoader from "../../COMPS/BtnLoader";
import { validateForm } from "../../COMMON/helper";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import axiosInstance from "../../LIB/axios";
import { updateUser } from "../../LIB/REDUX/SLICES/useSlice";
import {
  Button,
  Flex,
  HStack,
  Image,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Field } from "@/components/ui/field";

const Verification = () => {
  // CONTROL THE COMPONENT
  const [control, setControl] = useState({
    btnloader: false,
  });

  //  DISPATCH FROM THE  REDUX
  const dispatch = useDispatch();

  // VERIFICATION BTN HANDLER
  const vertificationHandler = async () => {
    try {
      const verificationForm = document.getElementById(
        "verificationForm"
      ) as HTMLFormElement;

      const isValidForm = validateForm(verificationForm);

      if (!isValidForm) {
        toast.error("Invalid Inputs");
        return;
      }

      setControl((prev: any) => {
        const clone = { ...prev };
        clone.btnloader = true;
        return clone;
      });

      const data = new FormData(verificationForm);
      const json = Object.fromEntries(data);

      console.log(json);

      const response = await axiosInstance.post("/users/verify", json);

      if (response?.data?.success) {
        toast.success("Verification Successfull");
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
      <form id="login">
        <Stack gap={4} w={"xs"}>
          <HStack>
            <Image src={logo} alt="logo" />
            <Text fontWeight={"700"} fontSize={"xl"}>
              Verify
            </Text>
          </HStack>

          <Field label="Code" required>
            <Input
              type="text"
              name="code"
              id="code"
              focusRing={"inside"}
              focusRingColor={"gray.600"}
              borderRadius={"md"}
              placeholder="******"
            />
          </Field>

          <HStack>
            <Button
              onClick={vertificationHandler}
              w={"full"}
              borderRadius={"md"}
            >
              {control.btnloader ? <BtnLoader /> : null}
              {control.btnloader ? "Loading..." : "Submit"}
            </Button>
          </HStack>
        </Stack>
      </form>
    </Flex>
  );
};

export default Verification;
