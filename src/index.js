import { IntroWhisper, TestWhisper } from './whispers';
import {
  clipboardListener,
  filesystemExample,
  keyboardListener,
  networkExample,
  searchListener,
  testListener,
} from './aptitudes';

clipboardListener.listen();
filesystemExample.run();
keyboardListener.listen();
networkExample.run();
searchListener.listen();
new TestWhisper().instructions();
testListener.listen();

new IntroWhisper().show();
