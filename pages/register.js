import Layout from "@/components/layout/layout";
import Card from "@/components/ui/card";
import usePostQuery from "@/hooks/usePostQuery";
import { useEffect, useRef } from "react";
import FormControl from "@/components/ui/FormControl";
import FormButton from "@/components/ui/FormButton";

function Register() {
  const FirstnameInputref = useRef();
  const LastnameInputref = useRef();
  const EmailInputref = useRef();
  const P_numberInputref = useRef();
  const PasswordInputref = useRef();

  const { loading, data, error, request } = usePostQuery();

  function submitHandler(event) {
    event.preventDefault();
    const enteredFirstname = FirstnameInputref.current.value;
    const enteredLastname = LastnameInputref.current.value;
    const enteredEmail = EmailInputref.current.value;
    const enteredP_number =
      "+234" + P_numberInputref.current.value.substring(1);
    const enteredPassword = PasswordInputref.current.value;

    const formData = {
      firstname: enteredFirstname,
      lastname: enteredLastname,
      email: enteredEmail,
      phonenumber: enteredP_number,
      password: enteredPassword,
    };

    console.log(formData);

    request("http://localhost:3000/users/signup", formData);
  }

  useEffect(() => {
    if (data) {
      console.log(data);
      alert("Registration successful");
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
        <form onSubmit={submitHandler}>
          <h5 className="text-center text-lg lg:text-xl font-bold text-[#162F43] mb-1">
            Register for CodeSol
          </h5>
          <p className="text-center text-sm lg:text-base font-medium text-[#406882] mb-7">
            Your number one stop for answers
          </p>
          <FormControl
            label="First Name"
            ref={FirstnameInputref}
            id="first name"
            inputType="text"
          />
          <FormControl
            label="Last Name"
            ref={LastnameInputref}
            id="last name"
            inputType="text"
          />
          <FormControl
            label="Email"
            ref={EmailInputref}
            id="email"
            inputType="email"
          />
          <FormControl
            label="Phone Number"
            ref={P_numberInputref}
            id="p_number"
            inputType="text"
          />
          <FormControl
            label="Password"
            ref={PasswordInputref}
            id="password"
            inputType="password"
          />
          <FormButton
            loading={loading}
            text={loading ? "Registering...." : "Submit"}
          />
        </form>
      </Card>
    </Layout>
  );
}

export default Register;
