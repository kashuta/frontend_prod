import path from 'path';
import webpack from 'webpack';
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";

const paths = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
}
const mode = 'development';
const isDevServer = mode === 'development';

const config: webpack.Configuration = buildWebpackConfig(
    {
        mode: 'development',
        paths,
        isDevServer,

    }
)

export default config;
