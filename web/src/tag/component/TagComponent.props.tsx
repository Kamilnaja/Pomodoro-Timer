import { Tag } from '../../../../types/statsInterfaces';

export interface TagComponentProps {
  tags: Tag[];
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
