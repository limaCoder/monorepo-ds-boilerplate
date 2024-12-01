module.exports = {
  "apps/**/*.{js,ts,jsx,tsx}": [
    "eslint --fix"
  ],
  "packages/react/**/*.{js,ts,jsx,tsx}": [
    "eslint --fix"
  ],
  "*.json": [
    "prettier --write"
  ]
}