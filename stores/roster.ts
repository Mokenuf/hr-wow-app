import { defineStore } from 'pinia'
import { getBlizzConfig } from '~/services/blizzard'
import { BlizzAPI } from 'blizzapi'
import { ranksOfInterest } from '~/helpers/catalogs'

interface Roster {
	classId: number
	id: number
	level: number
	name: string
	raceId: number
}

export const useRosterStore = defineStore('roster', {
	state: () => ({
		roster: [] as Roster[],
		isLoading: false,
	}),
	actions: {
		async fetchRoster() {
			this.isLoading = true
			try {
				const { clientId, clientSecret, region } = getBlizzConfig()
				const blizzApi = new BlizzAPI({ clientId, clientSecret, region })
				const { members } = await blizzApi.query(
					'/data/wow/guild/ragnaros/hair-recovery/roster?namespace=profile-us&locale=en_US'
				)
				this.roster = members
					.filter((m) => m.character && m.character.level === 70 && ranksOfInterest.includes(m.rank))
					.map((m) => ({
						classId: m.character.playable_class.id,
						id: m.character.id,
						level: m.character.level,
						name: m.character.name,
						raceId: m.character.playable_race.id,
					}))
			} catch (e) {
				console.error('Error fetching roster: ', e)
			} finally {
				this.isLoading = false
			}
		},
	},
})
