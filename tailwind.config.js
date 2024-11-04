/*
 * @Author: Diana Tang
 * @Date: 2024-11-03 20:47:21
 * @LastEditors: Diana Tang
 * @Description: some description
 * @FilePath: /DT-components/tailwind.config.js
 */
/** @type {import('tailwindcss').Config} */
const typography=require('@tailwindcss/typography')
module.exports = {
  content: ['./src/**/*.tsx', './src/**/*.html', './public/index.html','./src/**/*.{js,jsx,ts,tsx,mdx}'],
  important: '#root',
   // Toggle dark-mode based on .dark class or data-mode="dark"
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {},
  },
  plugins: [typography
    // , require('./plugin')
    // 后续处理一下自己的plugin
  ],
}

