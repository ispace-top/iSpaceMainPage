const encode = (text) => encodeURIComponent(text);

export const courses = [
  {
    id: '5-7',
    age: '5-7岁',
    title: '创意启蒙',
    description: '通过不插电游戏、乐高和Scratch Jr.，点燃孩子的创造火花。',
    imageText: encode('创意启蒙'),
    imageColor: '9b59b6',
    headerDescription: '在故事与游戏中，播下逻辑与创意的种子',
    details: {
      summary: '本课程专为低龄儿童的认知特点设计，核心在于“玩中学”。我们通过生动的绘本故事、乐高® SPIKE™ Essential 科创套装和极简的拖拽式编程工具 Scratch Jr.，让孩子在充满乐趣的动手实践中，建立对序列、循环、传感器等核心概念的直观理解，为未来的学习之旅打下坚实而快乐的基础。',
      gains: [
        { title: '逻辑思维萌芽', description: '在解决机器人任务和游戏谜题的过程中，自然地建立顺序、分类和简单条件判断的思维模型。' },
        { title: '工程与创造力', description: '学习使用乐高搭建机械结构，并结合编程使其自动化，将想象力变为现实。' },
        { title: '专注力与耐心', description: '在有始有终的项目挑战中，有效提升注意力的时长和完成任务的耐心。' },
        { title: '数字化工具初探', description: '安全、正向地接触数字化工具，将其视为创造性的画板而非单纯的玩具。' },
        { title: '自信心建立', description: '从每一个成功的小作品中获得满满的成就感，建立“我能行”的积极心态。' },
      ],
      syllabusTitle: '课程主题（部分）',
      syllabusSummary: '我们的课程以生动有趣的主题贯穿，让每一次学习都成为一场奇妙的冒险。',
      syllabus: [
        { title: '机器人历险记', description: '使用方向卡牌和简单的编程块，指挥机器人走出迷宫，理解“序列”的重要性。' },
        { title: '搭建游乐园', description: '学习齿轮和杠杆原理，用乐高搭建旋转木马、摩天轮等，并用编程控制其运动。' },
        { title: '我的动画故事', description: '学习使用 Scratch Jr 添加背景和角色，设计简单的对话和动作，创作一个完整的动画短片。' },
        { title: '智能小管家', description: '利用传感器（如颜色、距离），让乐高机器人能够识别不同物体并做出相应反应。' },
      ],
      meta: {
        duration: '40课时',
        method: '线下小班教学',
        tools: '乐高® SPIKE™ Essential, Scratch Jr, 趣味教具'
      },
      features: [
        { icon: 'fas fa-cogs', text: '乐高机器人' },
        { icon: 'fas fa-gamepad', text: '游戏化学习' },
        { icon: 'fas fa-lightbulb', text: '激发内在创意' },
        { icon: 'fas fa-smile', text: '零基础无压力' },
      ]
    }
  },
  {
    id: '8-10',
    age: '8-10岁',
    title: '图形化编程',
    description: '在游戏和动画创作中，系统学习编程知识，培养逻辑思维与解决问题的能力。',
    imageText: encode('图形化编程'),
    imageColor: 'FF7A59',
    headerDescription: '在动画与游戏中释放无限创造力',
    details: {
      summary: 'Scratch 是由麻省理工学院（MIT）媒体实验室设计开发的一款面向少儿的图形化编程工具。孩子们无需输入复杂的代码，只需通过拖拽积木式的模块，就能轻松创作出属于自己的动画、故事和游戏。本课程旨在通过一系列充满想象力的项目，引导孩子进入神奇的编程世界，在“玩”中学习，在创造中成长。',
      gains: [
        { title: '计算思维', description: '学会像计算机科学家一样思考，掌握分解问题、模式识别、抽象和算法等核心概念。' },
        { title: '逻辑与创造力', description: '增强逻辑推理能力，并将天马行空的创意变为现实，有效提升创新能力。' },
        { title: '解决问题能力', description: '在程序调试和功能实现的过程中，培养独立分析和解决问题的毅力与自信。' },
        { title: '跨学科知识融合', description: '将编程与数学、语言、艺术、音乐等学科知识相结合，实现综合能力的全面发展。' },
        { title: '未来学习基础', description: '为将来学习Python等更高级的文本编程语言打下坚实的基础。' },
      ],
      syllabusTitle: '课程大纲',
      syllabusSummary: '我们的课程分为四个阶段，循序渐进，确保孩子在每个阶段都能获得成就感。',
      syllabus: [
        { title: '模块一：初识Scratch（12课时）', description: '认识界面，学习坐标系、角色与背景、运动与方向、循环与事件等基础模块，制作第一个互动动画。' },
        { title: '模块二：动画大师（12课时）', description: '掌握多角色互动、造型切换、声音与特效、广播与消息机制，创作一个完整的多场景动画故事。' },
        { title: '模块三：游戏开发者（12课时）', description: '深入学习变量、条件判断、随机数、克隆等进阶概念，设计并开发一款有趣的小游戏（如接苹果、打地鼠）。' },
        { title: '模块四：综合项目与发布（12课时）', description: '学习更复杂的逻辑，如列表和自定义模块。最终完成一个大型结业项目，并学习如何将作品分享到社区。' },
      ],
      meta: {
        duration: '48课时',
        method: '线上/线下小班',
        tools: 'Scratch 3.0'
      },
      features: [
        { icon: 'fas fa-lightbulb', text: '项目驱动式学习' },
        { icon: 'fas fa-users', text: '1对4小班教学' },
        { icon: 'fas fa-comments', text: '趣味互动课堂' },
        { icon: 'fas fa-trophy', text: '鼓励分享与创作' },
      ]
    }
  },
  {
    id: '11-14',
    age: '11-14岁',
    title: '代码语言入门',
    description: '学习主流编程语言Python，开启人工智能与数据科学的大门。',
    imageText: encode('代码编程'),
    imageColor: '00C49A',
    headerDescription: '从代码世界开启AI与数据科学之旅',
    details: {
      summary: 'Python 是当今世界最受欢迎的编程语言之一，广泛应用于人工智能、数据分析、网站开发等前沿领域。本课程将引导学生从图形化编程平滑过渡到真实世界的文本代码编程。课程内容生动有趣，通过制作实用小工具、开发经典小游戏等项目，让学生系统地掌握Python语言的核心知识，建立规范的编程思想。',
      gains: [
        { title: '文本编程能力', description: '熟练掌握Python的基础语法、数据类型、变量、循环、函数等，具备独立编写代码的能力。' },
        { title: '抽象思维升级', description: '从具象的积木到抽象的代码，实现思维方式的进阶，更深刻地理解程序运行原理。' },
        { title: '实用问题解决', description: '学会利用编程自动处理数据、制作工具，将编程应用于解决学习和生活中的实际问题。' },
        { title: '算法初步', description: '接触基础的算法思想，如排序和查找，为后续更深入的计算机科学学习奠定基础。' },
        { title: '对接高级领域', description: '获得进入人工智能、数据科学、网络爬虫等热门领域学习的必备技能。' },
      ],
      syllabusTitle: '课程大纲',
      syllabusSummary: '我们的课程设计由浅入深，项目与理论知识紧密结合。',
      syllabus: [
        { title: '模块一：Python初体验（12课时）', description: '搭建编程环境，学习变量、字符串、数字等基本数据类型，编写第一个Python程序，制作一个简单的“真心话”问答机。' },
        { title: '模块二：逻辑与控制（12课时）', description: '掌握列表、元组、字典等数据结构，精通if条件语句和for/while循环，开发一个“猜数字”小游戏。' },
        { title: '模块三：函数与模块（12课时）', description: '学习定义和调用函数，理解模块化编程思想，使用Turtle库绘制创意图形，制作一个“海龟画图”艺术作品。' },
        { title: '模块四：项目实战与挑战（12课时）', description: '综合运用所学知识，使用Pygame库开发一款功能完整的游戏（如贪吃蛇、飞机大战），体验完整的软件开发流程。' },
      ],
      meta: {
        duration: '48课时',
        method: '线上/线下小班',
        tools: 'Python 3, PyCharm/VS Code'
      },
      features: [
        { icon: 'fas fa-code', text: '真实代码世界' },
        { icon: 'fas fa-laptop', text: '实用项目导向' },
        { icon: 'fas fa-brain', text: '培养计算思维' },
        { icon: 'fas fa-rocket', text: '对接未来科技' },
      ]
    }
  },
  {
    id: '14-plus',
    age: '14岁+',
    title: '算法与竞赛',
    description: '系统学习C++与算法，挑战信息学竞赛，冲击名校。',
    imageText: encode('算法竞赛'),
    imageColor: 'FFC107',
    headerDescription: '冲击信息学竞赛，挑战思维极限',
    details: {
      summary: '本课程专为有志于挑战信息学竞赛（如NOIP、USACO）或希望深入理解计算机科学核心的学生而设计。课程将围绕数据结构与算法展开，通过系统性的理论讲解、海量的经典例题剖析和高强度的实战模拟，全面提升学生的算法设计能力和问题解决能力。我们以竞赛为导向，帮助学生在代码的严谨与高效中，感受智慧的深度。',
      gains: [
        { title: '扎实的算法功底', description: '系统掌握各类经典数据结构（数组、链表、栈、队列、树、图）和核心算法（排序、搜索、动态规划、贪心等）。' },
        { title: '竞赛解题策略', description: '学习分析问题、构建数学模型、优化时间与空间复杂度的竞赛核心技巧。' },
        { title: '代码工程能力', description: '培养编写高效、健壮、可读性强的代码的专业素养，适应高强度竞赛要求。' },
        { title: '名校敲门砖', description: '在信息学竞赛中取得优异成绩，为国内外顶尖大学的自主招生和申请增加极具分量的砝码。' },
        { title: '坚韧的思维品质', description: '在攻克难题的过程中，锻炼强大的逻辑思维能力、抗压能力和持续学习的热情。' },
      ],
      syllabusTitle: '课程大纲',
      syllabusSummary: '我们的课程内容对标主流竞赛考纲，并进行系统化和模块化的梳理。',
      syllabus: [
        { title: '模块一：基础算法（16课时）', description: '深入学习排序（快排、归并）、二分查找、递归与分治思想、模拟与高精度计算。' },
        { title: '模块二：核心数据结构（16课时）', description: '全面掌握栈、队列、链表、二叉树、堆、哈希表等数据结构的实现与应用。' },
        { title: '模块三：高级算法（16课时）', description: '重点攻克搜索（BFS、DFS）、动态规划（DP）、贪心算法、图论基础（最短路、最小生成树）。' },
        { title: '模块四：竞赛专题与冲刺（16课时）', description: '针对数论、字符串、计算几何等竞赛专题进行强化训练，并进行全真模拟考试和赛题精讲。' },
      ],
      meta: {
        duration: '64课时',
        method: '线上/线下小班',
        tools: 'C++, VS Code, Online Judge'
      },
      features: [
        { icon: 'fas fa-trophy', text: '对标竞赛大纲' },
        { icon: 'fas fa-book', text: '海量真题演练' },
        { icon: 'fas fa-user-tie', text: '金牌教练指导' },
        { icon: 'fas fa-graduation-cap', text: '助力名校升学' },
      ]
    }
  }
];