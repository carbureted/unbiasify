import { STYLES } from '../../utils/styles'

export const stylesheet = {
  names: [
    `div[style*="flex: 1 1 0%; margin-left: 55px; text-align: left; line-height: 76px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"],
                 div[style*="font-family:Raleway;font-size:20px;color:#b3b3b3;margin:.25em;"],
                 div[style*="font-size:28px;font-family:Raleway;font-weight:400;color:#3F403F;margin:40px 0;"] ${STYLES.hidden}`,

    `h3[style*="font-weight: 400; font-size: 19px; height: 25px; display: flex; align-items: center; justify-content: center; margin-top: 10px; color: rgb(120, 121, 123); min-width: 150px; max-width: 230px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"],
                 div[style*="box-sizing: border-box; height: 42px; line-height: 42px; width: 98%; border-bottom: 1px solid rgb(240, 240, 240); color: rgb(128, 127, 127);"],
                 a[style*="border-bottom: none; text-decoration: none; color: rgb(65, 131, 196);"],
                 a[style*="border-bottom: none; text-decoration: underline; color: rgb(65, 131, 196);"],
                 h1[style*="font-family:Raleway;font-weight:100;font-size:44px;color:#404040;"] ${STYLES.hiddenRelative}`,

    'div[style*="flex: 1 1 0%; margin-left: 55px; text-align: left; line-height: 76px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"]:before { content: "Student"; visibility: visible; }',

    'h3[style*="font-weight: 400; font-size: 19px; height: 25px; display: flex; align-items: center; justify-content: center; margin-top: 10px; color: rgb(120, 121, 123); min-width: 150px; max-width: 230px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"]:before { content: "Student"; visibility: visible; position: absolute; top: 0; bottom: 0; left: 0; right: 0; display: flex; justify-content: center; align-items: center; }',

    'div[style*="box-sizing: border-box; height: 42px; line-height: 42px; width: 98%; border-bottom: 1px solid rgb(240, 240, 240); color: rgb(128, 127, 127);"]:before { content: "Student"; visibility: visible; border-bottom: 1px solid rgb(240, 240, 240); position: absolute; top: 0; bottom: 0; left: 0; right: 0; display: flex; align-items: center; }',

    'h1[style*="font-family:Raleway;font-weight:100;font-size:44px;color:#404040;"]:before { content: "Repl.it User"; visibility: visible; position: absolute; top: 0; bottom: 0; left: 0; right: 0; display: flex; justify-content: center; align-items: center; }',

    'div[style*="font-size:28px;font-family:Raleway;font-weight:400;color:#3F403F;margin:40px 0;"]:before { content: "Public Repls"; visibility: visible; }',

    `a[style*="border-bottom: none; text-decoration: none; color: rgb(65, 131, 196);"]:before,
                 a[style*="border-bottom: none; text-decoration: underline; color: rgb(65, 131, 196);"]:before { visibility: visible; content: "@repl_user"; position: absolute; }`,
  ],
  photos: [`.profile-icon ${STYLES.smallBlur}`],
  styleSheetID: 'BIAS_REPLIT',
}

export default stylesheet
