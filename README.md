# VisualNode
> An app written in node &amp; react for visualizing nodejs code.

## Developers
Please note, webpack is used to compile both the main process and the render process into 3 files.

It is recommended not to run a script that builds the dll file every time you test as it only needs to be built once.

### Testing
Run `npx react-devtools` and `npm test` at the same time.
`npm run test:dual` does this for you if needed.

If you don't want the react-devtools window, remove `<script src="http://localhost:8097"></script>` from `dist/index.html`
