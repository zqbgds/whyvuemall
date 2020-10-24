// 这个配置会和公共的配置进行一个合并

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                // '@': 'src' //这个别名是内部已经配置好的
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network' //router和store都只需要引入一次说以不需要配置了
            }
        }
    }
}