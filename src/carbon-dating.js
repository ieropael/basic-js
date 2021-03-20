const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  return (typeof sampleActivity != 'string' || !isFinite(sampleActivity) || 
  sampleActivity <= 0 || sampleActivity > MODERN_ACTIVITY) ? 
  false : Math.ceil(Math.abs((Math.log(sampleActivity / MODERN_ACTIVITY) / (0.693 / HALF_LIFE_PERIOD))));
};
