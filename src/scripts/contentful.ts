import { createClient, Asset, EntryFields } from 'contentful'

export interface Metadata {
	title: EntryFields.Text
	logo: EntryFields.Link<Asset>
}

export interface QRSpot {
	name: EntryFields.Text
	URL: EntryFields.Text
	image: EntryFields.Link<Asset>
}

export default createClient({
	space: process.env.VUE_APP_CONTENTFUL_SPACE_ID as string,
	accessToken: process.env.VUE_APP_CONTENTFUL_ACCESS_TOKEN as string,
})
