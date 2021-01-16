# Course Prototype

In this project, we are building the prototype for a website that instructors will use when teaching courses. The website serves up the instructor guide with course notes and timelines so every course stays on schedule.

## Project Details

- `src/book`: The book folder is where the data will go. In it, you'll find a `manifest.json` containing the details about the course. You'll also find `.mdx` files for each section.
- `src` and `src/pages`: This contains the pages for the instructor website as React components. The components will process the data and MDX files from the `book` folder to generate the guide.

## Running the Project

The project uses Create React App, so you'll use familiar CRA commands to perform common tasks.

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm start`     | Runs the project on `localhost:3000` |
| `npm test`      | Runs tests                           |
| `npm run build` | Creates a production build           |
