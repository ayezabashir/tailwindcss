export default {
  content: [
    "./src/App.jsx",
    "./src/components/Colours.jsx",
    "./src/components/Customization.jsx",
    "./src/components/Typography.jsx",
    "./src/components/Spacesandsizes.jsx",
    "./src/components/Flex.jsx",
    "./src/components/Grid.jsx"
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    // extend will keep the initial configuration and adds to the already 
    // existing classes
    extend: {
      spacing: {
        '1': '8px',
        '2': '12px',
        '3': '16px',
        '4': '24px',
        '5': '32px',
        '6': '48px',
      },
      colors: {
        "peachy-orange": {
          100: "#f58142",
          200: "#f57c3b",
          300: "#f27430"
        },
        'txt-black': '#3B3A3B',
        'btn-black': '#313641',
        'btn-hover-black': '#1F2937',
        'txt-gray': '#999999',
      }
    },
  },
  plugins: [],
}

