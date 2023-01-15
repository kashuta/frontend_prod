import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {
 // если вебпак не понимает как обрабатывать файлы, то он использует лоадеры
    // если не используем TS то нужен babel-loader
    const typeScriptLoader: webpack.RuleSetRule = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }
    return [typeScriptLoader]
}
