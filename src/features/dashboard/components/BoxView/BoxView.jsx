import React, { memo } from "react";
import { IoMdCloudDownload } from "react-icons/io";
import { BsFillChatDotsFill } from "react-icons/bs";

import { BoxViewItem } from "./BoxView.styles";

const BoxView = () => {
	return (
		<div>
			<BoxViewItem>
				<div className="box-icon icon-download">
					<IoMdCloudDownload />
				</div>
				<div className="box-body">
					<div className="box-title">Downloads</div>
					<div className="box-view">114,381</div>
				</div>
			</BoxViewItem>
			<BoxViewItem>
				<div className="box-icon icon-comment">
					<BsFillChatDotsFill />
				</div>
				<div className="box-body">
					<div className="box-title">Comments</div>
					<div className="box-view">11,431</div>
				</div>
			</BoxViewItem>
		</div>
	);
};

export default memo(BoxView);
