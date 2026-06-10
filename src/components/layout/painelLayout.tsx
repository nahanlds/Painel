import { Outlet } from "react-router-dom";
import { AppSidebar } from "./app-sidebar";
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import { ModeToggle } from "./mode-toggle";

export function PainelLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
      <header className="flex items-center justify-between border-b px-4 py-2">
        <SidebarTrigger className="px-5 py-5" />
        <ModeToggle />
      </header>
        <Outlet />
      </main>
    </SidebarProvider>
  );
}