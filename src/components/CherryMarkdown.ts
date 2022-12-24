import Cherry from 'cherry-markdown';
import { toolbarsOptions} from '@/until/cherryMarkdownConfig';
/**
 * @desc 实例化 cherry-markdown
 * @doc [类型-cherry.d.ts ](https://github.com/Tencent/cherry-markdown/blob/main/types/cherry.d.ts)
 * @doc [配置-config.js](https://github.com/Tencent/cherry-markdown/blob/main/src/Cherry.config.js#L67)
 */
const cherryMarkdown = () => {
    const cherryMarkdownInit = new Cherry({
        id: 'cherry-markdown',
        value: 'welcome',
        toolbars: toolbarsOptions(),
    });
    console.log(cherryMarkdownInit)
}

export default cherryMarkdown
