// Extending defualt config
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#ff6363",
        secondary: {
          100: "#e2e2d5",
          200: "#888883",
        },
        overlay: {
          default: "rgba(0,0,0,0.3)",
        },
      },
      fontFamily: {
        body: ["Nunito"], // will generate class name: font-body
      },
      inset: {
        px: "1px",
        0: "0",
        1: "0.25rem",
        2: "0.5rem",
        3: "0.75rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        8: "2rem",
        10: "2.5rem",
        12: "3rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        32: "8rem",
        36: "9rem",
        38: "9.5rem",
        40: "10rem",
        48: "12rem",
        56: "14rem",
        64: "16rem",
        "1/2": "50%",
      },
    },
    namedGroups: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"], // For nested groups
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active", "group-hover"],
    visibility: ["responsive", "hover", "focus", "active", "group-hover"],
    opacity: ["responsive", "hover", "focus", "active", "group-hover"],
    margin: ["responsive", "hover", "focus", "active", "group-hover"],
    translate: ["responsive", "hover", "focus", "active", "group-hover"],
    inset: ["responsive", "hover", "focus", "active", "group-hover"],
  },
  plugins: [require("tailwindcss-named-groups")],
};
