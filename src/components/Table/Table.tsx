import React, { FC } from 'react';

const Table: FC<any> = ({ items }) => {
  if (!items) return null;
  console.log(items);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Status</th>
            <th scope="col">Created</th>
            <th scope="col">Updated</th>
          </tr>
        </thead>
        <tbody>
          {items.map((row: any, idx: number) => {
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
