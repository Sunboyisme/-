import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, 
  FileSearch, 
  Network, 
  Layers, 
  PenTool, 
  Sparkles, 
  ArrowRight, 
  ArrowUpRight, 
  BarChart2, 
  Menu,
  X,
  Code,
  Brain,
  Layout,
  Palette,
  Trophy,
  Medal,
  Star,
  Circle
} from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { AboutPage } from './components/AboutPage';
import avatarImg from '../imports/1M__.png';
import img1 from '../imports/HMI1.png';
import hmi2 from '../imports/HMI2.png';
import hmi3 from '../imports/HMI3.png';
import hmi4 from '../imports/HMI4.png';
import hmi55 from '../imports/HMI5.5.png';
import hmi5 from '../imports/HMI5.png';
import hmi6 from '../imports/HMI6-1.png';
import hmi7 from '../imports/HMI7.png';
import hmi8 from '../imports/HMI8.png';
import hmi9 from '../imports/HMI9.png';
import hmi10 from '../imports/HMI10.png';
import hmi11 from '../imports/HMI11.png';
import hmi12 from '../imports/HMI12.png';
import hmi13 from '../imports/HMI13.png';
import hmi14 from '../imports/HMI14.png';
import hmi15 from '../imports/HMI15.png';
import hmi16 from '../imports/HMI16.png';
import hmi17 from '../imports/HMI17.png';
import hmi18 from '../imports/HMI18.png';
import img2 from '../imports/B_1.png';
import img3 from '../imports/___1.png';
import mascotXiaoyu from '../imports/__1.png';
import wechatQr from '../imports/__-1.jpg';

// --- DATA ---

const NAV_LINKS = ['首页', '关于我', '作品', '技能', '经历', '联系我'];


const FilledCapabilityIcon = ({ type }: { type: string }) => {
  const base = "relative h-10 w-10 rounded-xl bg-[#005BFF]/12 transition-all duration-300 group-hover:bg-[#005BFF]";
  const shape = "absolute bg-[#005BFF] transition-colors duration-300 group-hover:bg-white";

  if (type === "insight") {
    return (
      <div className={base}>
        <div className={`${shape} left-[9px] top-[9px] h-[22px] w-[22px] rounded-full`}></div>
        <div className="absolute left-[15px] top-[15px] h-2.5 w-2.5 rounded-full bg-[#071A3D] transition-colors duration-300 group-hover:bg-[#005BFF]"></div>
      </div>
    );
  }

  if (type === "interface") {
    return (
      <div className={base}>
        <div className={`${shape} left-[9px] top-[9px] h-[9px] w-[22px] rounded-md`}></div>
        <div className={`${shape} left-[9px] top-[21px] h-[10px] w-[10px] rounded-md opacity-70 group-hover:opacity-100`}></div>
        <div className={`${shape} right-[9px] top-[21px] h-[10px] w-[10px] rounded-md opacity-70 group-hover:opacity-100`}></div>
      </div>
    );
  }

  if (type === "ai") {
    return (
      <div className={base}>
        <div className={`${shape} left-[14px] top-[8px] h-3 w-3 rounded-full`}></div>
        <div className={`${shape} left-[8px] bottom-[9px] h-3 w-3 rounded-full opacity-70 group-hover:opacity-100`}></div>
        <div className={`${shape} right-[8px] bottom-[9px] h-3 w-3 rounded-full opacity-70 group-hover:opacity-100`}></div>
      </div>
    );
  }

  return (
    <div className={base}>
      <div className={`${shape} left-[10px] top-[9px] h-[22px] w-[20px] rounded-lg`}></div>
      <div className="absolute left-[14px] top-[15px] h-1.5 w-3 rounded-full bg-[#071A3D] transition-colors duration-300 group-hover:bg-[#005BFF]"></div>
      <div className="absolute left-[14px] top-[22px] h-1.5 w-2 rounded-full bg-[#071A3D] transition-colors duration-300 group-hover:bg-[#005BFF]"></div>
    </div>
  );
};

const FEATURED_WORKS = [
  {
    title: '智能座舱 HMI 视觉系统',
    tags: 'HMI / UI Design / Motion',
    desc: '结合未来出行场景，打造清晰高效、科技感十足的车载人机交互与视觉体验。',
    img: img1
  },
  {
    title: '吉祥小羽 IP 形象设计',
    tags: 'IP Design / Character / Visual',
    desc: '围绕亲和、喜庆与年轻化表达，打造具有记忆点的吉祥物 IP 形象与作品集视觉封面。',
    img: mascotXiaoyu
  }
];


const HMI_CASE_IMAGES = [
  { src: hmi2, phase: 'Project Structure', title: '项目目录', desc: '以「前期分析 / 概念设计 / 视觉设计」组织完整设计链路，让项目过程清晰可追溯。' },
  { src: hmi3, phase: 'Background', title: '项目背景', desc: '围绕未来 HMI 体验、行业智能化趋势与用户核心痛点，明确设计目标与方向。' },
  { src: hmi4, phase: 'User Research', title: '用户画像', desc: '拆分极客玩家、都市白领、家庭顶梁柱三类典型人群，提炼不同驾驶场景下的痛点与目标。' },
  { src: hmi5, phase: 'Competitive Analysis', title: '竞品分析', desc: '对比特斯拉、蔚来、小鹏等车机体验，梳理信息层级、交互效率与情感化表达的机会点。' },
  { src: hmi55, phase: 'Mood Board', title: '情绪版', desc: '以科技、未来、品质作为视觉关键词，建立深色座舱场景下的整体情绪基调。' },
  { src: hmi6, phase: 'Design System', title: '设计规范', desc: '沉淀颜色、字体与层级规范，保证 HMI 界面在复杂信息环境中的一致性与可读性。' },
  { src: hmi7, phase: 'Icon System', title: '图标设计', desc: '构建系统图标、主导航图标与应用图标，兼顾车载场景下的识别度和科技感。' },
  { src: hmi8, phase: 'AI Assistant', title: '语言助手', desc: '探索语音交互在驾驶过程中的自然入口，通过 AI 助手降低手动操作干扰。' },
  { src: hmi10, phase: 'Home Page', title: '主页布局', desc: '首页采用左信息、右地图的布局，底部承载空调控制，平衡导航、车况与娱乐信息。' },
  { src: hmi11, phase: 'Navigation', title: '导航页', desc: '围绕常用目的地、路线搜索与地图信息展示，强化驾驶过程中的快速选择和低干扰操作。' },
  { src: hmi12, phase: 'Music Module', title: '音乐页', desc: '将播放控制、推荐歌单、当前队列进行分区，兼顾沉浸式娱乐体验与车载操作效率。' },
  { src: hmi13, phase: 'Vehicle Overview', title: '车辆概况', desc: '通过 3D 车辆展示与关键车况卡片，帮助用户快速掌握电量、续航、胎压与车内温度等信息。' },
  { src: hmi14, phase: 'Climate Seats', title: '空调座椅', desc: '以座椅模型和温度控制为视觉中心，提供空调、座椅、舒适模式等高频车控入口。' },
  { src: hmi15, phase: 'Applications', title: '其他应用', desc: '设计应用市场与全部应用页，覆盖娱乐、出行、工具类功能，保证图标系统与导航体验一致。' },
  { src: hmi16, phase: 'Smart Screen', title: '负一屏', desc: '整合快捷开关、亮度音量、系统通知和常用模式，作为驾驶中快速控制的半透明浮层。' },
  { src: hmi17, phase: 'Dashboard', title: '仪表盘', desc: '采用三段式布局突出速度、转向、续航与音乐信息，在安全可读与情绪氛围之间取得平衡。' },
  { src: hmi9, phase: 'Vehicle Display', title: '车载展示', desc: '将最终界面置入真实车载场景，验证视觉氛围、信息密度与座舱适配效果。' },
  { src: hmi18, phase: 'Final Overview', title: '最终总览', desc: '用多屏组合展示完整 HMI 系统，呈现主页、导航、音乐、车控、应用与快捷面板之间的统一视觉语言。' },
];

