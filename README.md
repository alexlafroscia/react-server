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

## Docker

Included is a `Dockerfile` that will take care of building an image around your application that can easily be run anywhere that Docker is supported.  To use, simply run the following (assuming that Docker is already installed on your machine):

```bash
docker build -t myname/my-cool-app .
docker run -p 80:3000 myname/my-cool-app:latest
```

Don't worry if the build takes a long time, especially the first time.  This is totally normal, since there are a lot of things that need to be downloaded and built.  After the initial build, future ones should be much faster.  Also, the `Dockerfile` has been optimized so that it'll only download your dependencies again if your `package.json` file changes.
