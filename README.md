# FormFlow

A lightweight, responsive multi-page form flow built with HTML, CSS, Bootstrap 5, and vanilla JavaScript. Users fill out a modal form, and their details are carried over to a styled success page — no backend required.

---

## Features

- Modal-based form with HTML5 validation (`required` fields)
- Data persistence across pages via `localStorage`
- Success page that dynamically displays submitted details
- Fully responsive layout using Bootstrap 5
- Clean separation of concerns across `index.html`, `success.html`, and `script.js`

---

## Pages

| Page | Description |
|------|-------------|
| `index.html` | Landing page with an "Open Form" button that triggers the modal |
| `success.html` | Confirmation page displaying the submitted user details |

---

## Tech Stack

- HTML5
- CSS3 (custom + Bootstrap 5.3.3)
- Vanilla JavaScript (ES6+)
- Google Fonts (Inter)
- Bootstrap 5.3.3

---

## Getting Started

No build tools or dependencies to install. Just open the project in a browser.

```bash
git clone https://github.com/your-username/formflow.git
cd formflow
open index.html
```

Or serve it locally with VS Code Live Server, or any static file server:

```bash
npx serve .
```

---

## How It Works

1. User lands on `index.html` and clicks **Open Form**
2. A Bootstrap modal appears with four fields: Name, Email, Phone, Gender
3. On submit, values are saved to `localStorage` and the user is redirected to `success.html`
4. `success.html` reads from `localStorage` and displays the submitted details

---

## Project Structure

```
formflow/
├── index.html       # Landing page with modal form
├── success.html     # Submission confirmation page
├── script.js        # Shared JS logic for both pages
├── style.css        # Custom styles
└── README.md
```

---

## Notes

- `script.js` is shared across both pages and uses null guards (`if (MyForm)`, `if (NameInputted)`) to safely run only the relevant logic per page
- User input is written to the DOM using `textContent` (not `innerHTML`) to prevent XSS
- No data is sent to any server — everything stays in the browser

---

## License

MIT
