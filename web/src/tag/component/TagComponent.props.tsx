import { Tag } from '../../../../types/tagsInterfaces';

export interface TagComponentProps {
  tags: Tag[];
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
