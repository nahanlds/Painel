import { createBrowserRouter } from "react-router-dom";
import { PainelLayout } from "./components/layout/painelLayout";
import  Configuracoes  from "./pages/configuracoes/index";
import Home from "./pages/index";
import Estoque from "./pages/estoque";
import Financeiro from "./pages/financeiro";
import Funcionarios from "./pages/funcionarios";
import Relatorios from "./pages/relatorios";

export const router = createBrowserRouter([
    {
        path: "/", element: <PainelLayout />,
         children: [
             {path: "Painel", element: <Home /> },
             { path: "estoque", element: <Estoque /> },
             { path: "financeiro", element: <Financeiro /> },
             { path: "funcionarios", element: <Funcionarios /> },
             { path: "relatorios", element: <Relatorios /> },
             { path: "configuracoes", element: <Configuracoes /> },
        ]}
]);