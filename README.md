# React Server

> A super simple template for building server-rendered applications with React

## Getting Start

- Install dependencies

    ```bash
    npm install
    ```

- **For Development:** Start the `dev` server

    ```bash
    npm run dev
    ```

- **For Production:** Build, and then run, the server

    ```bash
    npm run build
    npm start
    ```

## Project Structure

The point of this template is to have an extremely lightweight Node server that leverages React and React-Router to render static HTML pages to the client, and then have React kick in in the browser, loading the same exact application but taking over to render everything else in JavaScript, without contacting the server again.

As such, most of the source for your site should live under the `src` directory.  If all you're doing is adding new pages to the site, then you only need to worry about creating new React components and routing to them correctly; the build steps should grab your files automatically and handle building both the server- and client-side applications correctly.
