import { Dropdown } from './components/dropdown';
import { optionsList } from './constants';

export default function Home() {
  return (
    <div className="container mx-auto py-4">
      <Dropdown options={optionsList} label="Label" />
    </div>
  );
}
