import { dialog, shell } from "electron"
import packageInfo from "../../package.json"

const info = () => {
    dialog.showMessageBox({
        title: 'markdown-notepad',
        type: 'info',
        message: '一个桌面端 markdown 记事本',
        detail: `版本信息：${packageInfo.version}\n引擎版本:${process.versions.v8}`,
        noLink: true,
        buttons: ['项目地址', '确定'],
    }).then((res) => {
        if (res.response === 0) {
            shell.openExternal('https://github.com/RSS1102/electron-markdown-notepad')
        }
    })
}
const isMac = process.platform === 'darwin';
const menuConfig = [
    {
        label: '文件',
        submenu: [
            {
                label: '新建文件',
                enabled: false,
            },
            {
                label: '打开文件',
                enabled: false,
            },
            {
                label: '退出',
                role: 'close'
            },

        ]
    },
    {
        label: '编辑',
        submenu: [
            {
                label: '在文件中查找',
                enabled: false,
            },
            {
                label: '设置',
                enabled: false,
            }
        ]
    },
    {
        label: '其他',
        submenu: [
            {
                label: '检测版本更新',
                enabled: false,
            },
            {
                label: '关于',
                click: function () {
                    info()
                }
            }
        ]
    },

]

export {
    menuConfig
}
