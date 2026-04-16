import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  Table,
  TableRow,
  TableCell,
  WidthType,
  AlignmentType,
  BorderStyle,
  PageBreak,
  LevelFormat,
  convertInchesToTwip
} from 'docx';
import fs from 'fs';

const doc = new Document({
  styles: {
    paragraphStyles: [
      {
        id: 'Normal',
        name: 'Normal',
        basedOn: 'Normal',
        next: 'Normal',
        run: {
          font: 'Microsoft YaHei',
          size: 24
        },
        paragraph: {
          spacing: { after: 200 }
        }
      }
    ]
  },
  sections: [{
    properties: {},
    children: [
      new Paragraph({
        text: '灵境科技公司主页项目 - 技术文档',
        heading: HeadingLevel.TITLE,
        alignment: AlignmentType.CENTER,
        spacing: { after: 400 }
      }),

      new Paragraph({
        children: [
          new TextRun({ text: '项目版本：', bold: true }),
          new TextRun({ text: '1.0.0' })
        ]
      }),
      new Paragraph({
        children: [
          new TextRun({ text: '最后更新：', bold: true }),
          new TextRun({ text: '2026-04-15' })
        ]
      }),
      new Paragraph({
        children: [
          new TextRun({ text: '技术栈：', bold: true }),
          new TextRun({ text: 'Vue 3 + Vite + Vue Router 4' })
        ],
        spacing: { after: 400 }
      }),

      new Paragraph({
        text: '一、项目概述',
        heading: HeadingLevel.HEADING_1,
        pageBreakBefore: true
      }),

      new Paragraph({
        text: '这是一个基于 Vue 3 + Vite 技术栈构建的高端科技公司官网，采用 Composition API（<script setup>）开发模式。',
        spacing: { after: 200 }
      }),

      new Paragraph({
        text: '1.1 项目定位',
        heading: HeadingLevel.HEADING_2
      }),

      new Paragraph({ text: '公司名称：灵境科技', bullet: { level: 0 } }),
      new Paragraph({ text: '项目类型：企业官方网站（SPA单页应用）', bullet: { level: 0 } }),
      new Paragraph({ text: '设计风格：高端精致（Premium）、极简主义、大留白', bullet: { level: 0 } }),
      new Paragraph({ text: '目标用户：企业客户、潜在合作伙伴、技术求职者', bullet: { level: 0 } }),

      new Paragraph({
        text: '1.2 核心技术',
        heading: HeadingLevel.HEADING_2
      }),

      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        rows: [
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph({ text: '技术', bold: true })] }),
              new TableCell({ children: [new Paragraph({ text: '版本' })] }),
              new TableCell({ children: [new Paragraph({ text: '用途' })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph({ text: 'Vue' })] }),
              new TableCell({ children: [new Paragraph({ text: '3.4.0' })] }),
              new TableCell({ children: [new Paragraph({ text: '核心框架' })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph({ text: 'Vue Router' })] }),
              new TableCell({ children: [new Paragraph({ text: '4.6.4' })] }),
              new TableCell({ children: [new Paragraph({ text: 'SPA路由管理' })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph({ text: 'Vite' })] }),
              new TableCell({ children: [new Paragraph({ text: '5.0.0' })] }),
              new TableCell({ children: [new Paragraph({ text: '构建工具' })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph({ text: '@vitejs/plugin-vue' })] }),
              new TableCell({ children: [new Paragraph({ text: '5.0.0' })] }),
              new TableCell({ children: [new Paragraph({ text: 'Vue SFC支持' })] })
            ]
          })
        ]
      }),

      new Paragraph({
        text: '二、页面路由架构',
        heading: HeadingLevel.HEADING_1,
        pageBreakBefore: true
      }),

      new Paragraph({
        text: '本项目共有 11个页面，采用Vue Router进行SPA导航。',
        spacing: { after: 200 }
      }),

      new Paragraph({
        text: '2.1 路由配置',
        heading: HeadingLevel.HEADING_2
      }),

      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        rows: [
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph({ text: '路径' })] }),
              new TableCell({ children: [new Paragraph({ text: '页面组件' })] }),
              new TableCell({ children: [new Paragraph({ text: '页面名称' })] }),
              new TableCell({ children: [new Paragraph({ text: '功能描述' })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph({ text: '/' })] }),
              new TableCell({ children: [new Paragraph({ text: 'Home.vue' })] }),
              new TableCell({ children: [new Paragraph({ text: '首页' })] }),
              new TableCell({ children: [new Paragraph({ text: '公司概览、服务入口' })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph({ text: '/products' })] }),
              new TableCell({ children: [new Paragraph({ text: 'Products.vue' })] }),
              new TableCell({ children: [new Paragraph({ text: '产品中心' })] }),
              new TableCell({ children: [new Paragraph({ text: '产品列表展示' })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph({ text: '/cases' })] }),
              new TableCell({ children: [new Paragraph({ text: 'Cases.vue' })] }),
              new TableCell({ children: [new Paragraph({ text: '案例展示' })] }),
              new TableCell({ children: [new Paragraph({ text: '行业案例筛选' })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph({ text: '/services/ai-solution' })] }),
              new TableCell({ children: [new Paragraph({ text: 'AISolution.vue' })] }),
              new TableCell({ children: [new Paragraph({ text: 'AI解决方案' })] }),
              new TableCell({ children: [new Paragraph({ text: '人工智能详情页' })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph({ text: '/services/cloud-platform' })] }),
              new TableCell({ children: [new Paragraph({ text: 'CloudPlatform.vue' })] }),
              new TableCell({ children: [new Paragraph({ text: '云计算平台' })] }),
              new TableCell({ children: [new Paragraph({ text: '云计算详情页' })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph({ text: '/services/data-analytics' })] }),
              new TableCell({ children: [new Paragraph({ text: 'DataAnalytics.vue' })] }),
              new TableCell({ children: [new Paragraph({ text: '数据分析' })] }),
              new TableCell({ children: [new Paragraph({ text: '大数据详情页' })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph({ text: '/services/digital-consulting' })] }),
              new TableCell({ children: [new Paragraph({ text: 'DigitalConsulting.vue' })] }),
              new TableCell({ children: [new Paragraph({ text: '数字化咨询' })] }),
              new TableCell({ children: [new Paragraph({ text: '转型咨询详情页' })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph({ text: '/help' })] }),
              new TableCell({ children: [new Paragraph({ text: 'Help.vue' })] }),
              new TableCell({ children: [new Paragraph({ text: '帮助中心' })] }),
              new TableCell({ children: [new Paragraph({ text: 'FAQ问答' })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph({ text: '/terms' })] }),
              new TableCell({ children: [new Paragraph({ text: 'Terms.vue' })] }),
              new TableCell({ children: [new Paragraph({ text: '服务条款' })] }),
              new TableCell({ children: [new Paragraph({ text: '法律条款' })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph({ text: '/privacy' })] }),
              new TableCell({ children: [new Paragraph({ text: 'Privacy.vue' })] }),
              new TableCell({ children: [new Paragraph({ text: '隐私政策' })] }),
              new TableCell({ children: [new Paragraph({ text: '隐私保护' })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph({ text: '/contact' })] }),
              new TableCell({ children: [new Paragraph({ text: 'Contact.vue' })] }),
              new TableCell({ children: [new Paragraph({ text: '联系方式' })] }),
              new TableCell({ children: [new Paragraph({ text: '在线咨询表单' })] })
            ]
          })
        ]
      }),

      new Paragraph({
        text: '三、设计系统',
        heading: HeadingLevel.HEADING_1,
        pageBreakBefore: true
      }),

      new Paragraph({
        text: '3.1 主题色彩体系',
        heading: HeadingLevel.HEADING_2
      }),

      new Paragraph({
        text: '每个服务详情页拥有独立的主题色彩，强化品牌识别度：',
        spacing: { after: 200 }
      }),

      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        rows: [
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph({ text: '服务页面' })] }),
              new TableCell({ children: [new Paragraph({ text: '主题色' })] }),
              new TableCell({ children: [new Paragraph({ text: '色值' })] }),
              new TableCell({ children: [new Paragraph({ text: '应用场景' })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph({ text: 'AI解决方案' })] }),
              new TableCell({ children: [new Paragraph({ text: '金色' })] }),
              new TableCell({ children: [new Paragraph({ text: '#c9a962' })] }),
              new TableCell({ children: [new Paragraph({ text: '按钮、图标、强调' })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph({ text: '云计算平台' })] }),
              new TableCell({ children: [new Paragraph({ text: '蓝色' })] }),
              new TableCell({ children: [new Paragraph({ text: '#5a8fcd' })] }),
              new TableCell({ children: [new Paragraph({ text: '按钮、图标、强调' })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph({ text: '数据分析' })] }),
              new TableCell({ children: [new Paragraph({ text: '绿色' })] }),
              new TableCell({ children: [new Paragraph({ text: '#6bab90' })] }),
              new TableCell({ children: [new Paragraph({ text: '按钮、图标、强调' })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph({ text: '数字化咨询' })] }),
              new TableCell({ children: [new Paragraph({ text: '橙色' })] }),
              new TableCell({ children: [new Paragraph({ text: '#c97a62' })] }),
              new TableCell({ children: [new Paragraph({ text: '按钮、图标、强调' })] })
            ]
          })
        ]
      }),

      new Paragraph({
        text: '3.2 通用色彩',
        heading: HeadingLevel.HEADING_2
      }),

      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        rows: [
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph({ text: '用途' })] }),
              new TableCell({ children: [new Paragraph({ text: '色值' })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph({ text: '深色背景' })] }),
              new TableCell({ children: [new Paragraph({ text: '#1a1a1a' })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph({ text: '页面背景' })] }),
              new TableCell({ children: [new Paragraph({ text: '#faf9f7' })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph({ text: '卡片背景' })] }),
              new TableCell({ children: [new Paragraph({ text: '#ffffff' })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph({ text: '边框色' })] }),
              new TableCell({ children: [new Paragraph({ text: '#e8e6e3' })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph({ text: '正文文字' })] }),
              new TableCell({ children: [new Paragraph({ text: '#1a1a1a' })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph({ text: '次要文字' })] }),
              new TableCell({ children: [new Paragraph({ text: '#666666' })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph({ text: '辅助文字' })] }),
              new TableCell({ children: [new Paragraph({ text: '#999999' })] })
            ]
          })
        ]
      }),

      new Paragraph({
        text: '3.3 间距系统',
        heading: HeadingLevel.HEADING_2
      }),

      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        rows: [
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph({ text: '命名' })] }),
              new TableCell({ children: [new Paragraph({ text: '数值' })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph({ text: '--space-xs' })] }),
              new TableCell({ children: [new Paragraph({ text: '4px' })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph({ text: '--space-sm' })] }),
              new TableCell({ children: [new Paragraph({ text: '8px' })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph({ text: '--space-md' })] }),
              new TableCell({ children: [new Paragraph({ text: '16px' })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph({ text: '--space-lg' })] }),
              new TableCell({ children: [new Paragraph({ text: '24px' })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph({ text: '--space-xl' })] }),
              new TableCell({ children: [new Paragraph({ text: '32px' })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph({ text: '--space-2xl' })] }),
              new TableCell({ children: [new Paragraph({ text: '48px' })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph({ text: '--space-3xl' })] }),
              new TableCell({ children: [new Paragraph({ text: '64px' })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph({ text: '--space-4xl' })] }),
              new TableCell({ children: [new Paragraph({ text: '96px' })] })
            ]
          })
        ]
      }),

      new Paragraph({
        text: '四、页面功能详解',
        heading: HeadingLevel.HEADING_1,
        pageBreakBefore: true
      }),

      new Paragraph({
        text: '4.1 首页（Home.vue）',
        heading: HeadingLevel.HEADING_2
      }),

      new Paragraph({
        text: '核心功能：',
        spacing: { after: 100 }
      }),

      new Paragraph({ text: '滚动监听：导航高亮当前区块（window.addEventListener）', bullet: { level: 0 } }),
      new Paragraph({ text: '数字动画：统计数据平滑递增（requestAnimationFrame + 缓动函数）', bullet: { level: 0 } }),
      new Paragraph({ text: '表单提交：咨询表单提交反馈（isSubmitting + isSuccess 状态）', bullet: { level: 0 } }),
      new Paragraph({ text: '平滑滚动：点击导航滚动到对应区块（scrollIntoView）', bullet: { level: 0 } }),

      new Paragraph({
        text: '4.2 产品页（Products.vue）',
        heading: HeadingLevel.HEADING_2
      }),

      new Paragraph({ text: '产品分类筛选（软件产品 / SaaS服务 / 定制开发）', bullet: { level: 0 } }),

      new Paragraph({
        text: '4.3 案例页（Cases.vue）',
        heading: HeadingLevel.HEADING_2
      }),

      new Paragraph({ text: '行业筛选（金融 / 制造 / 零售 / 医疗）', bullet: { level: 0 } }),

      new Paragraph({
        text: '4.4 服务详情页（4个）',
        heading: HeadingLevel.HEADING_2
      }),

      new Paragraph({
        text: '通用交互：',
        spacing: { after: 100 }
      }),

      new Paragraph({ text: '页面加载动画：淡入效果 + 元素依次显示', bullet: { level: 0 } }),
      new Paragraph({ text: '功能卡片展开：点击展开显示详细技术栈标签', bullet: { level: 0 } }),
      new Paragraph({ text: '场景卡片点击：点击激活并显示描述', bullet: { level: 0 } }),
      new Paragraph({ text: '数字指标动画：进入视口时依次显示', bullet: { level: 0 } }),

      new Paragraph({
        text: '个性化交互：',
        spacing: { after: 100 }
      }),

      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        rows: [
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph({ text: '页面' })] }),
              new TableCell({ children: [new Paragraph({ text: '特有交互' })] }),
              new TableCell({ children: [new Paragraph({ text: '描述' })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph({ text: 'AI解决方案' })] }),
              new TableCell({ children: [new Paragraph({ text: '流程步骤切换' })] }),
              new TableCell({ children: [new Paragraph({ text: '四步服务流程可点击切换' })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph({ text: '云计算平台' })] }),
              new TableCell({ children: [new Paragraph({ text: 'Tab切换' })] }),
              new TableCell({ children: [new Paragraph({ text: '计算/存储/网络/安全四类切换' })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph({ text: '数据分析' })] }),
              new TableCell({ children: [new Paragraph({ text: '图表选择器' })] }),
              new TableCell({ children: [new Paragraph({ text: '5种可视化图表类型切换' })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph({ text: '数字化咨询' })] }),
              new TableCell({ children: [new Paragraph({ text: '方法选择器' })] }),
              new TableCell({ children: [new Paragraph({ text: '4种咨询方式切换' })] })
            ]
          })
        ]
      }),

      new Paragraph({
        text: '4.5 帮助中心（Help.vue）',
        heading: HeadingLevel.HEADING_2
      }),

      new Paragraph({ text: 'FAQ手风琴组件（点击展开/收起答案）', bullet: { level: 0 } }),

      new Paragraph({
        text: '4.6 联系方式（Contact.vue）',
        heading: HeadingLevel.HEADING_2
      }),

      new Paragraph({
        text: '核心功能：',
        spacing: { after: 100 }
      }),

      new Paragraph({ text: '咨询类型选择：产品咨询 / 技术支持 / 商务合作 / 其他', bullet: { level: 0 } }),
      new Paragraph({ text: '表单验证：必填项验证（姓名、邮箱、留言）', bullet: { level: 0 } }),
      new Paragraph({ text: '提交状态：加载中 → 成功提示（5秒后自动关闭）', bullet: { level: 0 } }),
      new Paragraph({ text: '表单重置：成功提交后自动清空表单', bullet: { level: 0 } }),

      new Paragraph({
        text: '五、响应式设计',
        heading: HeadingLevel.HEADING_1,
        pageBreakBefore: true
      }),

      new Paragraph({
        text: '5.1 断点配置',
        heading: HeadingLevel.HEADING_2
      }),

      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        rows: [
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph({ text: '断点' })] }),
              new TableCell({ children: [new Paragraph({ text: '屏幕宽度' })] }),
              new TableCell({ children: [new Paragraph({ text: '适配内容' })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph({ text: '桌面' })] }),
              new TableCell({ children: [new Paragraph({ text: '≥1024px' })] }),
              new TableCell({ children: [new Paragraph({ text: '完整布局' })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph({ text: '平板' })] }),
              new TableCell({ children: [new Paragraph({ text: '768px - 1023px' })] }),
              new TableCell({ children: [new Paragraph({ text: '双列变单列' })] })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({ children: [new Paragraph({ text: '移动' })] }),
              new TableCell({ children: [new Paragraph({ text: '< 768px' })] }),
              new TableCell({ children: [new Paragraph({ text: '堆叠布局' })] })
            ]
          })
        ]
      }),

      new Paragraph({
        text: '5.2 无障碍支持',
        heading: HeadingLevel.HEADING_2
      }),

      new Paragraph({ text: 'prefers-reduced-motion媒体查询：减少动画效果', bullet: { level: 0 } }),

      new Paragraph({
        text: '六、项目结构',
        heading: HeadingLevel.HEADING_1,
        pageBreakBefore: true
      }),

      new Paragraph({
        text: '公司主页项目/',
        spacing: { after: 50 }
      }),
      new Paragraph({
        text: '├── src/',
        spacing: { after: 50 }
      }),
      new Paragraph({
        text: '│   ├── router/',
        spacing: { after: 50 }
      }),
      new Paragraph({
        text: '│   │   └── index.js          # 路由配置（11个路由）',
        spacing: { after: 50 }
      }),
      new Paragraph({
        text: '│   ├── views/',
        spacing: { after: 50 }
      }),
      new Paragraph({
        text: '│   │   ├── Home.vue           # 首页',
        spacing: { after: 50 }
      }),
      new Paragraph({
        text: '│   │   ├── Products.vue       # 产品中心',
        spacing: { after: 50 }
      }),
      new Paragraph({
        text: '│   │   ├── Cases.vue          # 案例展示',
        spacing: { after: 50 }
      }),
      new Paragraph({
        text: '│   │   ├── Contact.vue        # 联系方式',
        spacing: { after: 50 }
      }),
      new Paragraph({
        text: '│   │   ├── Help.vue           # 帮助中心',
        spacing: { after: 50 }
      }),
      new Paragraph({
        text: '│   │   ├── Terms.vue          # 服务条款',
        spacing: { after: 50 }
      }),
      new Paragraph({
        text: '│   │   ├── Privacy.vue        # 隐私政策',
        spacing: { after: 50 }
      }),
      new Paragraph({
        text: '│   │   └── services/          # 服务详情页（4个）',
        spacing: { after: 50 }
      }),
      new Paragraph({
        text: '│   │       ├── AISolution.vue         # AI解决方案',
        spacing: { after: 50 }
      }),
      new Paragraph({
        text: '│   │       ├── CloudPlatform.vue      # 云计算平台',
        spacing: { after: 50 }
      }),
      new Paragraph({
        text: '│   │       ├── DataAnalytics.vue      # 大数据分析',
        spacing: { after: 50 }
      }),
      new Paragraph({
        text: '│   │       └── DigitalConsulting.vue # 数字化咨询',
        spacing: { after: 50 }
      }),
      new Paragraph({
        text: '│   ├── App.vue                # 根组件（页面过渡动画）',
        spacing: { after: 50 }
      }),
      new Paragraph({
        text: '│   └── main.js                # 应用入口',
        spacing: { after: 50 }
      }),
      new Paragraph({
        text: '├── public/',
        spacing: { after: 50 }
      }),
      new Paragraph({
        text: '│   └── vite.svg               # Favicon',
        spacing: { after: 50 }
      }),
      new Paragraph({
        text: '├── index.html                 # HTML模板',
        spacing: { after: 50 }
      }),
      new Paragraph({
        text: '├── package.json               # 项目依赖',
        spacing: { after: 50 }
      }),
      new Paragraph({
        text: '├── vite.config.js             # Vite配置',
        spacing: { after: 50 }
      }),
      new Paragraph({
        text: '└── dist/                      # 构建输出目录',
        spacing: { after: 400 }
      }),

      new Paragraph({
        text: '七、依赖配置',
        heading: HeadingLevel.HEADING_1,
        pageBreakBefore: true
      }),

      new Paragraph({
        text: '7.1 生产依赖',
        heading: HeadingLevel.HEADING_2
      }),

      new Paragraph({ text: 'vue: ^3.4.0', bullet: { level: 0 } }),
      new Paragraph({ text: 'vue-router: ^4.6.4', bullet: { level: 0 } }),

      new Paragraph({
        text: '7.2 开发依赖',
        heading: HeadingLevel.HEADING_2
      }),

      new Paragraph({ text: '@vitejs/plugin-vue: ^5.0.0', bullet: { level: 0 } }),
      new Paragraph({ text: 'vite: ^5.0.0', bullet: { level: 0 } }),
      new Paragraph({ text: 'docx: ^10.0.0（用于生成Word文档）', bullet: { level: 0 } }),

      new Paragraph({
        text: '八、运行命令',
        heading: HeadingLevel.HEADING_1,
        pageBreakBefore: true
      }),

      new Paragraph({ text: 'npm install - 安装依赖', bullet: { level: 0 } }),
      new Paragraph({ text: 'npm run dev - 开发模式（热重载）', bullet: { level: 0 } }),
      new Paragraph({ text: 'npm run build - 生产构建', bullet: { level: 0 } }),
      new Paragraph({ text: 'npm run preview - 预览构建结果', bullet: { level: 0 } }),

      new Paragraph({
        text: '九、亮点与创新',
        heading: HeadingLevel.HEADING_1,
        pageBreakBefore: true
      }),

      new Paragraph({
        text: '9.1 技术亮点',
        heading: HeadingLevel.HEADING_2
      }),

      new Paragraph({ text: 'Composition API：使用 <script setup> 语法，代码更简洁', bullet: { level: 0 } }),
      new Paragraph({ text: '响应式系统：Vue 3响应式数据，自动追踪依赖', bullet: { level: 0 } }),
      new Paragraph({ text: '路由管理：Vue Router 4，hash模式.history模式', bullet: { level: 0 } }),
      new Paragraph({ text: '构建速度：Vite极速冷启动 + HMR热更新', bullet: { level: 0 } }),

      new Paragraph({
        text: '9.2 设计亮点',
        heading: HeadingLevel.HEADING_2
      }),

      new Paragraph({ text: '主题色彩：每个服务页独立主题色，强化品牌认知', bullet: { level: 0 } }),
      new Paragraph({ text: '渐变背景：radial-gradient营造高级感', bullet: { level: 0 } }),
      new Paragraph({ text: '毛玻璃效果：backdrop-filter模糊背景', bullet: { level: 0 } }),
      new Paragraph({ text: '卡片悬停：transform + box-shadow微交互', bullet: { level: 0 } }),

      new Paragraph({
        text: '9.3 交互亮点',
        heading: HeadingLevel.HEADING_2
      }),

      new Paragraph({ text: '页面过渡：App.vue中配置淡入淡出动画', bullet: { level: 0 } }),
      new Paragraph({ text: '滚动动画：IntersectionObserver实现数字递增', bullet: { level: 0 } }),
      new Paragraph({ text: '表单状态：多状态反馈（默认/加载/成功）', bullet: { level: 0 } }),
      new Paragraph({ text: '手风琴组件：Help.vue中的FAQ展开收起', bullet: { level: 0 } }),

      new Paragraph({
        text: '十、扩展建议',
        heading: HeadingLevel.HEADING_1,
        pageBreakBefore: true
      }),

      new Paragraph({
        text: '10.1 短期优化',
        heading: HeadingLevel.HEADING_2
      }),

      new Paragraph({ text: '添加TypeScript支持（提升代码类型安全）', bullet: { level: 0 } }),
      new Paragraph({ text: '集成Pinia状态管理（跨组件共享状态）', bullet: { level: 0 } }),
      new Paragraph({ text: '添加单元测试（Vitest + Vue Test Utils）', bullet: { level: 0 } }),
      new Paragraph({ text: '优化图片资源（WebP格式 + 懒加载）', bullet: { level: 0 } }),

      new Paragraph({
        text: '10.2 中期功能',
        heading: HeadingLevel.HEADING_2
      }),

      new Paragraph({ text: '添加博客/新闻模块', bullet: { level: 0 } }),
      new Paragraph({ text: '实现多语言切换（i18n）', bullet: { level: 0 } }),
      new Paragraph({ text: '添加用户登录/注册功能', bullet: { level: 0 } }),
      new Paragraph({ text: '集成CMS内容管理系统', bullet: { level: 0 } }),

      new Paragraph({
        text: '10.3 长期规划',
        heading: HeadingLevel.HEADING_2
      }),

      new Paragraph({ text: 'SSR服务端渲染（Nuxt.js）', bullet: { level: 0 } }),
      new Paragraph({ text: 'PWA渐进式应用支持', bullet: { level: 0 } }),
      new Paragraph({ text: '性能监控与埋点', bullet: { level: 0 } }),
      new Paragraph({ text: 'SEO优化', bullet: { level: 0 } }),

      new Paragraph({
        text: '十一、总结',
        heading: HeadingLevel.HEADING_1,
        pageBreakBefore: true
      }),

      new Paragraph({
        text: '本项目是一个完整的中型Vue 3 SPA企业官网，展示了现代前端开发的最佳实践：',
        spacing: { after: 200 }
      }),

      new Paragraph({ text: '完整的路由系统 - 11个页面，SPA体验流畅', bullet: { level: 0 } }),
      new Paragraph({ text: '统一的设计语言 - 每个服务页面有独立主题色', bullet: { level: 0 } }),
      new Paragraph({ text: '丰富的交互功能 - 卡片展开、Tab切换、数字动画、滚动监听', bullet: { level: 0 } }),
      new Paragraph({ text: '代码复用性高 - 相似的页面结构，不同的个性化内容', bullet: { level: 0 } }),
      new Paragraph({ text: '用户体验良好 - 页面过渡动画、hover效果、表单状态反馈', bullet: { level: 0 } }),
      new Paragraph({ text: '移动端适配 - 响应式设计，适配多种屏幕尺寸', bullet: { level: 0 } }),
      new Paragraph({ text: '无障碍支持 - prefers-reduced-motion媒体查询', bullet: { level: 0 } }),

      new Paragraph({
        text: '项目结构清晰，代码规范，易于维护和扩展，适合作为企业级Web应用的开发模板。',
        spacing: { before: 200 }
      }),

      new Paragraph({
        children: [
          new TextRun({ text: '', size: 24 })
        ],
        spacing: { before: 400 }
      }),

      new Paragraph({
        text: '本文档由AI辅助生成，如有问题请联系项目负责人。',
        alignment: AlignmentType.CENTER
      })
    ]
  }]
});

const buffer = await Packer.toBuffer(doc);
fs.writeFileSync('e:/打字练习/公司主页项目/灵境科技项目技术文档.docx', buffer);
console.log('Word文档已生成: 灵境科技项目技术文档.docx');
