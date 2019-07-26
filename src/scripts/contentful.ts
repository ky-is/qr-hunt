import { createClient, Asset, EntryFields } from 'contentful'

export interface QRItem {
	name: EntryFields.Text
	URL: EntryFields.Text
	image: EntryFields.Link<Asset>
}

export default createClient({
	space: process.env.VUE_APP_CONTENTFUL_SPACE_ID,
	accessToken: process.env.VUE_APP_CONTENTFUL_ACCESS_TOKEN,
})
