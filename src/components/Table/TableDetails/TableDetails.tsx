import React, { FC } from 'react';
import moment from 'moment';
import { ITableData } from '../../../interfaces/Table/ITableData';

interface TableListProps {
  rowData: ITableData | undefined;
  removeTableDetails: () => void;
}

const TableDetails: FC<TableListProps> = ({ rowData, removeTableDetails }) => {
  if (!rowData) return null;

  return (
    <ul
      onClick={() => {
        removeTableDetails();
      }}
    >
      <li>Name : {rowData.name}</li>
      <li>AccountId : {rowData.accountId}</li>
      <li>isActive : {rowData.active ? 'active' : 'not active'}</li>
      <li>activeDate : {moment(rowData.activeDate).calendar()}</li>
      <li>Icon : {rowData.icon}</li>
      <li>IconBackground : {rowData.iconBackground}</li>
      <li>Created : {moment(rowData.created).calendar()}</li>
      <li>Updated : {moment(rowData.updated).calendar()}</li>
    </ul>
  );
};

export default TableDetails;
