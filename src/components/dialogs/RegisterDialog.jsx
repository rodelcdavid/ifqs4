import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Flex,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  closeMessageConfirmDialog,
  closeRegisterDialog,
} from "../../slices/dialogSlice";
import { useLazyGetEmployeeDetailsQuery } from "../../services/fqsApi";
import { useForm } from "react-hook-form";

function RegisterDialog() {
  const { dialogs } = useSelector((state) => state.dialogState);

  const { register, setValue } = useForm();

  /* RTK Query */
  const [getEmployeeDetails] = useLazyGetEmployeeDetailsQuery();

  const {
    isOpen,
    messageHeader,
    messageBody,
    action,
    actionColor,
    handleConfirm,
    isLoading,
  } = dialogs.registerDialog;
  // const cancelRef = React.useRef();
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(closeRegisterDialog());
  };

  const onProximityChange = (e) => {
    const proximity = e.target.value;
    setTimeout(async () => {
      if (proximity.length === 13) {
        const getEmployeeDetailsResult = await getEmployeeDetails({
          proximity,
        });

        if (getEmployeeDetailsResult.isSuccess) {
          const { Name, LineCode, LineName } = getEmployeeDetailsResult.data;

          setValue("Name", Name);
          setValue("LineCode", LineCode);
          setValue("LineName", LineName);
        }
      }
    }, 500);
  };

  return (
    <>
      <AlertDialog
        isOpen={isOpen}
        // leastDestructiveRef={cancelRef}
        onClose={handleClose}
        isCentered
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Register
            </AlertDialogHeader>

            <AlertDialogBody
              sx={{
                "& input": {
                  borderColor: "blackAlpha.400",
                },
              }}
            >
              <Flex flexDir="column" gap="0.3rem">
                <Flex alignItems="center">
                  <FormLabel w="10rem" fontSize="sm">
                    Proximity:
                  </FormLabel>
                  <Input
                    type="password"
                    size="sm"
                    autoFocus
                    onChange={onProximityChange}
                
                  />
                </Flex>
                <Flex alignItems="center">
                  <FormLabel w="10rem" fontSize="sm">
                    Name:
                  </FormLabel>
                  <Input type="text" size="sm" {...register("Name")} />
                </Flex>
                <Flex alignItems="center">
                  <FormLabel w="10rem" fontSize="sm">
                    Line Code:
                  </FormLabel>
                  <Input type="text" size="sm" {...register("LineCode")} />
                </Flex>
                <Flex alignItems="center">
                  <FormLabel w="10rem" fontSize="sm">
                    Line Name:
                  </FormLabel>
                  <Input type="text" size="sm" {...register("LineName")} />
                </Flex>
              </Flex>
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button
                // ref={cancelRef}
                onClick={handleClose}
              >
                Cancel
              </Button>
              <Button
                colorScheme="blue"
                onClick={handleConfirm}
                ml={3}
                isLoading={isLoading ? isLoading : false}
              >
                Start
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

export default RegisterDialog;
