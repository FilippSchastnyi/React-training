import React, { FC } from 'react';

const Table: FC<any> = ({ programsData, sortTableByParams }) => {
  if (!programsData) return null;

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th
              scope="col"
              onClick={() => {
                sortTableByParams('name');
              }}
            >
              Name
            </th>
            <th
              scope="col"
              onClick={() => {
                sortTableByParams('Status');
              }}
            >
              Status
            </th>
            <th
              scope="col"
              onClick={() => {
                sortTableByParams('Created');
              }}
            >
              Created
            </th>
            <th
              scope="col"
              onClick={() => {
                sortTableByParams('Updated');
              }}
            >
              Updated
            </th>
          </tr>
        </thead>
        <tbody>
          {programsData.map((row: any, idx: number) => {
            return (
              <tr key={row.id}>
                <td scope="row">{idx + 1}</td>
                <td>{row.name}</td>
                <td>{row.active ? 'active' : 'not active'}</td>
                <td>{row.created}</td>
                <td>{row.updated}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
