import type { ActionFunctionArgs } from "@remix-run/node";
import { Form, Link } from "@remix-run/react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

export async function action({ request }: ActionFunctionArgs) {
  // TODO: Implement signup logic
  return null;
}

export default function SignUp() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">Create an account</CardTitle>
        </CardHeader>
        <CardContent>
          <Form method="post" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none"
                  htmlFor="firstName"
                >
                  First name
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm"
                  id="firstName"
                  name="firstName"
                  required
                />
              </div>
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none"
                  htmlFor="lastName"
                >
                  Last name
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm"
                  id="lastName"
                  name="lastName"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm"
                id="email"
                name="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm"
                id="password"
                name="password"
                type="password"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none">
                Birth Date
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm"
                type="date"
                name="birthDate"
                required
              />
            </div>
            <button
              className="inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 hover:bg-gray-900/90"
              type="submit"
            >
              Create account
            </button>
          </Form>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
              className="underline hover:text-gray-900"
            >
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
