import { ui } from '@oliveai/ldk';

import { UiWhisper } from '../../whispers';

const handler = (text) => {
  console.log('TEXTERRR', text);
  const checkText = new RegExp(`search .+`);
  const checkCheck = checkText.test(text);
  console.log('MADE IT BITCH', checkCheck);
  if (checkText) {
    const searchString = checkText.substring(6);
    console.log('LPOOPSter', searchString);
    const whisper = new UiWhisper(searchString);
    console.log('T.T', whisper);
    whisper.show();
  }
};
const listen = () => {
  ui.listenGlobalSearch(handler);
  ui.listenSearchbar(handler);
};

export { handler };
export default { listen };
