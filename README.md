# QR Hunt

## Getting started

Clone this repository, then run these commands to hot-reload your site:

```console
npm install
npm run serve
```

## Content

Each location for your Hunt is a content entry served from Contentful's API.

### Setup

1. Create an account on [https://www.contentful.com]()
2. Follow their steps to create a "Space" for your project
3. Add a "Content model" called "QR Spot"
4. Add 5 fields: `Name` (Text, Entry title), `Hint` (Text), `URL` (Text), `Image` (Media), `Location` (Location)
5. Add an API key, and see the `Development` or `Deploy` settings below for how to use it

### Generate QR Codes

You can download the QR code for each location as soon as you've created a Content object for it in Contentful.

On the page for the Content entry you want, click "Info" in the upper right above the sidebar. Copy the "ENTRY ID" and paste it in for "{ENTRY_ID}" to the URL below, replacing "{YOUR_SITE_URL}" with whereever you have the site running:

`https://{YOUR_SITE_URL}/QR/{ENTRY_ID}`

### Metadata

1. Add a "Content model" with an "API Identifier" of `metadata`
2. Add 2 fields: `Title` (Text, Entry title), `Logo` (Media)
3. (Optional) Add 4 fields: `Tutorial Title` (Text), `Tutorial Description` (Long text), `Signup Title` (Text), `Signup Description` (Long text)

These are used to customize the branding and marketing copy of your site.

## Develop

Rename `.env` to `.env.local` so that your API keys are not commited into your Git repository:
- `VUE_APP_CONTENTFUL_SPACE_ID`: Your API key's "Space ID"
- `VUE_APP_CONTENTFUL_ACCESS_TOKEN`: "Content Delivery API - access token"
- `VUE_APP_BRAND_COLOR`: CSS color value for your brand color, enclosed in double quotes

## MailChimp

Optionally, collect email addresses from your users. https://admin.mailchimp.com/lists > (choose/create your list) > "Signup Forms" > "Embedded Forms" > From the code block, find the url inside: `<form action="VUE_APP_MAILCHIMP_LIST_URL"`:
- `VUE_APP_MAILCHIMP_LIST_URL`: The value you copied above

## Deploy

Deploy as a static site. Refer to [https://cli.vuejs.org/guide/deployment.html#platform-guides](). Netlify is a good choice as Contentful has an app integration so that your site will automatically be rebuilt any time you update its contents.

### Env variables

Be sure to set your environment variables again (see `Develop` above) in your deployment build environment settings.
