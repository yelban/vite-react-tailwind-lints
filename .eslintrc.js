module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'plugin:import/recommended',
		// alternatively, 'recommended' is the combination of these two rule sets:
		// 'plugin:import/errors',
		// 'plugin:import/warnings'
		// 'plugin:import/typescript', // this line does the trick, require @typescript-eslint/parser and eslint-import-resolver-typescript
		'airbnb',
		'plugin:prettier/recommended', // eslint-plugin-prettier, 一個 ESLint 插件, 將 Prettier 作為 ESLint 規則運行, 並將差異報告為單個 ESLint 問題, 這個插件在後台使用 Prettier, 當你的代碼與 Prettier 的預期輸出不同時會引發 ESLint 錯誤
		// "extends": ["prettier"], 啟用 eslint-config-prettier, 配置, 關閉一些與 Prettier 衝突的 ESLint 規則
		// "plugins": ["prettier"], 註冊這個 plugin
		// "prettier/prettier": "error", 打開這個插件提供的規則，它在 ESLint 中運行 Prettier
		// "arrow-body-style": "off", 關閉與 eslint-plugin-prettier 衝突的 ESLint 核心規則
		// "prefer-arrow-callback": "off", 關閉與 eslint-plugin-prettier 衝突的 ESLint 核心規則
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'simple-import-sort',
		'import',
		'react',
		'prettier', // eslint-config-prettier, 一個 ESLint 配置, 此配置關閉可能與 Prettier 衝突的格式相關規則, 允許您將 Prettier 與其他 ESLint 配置一起使用
		// require by "source.fixAll.eslint": true
	],
	rules: {
		// indent: ['error', 'tab'],
		// 'linebreak-style': ['error', 'unix'],
		// quotes: ['error', 'single'],
		// semi: ['error', 'always'],
		'sort-imports': 'off',
		'import/order': 'off',
		'simple-import-sort/imports': 'error',
		'simple-import-sort/exports': 'error',
		'import/first': 'error', // 確保所有導入都在文件的頂部
		'import/newline-after-import': 'error', // 確保導入後有換行符號
		'import/no-duplicates': 'error', // 合併同一文件的導入語句
		// 'import/no-unresolved': 'warn', // use eslint-import-resolver-alias
		'no-console': 'off',
		'no-unused-vars': 'warn', // default in airbnb is error
		'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }], // solve error: JSX not allowed in files with extension '.js'
	},
};
