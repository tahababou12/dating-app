import { Outlet } from "@remix-run/react";
import { AppHeader } from "~/components/app-header";

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <AppHeader />
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}
