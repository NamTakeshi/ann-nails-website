import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'wvb8txdo',
    dataset: 'production',
  },
  studioHost: 'anns-nail-salon',
  deployment: {
    appId: 'wvbh4v9qgob5bcizjkdzg4j0',
    autoUpdates: true,
  },
})
