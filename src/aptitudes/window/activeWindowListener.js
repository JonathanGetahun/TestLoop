import { window } from '@oliveai/ldk';

import { WindowWhisper } from '../../whispers';

const handler = (activeWindow) => {
  const whisper = new WindowWhisper(activeWindow);
  whisper.show();
};
const listen = () => {
  window.listenActiveWindow(handler);
};

export { handler };
export default { listen };
