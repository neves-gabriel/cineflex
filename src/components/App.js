import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import PaginaPrincipal from "./PaginaPrincipal";
import PaginaFilme from "./PaginaFilme";
import PaginaSessao from "./PaginaSessao";
import PaginaSucesso from "./PaginaSucesso";

export default function App() {

    return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact>
					<PaginaPrincipal />
				</Route>
				<Route path="/filme/:idMovie" exact>
					<PaginaFilme />
				</Route>
                <Route path="/sessao/:idShowtime" exact>
					<PaginaSessao />
				</Route>
                <Route path="/sucesso" exact>
					<PaginaSucesso />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}