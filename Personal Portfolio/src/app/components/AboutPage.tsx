import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Brain,
  Layout,
  Sparkles,
  Code,
  Palette,
  Layers,
  Mail,
  MapPin,
  GraduationCap,
  Briefcase,
  Trophy,
  Award,
  ArrowUpRight,
  ArrowRight,
  X,
  Copy,
  Check,
  Download,
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import avatarImg from '../../imports/1M__.png';
import wechatQr from '../../imports/__-1.jpg';
import resumePdf from '../../imports/___-26.6.4.pdf';

// ---------- DATA ----------

const PROFILE = {
  name: '覃彦涛',
  enRole: 'AI Product Designer & Builder',
  cnRole: 'AI 驱动的产品设计与构建者',
  age: '21',
  city: '杭州',
  degree: '本科 / 环境艺术设计',
  school: '安徽工程大学',
  email: '1917647483@qq.com',
  direction: '产品设计 / 交互设计 / AI 辅助产品构建',
};

const CORE_STRENGTHS = [
  {
    icon: Brain,
    title: '产品与用户体验思维',
    desc: '能够从用户需求、业务场景和产品目标出发，拆解问题并转化为清晰的设计方案。',
  },
  {
    icon: Layout,
    title: '设计全链路能力',
    desc: '能够完成需求拆解、设计风格探索、低保真原型、高保真视觉设计、Design System 搭建和组件化规范输出。',
  },
  {
    icon: Sparkles,
    title: 'AI 工具链实践',
    desc: '熟练使用 ChatGPT、Claude、Gemini、GPT-image、NanoBanana、Flow、Figma Make、Google Stitch 等 AI 工具，提升创意探索、方案迭代和设计效率。',
  },
  {
    icon: Code,
    title: '从设计到原型落地',
    desc: '正在学习通过 Codex、Claude、Cursor、OpenCode、React、Tailwind 等工具，将设计稿转化为可体验的前端原型。',
  },
];

const SKILL_GROUPS = [
  {
    en: 'Product Thinking',
    cn: '产品思维',
    icon: Brain,
    tags: ['需求分析', '用户研究', '竞品分析', '信息架构', '产品流程', 'PRD 理解'],
  },
  {
    en: 'Interface Design',
    cn: '界面与交互设计',
    icon: Layout,
    tags: ['Figma', 'Auto Layout', 'Variables', 'Prototyping', 'UI Kits', 'Design System'],
  },
  {
    en: 'Visual & Motion',
    cn: '视觉与动效表达',
    icon: Palette,
    tags: ['Photoshop', 'Illustrator', 'After Effects', '图标设计', 'IP 动效', 'Lottie'],
  },
  {
    en: 'AI Creation',
    cn: 'AI 辅助创作',
    icon: Sparkles,
    tags: ['ChatGPT', 'Claude', 'Gemini', 'GPT-image', 'NanoBanana', 'Flow', 'Figma Make'],
  },
  {
    en: 'Prototype Building',
    cn: '原型构建',
    icon: Code,
    tags: ['Vibe Coding', 'Codex', 'Cursor', 'OpenCode', 'React', 'Tailwind'],
  },
  {
    en: 'Design Theory',
    cn: '设计理论',
    icon: Layers,
    tags: ['尼尔森十大可用性原则', '雅各布法则', '希克定律', '格式塔心理学', '视觉层级', '用户体验逻辑'],
  },
];

const WORK_EXPERIENCE = [
  {
    company: '杭州全速网络技术有限公司',
    role: 'UI 设计师',
    period: '2026.05 - 至今',
    intro:
      '参与阿里、字节等头部客户数字产品项目的 UI 设计与视觉支持工作，在设计总监指导下完成界面模块设计、运营素材制作及基础动效输出，熟悉互联网设计全流程协作模式。',
    points: [
      '参与 APP、小程序及 Web 端产品界面模块设计与迭代',
      '负责部分页面布局、图标绘制和组件优化',
      '协助维护团队 Design System',
      '协助完成 Banner、开屏图、H5 专题页等运营视觉素材',
      '使用 After Effects、Seedance、Kling、Veo3 制作基础微动效',
      '参与需求评审、设计走查和设计交付',
    ],
  },
  {
    company: '安徽百视装饰设计工程有限公司',
    role: '设计师助理',
    period: '2025.02 - 2025.04',
    intro:
      '协助设计师完成从概念方案到落地执行的全过程，参与客户对接、方案表达、空间布局与设计素材整理，提升需求分析、视觉转化和团队协作能力。',
    points: [],
  },
  {
    company: '芜湖星瀚空间装饰工程有限公司',
    role: '设计师助理',
    period: '2023.06 - 2023.08',
    intro:
      '参与室内设计项目辅助工作，负责平面图绘制、SketchUp 建模渲染、素材整理和项目文档归档，积累从方案到落地的全链路项目意识。',
    points: [],
  },
];

