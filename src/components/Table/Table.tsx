import React, { FC, useState } from 'react';

const Table: FC<any> = ({ programsData, sortTableByParams, direction, setDetailsRow }) => {
  const [fieldSortingState, setFieldSortingState] = useState('');

  if (!programsData) return null;

  const onHandleSortBtnClick = (fieldName: string) => {
    sortTableByParams(fieldName);
    setFieldSortingState(fieldName);
  };

  const showArrow = () => {
    return direction ? (
      <i className="bi bi-chevron-bar-up"></i>
    ) : (
      <i className="bi bi-chevron-bar-down"></i>
    );
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th
              scope="col"
              onClick={() => {
                onHandleSortBtnClick('name');
              }}
            >
              <p>
                <span className="me-4">Name</span>
              </p>
            </th>
            <th
              scope="col"
              onClick={() => {
                onHandleSortBtnClick('created');
              }}
            >
              <p>
                <span className="me-4">Created</span>
                {fieldSortingState === 'created' ? showArrow() : null}
              </p>
            </th>
            <th
              scope="col"
              onClick={() => {
                onHandleSortBtnClick('updated');
              }}
            >
              <p>
                <span className="me-4">Updated</span>
                {fieldSortingState === 'updated' ? showArrow() : null}
              </p>
            </th>
          </tr>
        </thead>
        <tbody>
          {programsData.map((row: any) => {
            return (
              <tr key={row.id} onClick={() => setDetailsRow(row)}>
                <td>{row.name}</td>
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
