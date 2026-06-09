import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar"
import { AppSidebar } from "./components/layout/app-sidebar"
import { Button } from "./components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card"
import { ModeToggle } from "./components/layout/mode-toggle"
import apiBack from "./back.json"
import { Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow, } from "./components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./components/ui/dropdown-menu"
import { MoreHorizontalIcon } from "lucide-react"

function App() {

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <header className="flex items-center justify-between border-b px-4 py-2">
          <SidebarTrigger className="px-5 py-5" />
          <ModeToggle />
        </header>
        <div className="p-8">
          <h1 className="text-2xl font-bold p-8">Bem-vindo ao Painel de Controle</h1>
          <p className="px-8 text-muted-foreground">Nosso painel foi desenvolvido para simplificar sua rotina e centralizar as informações mais importantes em uma única plataforma.</p>
        </div>
        <div className="">
          <h2 className="text-xl font-semibold px-8">Funcionários</h2>
          <Card className="grid grid-cols-2 w-sm max-w-full mx-auto gap-4 md:grid-cols-3 px-4">
            {apiBack.funcionarios.map((funcionario) => (
              <CardContent key={funcionario.id} className="flex items-center gap-4 p-2">
                <div>
                  <p className="font-medium">{funcionario.nome}</p>
                  <p className="text-sm text-muted-foreground">{funcionario.cargo}</p>
                </div>
              </CardContent>
            ))}
          </Card>
        </div>
        <Table className="w-sm max-w-full mx-auto mt-8 border ">
          <TableCaption>Itens do Estoque</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Produto</TableHead>
              <TableHead>Quantidade</TableHead>
              <TableHead>Preço</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {apiBack.itens.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.nome}</TableCell>
                <TableCell>{item.quantidade}</TableCell>
                <TableCell>{item.preco.toFixed(2)}</TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="size-8">
                    <MoreHorizontalIcon />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem>Duplicate</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem variant="destructive">
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="p-8" >
          <Card className="max-w-sm mx-auto">
            <CardHeader>
              <CardTitle>
                Gostou do que viu?
              </CardTitle>
              <CardDescription>Comece agora mesmo e tenha acesso a todas as funcionalidades da plataforma.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col">
              <CardAction className="pt-4 flex gap-4">
                <Button>Criar Conta</Button>
                <Button variant="outline">Já tenho uma conta</Button>
              </CardAction>
            </CardContent>
          </Card>
        </div>
      </main>
    </SidebarProvider>
  )
}

export default App
