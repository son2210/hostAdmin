import React, { useState, memo } from 'react';
import { BsTrash } from 'react-icons/bs';
import { MdModeEdit } from 'react-icons/md';

import { WrapContent, GroupPagination } from 'styles/common/common-styles';
import {
  TableCustom,
  Thead,
  Th,
  Tr,
  Td,
  Tbody,
} from 'components/Table/TableCustom';
import { TablePagination } from 'components/Pagination/Pagination';
import { Button } from 'components/Button/Button';
import {
  BoxActionTable,
  GroupFeedback,
  GroupBoxChat,
} from './FeedbackTable.styles';
import BoxChatFeedback from './../BoxChatFeedback/BoxChatFeedback';

const FeedbackTable = ({ data }) => {
  const [pagination, setPagination] = useState({
    page: 1,
    pageLength: 20,
    totalRecords: 100,
  });

  const handleChangePage = (values) => {
    setPagination({ ...pagination, ...values });
  };

  return (
    <GroupFeedback>
      <WrapContent>
        <TableCustom>
          <Thead>
            <Tr>
              <Th sort={false}>STT</Th>
              <Th>Sản phẩm</Th>
              <Th>User</Th>
              <Th>Nội dung</Th>
              <Th>Thời gian</Th>
              <Th sort={false} align="right">
                Action
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item) => (
              <Tr key={item.id}>
                <Td>{item.id}</Td>
                <Td>{item.product}</Td>
                <Td>{item.user}</Td>
                <Td>{item.content}</Td>
                <Td>{item.time}</Td>
                <Td>
                  <BoxActionTable>
                    <Button
                      color="warning"
                      icon={<MdModeEdit />}
                      size="small"
                    />
                    <Button color="danger" size="small" icon={<BsTrash />} />
                  </BoxActionTable>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </TableCustom>

        <GroupPagination>
          <TablePagination
            pageLengthMenu={[20, 50, 100]}
            page={pagination.page}
            pageLength={pagination.pageLength}
            totalRecords={pagination.totalRecords}
            onPageChange={handleChangePage}
          />
        </GroupPagination>
      </WrapContent>

      <GroupBoxChat>
        <BoxChatFeedback />
      </GroupBoxChat>
    </GroupFeedback>
  );
};

export default memo(FeedbackTable);
