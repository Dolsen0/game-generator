const requests = require('./requests');
const styles = require('./styles');
const settings = require('./settings');
const transitionThemes = require('./transitionTheme');
const themes = require('./themes');
const maxims = require('./maxims');
const transitionsEnd = require('./transitionEnd');
const endingList = require('./ending');

function generateRandomPrompt(requestList, styleList, settingsList, themeList, maximList) {
  const request = requestList[Math.floor(Math.random() * requestList.length)];
  const style = styleList[Math.floor(Math.random() * styleList.length)];
  const setting = settingsList[Math.floor(Math.random() * settingsList.length)];
  const transitionTheme = transitionThemes[Math.floor(Math.random() * transitionThemes.length)];
  const theme1 = themeList[Math.floor(Math.random() * themeList.length)];
  const theme2 = themeList[Math.floor(Math.random() * themeList.length)];
  const theme3 = themeList[Math.floor(Math.random() * themeList.length)];
  const maxim = maximList[Math.floor(Math.random() * maximList.length)];
  const transitionEnd = transitionsEnd[Math.floor(Math.random() * transitionsEnd.length)];
  const ending = endingList[Math.floor(Math.random() * endingList.length)];
  

  const promptString = `${request} ${style} set in ${setting}... ${transitionTheme}: ${theme1}, ${theme2}, and ${theme3}. ${transitionEnd}: ''${maxim}''....${ending}.`;

  return promptString;
}

module.exports = generateRandomPrompt.bind(null, requests, styles, settings, themes, maxims);