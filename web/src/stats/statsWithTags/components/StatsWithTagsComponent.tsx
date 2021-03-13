import { StatsWithTagsComponentProps } from './StatsWithTagsComponentProps';
import { Table } from 'react-bootstrap';
import './StatsWithTagsComponent.scss';
import { Pomodoro } from '../../../../../types/statsInterfaces';

export const StatsWithTagsComponent = (props: StatsWithTagsComponentProps) => {
  const mappedProps = props.statsWithTags.result.map((item: Pomodoro) => ({
    ...item,
    createdAt: new Date(item.createdAt),
  }));

  return (
    <div className="table">
      <h3>Detailed statistics</h3>
      <Table striped bordered hover className="stats__table table" size="sm">
        <thead className="table__head">
          <tr>
            <th>Day</th>
            <th>Time</th>
            <th>Tags</th>
          </tr>
        </thead>
        <tbody>
          {mappedProps.map((v, idx) => (
            <tr key={idx}>
              <td>{v.createdAt.getDate()}</td>
              <td>
                {v.createdAt.getHours()}:{v.createdAt.getMinutes()}
              </td>
              <td>{v.tagText}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
