import AuthProvider from "@/components/AuthProvider";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { ToastContainer } from "react-toastify";
import { GlobalProvider } from "@/context/GlobalContext";
import "@/assets/styles/global.css";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
	title: "Property Pulse | Find your dream rental property",
	description: "Find your dream rental property|",
	keywords: "rental| dream rentals| available properties",
};

const MainLayout = ({ children }) => {
	return (
		<GlobalProvider>
			<AuthProvider>
				<html lang='en'>
					<body>
						<NavBar />
						<main>{children}</main>
						<Footer />
						<ToastContainer />
					</body>
				</html>
			</AuthProvider>
		</GlobalProvider>
	);
};

export default MainLayout;
