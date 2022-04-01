import "./sass/style.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPage from "./components/admin/AdminPage";
import HomePage from "./components/home/HomePage";
import Navigation from "./components/layout/Navigation";
import Wrapper from "./components/layout/Wrapper";
import { AuthProvider } from "./context/AuthContext";
import LoginPage from "./components/login/LoginPage";
import Contact from "./components/contact/Contact";
import FlowerDetail from "./components/flowers/FlowerDetail";
import FavouritesPage from "./components/favourites/FavouritesPage";

function App() {
	return (
		<AuthProvider>
			<Wrapper>
				<BrowserRouter>
					<Navigation />
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route
							path="/favourites"
							element={<FavouritesPage />}
						/>
						<Route path="/admin" element={<AdminPage />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/login" element={<LoginPage />} />
						<Route path="/detail/:id" element={<FlowerDetail />} />
					</Routes>
				</BrowserRouter>
			</Wrapper>
		</AuthProvider>
	);
}

export default App;
