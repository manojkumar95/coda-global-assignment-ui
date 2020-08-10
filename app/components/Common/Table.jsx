import React from 'react';
import 'styles/Table.scss';

const Table = ({ candidates = [], history, currentUser = {}, onDelete }) => (
  <div className="table-container">
    <div className="table-container-head">
      <table>
        <thead>
          <tr className="head">
            <th className="column1">Candidate Id</th>
            <th className="column2">Name</th>
            <th className="column3">Number Of Votes</th>
            <th className="column4">Actions</th>
          </tr>
        </thead>
      </table>
    </div>
    <div className="table-container-body">
      <table>
        <tbody>
          {candidates.map(candidate => (
            <tr className="body" key={candidate._id}>
              <td className="column1" title={candidate._id}>{candidate._id}</td>
              <td className="column2" title={candidate.name}>{candidate.name}</td>
              <td className="column3" title={candidate.numberOfVotes}>{candidate.numberOfVotes || 0}</td>
              <td className="column4" title="Edit">
                <span className="mr-3" onClick={() => {
                  history.push(`/view-candidate/${candidate._id}`)
                }}>
                  <i className="fa fa-eye icon" aria-hidden="true" />
                </span>
                {(currentUser.isAdmin || currentUser.name === candidate.name) &&
                  <>
                    <span className="mr-3" onClick={() => {
                      history.push(`/view-candidate/${candidate._id}`)
                    }}>
                      <i className="fa fa-edit icon" aria-hidden="true" />
                    </span>
                    <span className="mr-3">
                      <i className="fa fa-trash icon" aria-hidden="true" onClick={() => onDelete(candidate._id)} />
                    </span>

                  </>
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default Table;
