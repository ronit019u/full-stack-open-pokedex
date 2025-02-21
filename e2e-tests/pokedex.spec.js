/* eslint-disable no-undef */
const { test, describe, expect } = require('@playwright/test')

describe('Pokedex', () => {
    test('front page can be opened', async ({ page }) => {
        await page.goto('http://localhost:8080/')
        await expect(page.getByText('ivysaur')).toBeVisible()
        await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
    })

    test('navigating to a Pokemon page displays correct content', async ({ page }) => {
        await page.goto('http://localhost:8080')

        // Click on Ivysaur link (ensure it matches how links are structured in your app)
        await page.getByText('ivysaur').click()

        // Check that the correct content appears on the Ivysaur details page
        await expect(page.getByText('chlorophyll')).toBeVisible()
    })
})


