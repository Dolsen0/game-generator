const requests = require('./requests');
const styles = require('./styles');
const settings = require('./settings');
const themes = require('./themes');
const maxims = require('./maxims');

function generateRandomPrompt(requestList, styleList, settingsList, themeList, maximList) {
  const request = requestList[Math.floor(Math.random() * requestList.length)];
  const style = styleList[Math.floor(Math.random() * styleList.length)];
  const setting = settingsList[Math.floor(Math.random() * settingsList.length)];
  const theme1 = themeList[Math.floor(Math.random() * themeList.length)];
  const theme2 = themeList[Math.floor(Math.random() * themeList.length)];
  const theme3 = themeList[Math.floor(Math.random() * themeList.length)];
  const maxim = maximList[Math.floor(Math.random() * maximList.length)];

  const promptString = `${request} ${style} set in ${setting}... Throughout the game you'll experience ${theme1}, ${theme2}, and ${theme3}. By the end, you'll learn ${maxim}....Will you make it for me?`;

  return promptString;
}

module.exports = generateRandomPrompt.bind(null, requests, styles, settings, themes, maxims);