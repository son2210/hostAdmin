import React, { useState } from "react";
import { FaSortDown } from "react-icons/fa";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import OutsideClickHandler from "react-outside-click-handler";

import { GroupPagination, BoxSelect, BoxControl } from "./Pagination.styles";

const limit = (value, min, max) => {
	return Math.max(min, Math.min(max, value));
};

export const TablePagination = ({ totalRecords = 0, ...props }) => {
	const [pagination, setPagination] = useState({
		select: false,
		page: props.page,
	});

	const pageLength = props.pageLength || props.pageLengthMenu[0] || 10;

	// tính ra tổng số page cần dùng
	const totalPages =
		totalRecords > 0 ? Math.ceil(totalRecords / pageLength) : 1;

	const page = limit(props.page, 1, totalPages);

	const from = limit((page - 1) * pageLength + 1, 1, totalRecords);

	const to = limit((props.page - 1) * pageLength + pageLength, 1, totalRecords);

	const prevPageDisabled = page <= 1;
	const nextPageDisabled = page >= totalPages;

	const changePage = (options) => {
		const { page = props.page, pageLength = props.pageLength } = { ...options };

		const pageMin = 1;
		const pageMax = Math.max(Math.ceil(totalRecords / pageLength), 1);

		props.onPageChange({
			page: limit(page, pageMin, pageMax),
			pageLength,
		});
	};

	return (
		<GroupPagination>
			<span className="title-pagination">Hàng mỗi trang: </span>
			<BoxSelect>
				<div
					className={`show-option ${pagination.select ? "active" : ""}`}
					onClick={() =>
						setPagination({ ...pagination, select: !pagination.select })
					}
				>
					{pageLength}
					<span className="icon-option">
						<FaSortDown />
					</span>
				</div>
				{pagination.select && (
					<OutsideClickHandler
						onOutsideClick={() =>
							setPagination({ ...pagination, select: !pagination.select })
						}
					>
						<div className="list-option">
							{props.pageLengthMenu.map((item) => (
								<div
									className="item-option"
									key={item}
									onClick={() => {
										setPagination({
											...pagination,
											select: !pagination.select,
										});
										changePage({
											page: item !== pageLength ? 1 : page,
											pageLength: item,
										});
									}}
								>
									{item}
								</div>
							))}
						</div>
					</OutsideClickHandler>
				)}
			</BoxSelect>

			<div className="location-pagination">
				{from}-{to} of {totalRecords}
			</div>

			<BoxControl>
				<span
					className={`${prevPageDisabled ? "disabled" : ""} icon-prev`}
					onClick={() => {
						const prevPage = page > 1 ? page - 1 : page;
						if (prevPage !== pagination.page) {
							setPagination({ ...pagination, page: prevPage });
						}

						changePage({ page: prevPage });
					}}
				>
					<BsChevronLeft />
				</span>

				<span
					className={`${nextPageDisabled ? "disabled" : ""} icon-next`}
					onClick={() => {
						const nextPage = page < totalPages ? page + 1 : page;
						if (nextPage !== pagination.page) {
							setPagination({ ...pagination, page: nextPage });
						}

						changePage({ page: nextPage });
					}}
				>
					<BsChevronRight />
				</span>
			</BoxControl>
		</GroupPagination>
	);
};
