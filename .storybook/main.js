const postcss = require('postcss')
const tailwindcss = require('../tailwind.config')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: postcss,
          postcssOptions: {
            plugins: {
              tailwindcss, // or you can nest your options entirely here
              autoprefixer: {
                // autoprefixer options
              },
            },
          },
        },
      },
    },
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
}
