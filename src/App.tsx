import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar"
import { AppSidebar } from "./components/app-sidebar"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import { ModeToggle } from "./components/mode-toggle"

function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <header className="flex items-center justify-between border-b px-4 py-2">
          <SidebarTrigger className="px-5 py-5" />
          <ModeToggle />
        </header>
        <div className="p-8" >
          <Card className="max-w-sm mx-auto">
            <CardHeader>
              <CardTitle>
                Adicionar Itens
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <Label htmlFor="item-name">Adicionar item</Label>
              <Input id="item-name" placeholder="Ex: Produto A" />
              <Label htmlFor="item-quantity">Quantidade</Label>
              <Input id="item-quantity" placeholder="Quantidade" type="number" className="mt-2" />
              <CardAction className="pt-4">
                <Button>Adicionar</Button>
              </CardAction>
            </CardContent>
          </Card>
        </div>
      </main>
    </SidebarProvider>
  )
}

export default App
