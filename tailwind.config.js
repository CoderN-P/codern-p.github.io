module.exports = {
  content: ["./templates/*.html", "./node_modules/flowbite/**/*.js", "./static/js/*.js"],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
}