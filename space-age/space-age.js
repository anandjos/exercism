const orbital_period = { 
  mercury: 0.2408467,
  venus:   0.61519726,
  earth:   1.0,
  mars:    1.8808158,
  jupiter: 11.862615,
  saturn:  29.447498,
  uranus:  84.016846,
  neptune: 164.79132
}
export const age = (planet,age_in_seconds) => {
  let earth_year_in_sec = 31557600;
  let age_in_years = age_in_seconds/(orbital_period[planet]*earth_year_in_sec);
  return Math.round(age_in_years*100)/100;
};
