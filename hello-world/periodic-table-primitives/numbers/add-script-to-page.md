# Add Script to Page

1. Add a script tag to the bottom of the body tag on the html page.

```html
<body>
    ...
<script>
    // write JavaScript here
</script>
</body>
</html>
```

2. All JavaScript code will be written inside that script tag.

<Question title="Why is the script tag at the bottom of the page?">
The browser reads all of the text (HTML, CSS, and JavaScript) from top to bottom. Putting the script here assures that the DOM has been constructed before JavaScript is processed. This means that users see something before all of the JavaScript text has loaded. 
</Question>
