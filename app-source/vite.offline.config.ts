import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/postcss';
import {fileURLToPath,URL} from 'node:url';
export default defineConfig({root:'offline',base:'./',plugins:[react()],resolve:{alias:{'@':fileURLToPath(new URL('.',import.meta.url))}},css:{postcss:{plugins:[tailwindcss()]}},build:{outDir:'../offline-dist',emptyOutDir:true,assetsInlineLimit:10000000,rolldownOptions:{output:{inlineDynamicImports:true}}}});
