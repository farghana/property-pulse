import "@/assets/styles/global.css";
import AuthProvider from "@/components/AuthProvider";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export const metadata = {
	title: "Property Pulse | Find your dream rental property",
	description: "Find your dream rental property|",
	keywords: "rental| dream rentals| available properties",
};

const MainLayout = ({ children }) => {
	return (
		<AuthProvider>
			<html lang='en'>
				<body>
					<NavBar />
					<main>{children}</main>
					<Footer />
				</body>
			</html>
		</AuthProvider>
	);
};

export default MainLayout;
