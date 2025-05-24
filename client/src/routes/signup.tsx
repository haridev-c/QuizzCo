import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/signup")({
  component: RouteComponent,
});

// library imprts
import { useForm } from "@tanstack/react-form";
import { type } from "arktype";

// shadcn imports
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const PasswordSchema = type("string").atLeastLength(8).configure({
  message: "Password must be at least 8 characters long",
});

const EmailSchema = type("string.email").configure({
  message: "Please enter a valid email address",
});

function RouteComponent() {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: ({ value }) => {
      console.log(value);
      form.reset();
    },
  });

  return (
    <>
      <div className="bg-secondary-gray flex min-h-screen items-center justify-center px-4">
        <div className="flex min-h-[80vh] w-full flex-col bg-white shadow md:min-h-48 md:w-1/2 md:flex-row">
          <div className="font-roboto bg-foreground text-background flex flex-1 items-center justify-center">
            Welcome to QuizzCo
          </div>
          <div className="flex flex-1 flex-col p-1">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                form.handleSubmit();
              }}
              className="flex h-full flex-1 flex-col items-center justify-center px-4"
            >
              <h1>Create new account</h1>
              <form.Field
                name="email"
                validators={{
                  onChange: EmailSchema,
                }}
                children={(field) => (
                  <>
                    <Input
                      name={field.name}
                      value={field.state.value}
                      placeholder="Email"
                      type="email"
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      className="md:my-2"
                      required
                    />
                    {!field.state.meta.isValid && (
                      <span
                        role="alert"
                        className="w-full text-sm text-red-500"
                      >
                        {field.state.meta.errors.join(", ")}
                      </span>
                    )}
                  </>
                )}
              />
              <form.Field
                name="password"
                validators={{
                  onChange: PasswordSchema,
                }}
                children={(field) => (
                  <>
                    <Input
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      placeholder="Password"
                      type="password"
                      className="md:my-2"
                      required
                      max={16}
                    />
                    {!field.state.meta.isValid && (
                      <span
                        role="alert"
                        className="my-2 w-full text-sm text-red-500"
                      >
                        {field.state.meta.errors.join(", ")}
                      </span>
                    )}
                  </>
                )}
              />

              <form.Subscribe
                selector={(state) => [state.canSubmit, state.isSubmitting]}
                children={([canSubmit, isSubmitting]) => (
                  <Button type="submit" disabled={!canSubmit}>
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </Button>
                )}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
