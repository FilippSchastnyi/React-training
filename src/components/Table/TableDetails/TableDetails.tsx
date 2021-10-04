import React, { FC } from 'react';

const TableDetails: FC<any> = ({ rowData }) => {
  if (!rowData) return null;
  console.log(rowData);
  return (
    <ul>
      <li>Name : {rowData.name}</li>
      <li>AccountId : {rowData.accountId}</li>
      <li>isActive : {rowData.active ? 'active' : 'not active'}</li>
      <li>activeDate : {rowData.activeDate}</li>
      <li>Icon : {rowData.icon}</li>
      <li>IconBackground : {rowData.iconBackground}</li>
      <li>Created : {rowData.created}</li>
      <li>Updated : {rowData.updated}</li>
    </ul>
  );
};

export default TableDetails;
