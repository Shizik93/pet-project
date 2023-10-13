import webpack from "webpack";

export const buildResolver=():webpack.ResolveOptions=>{
    return {
        extensions: ['.tsx', '.ts', '.js'],
    }
}