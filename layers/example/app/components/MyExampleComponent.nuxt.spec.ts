import { describe, expect, test } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import { MyExampleComponent } from '#components';

describe('MyExampleComponent', () => {
  test('will render example', async () => {
    const wrapper = await mountSuspended(MyExampleComponent);
    const exampleDiv = wrapper.find('[data-test="example"]');
    expect(exampleDiv.exists()).toBeTruthy();
    expect(exampleDiv.text()).contains('example');
  });
});
