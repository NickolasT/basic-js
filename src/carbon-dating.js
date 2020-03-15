const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const RATE_CONSTANT = 0.693 / HALF_LIFE_PERIOD;

module.exports = function dateSample(sampleActivity) {
  if ( typeof sampleActivity !== "string" ||
       isNaN(Number.parseFloat(sampleActivity)) ||
       sampleActivity === undefined ||
       +sampleActivity >= 15 ||
       +sampleActivity <= 0
     )
    return false;
  
  let time = Math.ceil ( Math.log (MODERN_ACTIVITY / parseFloat(sampleActivity ) ) / RATE_CONSTANT );

  return time;
};