const PROJECTS = [
  {
    name: '方太制冰饮水机',
    role: 'Design Assistant',
    period: '2026.05 - 至今',
    intro: '参与高端制冰饮水机智能触控屏界面设计，负责图标系统与交互动效视觉输出。',
    points: [
      '完成 20+ 枚功能图标设计与风格统一',
      '使用线性 + 面性结合的视觉语言，提升小尺寸触控屏识别度',
      '使用 After Effects 制作图标状态切换、制冰过程和出水反馈微动效',
      '输出 Lottie 文件并配合开发完成屏端适配',
      '协助整理图标尺寸网格、动效时长曲线等规范文档',
    ],
    result: '图标方案一次性通过客户评审，动态图标方案获得产品方认可并沿用至同系列产品线。',
  },
  {
    name: '利安银行 App POC',
    role: 'UI Designer',
    period: '2026.04 - 2026.06',
    intro: '参与利安银行 App POC 项目设计，主要负责移动端界面视觉优化、IP 形象延展和动效方案配合。',
    points: [
      '参与生日祝福弹窗设计',
      '参与活动页面视觉设计',
      '协助完成长江江豚 IP 形象延展',
      '配合输出 IP 动效方案',
      '根据团队反馈进行多轮视觉调整',
    ],
    result: '通过地方文化、生态元素与金融产品界面的结合，提升整体品牌亲和力与记忆点。',
  },
  {
    name: '乡村会客厅设计',
    role: 'Core Designer',
    period: '2024.08 - 2024.11',
    intro: '面向乡村振兴场景，设计集村民议事、文化展示与游客接待于一体的公共活动空间。',
    points: [
      '负责建筑功能分区与空间动线设计',
      '分析村民、游客、领导等不同人群的行为路径',
      '规划空间层级与导视系统',
      '使用 SketchUp / 3DMax 搭建模型',
      '使用 Midjourney、ComfyUI、NanoBanana、GPT 等 AIGC 工具辅助生成设计灵感与风格方案',
    ],
    result: '',
  },
];

const DESIGN_AWARDS = [
  '2026 中国大学生计算机设计大赛 安徽省二等奖',
  '2024 安徽省环境设计大赛 三等奖',
  '2025 安徽省环境设计大赛 三等奖',
  '“芜湖有礼”城市文创设计大赛 优秀奖',
];

const SPORTS_AWARDS = [
  '安徽工程大学羽毛球校杯 团体冠军',
  '芜湖市镜湖区“六球一舞” 男子双打第三名',
  '安徽省芜湖市羽毛球比赛 团体第五名',
  '“梦溪杯”羽毛球男子双打 第二名',
  '安徽工程大学羽毛球“新生杯” 男子单打 第二名',
];

// ---------- COMPONENT ----------

