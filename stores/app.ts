import { defineStore } from "pinia";
import { getBlizzConfig } from "~/services/blizzard";
import { BlizzAPI } from "blizzapi";

interface PlayableClass {
  id: number;
  name: string;
}

interface PlayableRace {
  id: number;
  name: string;
}

export const useAppStore = defineStore('app', {
  state: () => ({
    isLoading: false,
    playableClasses: [] as PlayableClass[],
    playableRaces: [] as PlayableRace[],
  }),
  actions: {
    async fetchPlayableClasses() {
      this.isLoading = true;
      try {
        const { clientId, clientSecret, region } = getBlizzConfig();
        const blizzApi = new BlizzAPI({ clientId, clientSecret, region });
        const { classes } = await blizzApi.query('/data/wow/playable-class/index?namespace=static-us&locale=en_US');
        this.playableClasses = classes.map(c => ({
          id: c.id,
          name: c.name,
        }))
      } catch (e) {
        console.error('Error fetching playable classes: ', e)
      } finally {
        this.isLoading = false;
      }
    },
    async fetchPlayableRaces() {
      this.isLoading = true;
      try {
        const { clientId, clientSecret, region } = getBlizzConfig();
        const blizzApi = new BlizzAPI({ clientId, clientSecret, region });
        const { races } = await blizzApi.query('/data/wow/playable-race/index?namespace=static-us&locale=en_US');
        this.playableRaces = races.map(r => ({
          id: r.id,
          name: r.name,
        }))
      } catch (e) {
        console.error('Error fetching playable races: ', e)
      } finally {
        this.isLoading = false;
      }
    }
  }
})