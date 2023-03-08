const requests = require('./requests.json');
const styles = require('./styles.json');
const settings = require('./settings.json');
const transitionThemes = require('./transitionTheme.json');
const themes = require('./themes.json');
const maxims = require('./maxims.json');
const transitionsEnd = require('./transitionEnd.json');
const endingList = require('./ending.json');

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