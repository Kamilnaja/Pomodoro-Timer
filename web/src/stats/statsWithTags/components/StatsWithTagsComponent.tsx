import { StatsWithTagsComponentProps } from './StatsWithTagsComponentProps';
import { Table } from 'react-bootstrap';
import './StatsWithTagsComponent.scss';

export const StatsWithTagsComponent = (props: StatsWithTagsComponentProps) => {
  return (
    <div className="table">
      <Table striped bordered hover className="stats__table table" size="sm">
        <thead className="table__head">
          <tr>
            <th>Day</th>
            <th>Tags</th>
          </tr>
        </thead>
        <tbody>
          {props.statsWithTags.result.map((v, idx) => (
            <tr key={idx}>
              <td>{v.createdAt}</td>
              <td>{v.tagText}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
