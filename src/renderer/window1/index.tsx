import { createRoot } from 'react-dom/client';
import './../App.css'
import FormList from './components/FormList';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(<FormList />);