const MATRIX_SKILLS = [
  {
    enTitle: 'Product Thinking',
    cnTitle: '产品思维',
    icon: Brain,
    desc: '能够从用户场景和业务目标出发，拆解产品问题，并转化为清晰的功能结构和设计目标。',
    tags: ['用户需求理解', '业务目标拆解', '竞品分析', '功能优先级', '产品流程梳理', 'PRD 制作']
  },
  {
    enTitle: 'Interface Design',
    cnTitle: '界面与交互设计',
    icon: Layout,
    desc: '熟悉 Figma、Auto Layout、Variables、Prototyping、UI Kits，能够完成从结构到视觉的界面设计输出。',
    tags: ['信息架构', '用户流程图', '低保真原型', '高保真界面', '设计规范', '组件系统']
  },
  {
    enTitle: 'AI-assisted Creation',
    cnTitle: 'AI 辅助创作',
    icon: Sparkles,
    desc: '使用 AI 工具辅助需求分析、视觉探索、创意发散、提示词优化和设计效率提升。',
    tags: ['ChatGPT', 'Midjourney', 'ComfyUI', 'Gemini', 'Claude', 'Figma Make', 'Sitich', 'AI 视觉生成', 'AI 文案生成', 'AI 动效制作']
  },
  {
    enTitle: 'Prototype Building',
    cnTitle: '原型落地',
    icon: Code,
    desc: '正在学习通过 Vibe Coding、React、Tailwind 等方式，把设计方案转化为可体验、可演示的产品原型。',
    tags: ['Cursor', 'Codex', 'Claud code', 'Vibe Coding', 'React 基础', 'Tailwind 基础', 'HTML / CSS 理解', '前端协作', '可演示原型']
  },
  {
    enTitle: 'Visual & Motion',
    cnTitle: '视觉与动效表达',
    icon: Palette,
    desc: '具备视觉设计和动效表达能力，能够为产品界面、IP 吉祥物、功能图标和品牌视觉提供设计支持。',
    tags: ['Photoshop', 'Illustrator', 'After Effects', '动效制作', 'IP品牌形象', '图标设计', '界面设计', '视觉风格探索']
  },
  {
    enTitle: 'Design System',
    cnTitle: '设计系统意识',
    icon: Layers,
    desc: '关注设计一致性和可复用性，能够搭建设计组件、整理 UI 规范，并提升设计交付效率。',
    tags: ['组件规范', '颜色规范', '字体规范', '间距规范', '状态设计', '交付说明']
  }
];

const PROCESS_STEPS = [
  '需求理解', '用户分析', '信息架构', '交互原型', '高保真设计', '动效与落地'
];

// --- COMPONENTS ---

