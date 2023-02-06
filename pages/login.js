import Layout from "@/components/layout/layout";
import { useEffect, useRef } from "react";
import usePostQuery from "@/hooks/usePostQuery";
import useAuth from "@/hooks/useAuth";
import Card from "@/components/ui/card";
import FormButton from "@/components/ui/FormButton";
import FormControl from "@/components/ui/FormControl";

function Login() {
  const EmailInputref = useRef();
  const PasswordInputref = useRef();

  const { loading, data, error, request } = usePostQuery();
  const { login } = useAuth();

  function submitHandler(event) {
    event.preventDefault();
    const enteredEmail = EmailInputref.current.value;
    const enteredPassword = PasswordInputref.current.value;

    const formData = {
      email: enteredEmail,
      password: enteredPassword,
    };

    request("http://localhost:3000/users/signin", formData);

    console.log(formData);
  }

  useEffect(() => {
    if (data && data.accessToken) {
      login(data.accessToken);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      alert(error.message[0]);
    }
  }, [error]);

  return (
    <Layout>
      <Card className="mt-20 mx-4 md:max-w-[450px] md:mx-auto">
        <form className="" onSubmit={submitHandler}>
          <h5 className="text-center text-lg lg:text-xl font-bold text-[#162F43] mb-1">
            Login to CodeSol
          </h5>
          <p className="text-center text-sm lg:text-base font-medium text-[#406882] mb-7">
            We are happy to see you again
          </p>
          <FormControl
            label="Email"
            ref={EmailInputref}
            id="email"
            inputType="email"
            icon="ic:sharp-mail"
          />
          <FormControl
            label="Password"
            ref={PasswordInputref}
            id="password"
            inputType="password"
            icon="ic:outline-lock"
          />
          <FormButton
            loading={loading}
            text={loading ? "Logging In" : "Submit"}
          />
        </form>
      </Card>
    </Layout>
  );
}

export default Login;
