import { globalIgnores } from 'eslint/config';
import nextPlugin from '@next/eslint-plugin-next';

export default [
  nextPlugin.flatConfig.coreWebVitals,
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
];


