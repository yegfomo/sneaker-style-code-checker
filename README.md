# Sneaker Style Code Checker

A small Manifest V3 Chrome extension for comparing the complete Nike-style codes found in two sneaker listings. It accepts common dash characters and handles lowercase codes, repeated mentions, and codes found on only one side. It also includes a six-release reference with links to Nike.

## Run locally

1. Open Chrome's Extensions page and turn on Developer mode.
2. Choose **Load unpacked** and select the folder containing `manifest.json`.
3. Open the toolbar popup and choose **Try an example**. The adult and Big Kids Jordan 11 Gamma listings should show different codes.
4. Replace the second listing with `ct8012 – 047` and check again. The popup should report one exact code shared.

The extension processes the text locally and has no requested permissions or analytics. A style code can help identify a release. Authenticating an individual pair requires other evidence.

## Data and reading

- [YegKing style-code reference](https://yegking.net/2026/11/12/sneaker-style-code-reference/) provides the six records, links to Nike, and a CSV.
- [Reps Shoes colorway comparison](https://reps.shoes/2026/11/06/travis-scott-jordan-1-low-shy-pink-vs-tropical-pink/) illustrates why the final three characters matter on two similarly named releases.
- [Extension information and privacy policy](https://yegking.net/sneaker-style-code-checker/)

The team that maintains this tool also maintains the linked guides. This project is independent of Nike and Jordan Brand.
