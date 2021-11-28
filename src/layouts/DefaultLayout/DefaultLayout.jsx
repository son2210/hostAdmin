import React from "react";

import { WrapApp } from "./DefaultLayout.styles";
import Sidebar from "./../../components/Sidebar/Sidebar";
import Navbar from "./../../components/Navbar/Navbar";

const DefaultLayout = ({ children }) => {
	return (
		<WrapApp>
			<Sidebar />
			<div className="wrap-main">
				<Navbar />

				<div className="wrap-content">{children}</div>
			</div>
		</WrapApp>
	);
};

export default DefaultLayout;
