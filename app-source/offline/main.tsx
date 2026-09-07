import React from 'react';
import {createRoot} from 'react-dom/client';
import {Presentation} from '../components/presentation';
import '../app/globals.css';
createRoot(document.getElementById('main')!).render(<Presentation/>);
