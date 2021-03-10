import { TagComponentProps } from './TagComponent.props';

const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  const newValue = e.currentTarget.value;

  console.log(newValue);
};

export const TagComponent = (props: TagComponentProps) => (
  <div>
    <form>
      <span className="text-white">I'm focusing at :</span>
      <select onChange={handleChange}>
        {props.tags.map((v, idx) => (
          <option key={idx} value={v.id}>
            {v.text}
          </option>
        ))}
      </select>
      <button>Submit</button>
    </form>
  </div>
);
