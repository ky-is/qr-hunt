# QR Hunt

## Getting started

Clone this repository, rename "QR Hunt", and change `public/favicon.ico` and `src/assets/images/logo.png` to your brand. Then run these commands to hot-reload your site:

```console
npm install
npm run serve
```

## Content

Each location for your Hunt is a content entry served from Contentful's API.

### Setup

1. Create an account on [https://www.contentful.com]().
2. Follow their steps to create a space for your project.
3. Add a "Content model" named whatever you like.
4. Add 3 fields called: `Name` (Text), `URL` (Text), and `Image` (Media).
5. Add an API key, and see the `Development` or `Deploy` settings below for how to use it.

### Generate QR Codes

You can download the QR code for each location as soon as you've created a Content object for it in Contentful.

On the page for the Content entry you want, click "Info" in the upper right above the sidebar. Copy the "ENTRY ID" and paste it in for "{ENTRY_ID}" to the URL below, replacing "{YOUR_SITE_URL}" with whereever you have the site running:

`https://{YOUR_SITE_URL}/QR/{ENTRY_ID}`

## Develop

Rename `.env` to `.env.local` so that your API key is not commited into your Git repository. Set `VUE_APP_CONTENTFUL_SPACE_ID` and `VUE_APP_CONTENTFUL_ACCESS_TOKEN` to your API key's "Space ID" and "Content Delivery API - access token" respectively.

## Deploy

Deploy as a static site. Refer to [https://cli.vuejs.org/guide/deployment.html#platform-guides](). Netlify is a good choice as Contentful has an app integration so that your site will automatically be rebuilt any time you update its contents.

### Env variables

Be sure to set your environment variables again in your deployment build environment settings.
