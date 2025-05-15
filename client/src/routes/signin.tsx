import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/signin")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="bg-secondary-gray px-4z flex min-h-screen items-center justify-center">
      <div className="flex min-h-48 w-full bg-white shadow md:w-2/3">
        <div className="font-roboto flex flex-1 items-center justify-center bg-[#2564cf]">
          Welcome to Taskify
        </div>
        <div className="flex-1">Right Section</div>
      </div>
    </div>
  );
}
