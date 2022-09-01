module.exports = {
    extract: {
        include: ['**/*.{vue,html,jsx,tsx}'],
        exclude: ['node_modules', '.git'],
    },

    theme: {
        extend: {
            colors: {
                brown: {
                    light: "rgb(166, 92, 21)",
                    default: "rgb(134 68 7)",
                    dark: "rgb(76 39 4)"
                }
            },

            transitionProperty: {
                'width': 'width',
                'margin': 'margin'
            }
        }
    },

    plugins: [
        require('windicss/plugin/line-clamp'),
    ],
}
