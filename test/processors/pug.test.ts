import { pug } from '../../src';
import { getFixtureContent, preprocess } from '../utils';

const EXPECTED_TEMPLATE = getFixtureContent('template.html');

describe(`processor - pug`, () => {
  it('should preprocess the whole file', async () => {
    const template = getFixtureContent('template.pug');
    const preprocessed = await preprocess(template, [pug()]);

    expect(preprocessed.toString()).toContain(EXPECTED_TEMPLATE);
  });

  it('should support prepended data', async () => {
    const template = ``;
    const options = { prependData: `// potato` };
    const preprocessed = await preprocess(template, [pug(options)]);

    expect(preprocessed.toString()).toContain(`<!-- potato-->`);
  });
});
