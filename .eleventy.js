module.exports = function(eleventyConfig) {
  
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("data/weather_data.js");

};