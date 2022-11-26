# Project 12 - SportSee

This repo contains all the source of the front-end of the SportSee project.

## 1. General information

## 1.1 Prerequisites

- [NodeJS (**version 16.17**)](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)
- The back-end of the project which can be downloaded [here](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard.git) in the version of the 26/11/2022. Check the changelog to see if there are any changes that can affect the project.

If you've got compatibility issues, we recommend you install [nvm](https://github.com/nvm-sh/nvm). This tool will allow you to easily manage your NodeJS versions and set up the project version.

## 1.2 Configure the project

The first thing you need to do is to configure the project. To do this, you need to create a `.env.local` file at the root of the project. This file will contain the following variables:
- VITE_API_URL: the URL of the back-end. By default, it is `http://localhost:3000`.
Refer to the [back-end documentation](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard.git) to know how to launch it.

You can use mocked data instead of the back-end. To do this, you need to replace the useFetch hook by the useFetchMockData hook in the `src/components/home/Home.jsx` file. Refer to the function documentation to know how to use it.

### 2.2 Launching the project

- Clone the repo on your computer.
- The `yarn` command will allow you to install the dependencies.
- The `yarn dev` will launch the project.
