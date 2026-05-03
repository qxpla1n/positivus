export default {
	extends: ['stylelint-config-standard-scss'],
	rules: {
		'scss/dollar-variable-pattern': null,
		'scss/at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen'],
			},
		],
		'at-rule-no-unknown': null,
		'no-empty-source': null,
		'rule-empty-line-before': null,
		'declaration-empty-line-before': null,
		'selector-class-pattern': null, // Отключаем для BEM-селекторов
	},
}
