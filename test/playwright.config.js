// playwright.config.js
import { defineConfig } from '@playwright/test'

export default defineConfig({
    webServer: {
        command: 'npm start', // Change this if your app uses a different start command
        port: 3000,
        timeout: 120000,
        reuseExistingServer: true
    }
})
