import type { Config } from 'tailwindcss';
const config: Config = { content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'], theme: { extend: { colors: { ink:'#172B4D', muted:'#71809a', orange:'#f47b35', paper:'#f8f9fc', line:'#e8ebf2' }, fontFamily:{ sans:['Arial','sans-serif'] } } }, plugins:[] };
export default config;
