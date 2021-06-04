import{v as l,o as n,e as o,h as e,A as s,a9 as a}from"./vendor.cd450518.js";var u={setup:()=>({goLink:l=>{window&&(window.location.hash=l)}})};const t={class:"markdown"},i=s("贡献指南"),c=e("span",{class:"subtitle"},null,-1),r={class:"edit-button","aria-label":"Edit this page on Github",href:"https://github.com/IduxFE/idux/edit/main/docs/Contributing.zh.md",target:"_blank",rel:"noopener noreferrer"},p={class:"toc-affix"},d=a('<a href="#行为准则" title="行为准则"></a><a href="#透明的开发" title="透明的开发"></a><a href="#bugs" title="Bugs"></a><a href="#features" title="Features"></a><a href="#第一次贡献" title="第一次贡献"></a><a href="#贡献代码" title="贡献代码"></a><a href="#如何提出-pull-request" title="如何提出 Pull Request"></a><a href="#开发流程" title="开发流程"></a><a href="#代码风格" title="代码风格"></a><a href="#commit" title="Commit"></a>',10),h=e("section",{class:"markdown"},[e("p",null,[s("这篇指南会指导你如何为 "),e("code",null,"@idux"),s(" 贡献一份自己的力量，请在你要提 issue 或者 pull request 之前花几分钟来阅读一遍这篇指南。")]),e("h2",{id:"行为准则"},[e("span",null,"行为准则"),e("a",{onclick:"window.location.hash = '行为准则'",class:"anchor"},"#")]),e("p",null,[s("我们有一份 "),e("a",{href:"https://github.com/IduxFE/idux/blob/main/CODE_OF_CONDUCT.md",target:"_blank",rel:"noopener"},"行为准则"),s(" ，希望所有的贡献者都能遵守，请花时间阅读一遍全文以确保你能明白哪些是可以做的，哪些是不可以做的。")]),e("h2",{id:"透明的开发"},[e("span",null,"透明的开发"),e("a",{onclick:"window.location.hash = '透明的开发'",class:"anchor"},"#")]),e("p",null,[s("我们所有的工作都会放在 "),e("a",{href:"https://github.com/IduxFE/idux",target:"_blank",rel:"noopener"},"GitHub"),s(" 上。不管是核心团队的成员还是外部贡献者的 pull request 都需要进过同样流程的 review。")]),e("h2",{id:"bugs"},[e("span",null,"Bugs"),e("a",{onclick:"window.location.hash = 'bugs'",class:"anchor"},"#")]),e("p",null,[s("我们使用 "),e("a",{href:"https://github.com/IduxFE/idux/issues",target:"_blank",rel:"noopener"},"Issues"),s(" 来做 bug 追踪。 如果你想要你发现的 bug 被快速解决，最好的办法就是通过我们提供的 "),e("a",{href:"./"},"issue 助手(TODO)"),s(" 来提 issue。 并且能使用这个 "),e("a",{href:"./"},"模板(TODO)"),s(" 来提供重现。")]),e("p",null,[s("在你报告一个 bug 之前，请先确保已经搜索过已有的 issue 和阅读了我们的 "),e("a",{href:"./"},"常见问题(TODO)"),s("。")]),e("h2",{id:"features"},[e("span",null,"Features"),e("a",{onclick:"window.location.hash = 'features'",class:"anchor"},"#")]),e("p",null,[s("如果你有改进我们的 API 或者新增功能的想法，我们同样推荐你使用我们提供的 "),e("a",{href:"./"},"issue 助手(TODO)"),s(" 来新建一个添加新功能的 issue。")]),e("h2",{id:"第一次贡献"},[e("span",null,"第一次贡献"),e("a",{onclick:"window.location.hash = '第一次贡献'",class:"anchor"},"#")]),e("p",null,"如果你还不清楚怎么在 GitHub 上提 Pull Request ，可以阅读下面这些文章来学习："),e("ul",null,[e("li",null,[e("a",{href:"https://opensource.guide/zh-cn/how-to-contribute/",target:"_blank",rel:"noopener"},"如何为开源做贡献")]),e("li",null,[e("a",{href:"https://github.com/firstcontributions/first-contributions/blob/master/translations/README.chs.md",target:"_blank",rel:"noopener"},"第一次参与开源")])]),e("p",null,[s("为了能帮助你开始你的第一次尝试，我们用 "),e("a",{href:"https://github.com/IduxFE/idux/labels/good%20first%20issue",target:"_blank",rel:"noopener"},"Good First Issue"),s(" 标记了一些比较容易修复的 bug 和小功能。这些 issue 可以很好地做为你的首次尝试。")]),e("p",null,"如果你打算开始处理一个 issue，请先检查一下 issue 下面的留言以确保没有别人正在处理这个 issue。如果当前没有人在处理的话你可以留言告知其他人你将会处理这个 issue，以免别人重复劳动。"),e("p",null,"如果之前有人留言说会处理这个 issue 但是一两个星期都没有动静，那么你也可以接手处理这个 issue，当然还是需要留言告知其他人。"),e("h2",{id:"贡献代码"},[e("span",null,"贡献代码"),e("a",{onclick:"window.location.hash = '贡献代码'",class:"anchor"},"#")]),e("p",null,[e("code",null,"IduxFE"),s(" 团队会关注所有的 Pull Request，我们会 review 以及合并你的代码，也有可能要求你做一些修改或者告诉你我们为什么不能接受这样的修改。")]),e("p",null,[e("strong",null,"在你发送 Pull Request 之前"),s("，请确认你是按照下面的步骤来做的：")]),e("ul",null,[e("li",null,[s("在项目根目录下运行了 "),e("code",null,"npm install"),s(" ；")]),e("li",null,"如果你修复了一个 bug 或者新增了一个功能，请确保写了相应的测试，这很重要；"),e("li",null,[s("确认所有的测试都是通过的 "),e("code",null,"npm run test"),s(" ；")]),e("li",null,[s("确保你的代码通过了 lint 检查 "),e("code",null,"npm run lint"),s(" ；")]),e("li",null,[s("确保你的代码在提交之前经过了正确的 "),e("a",{href:"https://www.digitalocean.com/community/tutorials/how-to-rebase-and-update-a-pull-request",target:"_blank",rel:"noopener"},"Rebase"),s(" ；")]),e("li",null,[s("确保你的提交信息符合"),e("a",{href:"#commit"},"我们的 commit 规范"),s(" 。")])]),e("h2",{id:"如何提出-pull-request"},[e("span",null,"如何提出 Pull Request"),e("a",{onclick:"window.location.hash = '如何提出-pull-request'",class:"anchor"},"#")]),e("ul",null,[e("li",null,"fork 此仓库，以下所有操作均在 fork 之后的仓库上执行；"),e("li",null,[s("在 "),e("code",null,"main"),s(" 分支运行："),e("code",null,"git remote add upstream https://github.com/IduxFE/idux.git"),s(" ；")]),e("li",null,[s("在 "),e("code",null,"main"),s(" 分支运行: "),e("code",null,"git pull upstream main"),s(" ；")]),e("li",null,[s("在 "),e("code",null,"main"),s(" 分支运行: "),e("code",null,"git push origin main"),s(" ；")]),e("li",null,[s("切换到你要工作的 feature 分支 (例如有一个分支叫 "),e("code",null,"docs-fix"),s("): "),e("code",null,"git checkout docs-fix"),s(" ；")]),e("li",null,[s("在 "),e("code",null,"docs-fix"),s(" 分支运行: "),e("code",null,"git rebase main"),s(" 或 "),e("code",null,"git rebase main -i"),s(" ；")]),e("li",null,[s("在 "),e("code",null,"docs-fix"),s(" 分支修改代码，使用 "),e("code",null,"git add"),s(" 添加要提交的文件后，然后 commit: 请按照 "),e("a",{href:"#commit"},"我们的 commit 规范"),s(" 进行填写；")]),e("li",null,[s("推送代码 "),e("code",null,"git push"),s(" (如果进行了 Rebase 操作，可能需要 "),e("code",null,"-f"),s(")；")]),e("li",null,"在 GitHub 上发起 Pull Request 请求。")]),e("h2",{id:"开发流程"},[e("span",null,"开发流程"),e("a",{onclick:"window.location.hash = '开发流程'",class:"anchor"},"#")]),e("ul",null,[e("li",null,"clone fork 后的仓库"),e("li",null,[s("安装依赖："),e("code",null,"npm install"),s(" 或 "),e("code",null,"yarn")]),e("li",null,[s("常用的命令："),e("ul",null,[e("li",null,[e("code",null,"npm start"),s(" 在本地运行文档网站。")]),e("li",null,[e("code",null,"npm run lint"),s(" 检查代码风格(tips: 使用 "),e("code",null,"npm run lint-fix"),s(" 可以修复简单格式错误)。")]),e("li",null,[e("code",null,"npm run test"),s(" 运行单元测试(tips: 修改 "),e("code",null,"jest.config.js"),s(" 的 "),e("code",null,"root"),s(" 配置可以调整单元测试范围)。")]),e("li",null,[e("code",null,"npm run gen"),s(" 通过图形化界面快速创建模板。")])])])]),e("h2",{id:"代码风格"},[e("span",null,"代码风格"),e("a",{onclick:"window.location.hash = '代码风格'",class:"anchor"},"#")]),e("p",null,[s("我们使用了 "),e("code",null,"eslint"),s(", "),e("code",null,"stylelint"),s(", "),e("code",null,"markdownlint"),s(" 以及 "),e("code",null,"ls-lint"),s(" 来保证整体的代码风格一致。并且在 commit hooks 中配置了自动格式化和 lint, 只要提交通过即可。")]),e("h3",{id:"vue"},[e("span",null,"vue"),e("a",{onclick:"window.location.hash = 'vue'",class:"anchor"},"#")]),e("ul",null,[e("li",null,[s("文件命名："),e("code",null,"PascalCase")]),e("li",null,[s("props"),e("ul",null,[e("li",null,[s("命名："),e("code",null,"camelCase")]),e("li",null,[s("默认值：请使用 "),e("code",null,"@idux/cdk/utils"),s(" 中的 "),e("code",null,"PropTypes"),s(", 请注意：在没有显示的指定默认值的情况下，所有类型的默认值都为 "),e("code",null,"undefined"),s(", 这与 vue compiler 默认的行为有所区别。")])])]),e("li",null,[s("slots"),e("ul",null,[e("li",null,[s("命名："),e("code",null,"camelCase")]),e("li",null,"如果与某个 props 的功能一致时，需要跟该 props 同名")])]),e("li",null,[s("emits"),e("ul",null,[e("li",null,[s("命名："),e("code",null,"camelCase")])])]),e("li",null,"尽可能的使用 Composition API 去完成我们的功能，包括 Demo")]),e("h3",{id:"typescript"},[e("span",null,"typescript"),e("a",{onclick:"window.location.hash = 'typescript'",class:"anchor"},"#")]),e("ul",null,[e("li",null,[s("文件命名："),e("code",null,"camelCase")]),e("li",null,[s("变量命名: 通常情况下使用 "),e("code",null,"camelCase"),s(", 对于需要全局共享或者给用户使用的静态常量，使用全大写的 "),e("code",null,"snake_case")]),e("li",null,"尽可能的给出最准确的类型定义"),e("li",null,[s("需要 "),e("code",null,"export"),s(" 的函数，必须指定返回值类型")])]),e("h3",{id:"less"},[e("span",null,"less"),e("a",{onclick:"window.location.hash = 'less'",class:"anchor"},"#")]),e("ul",null,[e("li",null,[s("文件命名："),e("code",null,"camelCase")]),e("li",null,[s("class 命名不需要使用 "),e("code",null,"BEM"),s(", 可以参考 antd 的命名")]),e("li",null,"尽可能的定义变量，方便用户进行自定义"),e("li",null,"变量名必须以组件名为前缀")]),e("h3",{id:"test"},[e("span",null,"test"),e("a",{onclick:"window.location.hash = 'test'",class:"anchor"},"#")]),e("ul",null,[e("li",null,[s("文件命名：与被测试的文件同名，同时添加 "),e("code",null,".spec"),s(" 后缀")]),e("li",null,"test 命名：应该是被测试的 API 或者功能的名字，简单明了即可"),e("li",null,"所有 Public API 都需要有对应的测试用例"),e("li",null,"尽可能的一个测试用例只用于一个 API 或功能的测试")]),e("h3",{id:"docs-&-demo"},[e("span",null,"docs & demo"),e("a",{onclick:"window.location.hash = 'docs-&-demo'",class:"anchor"},"#")]),e("ul",null,[e("li",null,[s("文件命名："),e("code",null,"kebab-case")]),e("li",null,"除非多个 API 的关联性很强，否则应该一个 demo 只用于展示一个 API 的用法"),e("li",null,"当 demo 的示例代码比较复杂时，可以单独建立一个同名（首字母大写）的 vue 文件")]),e("h2",{id:"commit"},[e("span",null,"Commit"),e("a",{onclick:"window.location.hash = 'commit'",class:"anchor"},"#")]),e("p",null,"对于如何提交 git commit message，我们有非常精确的规则。我们希望所有的 commit message 更具可读性，这样在查看项目历史记录会变得容易，同时我们使用 commit message 生成 Changelog."),e("p",null,[s("本项目使用了 "),e("code",null,"@commitlint"),s(" 作为 commit lint 工具，并使用 "),e("a",{href:"https://www.npmjs.com/package/@commitlint/config-angular",target:"_blank",rel:"noopener"},[e("code",null,"@commitlint/config-angular")]),s("作为基础规则，请使用下面任意一种方式提交你的 commit.")]),e("ul",null,[e("li",null,[s("全局安装 "),e("code",null,"npm install -g commitizen"),s("，然后使用 "),e("code",null,"cz"),s(" 提交")]),e("li",null,[s("使用 "),e("code",null,"git commit -a"),s(" 提交，请注意 message 符合我们的要求")])]),e("h3",{id:"提交格式"},[e("span",null,"提交格式"),e("a",{onclick:"window.location.hash = '提交格式'",class:"anchor"},"#")]),e("p",null,[s("每个 commit message 包括 "),e("strong",null,"header"),s(", "),e("strong",null,"body"),s(" 和 "),e("strong",null,"footer"),s(".")]),e("p",null,[s("header 具有特殊的格式，包括 "),e("strong",null,"type"),s(", "),e("strong",null,"scope"),s(" 和 "),e("strong",null,"subject"),s(", type 和 subject 是必须的，scope 是可选的。")]),e("pre",{class:"language-vim"},[e("code",null,[e("span",{class:"token operator"},"<"),s("type"),e("span",{class:"token operator"},">"),e("span",{class:"token punctuation"},"("),e("span",{class:"token operator"},"<"),s("scope"),e("span",{class:"token operator"},">"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},":"),s(),e("span",{class:"token operator"},"<"),s("subject"),e("span",{class:"token operator"},">"),s("\n"),e("span",{class:"token operator"},"<"),s("BLANK LINE"),e("span",{class:"token operator"},">"),s("\n"),e("span",{class:"token operator"},"<"),s("body"),e("span",{class:"token operator"},">"),s("\n"),e("span",{class:"token operator"},"<"),s("BLANK LINE"),e("span",{class:"token operator"},">"),s("\n"),e("span",{class:"token operator"},"<"),s("footer"),e("span",{class:"token operator"},">")])]),e("p",null,"提交 message 的任何行不能超过 100 个字符！确保 message 在 GitHub 以及各种 git 工具中更易于阅读。"),e("p",null,[s("注脚应该包含 "),e("a",{href:"https://help.github.com/articles/closing-issues-via-commit-messages/",target:"_blank",rel:"noopener"},"closing reference to an issue"),s(" 如果有的话.")]),e("p",null,[s("示例: ("),e("a",{href:"https://github.com/IduxFE/idux/commits/main",target:"_blank",rel:"noopener"},"更多示例"),s(")")]),e("pre",{class:"language-vim"},[e("code",null,[e("span",{class:"token function"},"docs"),e("span",{class:"token punctuation"},"("),s("changelog"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},":"),s(),e("span",{class:"token keyword"},"update"),s(),e("span",{class:"token keyword"},"change"),s(" log "),e("span",{class:"token keyword"},"to"),s(" beta"),e("span",{class:"token operator"},"."),e("span",{class:"token number"},"5")])]),e("pre",{class:"language-vim"},[e("code",null,[e("span",{class:"token function"},"fix"),e("span",{class:"token punctuation"},"("),s("component"),e("span",{class:"token punctuation"},":"),s("button"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},":"),s(),e("span",{class:"token keyword"},"change"),s(" type not work\n\nButton doesn'"),e("span",{class:"token keyword"},"t"),s(" work when setting its type dynamically"),e("span",{class:"token operator"},"."),s("\n\n"),e("span",{class:"token keyword"},"fix"),s(" #"),e("span",{class:"token number"},"123")])]),e("h3",{id:"type"},[e("span",null,"Type"),e("a",{onclick:"window.location.hash = 'type'",class:"anchor"},"#")]),e("p",null,"必须是以下选项之一:"),e("ul",null,[e("li",null,[e("strong",null,"feat"),s(": 一个新特性")]),e("li",null,[e("strong",null,"fix"),s(": 一次 bug 修复")]),e("li",null,[e("strong",null,"docs"),s(": 只是对文档进行修改")]),e("li",null,[e("strong",null,"style"),s(": 不影响代码本身含义的代码风格修改 (white-space, formatting, missing semi-colons, etc)")]),e("li",null,[e("strong",null,"refactor"),s(": 既不属于新特性又不是 bug 修改的代码修改")]),e("li",null,[e("strong",null,"perf"),s(": 性能优化")]),e("li",null,[e("strong",null,"test"),s(": 添加或修改测试用例")]),e("li",null,[e("strong",null,"build"),s(": 修改构建工具 (example scopes: gulp, broccoli, npm)")]),e("li",null,[e("strong",null,"ci"),s(": 修改自动化脚本 (example scopes: Circle, BrowserStack, SauceLabs)")]),e("li",null,[e("strong",null,"revert"),s(": 回滚提交")])]),e("h3",{id:"scope"},[e("span",null,"Scope"),e("a",{onclick:"window.location.hash = 'scope'",class:"anchor"},"#")]),e("p",null,"Scope 应该是本次修改所影响模块的名称（文件夹名称或其他有意义的单词），必要时还应该使用模块前缀（例如：cdk, comp, pro）。"),e("pre",{class:"language-vim"},[e("code",null,[e("span",{class:"token operator"},"<"),s("prefix"),e("span",{class:"token punctuation"},":"),s("name"),e("span",{class:"token operator"},">"),s("\n"),e("span",{class:"token operator"},"<"),s("prefix"),e("span",{class:"token punctuation"},":"),s("name1"),e("span",{class:"token punctuation"},","),s("name2"),e("span",{class:"token operator"},">")])]),e("p",null,"以下是一些示例:"),e("ul",null,[e("li",null,[e("strong",null,"cdk:clickOutside")]),e("li",null,[e("strong",null,"cdk:clipboard")]),e("li",null,[e("strong",null,"comp:alert")]),e("li",null,[e("strong",null,"comp:badge,button")]),e("li",null,[e("strong",null,"comp:OTHER_COMPONENT_NAME")])]),e("p",null,"以下模块不需要使用前缀："),e("ul",null,[e("li",null,[e("strong",null,"release"),s(": 用于版本发布")]),e("li",null,[e("strong",null,"packaging"),s(": 用于改变 npm 包的结构、路径等")]),e("li",null,[e("strong",null,"changelog"),s(": 用于修改 CHANGELOG.md")])]),e("p",null,"其他情况可以忽略 scope:"),e("ul",null,[e("li",null,[s("使用 "),e("code",null,"docs"),s(", "),e("code",null,"build"),s(" 或 "),e("code",null,"ci"),s(" 等全局修改(例如:"),e("code",null,"docs: add missing type"),s(").")])]),e("h3",{id:"subject"},[e("span",null,"Subject"),e("a",{onclick:"window.location.hash = 'subject'",class:"anchor"},"#")]),e("p",null,"Subject 是本次修改的简洁描述:"),e("ul",null,[e("li",null,'使用祈使句、现在时，例如：使用 "change" 而不是 "changed"、"changes"'),e("li",null,"不大写第一个字母"),e("li",null,"不以小数点(.)结尾")]),e("h3",{id:"body"},[e("span",null,"Body"),e("a",{onclick:"window.location.hash = 'body'",class:"anchor"},"#")]),e("p",null,"Body 应包含修改的动机，并对比这与以前的行为，是本次修改的详细描述："),e("ul",null,[e("li",null,'使用祈使句、现在时，例如：使用 "change" 而不是 "changed"、"changes"')]),e("h3",{id:"footer"},[e("span",null,"Footer"),e("a",{onclick:"window.location.hash = 'footer'",class:"anchor"},"#")]),e("p",null,[s("Footer 应包含 "),e("strong",null,"Breaking Changes"),s(" 和关闭或关联的 "),e("strong",null,"Issues")]),e("ul",null,[e("li",null,[e("strong",null,"Breaking Changes"),s(" 应该以 "),e("code",null,"BREAKING CHANGE:"),s(" 开头")]),e("li",null,[s("关闭或关联的 "),e("strong",null,"Issues"),s(" 使用 "),e("code",null,"fix #123"),s(" 或者 "),e("code",null,"re #123")])]),e("p",null,[s("详细的解释可以在"),e("a",{href:"https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#",target:"_blank",rel:"noopener"},"document commit-message-format"),s("中找到。")])],-1);u.render=function(s,a,u,m,g,k){const b=l("ix-icon");return n(),o("article",t,[e("h1",null,[i,c,e("a",r,[e(b,{name:"edit"})])]),e("a",p,[e("a",{onClick:a[1]||(a[1]=l=>m.goLink(l))},[d])]),h])};export default u;
