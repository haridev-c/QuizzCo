import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/signup")({
  component: RouteComponent,
});

// shadcn imports
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formSchema = z.object({
  email: z.string(),
  password: z.string(),
});

type FormData = z.infer<typeof formSchema>;

function RouteComponent() {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <>
      <div className="bg-secondary-gray flex min-h-screen items-center justify-center px-4">
        <div className="flex min-h-[80vh] w-full flex-col bg-white shadow md:min-h-48 md:w-1/2 md:flex-row">
          <div className="font-roboto bg-foreground text-background flex flex-1 items-center justify-center">
            Welcome to QuizzCo
          </div>
          <div className="flex flex-1 flex-col p-1">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex h-full flex-1 flex-col items-center justify-center px-4"
            >
              <h1>Create new account</h1>
              <Input
                placeholder="Email"
                type="email"
                className="md:my-2"
                required
                {...register("email")}
              />
              <Input
                placeholder="Password"
                type="password"
                className="my-8 md:my-2"
                required
                {...register("password")}
              />
              <Button className="w-full md:my-2">Sign Up</Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