export function AboutPage() {
  const [isWechatOpen, setIsWechatOpen] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const copy = async (value: string, type: string) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(value);
      } else {
        const ta = document.createElement('textarea');
        ta.value = value;
        ta.style.position = 'fixed';
        ta.style.left = '-9999px';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
      setCopied(type);
      window.setTimeout(() => setCopied(null), 1800);
    } catch {
      setCopied(type);
      window.setTimeout(() => setCopied(null), 1800);
    }
  };

  return (
    <div className="min-h-screen bg-[#071A3D] text-white selection:bg-[#005BFF] selection:text-white font-sans overflow-x-hidden">
      {/* Top Nav */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.06] bg-[#071A3D]/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 md:px-20">
          <a href="/" className="flex h-10 items-center gap-3 text-xl font-bold leading-none tracking-tight text-white">
            <ImageWithFallback src={avatarImg} alt={PROFILE.name} className="h-10 w-10 shrink-0 rounded-full object-cover ring-1 ring-white/10" />
            <span className="flex h-10 items-center">{PROFILE.name}</span>
          </a>
          <div className="flex items-center gap-3">
            <a href="/works" className="hidden rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-slate-200 transition-all hover:border-[#005BFF]/45 hover:bg-[#005BFF]/10 hover:text-white sm:inline-flex">
              查看作品
            </a>
            <a href="/" className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-slate-200 transition-all hover:border-[#005BFF]/45 hover:bg-[#005BFF]/10 hover:text-white">
              返回首页
            </a>
          </div>
        </div>
      </header>

      {/* 1. Resume Hero */}
      <section className="relative px-6 pb-16 pt-32 md:px-20 md:pb-24 md:pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(0,91,255,0.25),transparent_35%),radial-gradient(circle_at_85%_10%,rgba(103,232,249,0.08),transparent_30%)] pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-[1440px]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-8"
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#005BFF]/25 bg-[#005BFF]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-blue-200">
                Resume · 个人简历
              </div>
              <h1 className="mb-4 text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
                {PROFILE.name}
              </h1>
              <h2 className="mb-3 text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 md:text-3xl">
                {PROFILE.enRole}
              </h2>
              <h3 className="mb-8 text-lg text-slate-300 md:text-xl">{PROFILE.cnRole}</h3>

              <p className="mb-5 max-w-3xl text-base leading-relaxed text-slate-400 md:text-lg">
                我拥有环境艺术设计专业背景，目前正在从界面设计能力，逐步转向 AI 驱动的产品设计与构建方向。我关注的不只是界面是否美观，而是如何从用户需求、产品逻辑、信息架构、交互体验、高保真视觉到 AI 辅助开发，完整推动一个产品从想法走向可体验的原型。
              </p>

              <div className="mb-10 rounded-2xl border border-[#005BFF]/20 bg-[#005BFF]/[0.06] p-5 md:p-6">
                <div className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#5CA0FF]">Personal Manifesto</div>
                <p className="text-base leading-relaxed text-slate-200 md:text-lg">
                  我相信未来会进入全员 Vibe Coding 时代。一个清晰的想法，借助 AI 的理解、生成和执行能力，就有机会快速变成一个可体验、可验证、可迭代的数字化产品。
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a href="/works" className="rounded-full bg-[#005BFF] px-8 py-3.5 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-[#2475FF] hover:shadow-[0_12px_30px_rgba(0,91,255,0.32)]">
                  查看作品
                </a>
                <button
                  type="button"
                  onClick={() => setIsWechatOpen(true)}
                  className="rounded-full border border-white/15 bg-white/[0.04] px-8 py-3.5 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.08]"
                >
                  联系我
                </button>
                <a
                  href={resumePdf}
                  download="覃彦涛-简历.pdf"
                  className="inline-flex items-center gap-2 rounded-full border border-[#005BFF]/35 bg-[#005BFF]/12 px-8 py-3.5 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:border-[#005BFF] hover:bg-[#005BFF] hover:shadow-[0_12px_30px_rgba(0,91,255,0.32)]"
                >
                  <Download size={16} />
                  下载简历 PDF
                </a>
              </div>
            </motion.div>

            {/* Personal Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-4"
            >
              <div className="rounded-[28px] border border-white/[0.08] bg-[#0B1F4D]/70 p-7 backdrop-blur-xl">
                <div className="mb-6 flex items-center gap-4">
                  <ImageWithFallback src={avatarImg} alt={PROFILE.name} className="h-16 w-16 rounded-2xl object-cover ring-1 ring-white/10" />
                  <div>
                    <div className="text-lg font-bold text-white">{PROFILE.name}</div>
                    <div className="text-sm text-slate-400">{PROFILE.age} 岁 · {PROFILE.city}</div>
                  </div>
                </div>

                <div className="space-y-4 text-sm">
                  <InfoRow icon={GraduationCap} label="学校" value={PROFILE.school} />
                  <InfoRow icon={Award} label="学历" value={PROFILE.degree} />
                  <InfoRow icon={Briefcase} label="求职方向" value={PROFILE.direction} />
                  <InfoRow icon={MapPin} label="所在城市" value={PROFILE.city} />
                  <button
                    type="button"
                    onClick={() => copy(PROFILE.email, 'email')}
                    className="group flex w-full items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.03] p-3 text-left transition-all hover:border-[#005BFF]/45 hover:bg-[#005BFF]/[0.08]"
                  >
                    <Mail size={16} className="mt-0.5 shrink-0 text-[#5CA0FF]" />
                    <div className="flex-1">
                      <div className="text-xs uppercase tracking-wider text-slate-500">Email</div>
                      <div className="text-sm font-medium text-white">{PROFILE.email}</div>
                    </div>
                    {copied === 'email' ? (
                      <Check size={16} className="text-[#5CA0FF]" />
                    ) : (
                      <Copy size={16} className="text-slate-500 group-hover:text-white" />
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Core Strengths */}
      <Section
        eyebrow="Core Strengths"
        title="核心优势"
        desc="从产品思维到 AI 辅助落地，覆盖一个数字化产品从想法到可体验原型的关键能力。"
      >
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {CORE_STRENGTHS.map((item, idx) => {
            const strengthIcons = [
              (
                <svg key="product-thinking" viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
                  <path fill="currentColor" d="M12 2.7 20.3 7v5.7c0 4.1-3.4 7.4-8.3 8.6-4.9-1.2-8.3-4.5-8.3-8.6V7L12 2.7Zm0 3.1-5.4 2.8v4.1c0 2.6 2.1 4.8 5.4 5.8 3.3-1 5.4-3.2 5.4-5.8V8.6L12 5.8Zm0 2.1c.4 0 .8.3.9.7l.4 1.4c.1.3.3.5.6.6l1.4.4c.9.3.9 1.5 0 1.8l-1.4.4c-.3.1-.5.3-.6.6l-.4 1.4c-.3.9-1.5.9-1.8 0l-.4-1.4a1 1 0 0 0-.6-.6l-1.4-.4c-.9-.3-.9-1.5 0-1.8l1.4-.4c.3-.1.5-.3.6-.6l.4-1.4c.1-.4.5-.7.9-.7Z" />
                </svg>
              ),
              (
                <svg key="design-system" viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
                  <path fill="currentColor" d="M5.2 3h5.1c1.2 0 2.2 1 2.2 2.2v5.1c0 1.2-1 2.2-2.2 2.2H5.2A2.2 2.2 0 0 1 3 10.3V5.2C3 4 4 3 5.2 3Zm8.6 0h5c1.2 0 2.2 1 2.2 2.2v2.1c0 1.2-1 2.2-2.2 2.2h-5V3Zm0 8.5h5c1.2 0 2.2 1 2.2 2.2v5.1c0 1.2-1 2.2-2.2 2.2h-5v-9.5ZM5.2 14h5.1c1.2 0 2.2 1 2.2 2.2v2.6c0 1.2-1 2.2-2.2 2.2H5.2A2.2 2.2 0 0 1 3 18.8v-2.6C3 15 4 14 5.2 14Z" />
                </svg>
              ),
              (
                <svg key="ai-toolchain" viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
                  <path fill="currentColor" d="M8.3 3.3c.3-.9 1.6-.9 1.9 0l.7 2.1c.1.3.3.5.6.6l2.1.7c.9.3.9 1.6 0 1.9l-2.1.7c-.3.1-.5.3-.6.6l-.7 2.1c-.3.9-1.6.9-1.9 0l-.7-2.1a1 1 0 0 0-.6-.6l-2.1-.7c-.9-.3-.9-1.6 0-1.9L7 6c.3-.1.5-.3.6-.6l.7-2.1Zm8.9 7.2c.2-.7 1.2-.7 1.4 0l.4 1.2c.1.2.2.4.5.5l1.2.4c.7.2.7 1.2 0 1.4l-1.2.4a.8.8 0 0 0-.5.5l-.4 1.2c-.2.7-1.2.7-1.4 0l-.4-1.2a.8.8 0 0 0-.5-.5l-1.2-.4c-.7-.2-.7-1.2 0-1.4l1.2-.4a.8.8 0 0 0 .5-.5l.4-1.2ZM6.6 15h6.8c1.2 0 2.1.9 2.1 2.1v1.8c0 1.2-.9 2.1-2.1 2.1H6.6a2.1 2.1 0 0 1-2.1-2.1v-1.8c0-1.2.9-2.1 2.1-2.1Z" />
                </svg>
              ),
              (
                <svg key="prototype-build" viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
                  <path fill="currentColor" d="M4.8 4h14.4A2.8 2.8 0 0 1 22 6.8v10.4a2.8 2.8 0 0 1-2.8 2.8H4.8A2.8 2.8 0 0 1 2 17.2V6.8A2.8 2.8 0 0 1 4.8 4Zm-.7 4.2h15.8V6.8a.7.7 0 0 0-.7-.7H4.8a.7.7 0 0 0-.7.7v1.4Zm5.1 7.5a1 1 0 0 0 1.4-1.4L8.3 12l2.3-2.3a1 1 0 1 0-1.4-1.4l-3 3a1 1 0 0 0 0 1.4l3 3Zm5.6 0 3-3a1 1 0 0 0 0-1.4l-3-3a1 1 0 1 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 0 0 1.4 1.4Z" />
                </svg>
              ),
            ];

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: idx * 0.08, duration: 0.55 }}
                className="group rounded-[24px] border border-white/[0.07] bg-[#0B1F4D]/70 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#005BFF]/45 hover:bg-[#0B1F4D] hover:shadow-[0_18px_48px_rgba(0,91,255,0.12)]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#005BFF]/12 text-[#5CA0FF] transition-all group-hover:bg-[#005BFF] group-hover:text-white">
                  {strengthIcons[idx]}
                </div>
                <h4 className="mb-3 text-lg font-bold text-white">{item.title}</h4>
                <p className="text-sm leading-relaxed text-slate-400">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* 3. Skills Matrix */}
      <Section
        eyebrow="Skills Matrix"
        title="技能矩阵"
        desc="按产品构建链路拆分的六组能力，覆盖思考、设计、AI 创作、落地与理论。"
      >
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((group, idx) => {
            const skillIcons = [
              (
                <svg key="product-thinking" viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
                  <path fill="currentColor" d="M5.2 4.2h7.1c1.2 0 2.2 1 2.2 2.2v2.2h4.3c1.1 0 2 .9 2 2v3.8c0 1.1-.9 2-2 2h-1.1v2.8c0 .7-.8 1.1-1.4.7l-4.8-3.5H5.2a2.2 2.2 0 0 1-2.2-2.2V6.4c0-1.2 1-2.2 2.2-2.2Zm1.6 3.1a1 1 0 1 0 0 2h4.6a1 1 0 1 0 0-2H6.8Zm0 4a1 1 0 1 0 0 2h7.8a1 1 0 1 0 0-2H6.8Z" />
                </svg>
              ),
              (
                <svg key="interface-design" viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
                  <path fill="currentColor" d="M4.8 3h14.4A1.8 1.8 0 0 1 21 4.8v14.4a1.8 1.8 0 0 1-1.8 1.8H4.8A1.8 1.8 0 0 1 3 19.2V4.8A1.8 1.8 0 0 1 4.8 3Zm.7 4.5h13V5.7a.4.4 0 0 0-.4-.4H5.9a.4.4 0 0 0-.4.4v1.8Zm0 2.2v8.4c0 .2.2.4.4.4h4.3V9.7H5.5Zm6.9 0v8.8h5.7c.2 0 .4-.2.4-.4V9.7h-6.1Z" />
                </svg>
              ),
              (
                <svg key="visual-motion" viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
                  <path fill="currentColor" d="M12 3a9 9 0 0 0 0 18h.7c1 0 1.6-1.1 1.1-2-.5-.8.1-1.8 1.1-1.8h1.4A4.7 4.7 0 0 0 21 12.5C21 7.3 17 3 12 3ZM7.4 12.9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm2.6-4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm2.6 4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" />
                </svg>
              ),
              (
                <svg key="ai-creation" viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
                  <path fill="currentColor" d="M8.5 3.1c.3-.8 1.5-.8 1.8 0l.7 2.2c.1.3.3.5.6.6l2.2.7c.8.3.8 1.5 0 1.8l-2.2.7c-.3.1-.5.3-.6.6l-.7 2.2c-.3.8-1.5.8-1.8 0l-.7-2.2a1 1 0 0 0-.6-.6L5 8.4c-.8-.3-.8-1.5 0-1.8l2.2-.7c.3-.1.5-.3.6-.6l.7-2.2Zm7.8 8.6c.2-.7 1.2-.7 1.4 0l.4 1.3c.1.2.2.4.5.5l1.3.4c.7.2.7 1.2 0 1.4l-1.3.4a.8.8 0 0 0-.5.5l-.4 1.3c-.2.7-1.2.7-1.4 0l-.4-1.3a.8.8 0 0 0-.5-.5l-1.3-.4c-.7-.2-.7-1.2 0-1.4l1.3-.4a.8.8 0 0 0 .5-.5l.4-1.3ZM7.2 15.9c.2-.6 1-.6 1.2 0l.3.8c.1.2.2.3.4.4l.8.3c.6.2.6 1 0 1.2l-.8.3a.7.7 0 0 0-.4.4l-.3.8c-.2.6-1 .6-1.2 0l-.3-.8a.7.7 0 0 0-.4-.4l-.8-.3c-.6-.2-.6-1 0-1.2l.8-.3c.2-.1.3-.2.4-.4l.3-.8Z" />
                </svg>
              ),
              (
                <svg key="prototype-building" viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
                  <path fill="currentColor" d="M5 4h14a2 2 0 0 1 2 2v9.3a2 2 0 0 1-2 2h-5.2v1.4h2.5a1 1 0 1 1 0 2H7.7a1 1 0 1 1 0-2h2.5v-1.4H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm.2 3.5v7.4c0 .2.2.4.4.4h12.8c.2 0 .4-.2.4-.4V7.5H5.2Zm3.5 5.8a.9.9 0 0 1-.6-1.5l1.3-1.3-1.3-1.3A.9.9 0 0 1 9.4 8l1.9 1.9c.4.4.4.9 0 1.3l-1.9 1.9c-.2.2-.4.2-.7.2Zm4.5 0a.9.9 0 0 1 0-1.8h2.5a.9.9 0 1 1 0 1.8h-2.5Z" />
                </svg>
              ),
              (
                <svg key="design-theory" viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
                  <path fill="currentColor" d="M12 3 4.2 7.1a1.3 1.3 0 0 0 0 2.3L12 13.5l7.8-4.1a1.3 1.3 0 0 0 0-2.3L12 3Zm-7.5 9.2 7.1 3.7c.3.2.6.2.9 0l7.1-3.7a1 1 0 1 1 .9 1.8l-8 4.2c-.3.2-.6.2-.9 0l-8-4.2a1 1 0 0 1 .9-1.8Zm0 3.7 7.1 3.7c.3.2.6.2.9 0l7.1-3.7a1 1 0 1 1 .9 1.8l-8 4.2c-.3.2-.6.2-.9 0l-8-4.2a1 1 0 0 1 .9-1.8Z" />
                </svg>
              ),
            ];

            return (
              <motion.div
                key={group.en}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: idx * 0.06, duration: 0.5 }}
                className="rounded-[24px] border border-white/[0.07] bg-[#0B1F4D]/65 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#005BFF]/45 hover:bg-[#0B1F4D]"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#005BFF]/15 text-[#5CA0FF]">
                    {skillIcons[idx]}
                  </div>
                  <span className="text-xs font-semibold tracking-[0.22em] text-white/25">0{idx + 1}</span>
                </div>
                <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.26em] text-[#5CA0FF]">{group.en}</div>
                <h5 className="mb-4 text-lg font-bold text-white">{group.cn}</h5>
                <div className="flex flex-wrap gap-2">
                  {group.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/[0.07] bg-white/[0.03] px-3 py-1 text-xs text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* 4. Work Experience */}
      <Section
        eyebrow="Work Experience"
        title="工作经历"
        desc="从室内设计助理到 UI 设计师，逐步进入互联网产品设计与 AI 辅助创作。"
      >
        <div className="relative">
          <div className="absolute left-[15px] top-2 bottom-2 hidden w-px bg-gradient-to-b from-[#005BFF]/40 via-white/[0.06] to-transparent md:block" />
          <div className="flex flex-col gap-6">
            {WORK_EXPERIENCE.map((job, idx) => (
              <motion.div
                key={job.company + job.period}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: idx * 0.08, duration: 0.55 }}
                className="relative md:pl-12"
              >
                <div className="absolute left-0 top-7 hidden h-8 w-8 items-center justify-center rounded-full border border-[#005BFF]/40 bg-[#071A3D] md:flex">
                  <div className="h-2 w-2 rounded-full bg-[#005BFF] shadow-[0_0_12px_rgba(0,91,255,0.8)]" />
                </div>
                <div className="rounded-[24px] border border-white/[0.07] bg-[#0B1F4D]/70 p-6 md:p-7 transition-all duration-300 hover:border-[#005BFF]/40">
                  <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h4 className="text-lg font-bold text-white md:text-xl">{job.company}</h4>
                      <div className="mt-1 text-sm text-[#5CA0FF]">{job.role}</div>
                    </div>
                    <div className="inline-flex w-fit rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-300">
                      {job.period}
                    </div>
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-slate-400 md:text-base">{job.intro}</p>
                  {job.points.length > 0 && (
                    <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
                      {job.points.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-sm leading-relaxed text-slate-300">
                          <ArrowRight size={14} className="mt-1 shrink-0 text-[#005BFF]" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* 5. Project Experience */}
      <Section
        eyebrow="Project Experience"
        title="项目经历"
        desc="代表性项目实践，覆盖 HMI 智能屏、金融移动端与空间设计场景。"
      >
        <div className="flex flex-col gap-6">
          {PROJECTS.map((proj, idx) => (
            <motion.div
              key={proj.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: idx * 0.08, duration: 0.55 }}
              className="grid grid-cols-1 gap-6 rounded-[26px] border border-white/[0.07] bg-[#0B1F4D]/70 p-6 transition-all duration-300 hover:border-[#005BFF]/40 md:grid-cols-12 md:p-8"
            >
              <div className="md:col-span-4">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#005BFF]/25 bg-[#005BFF]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-blue-200">
                  Project 0{idx + 1}
                </div>
                <h4 className="mb-2 text-xl font-bold leading-tight text-white md:text-2xl">{proj.name}</h4>
                <div className="mb-1 text-sm font-medium text-[#5CA0FF]">{proj.role}</div>
                <div className="text-xs text-slate-500">{proj.period}</div>
              </div>
              <div className="md:col-span-8">
                <p className="mb-4 text-sm leading-relaxed text-slate-300 md:text-base">{proj.intro}</p>
                <ul className="mb-4 space-y-2">
                  {proj.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm leading-relaxed text-slate-400">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#005BFF]" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                {proj.result && (
                  <div className="rounded-xl border border-[#005BFF]/20 bg-[#005BFF]/[0.06] px-4 py-3 text-sm leading-relaxed text-slate-200">
                    <span className="mr-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#5CA0FF]">Result</span>
                    {proj.result}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 6. Education */}
      <Section eyebrow="Education" title="教育经历">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="rounded-[26px] border border-white/[0.07] bg-[#0B1F4D]/70 p-6 md:p-8"
        >
          <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#005BFF]/15 text-[#5CA0FF]">
                <GraduationCap size={22} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white md:text-xl">{PROFILE.school}</h4>
                <div className="mt-1 text-sm text-[#5CA0FF]">{PROFILE.degree}</div>
              </div>
            </div>
            <div className="inline-flex w-fit rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-300">
              2022 - 2026
            </div>
          </div>
          <p className="text-sm leading-relaxed text-slate-400 md:text-base">
            本科阶段积累空间设计、视觉构成、版式表达和审美判断能力。环境艺术设计背景让我对空间关系、视觉层级、动线组织和场景体验更加敏感，也为后续转向产品设计与 AI 辅助构建提供了基础。
          </p>
        </motion.div>
      </Section>

      {/* 7. Achievements */}
      <Section
        eyebrow="Achievements & Growth"
        title="成长与荣誉"
        desc="设计实践、竞赛经历与体育竞技共同塑造了我的执行力与抗压能力。"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <AwardsCard
            icon={Trophy}
            label="Design Practice"
            title="设计实践"
            items={DESIGN_AWARDS}
          />
          <AwardsCard
            icon={Award}
            label="Sports & Teamwork"
            title="体育竞技"
            items={SPORTS_AWARDS}
          />
        </div>
      </Section>

      {/* 8. Manifesto */}
      <section className="px-6 py-16 md:px-20 md:py-20">
        <div className="mx-auto max-w-[1440px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[32px] border border-white/[0.08] bg-gradient-to-br from-[#0B1F4D] to-[#05112B] p-10 md:p-16"
          >
            <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#005BFF]/20 blur-[120px]" />
            <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-cyan-400/10 blur-[120px]" />
            <div className="relative z-10 max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#005BFF]/25 bg-[#005BFF]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-blue-200">
                Personal Manifesto
              </div>
              <h2 className="mb-6 text-3xl font-bold leading-tight md:text-5xl">
                我相信未来会进入<br />全员 Vibe Coding 时代。
              </h2>
              <p className="mb-4 text-base leading-relaxed text-slate-300 md:text-lg">
                当 AI 成为每个人的产品搭建伙伴，产品制作的门槛将被重新定义。一个清晰的想法，经过需求分析、产品设计、AI 生成与原型构建，最终能够快速变成一个真实可体验的数字化产品。
              </p>
              <p className="text-base leading-relaxed text-slate-300 md:text-lg">
                我希望成为连接产品、设计与 AI 的创造者，持续探索从 0 到 1 的产品构建方式。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 9. Contact */}
      <section className="px-6 py-16 md:px-20 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="rounded-[32px] border border-white/[0.08] bg-[#0B1F4D]/70 p-10 text-center md:p-16">
            <h2 className="mb-5 text-3xl font-bold md:text-5xl">Let's build ideas into digital products.</h2>
            <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
              如果你对我的作品、经历或 AI 产品构建方向感兴趣，欢迎与我联系。
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="/works" className="w-full rounded-full bg-[#005BFF] px-8 py-3.5 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-[#2475FF] hover:shadow-[0_12px_30px_rgba(0,91,255,0.32)] sm:w-auto">
                查看作品
              </a>
              <button
                type="button"
                onClick={() => setIsWechatOpen(true)}
                className="w-full rounded-full border border-white/15 bg-white/[0.04] px-8 py-3.5 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.08] sm:w-auto"
              >
                联系我
              </button>
              <button
                type="button"
                onClick={() => copy(PROFILE.email, 'email-cta')}
                className="w-full rounded-full border border-white/15 bg-white/[0.04] px-8 py-3.5 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.08] sm:w-auto"
              >
                {copied === 'email-cta' ? '邮箱已复制' : '复制邮箱'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] py-8">
        <div className="mx-auto max-w-[1440px] px-6 md:px-20">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-base font-semibold text-white">{PROFILE.name}</p>
              <p className="text-sm text-slate-500">{PROFILE.enRole}</p>
            </div>
            <div className="flex gap-3">
              <a href="/" className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 text-sm text-slate-300 transition-all hover:border-[#005BFF]/45 hover:text-white">首页</a>
              <a href="/works" className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 text-sm text-slate-300 transition-all hover:border-[#005BFF]/45 hover:text-white">作品</a>
            </div>
          </div>
        </div>
      </footer>

      {/* WeChat Modal */}
      <AnimatePresence>
        {isWechatOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#020A1A]/80 px-6 backdrop-blur-xl"
            onClick={() => setIsWechatOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.96 }}
              transition={{ duration: 0.24 }}
              className="relative w-full max-w-sm overflow-hidden rounded-[30px] border border-white/10 bg-[#0B1F4D] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.45)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#005BFF]/20 blur-3xl" />
              <button
                type="button"
                onClick={() => setIsWechatOpen(false)}
                className="absolute right-5 top-5 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="关闭弹窗"
              >
                <X size={18} />
              </button>
              <div className="relative z-10">
                <div className="mb-5">
                  <div className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#5CA0FF]">WeChat</div>
                  <h3 className="text-2xl font-bold text-white">扫码添加微信</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">欢迎交流作品、合作机会与 AI 产品设计相关话题。</p>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-white p-4">
                  <ImageWithFallback src={wechatQr} alt="覃彦涛微信二维码" className="aspect-square w-full rounded-[18px] object-cover" />
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => copy(PROFILE.email, 'modal-email')}
                    className="rounded-full bg-[#005BFF] px-4 py-3 text-sm font-medium text-white transition-all hover:bg-[#2475FF]"
                  >
                    {copied === 'modal-email' ? '邮箱已复制' : '复制邮箱'}
                  </button>
                  <button
                    type="button"
                    onClick={() => copy('15505658467', 'modal-wechat')}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white transition-all hover:bg-white/10"
                  >
                    {copied === 'modal-wechat' ? '微信号已复制' : '复制微信号'}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ---------- helpers ----------

function Section({
  eyebrow,
  title,
  desc,
  children,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="px-6 py-16 md:px-20 md:py-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-10 max-w-3xl md:mb-14">
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#005BFF]">{eyebrow}</h3>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">{title}</h2>
          {desc && <p className="text-base leading-relaxed text-slate-400 md:text-lg">{desc}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.03] p-3">
      <Icon size={16} className="mt-0.5 shrink-0 text-[#5CA0FF]" />
      <div className="flex-1">
        <div className="text-xs uppercase tracking-wider text-slate-500">{label}</div>
        <div className="text-sm font-medium text-white">{value}</div>
      </div>
    </div>
  );
}

function AwardsCard({
  icon: Icon,
  label,
  title,
  items,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  title: string;
  items: string[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55 }}
      className="rounded-[26px] border border-white/[0.07] bg-[#0B1F4D]/70 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#005BFF]/45"
    >
      <div className="mb-6 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#005BFF]/15 text-[#5CA0FF]">
          <Icon size={22} />
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#5CA0FF]">{label}</div>
          <h4 className="mt-1 text-lg font-bold text-white">{title}</h4>
        </div>
      </div>
      <ul className="space-y-3">
        {items.map((item, idx) => (
          <li key={item} className="flex items-start gap-3 rounded-xl border border-white/[0.055] bg-white/[0.03] p-3">
            <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#005BFF]/15 text-xs font-semibold text-[#5CA0FF]">
              {String(idx + 1).padStart(2, '0')}
            </span>
            <span className="text-sm leading-relaxed text-slate-300">{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
