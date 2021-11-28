import React, { memo } from "react";

import { WrapLoader } from "./Loading.styles";

const Loading = () => {
	return (
		<WrapLoader>
			<div className="wrapper">
				<div className="loader">
					<div className="element"></div>
				</div>
				<div className="loader">
					<div className="element"></div>
				</div>
				<div className="loader">
					<div className="element"></div>
				</div>
				<div className="loader">
					<div className="element"></div>
				</div>
				<div className="loader">
					<div className="element"></div>
				</div>
				<div className="loader">
					<div className="element"></div>
				</div>
			</div>
		</WrapLoader>
	);
};

export default memo(Loading);
