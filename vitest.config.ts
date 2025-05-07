import { defineVitestConfig } from '@nuxt/test-utils/config';
import type {
  CoverageOptions,
  CoverageReporter,
  InlineConfig,
} from 'vitest/node';

const reporters: InlineConfig['reporters'] = [
  ['html', { outputFile: './test-reports/unit-test/index.html' }],
];
const coverage: CoverageOptions<'v8'> & { reporter: CoverageReporter[] } = {
  enabled: true,
  reporter: ['html'],
  provider: 'v8',
  reportsDirectory: './test-reports/coverage',
};

if (process.env.CI === 'true') {
  reporters.push([
    'junit',
    { outputFile: './test-reports/unit-test/junit.xml' },
  ]);

  // coverage
  coverage.reporter.push('cobertura', 'text-summary');
}

export default defineVitestConfig({
  // any custom Vitest config you require
  test: {
    reporters,
    coverage,
  },
});
