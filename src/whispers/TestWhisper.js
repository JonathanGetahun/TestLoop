import { whisper } from '@oliveai/ldk';

export default class TestWhisper {
  constructor(articles) {
    this.whisper = undefined;
    this.label = 'Test Aptitude Fired';
    this.props = {
      articles,
    };
  }

  createInstructions() {
    const instruction = `This Loop is triggered when you select and copy a word. It searches the National Center for Biotechnology Information (NCBI) for the top 3 PubMed articles written in the current year associated with that word and returns the links to those articles.`;

    const message = {
      type: whisper.WhisperComponentType.Message,
      body: instruction,
    };

    return [message];
  }

  instructions() {
    whisper
      .create({
        components: this.createInstructions(),
        label: this.label,
        onClose: TestWhisper.onClose,
      })
      .then((newWhisper) => {
        this.whisper = newWhisper;
      });
  }

  createComponents() {
    const url = 'https://pubmed.ncbi.nlm.nih.gov/';
    const articleKeys = this.props.articles?.esearchresult?.idlist;
    const components = [];
    articleKeys.forEach((article) => {
      components.push({
        type: whisper.WhisperComponentType.Message,
        body: `${url}${article}`,
      });
    });

    return components;
  }

  show() {
    whisper
      .create({
        components: this.createComponents(),
        label: this.label,
        onClose: TestWhisper.onClose,
      })
      .then((newWhisper) => {
        this.whisper = newWhisper;
      });
  }

  close() {
    this.whisper.close(TestWhisper.onClose);
  }

  static onClose(err) {
    if (err) {
      console.error('There was an error closing Clipboard whisper', err);
    }
    console.log('Clipboard whisper closed');
  }
}
