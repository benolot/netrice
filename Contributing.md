# Contributing

Thanks for your interest in contributing to this project. To help ensure the library keeps it's quality, I've setup some contributing guidelines for pull requests.

---

## Checklist for Pull request

- [ ] Loader classes are in correctly named (See Naming section) files
- [ ] Loader classes are in the `/loaders/` directory
- [ ] Animations are in `_animations.scss`
- [ ] Variables are in `_variables.scss`
- [ ] Distribution CSS has been built
- [ ] 4 Spaces used (No tabs)
- [ ] New line at the end of files
- [ ] Updated gh-pages documentation at `/docs/`

## Naming

- ### File Naming
  - Prefix all scss files with `_`
  - For loaders, their css class name should be the file name, without the `netrice-` prefix
- ### Animation Naming
  - All animations should be prefixed with `netrice-`
- ### Loader Naming
  - All loaders should be prefixed with `netrice-`
  - Aim for a `SHAPE-DESCRIPTOR-MODIFIER` naming system where possible

## Building the project

To build the project, run `npm i` and then `gulp build`. You can do `gulp watch` to watch for file changes after the initial build.
