import { Box, Button, FormLabel, Input, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../slices/authSlice";
import { useLazyLoginUserQuery } from "../services/fqsApi";
import { useForm } from "react-hook-form";

function Login() {
  /* Utils */
  const navigate = useNavigate();
  const dispatch = useDispatch();

  /* React Hook Form */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  /* RTK Query */
  const [loginUser] = useLazyLoginUserQuery();

  /* Handler */
  const handleLogin = async (data) => {
    const { password } = data;
    // if correct credentials, set user
    const formData = {
      password,
    };

    const loginUserResult = await loginUser({ formData });
    if (loginUserResult.isSuccess) {
      console.log(loginUserResult);
      dispatch(setUser({ user: "51345" }));
      navigate("/");
    } else {
      alert("invalid credentials");
    }
  };

  const onKeyEnter = (e) => {
    if (e.key === "Enter") {
      handleSubmit(handleLogin)();
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" h="100vh">
      <Box
        border="1px solid"
        borderColor="blackAlpha.400"
        padding="2rem"
        display="flex"
        flexDir="column"
        // alignItems="center"
        boxShadow="lg"
        w="20rem"
        gap="0.5rem"
      >
        <Text textAlign="center" fontWeight="bold" fontSize="sm">
          IFQS Login
        </Text>

        <Input
          type="password"
          onKeyDown={onKeyEnter}
          {...register("password", { required: true })}
        />
        <Button
          colorScheme="blue"
          w="8rem"
          m="1rem auto"
          onClick={handleSubmit(handleLogin)}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
}

export default Login;
