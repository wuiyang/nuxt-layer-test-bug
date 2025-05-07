import { describe, expect, test } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import { MyMainComponent } from '#components';

describe('MyMainComponent', () => {
  test('will render example', async () => {
    const wrapper = await mountSuspended(MyMainComponent);
    const exampleDiv = wrapper.find('data-test=["example"]');
    expect(exampleDiv.exists()).toBeTruthy();
    expect(exampleDiv.text()).contains('example');
  });
});
