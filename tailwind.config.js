export default {
  content: [
    "./src/App.jsx",
    "./src/components/Colours.jsx",
    "./src/components/Customization.jsx"
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        "peachy-orange": {
          100: "#f58142",
          200: "#f57c3b",
          300: "#f27430"
        },
      }
    },
  },
  plugins: [],
}

