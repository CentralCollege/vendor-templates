# Central College Vendor Templates

The following templates are available for use by approved vendors on behalf of Central College.

## Dependencies
The only outside dependency for these vendor templates is the [Font Aweosome](http://fontawesome.io/) font library. You can install this dependency using [Bower](https://bower.io).

## Calendar
The calendar folder contains specific styles and JavaScript for deployment to the Active Data Exchange hosted calendar. The calendar template is unique in that it requires javascript to inject HTML into the calendar software.

Both the CSS and JavaScript files are deployed to Amazon S3 for inclusion into the calendar.

## One Column Template
The one column template folder includes minified and unminified CSS, minified and unminified JavaScript and an index.html file. To use this template, only the `index.html` and the `main.min.css` files are required. The JavaScript is included at the base of the index.html file to minimize http requests.
