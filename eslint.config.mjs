import tseslint from 'typescript-eslint';

export default tseslint.config(
  ...tseslint.configs.recommended,
  { ignores: ['node_modules/**', '.next/**', '.open-next/**', '.wrangler/**', 'out/**', 'build/**', 'next-env.d.ts'] },
);
