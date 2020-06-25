# CssDependency error with mini-css-extract-plugin for webpack

Getting the error with webpack and mini-css-extract-plugin:

```
Error: No module factory available for dependency type: CssDependency
```

This repo is a replication of the setup where the error occurs.

## Steps to reproduce

- Checkout the repo
- Go into the directory
- `npm install`
- `cd src/asset2`
- run `webpack`. Builds ok.
- Go back to the top level
- run `webpack`. See the error.