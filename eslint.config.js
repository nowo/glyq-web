import antfu from '@antfu/eslint-config'
import nuxt from './.nuxt/eslint.config.mjs'

export default antfu(
    {
        unocss: true,
        // formatters: true,
        lessOpinionated: true, // 去除antfu的配置
        stylistic: {
            indent: 4, // 4, or 'tab'
            quotes: 'single', // or 'double'
        },
        // eslint 忽略文件
        ignores: [],
    },
    nuxt,
    {
        rules: {
            'no-console': [
                'warn',
                {
                    allow: ['error', 'warn'],
                },
            ],
            'unused-imports/no-unused-vars': [
                'warn',
                {
                    vars: 'all',
                    // "varsIgnorePattern": "^_",
                    // "args": "after-used",
                    // "argsIgnorePattern": "^_"
                    argsIgnorePattern: '^',
                },
            ],
            'node/prefer-global/process': ['error', 'always'],
            'curly': ['error', 'multi-line', 'consistent'], // 统一的大括号
            'style/brace-style': ['error', '1tbs', { allowSingleLine: true }], // 统一的大括号
            'ts/no-explicit-any': 'warn',
        },
    },
    {
        // Remember to specify the file glob here, otherwise it might cause the vue plugin to handle non-vue files
        files: ['**/*.vue'],
        rules: {
            'vue/max-attributes-per-line': 'off',
            'vue/multi-word-component-names': 'off',
            'vue/first-attribute-linebreak': [
                'warn',
                {
                    multiline: 'beside',
                },
            ],
            'vue/html-indent': ['error', 4, {
                alignAttributesVertically: false,
            }],
            'vue/html-closing-bracket-newline': [
                'error',
                {
                    singleline: 'never',
                    multiline: 'never',
                    selfClosingTag: {
                        singleline: 'never',
                        multiline: 'never',
                    },
                },
            ],
        },
    },
)
