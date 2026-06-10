
import { Button } from "../components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card"
import apiBack from "../back.json"
import { Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow, } from "../components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../components/ui/dropdown-menu"
import { } from "../components/ui/chart"
import {Bar, BarChart, CartesianGrid, Legend, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts"
import { type ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "../components/ui/chart"
import { MoreHorizontalIcon } from "lucide-react"

const chartConfig: ChartConfig = {
    quantidade: {
        label:"quantidade",
        color: "var(--chart-3)",
    },
    preco: {
        label:"preço",
        color: "var(--chart-1)",
    }

}

export default function Home() {
    return (
        <>
        <div className="">
          <h1 className="text-2xl font-bold p-8">Bem-vindo ao Painel de Controle</h1>
          <p className="px-8 text-muted-foreground">Nosso painel foi desenvolvido para simplificar sua rotina e centralizar as informações mais importantes em uma única plataforma.</p>
        </div>
        {/* Seção de Funcionários */}
        <div className="my-8">
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
        {/* Seção de Gráficos */}
        <Card className="m-8">
            <CardHeader>Gráfico de Itens do Estoque</CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart
                        data={apiBack.itens}
                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} className="stroke-muted" />
                        <XAxis dataKey="nome" 
                            tickLine={false} 
                            tickMargin={10} 
                            axisLine={false} 
                            tickFormatter={(value) => value.slice(0.3)}
                            className="text-xs text-muted-foreground"
                        />
                        <YAxis tickLine={false}
                            axisLine={false} 
                            className="text-xs text-muted-foreground"
                        />
                        <ChartTooltip content={<ChartTooltipContent indicator="dot"/>} />
                        <ChartLegend content={<ChartLegendContent />} />
                        <Bar dataKey="quantidade" fill="var(--chart-1)" radius={[4,4,0,0]} />
                        <Bar dataKey="preco" fill="var(--chart-3)" radius={[4,4,0,0]} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
        {/* Seção de Itens do Estoque */}
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
        {/* Seção de footer */}
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
        </>
    )
}