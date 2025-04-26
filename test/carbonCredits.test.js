const fetch = require('node-fetch'); //Importing fetch (v2) to make API calls

//API endpoint to fetch the category details for ID 6327
const API_URL = 'https://api.tmsandbox.co.nz/v1/Categories/6327/Details.json?catalogue=false';

//Jest test suite
describe('Carbon Credits API Acceptance Criteria', () => {
  let data;

  //beforeAll runs once before all tests — fetch the API response here
  beforeAll(async () => {
    const response = await fetch(API_URL);
    data = await response.json();
  });

  //Test 1: Check if the name is "Carbon credits"
  test('Name should be "Carbon credits"', () => {
    expect(data.Name).toBe('Carbon credits');
  });

  //Test 2: Check if CanRelist is true
  test('CanRelist should be true', () => {
    expect(data.CanRelist).toBe(true);
  });

  //Test 3: Find the "Gallery" promotion and check its description
  test('Promotion "Gallery" should have description containing "Good position in category"', () => {
    const galleryPromo = data.Promotions.find(promo => promo.Name === 'Gallery');
    expect(galleryPromo).toBeDefined();
    expect(galleryPromo.Description).toContain('Good position in category');
  });
});
