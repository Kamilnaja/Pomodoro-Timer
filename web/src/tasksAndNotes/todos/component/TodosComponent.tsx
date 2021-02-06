import { Todo } from '../../../../../types/tasksAndNotesInterfaces';

const toggleIsChecked = () => {
  console.log('checking');
};

export const TodosComponent = (props: { todos: Todo[] }) => (
  <div>
    <h2>Your things to do</h2>

    <ul>
      {props.todos?.map((item: Todo, idx: number) => (
        <li key={idx}>
          <input type="checkbox" checked={item.isDone} onChange={() => toggleIsChecked()} />
          <div>{item.id}</div>
          <div>{item.title}</div>
          <div>{item.note}</div>
          <div>{item.dateCreated}</div>
          <div>{item.isDone}</div>
        </li>
      ))}
    </ul>
  </div>
);
