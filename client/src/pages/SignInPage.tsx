// package imports
// import { useForm } from "react-hook-form";

// shadcn imports
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// type FormData = {
//   username: string;
//   password: string;
// };

const SignInPage = () => {
  return (
    <>
      <div className="bg-secondary-gray flex min-h-screen items-center justify-center px-4">
        <div className="flex min-h-[80vh] w-full flex-col bg-white shadow md:min-h-48 md:w-1/2 md:flex-row">
          <div className="font-roboto bg-foreground text-background flex flex-1 items-center justify-center">
            Welcome to QuizzCo
          </div>
          <div className="flex flex-1 flex-col p-1">
            <form className="flex h-full flex-1 flex-col items-center justify-center px-4">
              <Input placeholder="Username" className="md:my-2" />
              <Input
                placeholder="Password"
                type="password"
                className="my-8 md:my-2"
              />
              <Button className="w-full md:my-2">Sign In</Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInPage;
