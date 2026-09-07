import {createRoot} from 'react-dom/client';
import {LearningBoard} from '../components/learning-board';
import '../app/globals.css';
createRoot(document.getElementById('root')!).render(<main><LearningBoard standalone/></main>);
