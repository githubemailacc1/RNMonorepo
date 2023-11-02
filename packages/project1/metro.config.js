const MetroSymlinksResolver = require('@rnx-kit/metro-resolver-symlinks');
const {makeMetroConfig} = require('@rnx-kit/metro-config');
const {TypeScriptPlugin} = require('@rnx-kit/metro-plugin-typescript');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */

const path = require('path');

module.exports = makeMetroConfig({
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    resolverMainFields: ['react-native', 'browser', 'main'],
    resolveRequest: MetroSymlinksResolver({
      remapModule: (_context, moduleName) => {
        return moduleName;
      },
    }),
  },
  serializer: {
    experimentalSerializerHook: TypeScriptPlugin(),
  },
  watchFolders: [path.resolve(__dirname, '../core')],
});
