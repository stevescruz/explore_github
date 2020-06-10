<h1 align="center">
    <br>
    Explore GitHub
</h1>

<h4 align="center">
  Search for your favorite repositories and view their latest issues and other important information by consuming
	the	GitHub API and save them to your browser's local storage for easy access later.
</h4>

Check out the Figma Layout [here](https://www.figma.com/file/qXilOKvJk7SrF5F6dy7V5W/Explore-Github?node-id=0%3A1)!

<p align="center">
  <a href="#goal">Goal</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#requirements">Requirements</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#how-to-use">How To Use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

<div style="display: flex; flex-wrap: wrap;">
  <img style="margin: 5px" alt="API Endpoint Request" src="https://res.cloudinary.com/dmct8cfu9/image/upload/v1596003207/explore-github_dashboard.png" width="240" />

  <img style="margin: 5px" alt="API Endpoint Response" src="https://res.cloudinary.com/dmct8cfu9/image/upload/v1596004488/explore-github_repository.png" width="326" height="265" />
</div>

## Goal

The goal is to create a project using TypeScript and ReactJS that integrates with the GitHub API to allow us to search for information on public repositories that belong to any user and save this information into your browser's local storage.

My objective with this project is to demonstrate that I can integrate an application with third party APIs.

## Requirements:

- [x] Project structure
  - [x] Boilerplate with Create React App
  - [x] Prepare EditorConfig
  - [x] Configure ESLint
  - [x] Set up Prettier
- [x] Application Routes
  - [x] Configure Routes with React Router V4
  - [x] Navigate between Routes
- [x] Global Styles and Components
  - [x] Styled Components library
  - [x] Global Styles Component
- [x] Dashboard Page
  - [x] React-Icons library
  - [x] Polished library
  - [x] Input Usability with visual cues (On Focus)
  - [x] Repository information Request to the GitHub API with Axios
  - [x] Display Input errors
  - [x] Display GitHub API Request errors
  - [x] Store Repository information with Local Storage
- [x] Repository Page
  - [x] Display Repository information & avatar
  - [x] Display Stars, Forks & Open Issues count.
  - [x] Display Issues
  - [x] Link an Issue to the original issue's page at GitHub
- [ ] Additional Features
  - [ ] Dark Mode Theme
  - [ ] Repositories Pagination
  - [ ] Issues Pagination
  - [ ] Integrate GitHub OAuth Authentication
  - [ ] Allow users to comment on issues and create new issues

## Technologies

This project was developed with the following technologies:

-  [TypeScript](https://www.typescriptlang.org/)
-  [ReactJS](https://reactjs.org/)
-  [Create React App](https://create-react-app.dev/)
-  [React Router v4](https://github.com/ReactTraining/react-router)
-  [Styled-Components](https://www.styled-components.com/)
-  [Polished](https://polished.js.org/)
-  [React-Icons](http://react-icons.github.io/react-icons/)
-  [Axios](https://github.com/axios/axios)
-  [GitHub REST API v3](https://developer.github.com/v3/)
-  [VS Code][vc] with [EditorConfig][vceditconfig] and [ESLint][vceslint]

## How To Use

To access the deployed website [click here](https://stevescruz.github.io/explore_github/).

To clone and run this application, you'll need [Git](https://git-scm.com), [ReactJS 16.13.1](https://reactjs.org/) (or higher), and [Yarn v1.13][yarn] (or
higher) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/stevescruz/explore_github.git

# Go into the repository
$ cd explore_github

# Install dependencies
$ yarn install

# Run the app
$ yarn start
```

## :memo: License
This project is under the MIT license.

---

[Get in touch with me!](https://www.linkedin.com/in/stevescruz/)

[yarn]: https://yarnpkg.com/
[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[vcprettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
