export default {
  title: "JavaScript Jungle Teacher's Edition",
  agenda: [
    {
      title: "Hello World",
      agenda: [
        { title: "Intro Slides", length: 5 },
        {
          title: "Environment Setup",
          agenda: [
            { title: "install-vscode", length: 3 },
            {
              title: "student-files",
              required: true,
              length: 2,
            },
          ],
        },
        {
          title: "Examine HTML and CSS",
          agenda: [
            {
              title: "review-html",
              required: true,
              length: 2,
            },
            { title: "review-css", length: 3 },
          ],
        },
        {
          title: "Periodic Table Primitives",
          agenda: [
            {
              title: "numbers",
              length: 3,
              steps: [
                {
                  title: "add-script-to-page",
                  required: true,
                },
                {
                  title: "devtools-console",
                  required: true,
                },
                {
                  title: "numbers",
                  required: true,
                },
                {
                  title: "converting-floats-to-numbers",
                },
                {
                  title: "math-constants",
                },
                {
                  title: "random-number",
                },
              ],
            },
            {
              title: "strings",
              length: 4,
              steps: [
                {
                  title: "creating-variables",
                  required: true,
                },
                {
                  title: "concatenation",
                  required: true,
                },
                {
                  title: "template-strings",
                  required: true,
                },
                {
                  title: "string-length",
                },
                {
                  title: "whitespace",
                },
                {
                  title: "string-functions",
                },
              ],
            },
            {
              title: "booleans",
              length: 3,
              steps: [
                {
                  title: "if-else",
                  required: true,
                },
                {
                  title: "ternary-statements",
                  required: true,
                },
                {
                  title: "truthy-falsy",
                  required: true,
                },
                {
                  title: "not-a-number",
                  required: true,
                },
                {
                  title: "basic-comparison",
                  required: true,
                },
              ],
            },
          ],
        },
        { title: "Periodic Table Objects", length: 15 },
        { title: "DOM Interaction", length: 10 },
        { title: "Lab: Dot Click", length: 10 },
      ],
    },
    {
      title: "Data Structures",
      agenda: [
        { title: "Install Node.js", length: 3 },
        { title: "Array Samples", length: 12 },
        {
          title: "Working with process.argv",
          length: 10,
        },
        { title: "Object Samples", length: 15 },
        {
          title: "Browser & Server Comparison",
          length: 10,
        },
        { title: "Lab: Objects & Arrays", length: 10 },
      ],
    },
    {
      title: "HTTP",
      agenda: [
        { title: "HTTP Overview", length: 3 },
        { title: "Function Samples", length: 7 },
        { title: "Sync vs. Async Samples", length: 10 },
        {
          title: "Exercise: Serving a Website",
          length: 20,
        },
        {
          title: "Exercise: Fetching Remote Data",
          length: 15,
        },
      ],
    },
    {
      title: "Lab",
      steps: [
        "Serve the HTML File",
        "Serve the CSS File",
        "Serve the Image",
        "Create a Variable for the Mood",
        "Incorporate Readline",
        "Change the Mood Readline",
        "Quit from Readline",
      ],
      length: 30,
    },
  ],
};
