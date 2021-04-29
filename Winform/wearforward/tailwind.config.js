module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: {
    content: ["./src/**/*.js", "./src/**/**/*.js"],
  },
  theme: {
    fill: (theme) => ({
      red: theme("colors.red.primary"),
    }),
    colors: {
      red:{
        light: "#cd111c",
        dark: "#DC2626",
      },
      white: {
        clean: "#ffffff",
        dirty: "#f3f3ff",
      },  
      blue: {
        medium: "#005c98",
      },
      black: {
        light: "#262626",
        faded: "#00000059",
      },
      gray: {
        base: "#a6a6a6",
        background: "#efece8",
        primary: "#dbdbdb",
        middle:"#6b7280",
        dark:"#111827",
      },
      red: {
        primary: "#ed4956",
        backgroud:"#4f46e5",
      },
      purple:{
        primary:"#4f46e5",
        background:"#4338ca",
        light:"#e0e7ff",
        hover:"#c7d2fe",
      },
    },
    placeholderColor: {
      'white': '#ffffff',
      'black': '#ffed4a',
      'danger': '#e3342f',
    },
    width: {
      '1/7': '14.2857143%',
      '2/7': '28.5714286%',
      '3/7': '42.8571429%',
      '4/7': '57.1428571%',
      '5/7': '71.4285714%',
      '6/7': '85.7142857%',
      '7/7': '99.10060568%',
    },
    fontFamily:{
      body:['Open Sans']
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
};
