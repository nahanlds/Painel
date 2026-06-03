import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar"
import { Home, Settings, Users, BarChart3, LogOut, Boxes, MessageSquareWarning } from "lucide-react"

const menuItems = [
  {
    title: "Painel",
    icon: Home,
    href: "#",
  },
  {
    title: "Funcionários",
    icon: Users,
    href: "#",
  },
  {
    title: "Financeiro",
    icon: BarChart3,
    href: "#",
  },
  {
    title: "Estoque",
    icon: Boxes,
    href: "#",
  },
  {
    title: "Relatórios",
    icon: MessageSquareWarning,
    href: "#",
  },
  {
    title: "Configurações",
    icon: Settings,
    href: "#",
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="border-b px-4 py-4">
        <div className="font-bold text-lg">Painel</div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu Principal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title} className="px-4 py-2">
                  <SidebarMenuButton asChild>
                    <a href={item.href}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <LogOut className="h-4 w-4" />
              <span>Sair</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}