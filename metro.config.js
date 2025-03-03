const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
// const { getDefaultConfig } = require('metro-config');
// const {
//     wrapWithReanimatedMetroConfig,
// } = require('react-native-reanimated/metro-config');


/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
// module.exports = wrapWithReanimatedMetroConfig(config);


// const { getDefaultConfig } = require('@react-native/metro-config');

// module.exports = (async () => {
//     const {
//         resolver: { sourceExts, assetExts }
//     } = await getDefaultConfig(__dirname);

//     return {
//         transformer: {
//             getTransformOptions: async () => ({
//                 transform: {
//                     experimentalImportSupport: false,
//                     inlineRequires: true,
//                 },
//             }),
//         },
//         resolver: {
//             assetExts: ['png', 'jpg', 'jpeg', 'gif', ...assetExts],
//             sourceExts: [...sourceExts, 'jsx', 'js', 'ts', 'tsx'],
//         },
//     };
// })();
