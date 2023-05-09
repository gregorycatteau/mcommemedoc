/** @type {import('tailwindcss').Config} */
export const content = [
  'components/**/*.{vue,js,ts}',  
  'layouts/**/*.vue',  
  'pages/**/*.vue',  
  'composables/**/*.{js,ts}',  
  'plugins/**/*.{js,ts}',  
  'App.{js,ts,vue}',  
  'app.{js,ts,vue}',  
  'Error.{js,ts,vue}',  
  'error.{js,ts,vue}',  
  'content/**/*.md'
  ];
export const theme = {
  extend: {
    
  },
};
export const corePlugins = {
  aspectRatio: false,
};
export const plugins = [require
  ('@tailwindcss/typography'), 
  ('@tailwindcss/forms'), 
  ('@tailwindcss/aspect-ratio')
];