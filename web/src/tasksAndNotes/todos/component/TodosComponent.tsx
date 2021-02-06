import { Todo } from '../../../../../types/tasksAndNotesInterfaces';
import { Button, Card } from 'react-bootstrap';

const toggleIsChecked = () => {
  console.log('checking');
};

export const TodosComponent = (props: { todos: Todo[] }) => (
  <div>
    <h2>Your things to do</h2>

    <ul className="list-unstyled">
      {props.todos?.map((item: Todo, idx: number) => (
        <li key={idx} className="mb-4" tabIndex={0}>
          <Card>
            <Card.Header>
              <input type="checkbox" checked={item.isDone} onChange={() => toggleIsChecked()} />
              <span>{item.id}</span>
              <span>{item.title}</span>
            </Card.Header>
            <Card.Body>
              <div>{item.note}</div>
              <div>{item.dateCreated}</div>
              <div>{item.isDone}</div>
              <Button variant="success">+</Button>
            </Card.Body>
          </Card>
        </li>
      ))}
    </ul>
  </div>
);
