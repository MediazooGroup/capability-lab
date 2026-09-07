import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/postcss';
import {fileURLToPath,URL} from 'node:url';
export default defineConfig({root:'launch',base:'./',plugins:[react()],resolve:{alias:{'@':fileURLToPath(new URL('.',import.meta.url))}},css:{postcss:{plugins:[tailwindcss()]}},build:{outDir:'../launch-dist',emptyOutDir:true,assetsInlineLimit:10000000,rolldownOptions:{output:{inlineDynamicImports:true}}}});
