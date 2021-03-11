import { Form } from 'react-bootstrap';
import { TagComponentProps } from './TagComponent.props';

export const TagComponent = (props: TagComponentProps) => (
  <Form.Group>
    <Form.Label className="text-white" htmlFor="tag">
      I'm focusing at :
    </Form.Label>
    <Form.Control as="select" onChange={props.handleChange} id="tag">
      {props.tags.map((v, idx) => (
        <option key={idx} value={v.id}>
          {v.text}
        </option>
      ))}
    </Form.Control>
  </Form.Group>
);
