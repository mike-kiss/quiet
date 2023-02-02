import path from 'path'
import { fileURLToPath } from 'url';
import webpack from 'webpack'
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [__dirname].concat(args));
}

export default {
    mode: 'development',
    target: 'node',
    entry: {
        bundle: path.resolve(__dirname, 'src', 'backendManager.ts')
    },
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: '[name].cjs'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: [
                    'ts-loader'
                ],
                exclude: [/node_modules/, /packages[\/\\]identity/, /packages[\/\\]state-manager/, /packages[\/\\]logger/]
            },
            {
                test: /node_modules[\/\\]@achingbrain[\/\\]ssdp[\/\\]dist[\/\\]src[\/\\]default-ssdp-options.js/,
                loader: 'create-require-loader'
            },
            {
                test: /node_modules[\/\\]classic-level[\/\\]index.js/,
                loader: 'create-require-loader'
            },
            {
                test: /node_modules[\/\\]classic-level[\/\\]iterator.js/,
                loader: 'create-require-loader'
            }
        ]
    },
    plugins: [
        new webpack.NormalModuleReplacementPlugin(
            /node_modules[\/\\]classic-level[\/\\]binding.js/,
            root('classic_level.cjs')
        ),
        new webpack.NormalModuleReplacementPlugin(
            /node_modules[\/\\]ipfs-utils[\/\\]src[\/\\]http[\/\\]fetch.js/,
            'fetch.node.js'
        ),
        new webpack.NormalModuleReplacementPlugin(
            /node_modules[\/\\]ipfs-utils[\/\\]src[\/\\]fetch.js/,
            root(path.join('node_modules', 'electron-fetch', 'lib', 'index.js'))
        ),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': 'production'
        })
    ]
}
