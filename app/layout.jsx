import "@/assets/styles/global.css";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export const metadata = {
	title: "Property Pulse | Find your dream rental property",
	description: "Find your dream rental property|",
	keywords: "rental| dream rentals| available properties",
};

const MainLayout = ({ children }) => {
	return (
		<html lang='en'>
			<body>
				<NavBar />
				<main>{children}</main>
        <Footer />
			</body>
		</html>
	);
};

export default MainLayout;
