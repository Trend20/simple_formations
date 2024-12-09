import Label from "../components/shared/Label";
import InputField from "../components/shared/InputField";
import { useState } from "react";
import Button from "../components/shared/Button";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
            Sign In
          </h1>
          <form
            action="#"
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          >
            <p className="text-center text-lg font-medium">
              Sign in to your account
            </p>

            <div>
              <Label label="Email Address" labelFor="email" />
              <InputField
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div>
              <Label label="Password" labelFor="password" />
              <InputField
                type="password"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <Button
              type={"submit"}
              classNames="w-full"
              onClick={(e) => {
                e.preventDefault();
                navigate("/dashboard");
              }}
            >
              Sign in
            </Button>
            <p className="text-center text-sm text-gray-500 space-x-3">
              No account?
              <a className="underline ml-3" href="/auth/register">
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