const Navbar = ({ onContactClick }: { onContactClick: () => void }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#071A3D]/80 backdrop-blur-lg border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 flex items-center justify-between">
        <div className="flex h-10 items-center gap-3 text-xl font-bold leading-none tracking-tight text-white">
          <ImageWithFallback src={avatarImg} alt="覃彦涛" className="h-10 w-10 shrink-0 rounded-full object-cover ring-1 ring-white/10" />
          <span className="flex h-10 items-center">覃彦涛</span>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-5">
            {NAV_LINKS.map((link, idx) => (
              <li key={idx}>
                {link !== '联系我' && (
                  <a href={`#${link}`} className="text-sm text-slate-300 hover:text-[#005BFF] transition-colors duration-200">
                    {link}
                  </a>
                )}
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={onContactClick}
            className="bg-[#005BFF] text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:bg-[#2475FF] hover:shadow-[0_0_15px_rgba(0,91,255,0.4)]"
          >
            联系我
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[#0B1F4D] border-b border-white/10 py-6 px-6 flex flex-col gap-4 shadow-2xl md:hidden"
          >
            {NAV_LINKS.map((link, idx) => (
              <a
                key={idx}
                href={`#${link}`}
                onClick={(event) => {
                  setMobileMenuOpen(false);
                  if (link === '联系我') {
                    event.preventDefault();
                    onContactClick();
                  }
                }}
                className="text-slate-300 text-lg hover:text-[#005BFF] transition-colors"
              >
                {link}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onContactClick();
              }}
              className="bg-[#005BFF] text-white px-6 py-3 rounded-full font-medium mt-4 w-full text-center"
            >
              联系我
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const HeroVisual = () => (
  <div className="relative w-full h-full min-h-[400px] md:min-h-[500px] flex items-center justify-center">
    {/* Abstract background glow */}
    <motion.div 
      animate={{ scale: [1, 1.05, 1], opacity: [0.15, 0.25, 0.15] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-[#005BFF] rounded-full blur-[100px] md:blur-[140px]"
    />

    {/* Main wireframe card */}
    <motion.div
      initial={{ y: 30, opacity: 0, rotateX: 10, rotateY: -15 }}
      animate={{ y: 0, opacity: 1, rotateX: 15, rotateY: -20 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="absolute z-10 w-[280px] md:w-[380px] h-[200px] md:h-[260px] bg-[#0B1F4D]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-4 md:p-5 flex flex-col gap-3 md:gap-4"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="flex gap-2 mb-1">
        <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
      </div>
      <div className="w-3/4 h-4 md:h-5 bg-white/10 rounded-md"></div>
      <div className="w-1/2 h-3 bg-white/5 rounded-md"></div>
      
      <div className="flex gap-3 md:gap-4 flex-1 mt-2">
        <div className="w-1/3 h-full bg-[#005BFF]/20 border border-[#005BFF]/30 rounded-lg"></div>
        <div className="flex-1 flex flex-col gap-2 md:gap-3">
          <div className="w-full h-1/2 bg-white/5 rounded-lg"></div>
          <div className="w-full h-1/2 bg-white/5 rounded-lg"></div>
        </div>
      </div>
    </motion.div>

    {/* Floating Mobile Wireframe */}
    <motion.div
      initial={{ y: 50, x: 20, opacity: 0 }}
      animate={{ y: 20, x: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className="absolute z-20 right-0 md:-right-8 bottom-4 md:-bottom-10 w-[120px] md:w-[150px] h-[220px] md:h-[280px] bg-[#071A3D]/95 border border-white/10 rounded-[24px] shadow-2xl p-2 md:p-3 flex flex-col gap-2 backdrop-blur-md"
    >
      <div className="w-1/2 h-2.5 md:h-3 mx-auto bg-white/10 rounded-b-md mb-2 md:mb-3"></div>
      <div className="w-full h-20 md:h-28 bg-[#005BFF]/10 rounded-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#005BFF]/20 to-transparent"></div>
      </div>
      <div className="w-3/4 h-2 md:h-2.5 bg-white/20 rounded-full mt-2"></div>
      <div className="w-1/2 h-2 md:h-2.5 bg-white/10 rounded-full"></div>
      <div className="w-full h-10 bg-white/5 rounded-lg mt-auto"></div>
    </motion.div>

    {/* Floating Data Widget */}
    <motion.div
      initial={{ y: -30, x: -20, opacity: 0 }}
      animate={{ y: -60, x: -40, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="absolute z-30 left-2 md:-left-12 top-10 md:top-20 w-[140px] md:w-[180px] p-3 md:p-4 bg-[#0B1F4D]/90 border border-white/10 rounded-xl shadow-xl backdrop-blur-md"
    >
      <div className="flex items-center justify-between mb-3 md:mb-4">
        <div className="w-1/2 h-2 bg-white/20 rounded-full"></div>
        <BarChart2 size={14} className="text-[#005BFF]" />
      </div>
      <div className="flex items-end gap-1 md:gap-2 h-10 md:h-12">
        <div className="flex-1 bg-white/10 rounded-[2px] h-[40%]"></div>
        <div className="flex-1 bg-white/10 rounded-[2px] h-[70%]"></div>
        <div className="flex-1 bg-[#005BFF] rounded-[2px] h-[100%] shadow-[0_0_12px_rgba(0,91,255,0.6)]"></div>
        <div className="flex-1 bg-white/10 rounded-[2px] h-[60%]"></div>
        <div className="flex-1 bg-white/10 rounded-[2px] h-[80%]"></div>
      </div>
    </motion.div>
  </div>
);

// --- MAIN APP ---

function HomePage() {
  const [isWechatOpen, setIsWechatOpen] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const copyContact = async (value: string, type: string) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(value);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = value;
        textArea.style.position = 'fixed';
        textArea.style.left = '-9999px';
        textArea.style.top = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
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
      <Navbar onContactClick={() => setIsWechatOpen(true)} />

      {/* Hero Section */}
      <section id="首页" className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-20 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start z-10"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#005BFF]/10 border border-[#005BFF]/20 text-[#005BFF] text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-[#005BFF] mr-2 animate-pulse"></span>
              Available for new opportunities
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 leading-[1.1] font-[Alibaba_PuHuiTi_3.0]">
              覃彦涛<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">Product Designer</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-slate-300 font-medium mb-6">关注产品体验、界面美感与 AI 辅助设计的AI产品设计师</h2>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
              我擅长从用户需求、信息架构、交互原型到高保真界面设计，并结合 AI 工具提升视觉探索、动效表达与前端落地效率。
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a href="/works" className="bg-[#005BFF] hover:bg-[#2475FF] text-white px-8 py-4 rounded-full font-medium transition-all hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,91,255,0.3)]">
                查看作品
              </a>
              <a href="#关于我" className="bg-transparent border border-white/20 hover:border-white/40 hover:bg-white/5 text-white px-8 py-4 rounded-full font-medium transition-all hover:-translate-y-1">
                了解我
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full h-full"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="关于我" className="py-24 md:py-32 px-6 md:px-20 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col items-start"
          >
            <h3 className="text-[#005BFF] font-semibold tracking-wider uppercase mb-2">ABOUT ME</h3>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">你好，我是覃彦涛</h2>
            <h3 className="text-xl md:text-2xl text-slate-300 font-medium mb-2">一名 AI 驱动的产品设计师</h3>
            <div className="text-[#005BFF] font-medium mb-8">AI Product Designer</div>
            
            <p className="text-slate-400 text-lg leading-relaxed mb-6">我拥有设计行业背景，目前正在从界面设计，逐步转向 AI 驱动的产品设计与构建方向。</p>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">我关注的不只是界面是否美观，而是如何从用户需求、产品逻辑、信息架构、交互体验、高保真视觉到 AI 辅助开发，完整推动一个产品从想法走向可使用的产品。</p>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">我相信，未来会逐渐进入一个“全员 Vibe Coding”的时代。在这个时代，产品的起点不再一定是复杂的技术门槛，而是一个清晰的问题、一个真实的需求，或者一个有价值的想法。AI 会成为每个人的产品搭建伙伴，帮助我们完成从需求拆解、产品结构、界面设计、代码生成到原型落地的完整过程。</p>
            
            


            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a href="/works" className="bg-[#005BFF] hover:bg-[#2475FF] hover:shadow-[0_0_20px_rgba(0,91,255,0.4)] text-white px-8 py-3.5 rounded-full font-medium transition-all">
                查看我的作品
              </a>
              <a href="/about" className="bg-transparent border border-white/20 hover:border-white/40 hover:bg-white/5 text-white px-8 py-3.5 rounded-full font-medium transition-all">
                了解更多
              </a>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Personal Info Card */}
            

            {/* Capability Model Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: '产品需求理解',
                  icon: 'insight',
                  desc: '能够从用户需求、业务目标和使用场景出发，拆解产品要解决的问题，并转化为清晰的功能结构。'
                },
                {
                  title: '界面与交互设计',
                  icon: 'interface',
                  desc: '具备 Figma、Auto Layout、Variables、Prototyping 等能力，完成信息架构、交互原型和高保真界面设计。'
                },
                {
                  title: 'AI 辅助创作',
                  icon: 'ai',
                  desc: '使用GPT、Codex、Claude、Gemini、midjoury、ComfyUI、Figma Make、Stitch等 AI 工具，辅助需求分析、视觉探索、文案生成和设计提效。'
                },
                {
                  title: '产品原型落地',
                  icon: 'prototype',
                  desc: '正在学习通过 Vibe Coding、React、Tailwind 等方式，将设计方案转化为可体验、可演示的产品。'
                }
              ].map((cap, idx) => (
                <div key={idx} className="bg-[#0B1F4D]/80 border border-white/5 rounded-[20px] p-6 hover:bg-[#071A3D] hover:border-[#005BFF]/40 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,91,255,0.08)] transition-all duration-300 group">
                  <div className="mb-4">
                    <FilledCapabilityIcon type={cap.icon} />
                  </div>
                  <h4 className="text-base font-semibold text-white mb-2">{cap.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{cap.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* Featured Works */}
      <section id="作品" className="py-24 md:py-32 px-6 md:px-20 max-w-[1440px] mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h3 className="text-[#005BFF] font-semibold tracking-wider uppercase mb-2">Featured Works</h3>
          <h2 className="text-3xl md:text-4xl font-bold">精选项目</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_WORKS.map((work, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group bg-[#0B1F4D] rounded-[20px] border border-white/5 overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:border-white/10 transition-all duration-300 flex flex-col h-full"
            >
              <div className="h-[240px] w-full overflow-hidden relative bg-[#071A3D]">
                <ImageWithFallback 
                  src={work.img} 
                  alt={work.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F4D] to-transparent opacity-60"></div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="text-xs font-medium text-[#005BFF] mb-3">{work.tags}</div>
                <h4 className="text-2xl font-bold mb-3">{work.title}</h4>
                <p className="text-slate-400 leading-relaxed mb-8 flex-1">{work.desc}</p>
                <a href={work.title.includes('HMI') ? '/works/hmi' : work.title.includes('吉祥小羽') ? '/works/xiaoyu' : '/works'} className="flex items-center gap-2 text-sm font-medium text-white group-hover:text-[#005BFF] transition-colors mt-auto w-fit">
                  查看详情 <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Capabilities Anchor Fix */}
      <div id="技能" className="invisible relative -top-32" style={{ pointerEvents: 'none' }}></div>
      {/* Capabilities */}
      <section className="py-24 md:py-32 relative">
        {/* Subtle background texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#005BFF_1px,transparent_1px),linear-gradient(to_bottom,#005BFF_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_100%_100%_at_50%_50%,#000_20%,transparent_80%)] opacity-[0.04] pointer-events-none mix-blend-screen"></div>
        
        <div className="px-6 md:px-20 max-w-[1440px] mx-auto relative z-10">
          <div className="mb-14 md:mb-18 max-w-4xl">
            <h3 className="text-[#005BFF] font-semibold tracking-wider uppercase mb-3 flex items-center gap-3">
              PROCESS <span className="text-white/20 font-normal">|</span> 产品流程地图
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">把一个产品想法推进成可体验原型</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              我不再用零散技能点描述能力，而是以产品构建链路呈现：从需求洞察、结构设计、界面体验、AI 辅助创作，到前端原型和系统化沉淀，形成一条从 0 到 1 的执行路径。
            </p>
          </div>

          <div className="relative w-full overflow-hidden rounded-[36px] border border-white/[0.08] bg-[#0B1F4D]/45 backdrop-blur-2xl px-5 py-6 md:px-8 md:py-9 shadow-[0_30px_100px_rgba(0,0,0,0.22)]">
            <div className="absolute -left-28 top-10 w-[360px] h-[360px] bg-[#005BFF] rounded-full blur-[150px] opacity-20 pointer-events-none"></div>
            <div className="absolute right-0 bottom-0 w-[420px] h-[420px] bg-cyan-400 rounded-full blur-[170px] opacity-[0.08] pointer-events-none"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.05),transparent_42%)] pointer-events-none"></div>

            <div className="relative z-10 mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#005BFF]/25 bg-[#005BFF]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-blue-200">
                  0 → 1 Product Route
                </div>
                <h4 className="text-2xl md:text-3xl font-bold text-white">AI 产品设计工作流</h4>
              </div>
              <p className="max-w-md text-sm md:text-base leading-relaxed text-slate-400">
                每个节点代表一个关键决策动作，最终目标不是展示“会什么”，而是证明“能把什么做出来”。
              </p>
            </div>

            <div className="relative z-10">

              <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5 lg:gap-6">
                {MATRIX_SKILLS.map((skill, idx) => {
                  const flowCopy = [
                    {
                      verb: "Define",
                      desc: "拆解用户场景与真实问题，判断产品机会是否值得继续推进。",
                      output: "问题框架",
                    },
                    {
                      verb: "Structure",
                      desc: "将想法转译为信息架构、页面层级和关键交互路径。",
                      output: "产品骨架",
                    },
                    {
                      verb: "Generate",
                      desc: "利用 AI 扩展内容、方案与视觉方向，提高早期探索效率。",
                      output: "概念方案",
                    },
                    {
                      verb: "Prototype",
                      desc: "把设计判断快速变成可点击、可体验、可验证的前端原型。",
                      output: "体验原型",
                    },
                    {
                      verb: "Express",
                      desc: "通过视觉秩序、动效节奏和微交互强化产品感知。",
                      output: "界面表达",
                    },
                    {
                      verb: "Systemize",
                      desc: "沉淀组件规则、样式语言和复用模式，让作品具备延展性。",
                      output: "设计系统",
                    },
                  ];
                  const current = flowCopy[idx];

                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: idx * 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                      className="group relative min-h-[190px] rounded-[26px] border border-white/[0.08] bg-white/[0.035] p-5 md:p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#005BFF]/45 hover:bg-[#005BFF]/[0.08] hover:shadow-[0_24px_70px_rgba(0,91,255,0.16)]"
                    >
                      <div className="absolute -inset-px rounded-[26px] bg-gradient-to-br from-white/[0.12] via-transparent to-[#005BFF]/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"></div>
                      <div className="relative z-10 flex h-full flex-col">
                        <div className="mb-5 flex items-center justify-between">
                          <div className="relative flex h-11 w-11 items-center justify-center">
                            <div className="absolute inset-0 rounded-2xl bg-[#005BFF]/15 blur-lg transition-all duration-500 group-hover:bg-[#005BFF]/35"></div>
                            {idx === 0 && (
                              <div className="relative h-9 w-9 rounded-[15px] bg-[linear-gradient(135deg,#005BFF,rgba(58,170,255,0.48))] shadow-[0_0_24px_rgba(0,91,255,0.35)] transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105">
                                <div className="absolute left-1.5 top-1.5 h-4 w-4 rounded-full bg-white/85"></div>
                                <div className="absolute bottom-1.5 right-1.5 h-3.5 w-3.5 rounded-lg bg-[#071A3D]/55"></div>
                                <div className="absolute left-[14px] top-[14px] h-2 w-2 rounded-full bg-cyan-200/90"></div>
                              </div>
                            )}
                            {idx === 1 && (
                              <div className="relative grid h-7 w-7 grid-cols-2 gap-1 rotate-45 transition-transform duration-500 group-hover:rotate-[58deg] group-hover:scale-105">
                                <div className="rounded-[7px] bg-[#005BFF] shadow-[0_0_18px_rgba(0,91,255,0.45)]"></div>
                                <div className="rounded-[7px] bg-cyan-300/45"></div>
                                <div className="rounded-[7px] bg-white/15"></div>
                                <div className="rounded-[7px] bg-[#005BFF]/65"></div>
                              </div>
                            )}
                            {idx === 2 && (
                              <div className="relative h-7 w-7 transition-transform duration-500 group-hover:scale-105">
                                <div className="absolute left-1 top-0 h-4 w-5 rounded-t-full bg-[#005BFF] shadow-[0_0_20px_rgba(0,91,255,0.42)]"></div>
                                <div className="absolute left-0 bottom-1 h-4 w-4 rounded-full bg-cyan-300/45"></div>
                                <div className="absolute bottom-0 right-0 h-5 w-3.5 rounded-[12px] bg-[#005BFF]/70"></div>
                                <div className="absolute left-[12px] top-[12px] h-1.5 w-1.5 rounded-full bg-white/85"></div>
                              </div>
                            )}
                            {idx === 3 && (
                              <div className="relative h-7 w-7 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105">
                                <div className="absolute inset-0 rounded-[11px] bg-[#005BFF] [clip-path:polygon(16%_0,100%_0,84%_100%,0_100%)] shadow-[0_0_22px_rgba(0,91,255,0.42)]"></div>
                                <div className="absolute left-1 top-1 h-4 w-4 rounded-lg bg-[#071A3D]/55"></div>
                                <div className="absolute bottom-1 right-1 h-2 w-2 rounded-md bg-cyan-200/90"></div>
                              </div>
                            )}
                            {idx === 4 && (
                              <div className="relative h-7 w-7 transition-transform duration-500 group-hover:rotate-3 group-hover:scale-105">
                                <div className="absolute left-0 top-1.5 h-4.5 w-4.5 rounded-full bg-[#005BFF] shadow-[0_0_20px_rgba(0,91,255,0.42)]"></div>
                                <div className="absolute right-0 top-0 h-4.5 w-4.5 rounded-full bg-cyan-300/45"></div>
                                <div className="absolute bottom-0 right-0.5 h-3 w-5.5 rounded-full bg-[#005BFF]/55"></div>
                              </div>
                            )}
                            {idx === 5 && (
                              <div className="relative h-7 w-7 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:scale-105">
                                <div className="absolute left-1 top-0 h-3 w-5.5 rounded-xl bg-white/25"></div>
                                <div className="absolute left-0 top-2 h-3 w-5.5 rounded-xl bg-cyan-300/35"></div>
                                <div className="absolute bottom-0 right-0 h-3 w-5.5 rounded-xl bg-[#005BFF] shadow-[0_0_20px_rgba(0,91,255,0.42)]"></div>
                                <div className="absolute left-2.5 top-2.5 h-2 w-2 rounded-md bg-white/80"></div>
                              </div>
                            )}
                          </div>
                          <span className="text-xs font-semibold tracking-[0.22em] text-white/25">0{idx + 1}</span>
                        </div>

                        <div className="mb-4">
                          <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.26em] text-[#5CA0FF]">{current.verb}</div>
                          <h5 className="text-lg font-bold text-white leading-tight">{skill.cnTitle}</h5>
                        </div>

                        <p className="mb-4 text-sm leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors">
                          {current.desc}
                        </p>

                        <div className="mt-auto flex items-center justify-between border-t border-white/[0.07] pt-4">
                          <span className="text-xs text-white/35">产出</span>
                          <span className="rounded-full bg-[#005BFF]/12 px-3 py-1 text-xs font-medium text-blue-100 ring-1 ring-[#005BFF]/20">
                            {current.output}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="经历" className="py-24 md:py-32 px-6 md:px-20 max-w-[1440px] mx-auto">
        <div className="mb-16 md:mb-20 max-w-3xl">
          <h3 className="text-[#005BFF] font-semibold tracking-wider uppercase mb-3 flex items-center gap-3">
            EXPERIENCE <span className="text-white/20 font-normal">|</span> 成长经历
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">在设计实践与竞赛经历中持续成长</h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            我的经历不仅来自课堂和作品，也来自设计竞赛、校园活动和体育竞技。<br className="hidden md:block" />
            这些经历让我逐步建立了视觉表达、问题拆解、团队协作、抗压交付和持续学习的能力。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {[
            {
              label: 'Design Practice',
              title: '设计竞赛与创意实践',
              type: 'award',
              items: [
                {
                  meta: '01 / AWARD',
                  title: '中国大学生计算机设计大赛',
                  result: '安徽省二等奖',
                  desc: '训练数字产品表达、视觉呈现、设计逻辑和方案完整度。'
                },
                {
                  meta: '02 / DESIGN',
                  title: '2024、2025届安徽省环境设计大赛',
                  result: '三等奖',
                  desc: '积累空间设计、视觉构成、版式表达和设计方案呈现能力。'
                },
                {
                  meta: '03 / CULTURE',
                  title: '“芜湖有礼”城市文创设计大赛',
                  result: '优秀奖',
                  desc: '提升文化元素提取、创意转化和视觉表达能力。'
                }
              ]
            },
            {
              label: 'Teamwork & Resilience',
              title: '体育竞赛与团队协作',
              type: 'team',
              items: [
                {
                  meta: '01 / TEAM',
                  title: '安徽工程大学羽毛球杯',
                  result: '团体冠军',
                  desc: '积累协作意识、目标感和执行力。'
                },
                {
                  meta: '02 / DOUBLE',
                  title: '芜湖市镜湖区羽毛球男子双打',
                  result: '第三名',
                  desc: '提升配合能力、临场判断和沟通效率。'
                },
                {
                  meta: '03 / LEAGUE',
                  title: '安徽省羽毛球联赛',
                  result: '团体第五名',
                  desc: '锻炼抗压能力、持续投入和团队责任感。'
                },
                {
                  meta: '04 / FOCUS',
                  title: '安徽工程大学羽毛球新生杯男子单打',
                  result: '第二名',
                  desc: '培养专注力、自驱力和稳定发挥能力。'
                }
              ]
            },
            {
              label: 'Learning Journey',
              title: '学习与转型经历',
              type: 'growth',
              items: [
                {
                  meta: '01 / FOUNDATION',
                  title: '环境艺术设计专业背景',
                  result: '',
                  desc: '本科阶段积累空间设计、视觉构成、版式表达和审美判断能力。'
                },
                {
                  meta: '02 / TRANSITION',
                  title: '转向产品设计与 AI 辅助构建',
                  result: '',
                  desc: '逐步学习用户需求、产品结构、界面设计、Figma、AI 工具和 Vibe Coding，探索从产品想法到可体验原型的完整制作流程。'
                }
              ]
            }
          ].map((group, idx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.08 + idx * 0.08, duration: 0.6 }}
              className="group relative overflow-hidden rounded-[26px] border border-white/[0.07] bg-[#0B1F4D]/75 p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#005BFF]/45 hover:bg-[#0B1F4D] hover:shadow-[0_18px_48px_rgba(0,91,255,0.12)]"
            >
              <div className="absolute -right-16 -top-20 h-48 w-48 rounded-full bg-[#005BFF]/10 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative z-10 flex h-full flex-col">
                <div className="mb-8 flex items-start gap-4">
                  <div className="relative h-12 w-12 shrink-0 rounded-2xl bg-[#005BFF]/12 transition-colors duration-300 group-hover:bg-[#005BFF]">
                    {group.type === 'award' && (
                      <>
                        <div className="absolute left-3 top-2.5 h-5 w-6 rounded-t-xl rounded-b-md bg-[#005BFF] transition-colors duration-300 group-hover:bg-white" />
                        <div className="absolute left-[17px] top-[15px] h-2.5 w-2.5 rounded-full bg-[#071A3D] transition-colors duration-300 group-hover:bg-[#005BFF]" />
                        <div className="absolute bottom-2 left-[13px] h-3 w-2.5 rounded-sm bg-[#005BFF]/75 [clip-path:polygon(0_0,100%_0,78%_100%,0_72%)] transition-colors duration-300 group-hover:bg-white/80" />
                        <div className="absolute bottom-2 right-[13px] h-3 w-2.5 rounded-sm bg-[#005BFF]/55 [clip-path:polygon(0_0,100%_0,100%_72%,22%_100%)] transition-colors duration-300 group-hover:bg-white/60" />
                      </>
                    )}
                    {group.type === 'team' && (
                      <>
                        <div className="absolute left-[9px] top-[8px] h-5 w-[13px] rounded-full bg-[#005BFF] transition-colors duration-300 group-hover:bg-white" />
                        <div className="absolute left-[13px] top-[12px] h-3 w-3 rounded-full bg-[#071A3D] transition-colors duration-300 group-hover:bg-[#005BFF]" />
                        <div className="absolute right-[9px] bottom-[8px] h-5 w-[13px] rounded-full bg-[#005BFF]/70 transition-colors duration-300 group-hover:bg-white/75" />
                        <div className="absolute right-[13px] bottom-[12px] h-3 w-3 rounded-full bg-[#071A3D] transition-colors duration-300 group-hover:bg-[#005BFF]" />
                        <div className="absolute left-[19px] top-[18px] h-3 w-3 rounded-full bg-[#005BFF]/90 transition-colors duration-300 group-hover:bg-white/90" />
                      </>
                    )}
                    {group.type === 'growth' && (
                      <>
                        <div className="absolute left-[9px] bottom-[9px] h-[9px] w-[9px] rounded-md bg-[#005BFF]/55 transition-colors duration-300 group-hover:bg-white/55" />
                        <div className="absolute left-[19px] bottom-[17px] h-[10px] w-[10px] rounded-md bg-[#005BFF]/75 transition-colors duration-300 group-hover:bg-white/75" />
                        <div className="absolute right-[9px] top-[9px] h-3 w-3 rounded-md bg-[#005BFF] transition-colors duration-300 group-hover:bg-white" />
                        <div className="absolute left-[13px] top-[13px] h-[22px] w-[22px] rounded-sm border-l-2 border-t-2 border-[#005BFF] transition-colors duration-300 group-hover:border-white [clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]" />
                        <div className="absolute right-[8px] top-[8px] h-2 w-2 rounded-sm bg-[#071A3D] transition-colors duration-300 group-hover:bg-[#005BFF]" />
                      </>
                    )}
                  </div>
                  <div>
                    <div className="mb-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#5CA0FF]">{group.label}</div>
                    <h4 className="text-xl font-bold leading-tight text-white">{group.title}</h4>
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-3">
                  {group.items.map((item) => (
                    <div key={`${group.title}-${item.meta}`} className="rounded-2xl border border-white/[0.055] bg-white/[0.03] p-4 transition-colors duration-300 group-hover:border-white/[0.09]">
                      <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#005BFF]">{item.meta}</div>
                      <h5 className="mb-2 text-sm font-medium leading-snug text-white">
                        {item.title}{item.result && <span className="text-[#5CA0FF]"> {item.result}</span>}
                      </h5>
                      <p className="text-sm leading-relaxed text-slate-400">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section id="联系我" className="py-12 md:py-24 px-6 md:px-20 max-w-[1440px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#0B1F4D] to-[#05112B] border border-white/10 rounded-[32px] p-10 md:p-20 text-center relative overflow-hidden"
        >
          {/* Decorative blur elements */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#005BFF]/20 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#005BFF]/10 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2"></div>

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let’s build better experiences.</h2>
            <p className="text-slate-300 text-lg mb-10 leading-relaxed">
              欢迎查看我的作品，也欢迎与我交流 UI/UX 设计、产品体验和 AI 辅助设计。
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => setIsWechatOpen(true)}
                className="w-full sm:w-auto bg-[#005BFF] hover:bg-[#2475FF] text-white px-10 py-4 rounded-full font-medium transition-all hover:shadow-[0_0_20px_rgba(0,91,255,0.4)]"
              >
                联系我
              </button>
              <a href="/works" className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 text-white px-10 py-4 rounded-full font-medium transition-all">
                查看作品
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] py-8 mt-12 md:mt-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-1">
              <p className="text-base font-semibold text-white">覃彦涛</p>
              <p className="text-sm text-slate-500">AI Product Designer</p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:flex-row md:w-auto md:items-center">
              <a
                href="mailto:1917647483@qq.com"
                onClick={() => copyContact('1917647483@qq.com', 'email')}
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-6 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[#005BFF]/50 hover:bg-[#005BFF] hover:shadow-[0_12px_30px_rgba(0,91,255,0.22)]"
              >
                {copied === 'email' ? '邮箱已复制' : 'Email'}
              </a>

              <a
                href="tel:15505658467"
                onClick={() => copyContact('15505658467', 'phone')}
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-6 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[#005BFF]/50 hover:bg-[#005BFF] hover:shadow-[0_12px_30px_rgba(0,91,255,0.22)]"
              >
                {copied === 'phone' ? '号码已复制' : 'Phone'}
              </a>

              <button
                type="button"
                onClick={() => setIsWechatOpen(true)}
                className="inline-flex h-12 items-center justify-center rounded-full border border-[#005BFF]/35 bg-[#005BFF]/12 px-6 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-[#005BFF] hover:bg-[#005BFF] hover:shadow-[0_12px_30px_rgba(0,91,255,0.26)]"
              >
                WeChat
              </button>
            </div>
          </div>
        </div>
      </footer>

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
              onClick={(event) => event.stopPropagation()}
            >
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#005BFF]/20 blur-3xl" />
              <button
                type="button"
                onClick={() => setIsWechatOpen(false)}
                className="absolute right-5 top-5 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="关闭微信二维码弹窗"
              >
                <X size={18} />
              </button>

              <div className="relative z-10">
                <div className="mb-5">
                  <div className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#5CA0FF]">WeChat</div>
                  <h3 className="text-2xl font-bold text-white">扫码添加微信</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">可以通过微信交流作品、合作机会、工作机会与 AI 产品设计相关话题。</p>
                </div>

                <div className="rounded-[24px] border border-white/10 bg-white p-4">
                  <ImageWithFallback src={wechatQr} alt="覃彦涛微信二维码" className="aspect-square w-full rounded-[18px] object-cover" />
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => copyContact('15505658467', 'wechat')}
                    className="rounded-full bg-[#005BFF] px-4 py-3 text-sm font-medium text-white transition-all hover:bg-[#2475FF]"
                  >
                    {copied === 'wechat' ? '微信号已复制' : '复制微信号'}
                  </button>
                  <button
                    type="button"
                    onClick={() => copyContact('15505658467', 'phone')}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white transition-all hover:bg-white/10"
                  >
                    {copied === 'phone' ? '号码已复制' : '复制手机号'}
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


function HmiDetailPage() {
  const highlights = [
    { label: 'Project Type', value: 'Smart Cockpit HMI / UI System' },
    { label: 'Role', value: 'UI Designer / Visual System' },
    { label: 'Scope', value: 'Research · Concept · UI · Icons' },
    { label: 'Style', value: 'Deep Tech · Future Mobility' },
  ];

  const process = [
    '研究分析：从项目背景、行业趋势、用户画像与竞品体验中提炼 HMI 设计机会。',
    '概念定义：用情绪版明确科技、未来、品质三个关键词，建立统一视觉方向。',
    '系统规范：沉淀色彩、字体、图标、导航状态和应用图标等基础 UI Kits。',
    '场景落地：完成主页、导航、音乐、车控、应用、负一屏与仪表盘等关键页面。',
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#040816] text-white selection:bg-[#00C8FF] selection:text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_16%_10%,rgba(0,200,255,0.28),transparent_30%),radial-gradient(circle_at_82%_8%,rgba(125,72,255,0.20),transparent_28%),radial-gradient(circle_at_50%_90%,rgba(0,91,255,0.12),transparent_35%),linear-gradient(180deg,#050A18_0%,#030613_100%)]" />

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.06] bg-[#050A18]/78 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 md:px-20">
          <a href="/works" className="flex items-center gap-3 text-sm font-medium text-slate-300 transition-colors hover:text-white">
            <ArrowRight size={16} className="rotate-180" /> 返回作品列表
          </a>
          <a href="/" className="flex h-10 items-center gap-3 text-xl font-bold leading-none tracking-tight text-white">
            <ImageWithFallback src={avatarImg} alt="覃彦涛" className="h-10 w-10 shrink-0 rounded-full object-cover ring-1 ring-white/10" />
            <span className="hidden h-10 items-center sm:flex">覃彦涛</span>
          </a>
        </div>
      </header>

      <main className="relative z-10">
        <section className="mx-auto grid max-w-[1440px] gap-10 px-6 pb-16 pt-32 md:px-20 md:pb-24 md:pt-40 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="mb-5 inline-flex rounded-full border border-[#00D9FF]/30 bg-[#00D9FF]/[0.08] shadow-[0_0_28px_rgba(0,217,255,0.12)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-[#7CEBFF]">
              HMI Case Study
            </div>
            <h1 className="mb-6 text-4xl font-black leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              智能座舱 HMI<br />视觉系统
            </h1>
            <p className="mb-8 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
              面向未来车载交互场景，围绕驾驶安全、信息效率与科技情绪表达，完成从前期分析、概念定义、设计规范到关键界面的 HMI 视觉方案探索。
            </p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {highlights.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/[0.07] bg-white/[0.04] p-4 backdrop-blur-md">
                  <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5CA0FF]">{item.label}</div>
                  <div className="text-sm font-medium leading-snug text-white">{item.value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
            <div className="absolute -inset-6 rounded-[40px] bg-[conic-gradient(from_180deg,#00C8FF,#6B4DFF,#00C8FF)] opacity-25 blur-3xl" />
            <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[#071225]/72 shadow-[0_32px_100px_rgba(0,200,255,0.14)]">
              <ImageWithFallback src={hmi18} alt="智能座舱 HMI 系统总览" className="w-full object-cover" />
            </div>
          </motion.div>
        </section>

        <section className="mx-auto max-w-[1440px] px-6 py-10 md:px-20 md:py-16">
          <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
            <div className="rounded-[28px] border border-white/[0.07] bg-[#0B1F4D]/70 p-7 md:p-8">
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#5CA0FF]">Design Goal</div>
              <h2 className="mb-5 text-2xl font-bold md:text-3xl">设计目标</h2>
              <p className="text-sm leading-relaxed text-slate-400 md:text-base">
                通过融合科技感、未来感和实用性，为用户提供超越期待的车机交互体验；同时强化品牌在智能科技领域的视觉语言，解决驾驶场景中高效、便捷、安全的信息获取需求。
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {process.map((item, idx) => (
                <div key={item} className="rounded-[24px] border border-white/[0.07] bg-white/[0.035] p-6">
                  <div className="mb-4 text-4xl font-black text-[#00D9FF]">0{idx + 1}</div>
                  <p className="text-sm leading-relaxed text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-6 py-10 md:px-20 md:py-16">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#5CA0FF]">Case Screens</div>
              <h2 className="text-3xl font-bold md:text-5xl">项目过程与关键页面</h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-slate-400">
              以下内容按照完整案例阅读顺序组织：先讲清楚研究与定位，再展示规范系统，最后进入主页、导航、音乐、车控、应用、负一屏、仪表盘等核心车载场景。
            </p>
          </div>

          <div className="grid grid-cols-1 gap-7">
            {HMI_CASE_IMAGES.map((item, idx) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: Math.min(idx * 0.04, 0.24), duration: 0.55 }}
                className="group overflow-hidden rounded-[32px] border border-white/[0.07] bg-[#0B1F4D]/72 shadow-[0_22px_70px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-1 hover:border-[#005BFF]/45"
              >
                <div className="grid gap-0 lg:grid-cols-[330px_1fr]">
                  <div className="flex flex-col justify-between border-b border-white/[0.07] p-7 lg:border-b-0 lg:border-r lg:p-8">
                    <div>
                      <div className="mb-5 text-5xl font-black text-[#00D9FF]">{String(idx + 1).padStart(2, '0')}</div>
                      <div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#5CA0FF]">{item.phase}</div>
                      <h3 className="mb-4 text-2xl font-bold text-white">{item.title}</h3>
                      <p className="text-sm leading-relaxed text-slate-400">{item.desc}</p>
                    </div>
                    <div className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-slate-300">
                      HMI Design Work <ArrowUpRight size={14} />
                    </div>
                  </div>
                  <div className="bg-[#050B1D] p-3 md:p-5">
                    <ImageWithFallback src={item.src} alt={`HMI 项目 - ${item.title}`} className="w-full rounded-[22px] object-cover transition-transform duration-700 group-hover:scale-[1.012]" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-6 pb-20 pt-8 md:px-20 md:pb-28">
          <div className="overflow-hidden rounded-[34px] border border-[#005BFF]/25 bg-[#005BFF]/10 p-8 md:p-10">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <div className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#7CEBFF]">Case Reflection</div>
                <h2 className="mb-3 text-2xl font-bold md:text-3xl">从单页界面到完整 HMI 系统的设计练习</h2>
                <p className="max-w-3xl text-sm leading-relaxed text-slate-300 md:text-base">
                  这个项目重点训练了我对复杂车载信息的组织能力：既要保持科技感和沉浸氛围，也要控制驾驶场景中的信息密度与操作负担。通过研究分析、规范沉淀和多场景页面延展，我逐步建立了更系统的 HMI 视觉设计方法。
                </p>
              </div>
              <a href="/works" className="inline-flex items-center justify-center rounded-full bg-[#005BFF] px-7 py-3.5 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-[#2475FF] hover:shadow-[0_12px_30px_rgba(0,91,255,0.32)]">
                返回作品列表
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}


function XiaoyuDetailPage() {
  const projectInfo = [
    { label: 'Project Type', value: 'IP Character / Visual Design' },
    { label: 'Role', value: 'IP 形象与视觉封面设计' },
    { label: 'Tone', value: '亲和 · 喜庆 · 年轻化' },
    { label: 'Output', value: '角色形象 / 作品集封面 / 视觉延展' },
  ];

  const designPoints = [
    {
      title: '角色记忆点',
      desc: '以大头比例、圆润脸型、星光眼睛和高饱和腮红建立第一眼亲和力，让角色更容易被记住。',
    },
    {
      title: '节庆情绪表达',
      desc: '通过红色福卷、暖橙背景与金色头饰强化吉祥、祝福、喜庆的情绪，适合新年或品牌活动场景。',
    },
    {
      title: '年轻化视觉语言',
      desc: '使用 3D 软萌质感、放大构图和强标题排版，让 IP 不只可爱，也更适合社媒传播和作品集展示。',
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#2A0B12] text-white selection:bg-[#FF7A45] selection:text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(255,186,97,0.34),transparent_30%),radial-gradient(circle_at_88%_14%,rgba(255,83,83,0.24),transparent_32%),radial-gradient(circle_at_50%_100%,rgba(255,122,69,0.18),transparent_38%),linear-gradient(180deg,#4A1414_0%,#1C0710_58%,#10040A_100%)]" />

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#FFD19A]/[0.12] bg-[#2A0B12]/78 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 md:px-20">
          <a href="/works" className="flex items-center gap-3 text-sm font-medium text-orange-50/78 transition-colors hover:text-white">
            <ArrowRight size={16} className="rotate-180" /> 返回作品列表
          </a>
          <a href="/" className="flex h-10 items-center gap-3 text-xl font-bold leading-none tracking-tight text-white">
            <ImageWithFallback src={avatarImg} alt="覃彦涛" className="h-10 w-10 shrink-0 rounded-full object-cover ring-1 ring-white/10" />
            <span className="hidden h-10 items-center sm:flex">覃彦涛</span>
          </a>
        </div>
      </header>

      <main className="relative z-10">
        <section className="mx-auto grid max-w-[1440px] gap-10 px-6 pb-16 pt-32 md:px-20 md:pb-24 md:pt-40 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="mb-5 inline-flex rounded-full border border-[#FFB15F]/30 bg-[#FF8A5B]/[0.12] shadow-[0_0_32px_rgba(255,138,91,0.16)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-[#FFB191]">
              IP Design Case
            </div>
            <h1 className="mb-6 text-4xl font-black leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              吉祥小羽<br />IP 形象设计
            </h1>
            <p className="mb-8 max-w-2xl text-base leading-relaxed text-orange-50/78 md:text-lg">
              围绕「吉祥、亲和、年轻化」的视觉目标，设计一个适合节庆传播与作品集展示的 3D 吉祥物形象。角色以柔软圆润的形态、明亮表情和喜庆道具建立情绪连接。
            </p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {projectInfo.map((item) => (
                <div key={item.label} className="rounded-2xl border border-[#FFD19A]/[0.14] bg-[#FFD19A]/[0.06] p-4 backdrop-blur-md">
                  <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#FFB191]">{item.label}</div>
                  <div className="text-sm font-medium leading-snug text-white">{item.value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
            <div className="absolute -inset-6 rounded-[40px] bg-[conic-gradient(from_160deg,#FFD166,#FF7A45,#FF4D5A,#FFD166)] opacity-28 blur-3xl" />
            <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[#3A1118]/72 shadow-[0_32px_100px_rgba(0,0,0,0.42)]">
              <ImageWithFallback src={mascotXiaoyu} alt="吉祥小羽 IP 形象设计封面" className="w-full object-cover" />
            </div>
          </motion.div>
        </section>

        <section className="mx-auto max-w-[1440px] px-6 py-10 md:px-20 md:py-16">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-[28px] border border-[#FFD19A]/[0.13] bg-[#3A1118]/72 p-7 md:p-8">
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#FFB191]">Design Goal</div>
              <h2 className="mb-5 text-2xl font-bold md:text-3xl">设计目标</h2>
              <p className="text-sm leading-relaxed text-orange-100/55 md:text-base">
                不只是画一个可爱的角色，而是让 IP 能承担品牌记忆、节庆氛围和视觉传播的作用。整体设计需要在亲和力、识别度和商业应用感之间取得平衡。
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {designPoints.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ delay: idx * 0.08, duration: 0.5 }}
                  className="rounded-[24px] border border-[#FFD19A]/[0.12] bg-[#FFD19A]/[0.055] p-6"
                >
                  <div className="mb-4 text-4xl font-black text-[#FF8A5B]">0{idx + 1}</div>
                  <h3 className="mb-3 text-lg font-bold text-white">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-orange-100/55">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-6 py-10 md:px-20 md:py-16">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#FFB191]">Visual Analysis</div>
              <h2 className="text-3xl font-bold md:text-5xl">关键视觉拆解</h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-orange-100/55">
              这个作品的重点在于把 IP 形象、封面排版和节庆氛围放在同一张视觉里表达，让角色有故事感，也能作为作品集入口图使用。
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-[28px] border border-[#FFD19A]/[0.13] bg-[#3A1118]/72 p-7">
              <div className="mb-3 text-sm font-semibold text-[#FFB191]">Character</div>
              <h3 className="mb-4 text-2xl font-bold">角色形象</h3>
              <p className="text-sm leading-relaxed text-orange-100/55">大面积白色软萌身体形成干净主体，搭配高光眼睛和张嘴微笑，传达积极、热情、友好的角色性格。</p>
            </div>
            <div className="rounded-[28px] border border-[#FFD19A]/[0.13] bg-[#3A1118]/72 p-7">
              <div className="mb-3 text-sm font-semibold text-[#FFB191]">Composition</div>
              <h3 className="mb-4 text-2xl font-bold">封面构图</h3>
              <p className="text-sm leading-relaxed text-orange-100/55">采用角色右侧放大裁切，左侧保留标题信息区，形成强视觉冲击，也让画面具备作品集封面的展示属性。</p>
            </div>
            <div className="rounded-[28px] border border-[#FFD19A]/[0.13] bg-[#3A1118]/72 p-7">
              <div className="mb-3 text-sm font-semibold text-[#FFB191]">Emotion</div>
              <h3 className="mb-4 text-2xl font-bold">情绪氛围</h3>
              <p className="text-sm leading-relaxed text-orange-100/55">暖橙到红色的背景与福字道具强化节庆情绪，点阵纹理和大字排版让整体更年轻、更有传播感。</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-6 pb-20 pt-8 md:px-20 md:pb-28">
          <div className="overflow-hidden rounded-[34px] border border-[#FFB15F]/30 bg-[#FF8A5B]/[0.12] shadow-[0_0_32px_rgba(255,138,91,0.16)] p-8 md:p-10">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <div className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#FFB191]">Case Reflection</div>
                <h2 className="mb-3 text-2xl font-bold md:text-3xl">一次从角色到传播视觉的 IP 设计练习</h2>
                <p className="max-w-3xl text-sm leading-relaxed text-orange-50/78 md:text-base">
                  这个项目让我更关注 IP 设计中的情绪识别和应用场景：角色本身需要有记忆点，同时也要能适配封面、活动视觉、社媒传播等不同载体。
                </p>
              </div>
              <a href="/works" className="inline-flex items-center justify-center rounded-full bg-[#FF6B3D] px-7 py-3.5 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-[#FF835C] hover:shadow-[0_12px_30px_rgba(255,107,61,0.34)]">
                返回作品列表
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function WorksPage() {
  const categories = ['全部', 'HMI', 'IP Design'];
  const [activeCategory, setActiveCategory] = useState('全部');
  const works = activeCategory === '全部'
    ? FEATURED_WORKS
    : FEATURED_WORKS.filter((work) => work.tags.includes(activeCategory));

  return (
    <div className="min-h-screen bg-[#071A3D] text-white selection:bg-[#005BFF] selection:text-white font-sans overflow-x-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(0,91,255,0.22),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(103,232,249,0.09),transparent_28%)] pointer-events-none" />

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.06] bg-[#071A3D]/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 md:px-20">
          <a href="/" className="flex h-10 items-center gap-3 text-xl font-bold leading-none tracking-tight text-white">
            <ImageWithFallback src={avatarImg} alt="覃彦涛" className="h-10 w-10 shrink-0 rounded-full object-cover ring-1 ring-white/10" />
            <span className="flex h-10 items-center">覃彦涛</span>
          </a>
          <a href="/" className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-slate-200 transition-all hover:border-[#005BFF]/45 hover:bg-[#005BFF]/10 hover:text-white">
            返回首页
          </a>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-[1440px] px-6 pb-20 pt-32 md:px-20 md:pb-28 md:pt-36">
        <div className="mb-12 max-w-4xl md:mb-16">
          <div className="mb-4 inline-flex rounded-full border border-[#005BFF]/25 bg-[#005BFF]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-blue-200">
            Works Collection
          </div>
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">作品列表</h1>
          <p className="max-w-3xl text-lg leading-relaxed text-slate-400">
            这里会持续收录我在 HMI、IP 形象、视觉系统与 AI 产品设计方向的项目实践。未来新增作品时，只需要继续维护作品数据，作品页会自动生成新的项目卡片。
          </p>
        </div>

        <div className="mb-10 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all ${activeCategory === category ? 'border-[#005BFF] bg-[#005BFF] text-white shadow-[0_12px_32px_rgba(0,91,255,0.24)]' : 'border-white/10 bg-white/[0.035] text-slate-300 hover:border-[#005BFF]/45 hover:bg-[#005BFF]/10 hover:text-white'}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
          {works.map((work, idx) => (
            <motion.div
              key={work.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08, duration: 0.55 }}
              className="group overflow-hidden rounded-[28px] border border-white/[0.07] bg-[#0B1F4D]/75 transition-all duration-300 hover:-translate-y-2 hover:border-[#005BFF]/45 hover:bg-[#0B1F4D] hover:shadow-[0_24px_70px_rgba(0,0,0,0.32)]"
            >
              <div className="relative h-[250px] overflow-hidden bg-[#071A3D]">
                <ImageWithFallback src={work.img} alt={work.title} className="h-full w-full object-cover opacity-85 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F4D] to-transparent opacity-80" />
                <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-[#071A3D]/70 px-3 py-1 text-xs font-medium text-blue-100 backdrop-blur-md">
                  {work.tags.split(' / ')[0]}
                </div>
              </div>
              <div className="p-7">
                <div className="mb-3 text-xs font-medium text-[#5CA0FF]">{work.tags}</div>
                <h2 className="mb-3 text-2xl font-bold leading-snug text-white">{work.title}</h2>
                <p className="mb-8 text-sm leading-relaxed text-slate-400">{work.desc}</p>
                <a href={work.title.includes('HMI') ? '/works/hmi' : work.title.includes('吉祥小羽') ? '/works/xiaoyu' : '/works'} className="flex items-center gap-2 text-sm font-medium text-white transition-colors group-hover:text-[#5CA0FF]">
                  查看详情 <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}

const router = createBrowserRouter([
  { path: '/', Component: HomePage },
  { path: '/works', Component: WorksPage },
  { path: '/works/hmi', Component: HmiDetailPage },
  { path: '/works/xiaoyu', Component: XiaoyuDetailPage },
  { path: '/about', Component: AboutPage },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
