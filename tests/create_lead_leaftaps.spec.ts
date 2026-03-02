import { test, expect } from '@playwright/test';

test('Create a new lead on Leaftaps', async ({ page }) => {
  // Go to login page
  await page.goto('http://leaftaps.com/opentaps/control/main');

  // Login (try several common selectors)
  await page.fill('input#username, input[name="USERNAME"], input[name="username"]', 'democsr2');
  await page.fill('input#password, input[name="PASSWORD"], input[name="password"]', 'crmsfa');
  await Promise.all([
    page.waitForNavigation(),
    page.click('.decorativeSubmit, input[type="submit"]'),
  ]);

  // Navigate to Create Lead flow
  await page.click('text=CRM/SFA');
  await page.click('text=Leads');
  await page.click('text=Create Lead');

  // Fill the Create Lead form
  await page.fill('input[name="companyName"]', 'ACME Corp');
/*   await page.fill('input[name="firstName"]', 'John');
  await page.fill('input[name="lastName"]', 'Doe');
  await page.fill('input[name="primaryEmail"]', 'john.doe@example.com');
  // Try selecting a state if the dropdown exists
 
  try {
    await page.selectOption('select[name="generalStateProvinceGeoId"]', { label: 'New York' });
  } catch (e) {
    // ignore if the select is not present or option not available
  }

  // Submit
  await Promise.all([
    page.waitForNavigation(),
    page.click('input[name="submitButton"], .smallSubmit, input[type="submit"]'),
  ]);
*/
  // Basic verification: URL or page content should indicate a created lead
//   await expect(page).toHaveURL(/.*viewLead.*/i); 
//   await expect(page.locator('body')).toContainText('ACME');

});
