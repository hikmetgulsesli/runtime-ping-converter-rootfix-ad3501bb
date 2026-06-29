// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Insights - Runtime Ping Converter Rootfix
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowDown, ArrowUp, BadgeHelp, BarChart3, CheckCircle2, CircleAlert, CircleHelp, Cpu, Download, LayoutDashboard, ListFilter, Pencil, Plus, Settings, TrendingUp, TriangleAlert } from "lucide-react";


export type InsightsRuntimePingConverterRootfixActionId = "settings-1" | "help-2" | "new-record-3" | "filter-insights-4" | "export-summary-5" | "1h-6" | "24h-7" | "7d-8" | "operations-1" | "board-2" | "insights-3" | "operations-4" | "board-5" | "insights-6" | "editor-7";

export interface InsightsRuntimePingConverterRootfixProps {
  actions?: Partial<Record<InsightsRuntimePingConverterRootfixActionId, () => void>>;

}

export function InsightsRuntimePingConverterRootfix({ actions }: InsightsRuntimePingConverterRootfixProps) {
  return (
    <>
      {/* TopNavBar (Mobile Only) */}
      <header className="md:hidden bg-surface dark:bg-surface-container-lowest border-b border-outline-variant dark:border-outline docked full-width top w-full z-50">
      <div className="flex justify-between items-center w-full px-lg max-w-[1600px] mx-auto h-16">
      <div className="flex items-center gap-sm">
      <span className="text-headline-md font-headline-md font-extrabold text-primary dark:text-primary-fixed">Runtime Ping Converter Rootfix</span>
      </div>
      <div className="flex gap-sm">
      <button className="text-on-surface-variant hover:bg-surface-container-low dark:hover:bg-surface-container-high transition-colors p-sm rounded-full" type="button" aria-label="Settings" data-action-id="settings-1" onClick={actions?.["settings-1"]}>
      <Settings aria-hidden={true} focusable="false" />
      </button>
      <button className="text-on-surface-variant hover:bg-surface-container-low dark:hover:bg-surface-container-high transition-colors p-sm rounded-full" type="button" aria-label="Help" data-action-id="help-2" onClick={actions?.["help-2"]}>
      <CircleHelp aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      <nav className="flex px-md no-scrollbar gap-md pb-xs overflow-x-visible md:overflow-x-auto flex-col md:flex-row items-stretch md:items-start">
      <a className="text-secondary dark:text-secondary-fixed-dim font-body-md whitespace-nowrap py-sm hover:bg-surface-container-low dark:hover:bg-surface-container-high transition-colors rounded-t-lg px-sm" href="#" data-action-id="operations-1" onClick={(event) => { event.preventDefault(); actions?.["operations-1"]?.(); }}>Operations</a>
      <a className="text-secondary dark:text-secondary-fixed-dim font-body-md whitespace-nowrap py-sm hover:bg-surface-container-low dark:hover:bg-surface-container-high transition-colors rounded-t-lg px-sm" href="#" data-action-id="board-2" onClick={(event) => { event.preventDefault(); actions?.["board-2"]?.(); }}>Board</a>
      <a className="text-primary dark:text-primary-fixed font-bold border-b-2 border-primary dark:border-primary-fixed pb-1 whitespace-nowrap py-sm hover:bg-surface-container-low dark:hover:bg-surface-container-high transition-colors px-sm" href="#" data-action-id="insights-3" onClick={(event) => { event.preventDefault(); actions?.["insights-3"]?.(); }}>Insights</a>
      </nav>
      </header>
      {/* SideNavBar (Desktop Only) */}
      <aside className="hidden md:flex flex-col h-full w-[240px] fixed left-0 top-0 bg-surface-container-low dark:bg-surface-container-lowest border-r border-outline-variant dark:border-outline p-md gap-sm z-40 overflow-y-auto">
      <div className="mb-lg">
      <h1 className="text-headline-md font-headline-md text-primary dark:text-primary-fixed font-extrabold tracking-tight">Rootfix Console</h1>
      <p className="text-body-sm font-body-sm text-secondary mt-xs">System Admin</p>
      </div>
      <button className="bg-primary-container text-on-primary w-full py-sm px-md rounded-lg font-bold mb-md hover:opacity-90 transition-opacity flex justify-center items-center gap-xs" type="button" data-action-id="new-record-3" onClick={actions?.["new-record-3"]}>
      <Plus className="text-sm" aria-hidden={true} focusable="false" /> New Record
              </button>
      <nav className="flex flex-col gap-xs flex-grow">
      <a className="flex items-center gap-md px-md py-sm text-on-surface-variant dark:text-on-secondary-fixed-variant hover:bg-surface-variant dark:hover:bg-surface-container-high transition-colors duration-200 ease-in-out rounded-lg" href="#" data-action-id="operations-4" onClick={(event) => { event.preventDefault(); actions?.["operations-4"]?.(); }}>
      <BadgeHelp aria-hidden={true} focusable="false" />
      <span className="text-body-sm font-body-sm">Operations</span>
      </a>
      <a className="flex items-center gap-md px-md py-sm text-on-surface-variant dark:text-on-secondary-fixed-variant hover:bg-surface-variant dark:hover:bg-surface-container-high transition-colors duration-200 ease-in-out rounded-lg" href="#" data-action-id="board-5" onClick={(event) => { event.preventDefault(); actions?.["board-5"]?.(); }}>
      <LayoutDashboard aria-hidden={true} focusable="false" />
      <span className="text-body-sm font-body-sm">Board</span>
      </a>
      <a className="flex items-center gap-md px-md py-sm bg-secondary-container dark:bg-primary-container text-on-secondary-container dark:text-on-primary-container rounded-lg font-bold transition-colors duration-200 ease-in-out" href="#" data-action-id="insights-6" onClick={(event) => { event.preventDefault(); actions?.["insights-6"]?.(); }}>
      <BarChart3 data-weight="fill" aria-hidden={true} focusable="false" />
      <span className="text-body-sm font-body-sm">Insights</span>
      </a>
      <a className="flex items-center gap-md px-md py-sm text-on-surface-variant dark:text-on-secondary-fixed-variant hover:bg-surface-variant dark:hover:bg-surface-container-high transition-colors duration-200 ease-in-out rounded-lg" href="#" data-action-id="editor-7" onClick={(event) => { event.preventDefault(); actions?.["editor-7"]?.(); }}>
      <Pencil aria-hidden={true} focusable="false" />
      <span className="text-body-sm font-body-sm">Editor</span>
      </a>
      </nav>
      <div className="mt-auto pt-md border-t border-outline-variant flex items-center gap-sm cursor-pointer hover:bg-surface-variant p-sm rounded-lg transition-colors">
      <div className="w-8 h-8 rounded-full bg-surface-tint flex items-center justify-center text-on-primary font-bold text-sm overflow-hidden">
      <img alt="User Profile" className="w-full h-full object-cover" data-alt="A small, professional headshot photo of a system administrator in a well-lit office, neutral background, sharp focus, technical aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC32wuEasvI4egNJUEP3w_Me883LHNMC5oMzjFFCmr49qR1NXDnj1E8-97xRKvme03rhry396CLMU4iI92nKcsx5iYWUp9dJUZM_3rEVfUmaeumQQw3X4Qmyv0CyCXwilLp0lJjXvVZRvV2oVF0DGilB8gugNGNbpkptuFTxcV6qg2BE3iCP2HuG0XNaN3OtW96it5YtMAyelSGFxEh5fPKl9mpxGg5oatPrw0P_4KcXlHv_ukuMWw6vPCRJ-IFlqC4DblODjGCRR4c" />
      </div>
      <div className="flex flex-col">
      <span className="text-body-sm font-body-sm font-bold">Admin User</span>
      </div>
      </div>
      </aside>
      {/* Main Content Canvas */}
      <main className="flex-1 md:ml-[240px] bg-background min-h-screen p-margin-mobile md:p-margin-desktop w-full max-w-[1600px] mx-auto bg-grid-pattern">
      {/* Page Header & Toolbar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-lg gap-md bg-surface-container-lowest p-md rounded-xl border border-outline-variant shadow-sm backdrop-blur-md bg-opacity-90">
      <div>
      <h2 className="text-headline-lg font-headline-lg text-primary tracking-tight">System Insights</h2>
      <p className="text-body-sm font-body-sm text-secondary mt-xs">Real-time metrics and historical conversion trends.</p>
      </div>
      <div className="flex items-center gap-sm w-full md:w-auto">
      <button className="flex items-center gap-xs px-md py-sm bg-surface border border-outline-variant rounded-lg text-body-sm font-body-sm text-primary hover:bg-surface-container-low transition-colors" type="button" data-action-id="filter-insights-4" onClick={actions?.["filter-insights-4"]}>
      <ListFilter className="text-sm" aria-hidden={true} focusable="false" />
                          Filter Insights
                      </button>
      <button className="flex items-center gap-xs px-md py-sm bg-surface border border-outline-variant rounded-lg text-body-sm font-body-sm text-primary hover:bg-surface-container-low transition-colors" type="button" data-action-id="export-summary-5" onClick={actions?.["export-summary-5"]}>
      <Download className="text-sm" aria-hidden={true} focusable="false" />
                          Export Summary
                      </button>
      </div>
      </div>
      {/* Metric Tiles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-md mb-lg">
      {/* Tile 1 */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md flex flex-col justify-between shadow-sm hover:border-primary transition-colors cursor-default relative overflow-hidden group">
      <div className="absolute -right-4 -top-4 w-24 h-24 bg-secondary-container rounded-full opacity-20 group-hover:scale-150 transition-transform duration-500 blur-xl"></div>
      <div className="flex justify-between items-start mb-sm relative z-10">
      <span className="text-label-caps font-label-caps text-secondary tracking-widest uppercase">Daily Conversions</span>
      <TrendingUp className="text-secondary" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex items-baseline gap-sm relative z-10">
      <span className="text-headline-lg font-headline-lg font-bold text-primary">124,592</span>
      <span className="text-body-sm font-body-sm text-[#059669] bg-[#d1fae5] px-sm py-xs rounded-full flex items-center gap-xs"><ArrowUp className="text-[12px]" aria-hidden={true} focusable="false" /> 14%</span>
      </div>
      <div className="mt-sm h-8 w-full flex items-end gap-xs opacity-60">
      <div className="w-1/6 bg-primary-container h-1/3 rounded-t-sm"></div>
      <div className="w-1/6 bg-primary-container h-1/2 rounded-t-sm"></div>
      <div className="w-1/6 bg-primary-container h-2/5 rounded-t-sm"></div>
      <div className="w-1/6 bg-primary-container h-3/4 rounded-t-sm"></div>
      <div className="w-1/6 bg-primary-container h-2/3 rounded-t-sm"></div>
      <div className="w-1/6 bg-primary-container h-full rounded-t-sm"></div>
      </div>
      </div>
      {/* Tile 2 */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md flex flex-col justify-between shadow-sm hover:border-primary transition-colors cursor-default relative overflow-hidden group">
      <div className="absolute -right-4 -top-4 w-24 h-24 bg-error-container rounded-full opacity-20 group-hover:scale-150 transition-transform duration-500 blur-xl"></div>
      <div className="flex justify-between items-start mb-sm relative z-10">
      <span className="text-label-caps font-label-caps text-secondary tracking-widest uppercase">Error Rate</span>
      <CircleAlert className="text-secondary" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex items-baseline gap-sm relative z-10">
      <span className="text-headline-lg font-headline-lg font-bold text-primary">1.2%</span>
      <span className="text-body-sm font-body-sm text-[#059669] bg-[#d1fae5] px-sm py-xs rounded-full flex items-center gap-xs"><ArrowDown className="text-[12px]" aria-hidden={true} focusable="false" /> 0.5%</span>
      </div>
      <div className="mt-sm pt-sm border-t border-outline-variant/50 relative z-10">
      <span className="text-code-sm font-code-sm text-on-surface-variant">Avg latency: 45ms</span>
      </div>
      </div>
      {/* Tile 3 */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md flex flex-col justify-between shadow-sm hover:border-primary transition-colors cursor-default relative overflow-hidden group">
      <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#d1fae5] rounded-full opacity-20 group-hover:scale-150 transition-transform duration-500 blur-xl"></div>
      <div className="flex justify-between items-start mb-sm relative z-10">
      <span className="text-label-caps font-label-caps text-secondary tracking-widest uppercase">System Uptime</span>
      <Cpu className="text-secondary" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex items-baseline gap-sm relative z-10">
      <span className="text-headline-lg font-headline-lg font-bold text-primary">99.99%</span>
      </div>
      <div className="mt-sm w-full bg-surface-container-highest rounded-full h-1.5 relative z-10 overflow-hidden">
      <div className="bg-[#059669] h-1.5 rounded-full w-[99.99%]"></div>
      </div>
      <div className="mt-xs text-right">
      <span className="text-code-sm font-code-sm text-on-surface-variant">Last 30 days</span>
      </div>
      </div>
      </div>
      {/* Complex Layout Area: Charts & Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-md">
      {/* Main Chart Area (2 columns wide) */}
      <div className="lg:col-span-2 bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm flex flex-col">
      <div className="p-md border-b border-outline-variant flex justify-between items-center bg-surface-bright rounded-t-xl">
      <h3 className="text-body-md font-body-md font-bold text-primary">Conversion Flow Analytics</h3>
      <div className="flex gap-xs">
      <button className="px-sm py-xs text-code-sm font-code-sm bg-surface-variant text-on-surface rounded" type="button" data-action-id="1h-6" onClick={actions?.["1h-6"]}>1H</button>
      <button className="px-sm py-xs text-code-sm font-code-sm bg-transparent text-secondary hover:bg-surface-variant rounded" type="button" data-action-id="24h-7" onClick={actions?.["24h-7"]}>24H</button>
      <button className="px-sm py-xs text-code-sm font-code-sm bg-transparent text-secondary hover:bg-surface-variant rounded" type="button" data-action-id="7d-8" onClick={actions?.["7d-8"]}>7D</button>
      </div>
      </div>
      <div className="p-md flex-1 relative min-h-[300px] flex items-center justify-center bg-surface">
      {/* Faux Data Visualization using Tailwind primitives for a technical look */}
      <div className="w-full h-full flex flex-col justify-end gap-sm relative pb-lg pl-lg">
      {/* Y Axis labels */}
      <div className="absolute left-0 top-0 bottom-lg w-lg flex flex-col justify-between text-code-sm font-code-sm text-secondary items-end pr-xs">
      <span>10k</span>
      <span>7.5k</span>
      <span>5k</span>
      <span>2.5k</span>
      <span>0</span>
      </div>
      {/* X Axis line */}
      <div className="absolute bottom-lg left-lg right-0 h-px bg-outline-variant"></div>
      {/* Y Axis line */}
      <div className="absolute left-lg top-0 bottom-lg w-px bg-outline-variant"></div>
      {/* Grid Lines */}
      <div className="absolute left-lg right-0 top-0 bottom-lg flex flex-col justify-between opacity-30 pointer-events-none">
      <div className="h-px bg-outline-variant w-full"></div>
      <div className="h-px bg-outline-variant w-full"></div>
      <div className="h-px bg-outline-variant w-full"></div>
      <div className="h-px bg-outline-variant w-full"></div>
      <div className="h-px w-full"></div> {/* base */}
      </div>
      {/* Bar Chart Representation */}
      <div className="flex justify-around items-end h-full w-full pl-lg pt-md relative z-10 gap-sm">
      <div className="w-full bg-primary-container rounded-t-sm h-[40%] hover:bg-primary transition-colors relative group">
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface text-code-sm px-xs py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap pointer-events-none transition-opacity">4,000</div>
      </div>
      <div className="w-full bg-primary-container rounded-t-sm h-[65%] hover:bg-primary transition-colors relative group">
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface text-code-sm px-xs py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap pointer-events-none transition-opacity">6,500</div>
      </div>
      <div className="w-full bg-primary-container rounded-t-sm h-[30%] hover:bg-primary transition-colors relative group">
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface text-code-sm px-xs py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap pointer-events-none transition-opacity">3,000</div>
      </div>
      <div className="w-full bg-primary-container rounded-t-sm h-[85%] hover:bg-primary transition-colors relative group">
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface text-code-sm px-xs py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap pointer-events-none transition-opacity">8,500</div>
      </div>
      <div className="w-full bg-error rounded-t-sm h-[15%] hover:opacity-80 transition-opacity relative group">
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface text-code-sm px-xs py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap pointer-events-none transition-opacity">Failed: 1,500</div>
      </div>
      <div className="w-full bg-primary-container rounded-t-sm h-[90%] hover:bg-primary transition-colors relative group">
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface text-code-sm px-xs py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap pointer-events-none transition-opacity">9,000</div>
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Side Panel: Activity Feed & State Distribution */}
      <div className="flex flex-col gap-md">
      {/* State Distribution */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm p-md">
      <h3 className="text-body-md font-body-md font-bold text-primary mb-md pb-xs border-b border-outline-variant">Payload States</h3>
      <div className="flex items-center gap-md mb-sm">
      <div className="relative w-16 h-16 rounded-full border-4 border-surface-container flex items-center justify-center shrink-0">
      {/* CSS Pie Chart trick */}
      <div className="absolute inset-0 rounded-full border-4 border-primary-container border-r-transparent border-b-transparent transform rotate-45"></div>
      <div className="absolute inset-0 rounded-full border-4 border-[#059669] border-l-transparent border-t-transparent transform -rotate-[15deg]"></div>
      </div>
      <div className="flex-1 flex flex-col gap-xs">
      <div className="flex justify-between items-center text-body-sm font-body-sm">
      <span className="flex items-center gap-xs"><span className="w-2 h-2 rounded-full bg-[#059669]"></span> Success</span>
      <span className="font-bold">68%</span>
      </div>
      <div className="flex justify-between items-center text-body-sm font-body-sm">
      <span className="flex items-center gap-xs"><span className="w-2 h-2 rounded-full bg-primary-container"></span> Processing</span>
      <span className="font-bold">28%</span>
      </div>
      <div className="flex justify-between items-center text-body-sm font-body-sm">
      <span className="flex items-center gap-xs"><span className="w-2 h-2 rounded-full bg-error"></span> Failed</span>
      <span className="font-bold">4%</span>
      </div>
      </div>
      </div>
      </div>
      {/* Recent Activity Feed */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm flex-1 flex flex-col overflow-hidden">
      <div className="p-md border-b border-outline-variant bg-surface-bright flex justify-between items-center">
      <h3 className="text-body-md font-body-md font-bold text-primary">Event Stream</h3>
      <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#059669] opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#059669]"></span>
      </span>
      </div>
      <div className="p-sm flex flex-col gap-xs overflow-y-auto max-h-[300px]">
      {/* Event Item */}
      <div className="p-sm hover:bg-surface-container-low rounded transition-colors flex items-start gap-sm border-l-2 border-[#059669]">
      <CheckCircle2 className="text-[16px] text-[#059669] mt-0.5" aria-hidden={true} focusable="false" />
      <div className="flex flex-col">
      <span className="text-body-sm font-body-sm text-primary">Record #452 converted</span>
      <span className="text-code-sm font-code-sm text-secondary">Payload processed in 12ms</span>
      </div>
      <span className="text-code-sm font-code-sm text-outline ml-auto">Just now</span>
      </div>
      {/* Event Item */}
      <div className="p-sm hover:bg-surface-container-low rounded transition-colors flex items-start gap-sm border-l-2 border-[#059669]">
      <CheckCircle2 className="text-[16px] text-[#059669] mt-0.5" aria-hidden={true} focusable="false" />
      <div className="flex flex-col">
      <span className="text-body-sm font-body-sm text-primary">Batch sync completed</span>
      <span className="text-code-sm font-code-sm text-secondary">24 records updated</span>
      </div>
      <span className="text-code-sm font-code-sm text-outline ml-auto">2m ago</span>
      </div>
      {/* Event Item (Warning) */}
      <div className="p-sm hover:bg-surface-container-low rounded transition-colors flex items-start gap-sm border-l-2 border-[#d97706] bg-[#fef3c7] dark:bg-[#451a03] bg-opacity-30">
      <TriangleAlert className="text-[16px] text-[#d97706] mt-0.5" aria-hidden={true} focusable="false" />
      <div className="flex flex-col">
      <span className="text-body-sm font-body-sm text-primary">Latency spike detected</span>
      <span className="text-code-sm font-code-sm text-secondary">Node alpha-4 &gt; 200ms</span>
      </div>
      <span className="text-code-sm font-code-sm text-outline ml-auto">15m ago</span>
      </div>
      {/* Event Item */}
      <div className="p-sm hover:bg-surface-container-low rounded transition-colors flex items-start gap-sm border-l-2 border-[#059669]">
      <CheckCircle2 className="text-[16px] text-[#059669] mt-0.5" aria-hidden={true} focusable="false" />
      <div className="flex flex-col">
      <span className="text-body-sm font-body-sm text-primary">Record #451 converted</span>
      <span className="text-code-sm font-code-sm text-secondary">Payload processed in 14ms</span>
      </div>
      <span className="text-code-sm font-code-sm text-outline ml-auto">18m ago</span>
      </div>
      {/* Event Item (Error) */}
      <div className="p-sm hover:bg-surface-container-low rounded transition-colors flex items-start gap-sm border-l-2 border-error bg-error-container bg-opacity-30">
      <CircleAlert className="text-[16px] text-error mt-0.5" aria-hidden={true} focusable="false" />
      <div className="flex flex-col">
      <span className="text-body-sm font-body-sm text-error">Conversion failed</span>
      <span className="text-code-sm font-code-sm text-secondary">Malformed JSON input at char 42</span>
      </div>
      <span className="text-code-sm font-code-sm text-outline ml-auto">1h ago</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
