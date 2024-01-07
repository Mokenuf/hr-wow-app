import { defineStore } from 'pinia'
import { getBlizzConfig } from '~/services/blizzard'
import { BlizzAPI } from 'blizzapi'

interface Character {
	id: number
	name: string
	race: string
	class: string
	classId: number
	spec: string
	specId: number
	level: number
	iLevel: number
	equipment: Item[]
}

interface Item {
	id: number
	slot: string
	name: string
	quality: string
}

export const useCharacterStore = defineStore('character', {
	state: () => ({
		isLoading: false,
		character: {} as Character,
	}),
	actions: {
		async fetchCharacter(characterName: string) {
			const name = characterName.toLowerCase()
			this.isLoading = true
			try {
				const { clientId, clientSecret, region } = getBlizzConfig()
				const blizzApi = new BlizzAPI({ clientId, clientSecret, region })
				const res = await blizzApi.query(`/profile/wow/character/ragnaros/${name}?namespace=profile-us&locale=en_US`)
				this.character = {
					id: res.id,
					name: res.name,
					race: res.race.name,
					class: res.character_class.name,
					classId: res.character_class.id,
					spec: res.active_spec.name,
					specId: res.active_spec.id,
					level: res.level,
					iLevel: res.average_item_level,
				}
			} catch (e) {
				console.error('Error fetching character: ', e)
			} finally {
				this.isLoading = false
			}
		},
		async fetchCharacterItems(characterName: string) {
			const name = characterName.toLowerCase()
			this.isLoading = true
			try {
				const { clientId, clientSecret, region } = getBlizzConfig()
				const blizzApi = new BlizzAPI({ clientId, clientSecret, region })
				const { equipped_items } = await blizzApi.query(
					`/profile/wow/character/ragnaros/${name}/equipment?namespace=profile-us&locale=en_US`
				)
				this.character.equipment = equipped_items.map((i) => ({
					id: i.item.id,
					slot: i.slot.name,
					name: i.name,
					quality: i.quality.type,
				}))
			} catch (e) {
				console.error('Error fetching character items: ', e)
			} finally {
				this.isLoading = false
			}
		},
	},
})
