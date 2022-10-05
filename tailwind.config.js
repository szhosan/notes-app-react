module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        ideaIco: "url('./images/idea.svg')",
        thoughtIco: "url('./images/trophy.svg')",
        taskIco: "url('./images/list.svg')",
        btnEdit: "url('./images/edit.svg')",
        btnArchive: "url('./images/archive.svg')",
        btnDelete: "url('./images/delete.svg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
