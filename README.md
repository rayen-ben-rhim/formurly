# AI Excel Formula Generator

## Overview
This is an AI-powered web application that helps users generate Excel formulas efficiently. Built using React, Vite, and Tailwind CSS, the app provides an intuitive and fast user experience.

## Features
- **AI-powered formula generation**: Input a description, and the AI suggests an Excel formula.
- **Fast and responsive UI**: Optimized with Vite and styled with Tailwind CSS.
- **Copy to clipboard**: Easily copy generated formulas for use in Excel.
- **Dark Mode Support**: Enjoy a seamless experience in both light and dark themes.

## Technologies Used
- **React**: Frontend framework
- **Vite**: Fast build tool for modern web applications
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Gemini ai**: For generating Excel formulas

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/rayen-ben-rhim/formurly.git
   cd formurly
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
4. Open the application in your browser at `http://localhost:5173`

## Environment Variables
Create a `.env` file in the root directory and add your Gemeni API key or any required credentials:
```sh
VITE_GEMINI_API_KEY= your_api_key_here
VITE_SUPABASE_ANON_KEY= your_api_key_here
VITE_SUPABASE_URL =your_api_key_here
```

## Deployment
To build for production, run:
```sh
npm run build
```
Then deploy the `dist/` folder to your preferred hosting provider.

## Usage
1. Enter a description of the formula you need.
2. Click the "Generate Formula" button.
3. Copy the generated formula and use it in Excel.

## Contributing
Contributions are welcome! Feel free to submit a pull request or open an issue for suggestions.

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contact
For any inquiries, reach out via email at `rayenbenrhim@icloud.com` or create an issue in the repository.

