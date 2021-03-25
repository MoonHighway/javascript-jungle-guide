# Install VSCode

## Get and install VS Code

It's ok to use another text editor. It's just text.

## Prettier with VS Code

Set up auto-formatting if you want the code to look like the teacher's code.

### Possible Questions

1. How do I find extensions/plugins for VSCode?

   - **Preferences > Extensions**

2. How do I change the VSCode theme?

   - **Preferences > Color Theme**
   - There are built-in themes and installable themes.

### Possible Questions

1. Why is the script tag at the bottom of the page?

- The browser interprets all of the text (html, css, and JavaScript) from top to bottom.
- Putting the script here assures that the DOM has been constructed before JavaScript is processed
  - This means that users see something before all of the JavaScript text has loaded
  - It also means that JavaScript can work with the loaded DOM
  - We can put scripts in the header and tell the JavaScript to wait for the DOM to load before processing code. But that requires an event, and we are not that far along yet.

2. Can you have multiple script tags?

- Yes. As many as you want.
- Order matters. Scripts that appear higher in the page are processed before scripts that are lower in the page.

3. Can multiple scripts share variables.

- Yes. The page itself is the scope of each script.
- If you create a variable in one script, any scripts below that will be able to read the variable.

4. Can you link to external JavaScript files?

- Yes. That's actually what we typically do

5. What other types of HTML tags are there?

- Tags for formatting documents, laying out text and displaying images
- Also tags for adding sounds and streaming videos
- There is even a canvas where you can render 2D or 3D graphics
- Check out this list of available HTML Tags.

6. So every time I look at a web page there are `script` tags for all of the JavaScript?

- Yes.
- There are either multiple script tags for every library and framework that the page uses as well as the logic on the page itself.
- Sometimes all of the Javascript, including libraries and frameworks, are packaged into a single JavaScript file, so there may be only one `script` tag, but there is at least one.

7. Can the browser cache scripts? Like if I use React on one site, do I have to load it again on another?

- Yes. Checkout HTML modules.
