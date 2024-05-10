import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

const config = [
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.jest,
				...globals.es2021,
				...globals.node
			}
		}
	},
	pluginJs.configs.recommended,
	...tseslint.configs.recommended
];

config.overrides = [
	{
		env: {
			jest: true
		}
	}
];

export default config;
