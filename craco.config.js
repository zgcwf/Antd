// 按需引入配置
module.exports = {
    babel: {
        plugins: [['import', {
            libraryName: 'antd',
            libraryDirectory: 'es',
            style: 'css',
        }]],
    },
};
