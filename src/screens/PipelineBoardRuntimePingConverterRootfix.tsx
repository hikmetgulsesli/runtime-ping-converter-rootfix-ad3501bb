// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Pipeline Board - Runtime Ping Converter Rootfix
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowUpDown, BadgeHelp, BarChart3, CircleHelp, Ellipsis, LayoutDashboard, ListFilter, Menu, Pause, Pencil, Play, Plus, RefreshCw, Search, Settings, TriangleAlert } from "lucide-react";


export type PipelineBoardRuntimePingConverterRootfixActionId = "new-record-1" | "menu-2" | "settings-3" | "help-4" | "filter-5" | "sort-6" | "more-horiz-7" | "play-arrow-8" | "play-arrow-9" | "more-horiz-10" | "pause-11" | "more-horiz-12" | "resolve-13" | "more-horiz-14" | "operations-1" | "board-2" | "insights-3" | "editor-4" | "operations-5" | "board-6" | "insights-7";

export interface PipelineBoardRuntimePingConverterRootfixProps {
  actions?: Partial<Record<PipelineBoardRuntimePingConverterRootfixActionId, () => void>>;

}

export function PipelineBoardRuntimePingConverterRootfix({ actions }: PipelineBoardRuntimePingConverterRootfixProps) {
  return (
    <>
      {/* SideNavBar (Hidden on Mobile) */}
      <nav className="hidden md:flex flex-col h-full p-md gap-sm bg-surface-container-low dark:bg-surface-container-lowest text-primary dark:text-primary-fixed fixed left-0 top-0 w-[240px] border-r border-outline-variant dark:border-outline z-20 transition-colors duration-200 ease-in-out">
      {/* Header */}
      <div className="flex items-center gap-sm mb-lg px-sm">
      <img alt="User Profile" className="w-[32px] h-[32px] rounded-full object-cover border border-outline-variant" data-alt="A small, professional 32x32 user avatar photo. Crisp, clear, neutral background. Corporate environment styling." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsfM9OO-cubIfs4pFObwHZY3vOYT327nPs9XGSjkPE12rY7YCcUEy6Ye3m13GSqNXo7-C92f-c2HHPAbamGPn_Jr7HwyA6IQBNFp2siGOXPRjPBJTGT-z0RI-kEJ2obdJhAvJi34uT_-khSDopm6yJN6Keqsr96wyUOgqdTSvPNrJ4Gd_XzYc6JHKWK77W2ySoPvWURvkVbAlscP3r45-G_gWMgWdKD_6BPr9HsSAg0ttNjOG2AMyJcjT4nUj1464KifLfMAcE1xs-" />
      <div>
      <h1 className="text-headline-md font-headline-md font-bold tracking-tight">Rootfix Console</h1>
      <p className="text-body-sm font-body-sm text-secondary">System Admin</p>
      </div>
      </div>
      {/* Navigation Links */}
      <div className="flex flex-col gap-xs flex-grow">
      <a className="flex items-center gap-sm px-md py-sm rounded-lg text-body-sm font-body-sm text-on-surface-variant hover:bg-surface-variant transition-colors" href="#" data-action-id="operations-1" onClick={(event) => { event.preventDefault(); actions?.["operations-1"]?.(); }}>
      <BadgeHelp  style={{fontVariationSettings: "'FILL' 0"}} aria-hidden={true} focusable="false" />
                      Operations
                  </a>
      <a className="flex items-center gap-sm px-md py-sm rounded-lg text-body-sm font-body-sm bg-secondary-container text-on-secondary-container font-bold transition-colors" href="#" data-action-id="board-2" onClick={(event) => { event.preventDefault(); actions?.["board-2"]?.(); }}>
      <LayoutDashboard  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
                      Board
                  </a>
      <a className="flex items-center gap-sm px-md py-sm rounded-lg text-body-sm font-body-sm text-on-surface-variant hover:bg-surface-variant transition-colors" href="#" data-action-id="insights-3" onClick={(event) => { event.preventDefault(); actions?.["insights-3"]?.(); }}>
      <BarChart3  style={{fontVariationSettings: "'FILL' 0"}} aria-hidden={true} focusable="false" />
                      Insights
                  </a>
      <a className="flex items-center gap-sm px-md py-sm rounded-lg text-body-sm font-body-sm text-on-surface-variant hover:bg-surface-variant transition-colors" href="#" data-action-id="editor-4" onClick={(event) => { event.preventDefault(); actions?.["editor-4"]?.(); }}>
      <Pencil  style={{fontVariationSettings: "'FILL' 0"}} aria-hidden={true} focusable="false" />
                      Editor
                  </a>
      </div>
      {/* CTA */}
      <button className="w-full py-sm bg-primary-container text-on-primary rounded-DEFAULT text-body-sm font-bold flex justify-center items-center gap-xs hover:bg-primary transition-colors" type="button" data-action-id="new-record-1" onClick={actions?.["new-record-1"]}>
      <Plus className="text-[18px]" aria-hidden={true} focusable="false" />
                  New Record
              </button>
      </nav>
      {/* Main Content Area */}
      <main className="flex-grow flex flex-col md:ml-[240px] h-full w-full overflow-hidden bg-background">
      {/* TopNavBar (Responsive) */}
      <header className="bg-surface border-b border-outline-variant flex justify-between items-center w-full px-lg max-w-[1600px] mx-auto h-16 shrink-0 z-10 relative">
      <div className="flex items-center gap-md">
      {/* Mobile Menu Icon */}
      <button className="md:hidden text-secondary p-xs rounded-DEFAULT hover:bg-surface-variant" type="button" aria-label="Menu" data-action-id="menu-2" onClick={actions?.["menu-2"]}>
      <Menu aria-hidden={true} focusable="false" />
      </button>
      <div className="text-headline-md font-headline-md font-extrabold text-primary">Runtime Ping Converter Rootfix</div>
      </div>
      {/* Web Nav Cluster */}
      <div className="hidden md:flex items-center gap-md h-full">
      <a className="h-full flex items-center px-sm text-secondary font-body-md hover:bg-surface-container-low transition-colors" href="#" data-action-id="operations-5" onClick={(event) => { event.preventDefault(); actions?.["operations-5"]?.(); }}>Operations</a>
      <a className="h-full flex items-center px-sm text-primary font-bold border-b-2 border-primary hover:bg-surface-container-low transition-colors" href="#" data-action-id="board-6" onClick={(event) => { event.preventDefault(); actions?.["board-6"]?.(); }}>Board</a>
      <a className="h-full flex items-center px-sm text-secondary font-body-md hover:bg-surface-container-low transition-colors" href="#" data-action-id="insights-7" onClick={(event) => { event.preventDefault(); actions?.["insights-7"]?.(); }}>Insights</a>
      </div>
      <div className="flex items-center gap-md">
      {/* Search */}
      <div className="relative hidden sm:block">
      <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-secondary text-[18px]" aria-hidden={true} focusable="false" />
      <input className="pl-xl pr-sm py-[6px] border border-outline-variant rounded-DEFAULT bg-surface text-body-sm font-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none w-[200px] xl:w-[300px]" placeholder="Search records..." type="text" />
      </div>
      <button className="text-secondary hover:bg-surface-container-low p-xs rounded-DEFAULT transition-colors" type="button" aria-label="Settings" data-action-id="settings-3" onClick={actions?.["settings-3"]}>
      <Settings aria-hidden={true} focusable="false" />
      </button>
      <button className="text-secondary hover:bg-surface-container-low p-xs rounded-DEFAULT transition-colors" type="button" aria-label="Help" data-action-id="help-4" onClick={actions?.["help-4"]}>
      <CircleHelp aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* Board Toolbar */}
      <div className="px-lg py-md flex flex-wrap justify-between items-center gap-md shrink-0 border-b border-surface-variant bg-surface">
      <div className="flex items-center gap-sm">
      <h2 className="text-headline-md font-headline-md font-bold text-on-surface">Pipeline</h2>
      <span className="bg-surface-variant text-on-surface-variant text-label-caps font-label-caps px-2 py-1 rounded-full">14 Active</span>
      </div>
      <div className="flex items-center gap-sm">
      <button className="px-sm py-1 border border-outline-variant rounded-DEFAULT text-body-sm font-body-md text-primary bg-surface hover:bg-surface-variant flex items-center gap-xs" type="button" data-action-id="filter-5" onClick={actions?.["filter-5"]}>
      <ListFilter className="text-[16px]" aria-hidden={true} focusable="false" /> Filter
                      </button>
      <button className="px-sm py-1 border border-outline-variant rounded-DEFAULT text-body-sm font-body-md text-primary bg-surface hover:bg-surface-variant flex items-center gap-xs" type="button" data-action-id="sort-6" onClick={actions?.["sort-6"]}>
      <ArrowUpDown className="text-[16px]" aria-hidden={true} focusable="false" /> Sort
                      </button>
      </div>
      </div>
      {/* Kanban Board Area */}
      <div className="flex-grow p-md overflow-hidden bg-background">
      <div className="kanban-board">
      {/* LANE: Queued */}
      <div className="kanban-lane">
      <div className="p-sm border-b border-outline-variant bg-surface rounded-t-DEFAULT flex justify-between items-center shrink-0">
      <div className="flex items-center gap-xs">
      <span className="w-2 h-2 rounded-full bg-outline"></span>
      <span className="text-label-caps font-label-caps text-secondary font-bold">Queued</span>
      <span className="text-label-caps font-label-caps text-outline bg-surface-variant px-1 rounded-sm ml-1">3</span>
      </div>
      <button className="text-secondary hover:bg-surface-variant rounded-sm p-[2px]" type="button" aria-label="More Horiz" data-action-id="more-horiz-7" onClick={actions?.["more-horiz-7"]}><Ellipsis className="text-[16px]" aria-hidden={true} focusable="false" /></button>
      </div>
      <div className="kanban-cards-container">
      {/* Card 1 */}
      <div className="bg-surface border border-outline-variant rounded-DEFAULT p-sm shadow-sm hover:border-primary cursor-pointer transition-colors group">
      <div className="flex justify-between items-start mb-sm">
      <div className="text-code-sm font-code-sm text-secondary bg-surface-variant px-1 rounded-sm border border-outline-variant">RT-8492</div>
      <span className="text-label-caps font-label-caps text-secondary">2m ago</span>
      </div>
      <h3 className="text-body-sm font-body-sm font-semibold text-on-surface mb-2 leading-tight">Initialize ping conversion sequence for cluster alpha-9</h3>
      <div className="flex justify-between items-center mt-sm pt-sm border-t border-surface-variant">
      <div className="flex items-center gap-xs">
      <img alt="Owner" className="w-[20px] h-[20px] rounded-full object-cover border border-outline-variant" data-alt="Tiny avatar headshot of a developer, neutral expression, clean corporate lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmPnue3yjk_tWKdnCJ9i_9d5dKkCHIJErKKl__sastxtDPE5bIi3rWKAiz_1Ii-UpQ6BoC2nFDqJq5-VgY8Sqy3DO-kX9fl4u_HlA7jzRNmYxpXAj8SXWSUxxmmOXcmn28mT9SwsWklwQ8_sJ2J26yhh8cFuhefNgYB4yBySQTwRu0qxHIvZhPQ22SSPpcha2RodDkh9oa2AsnbQnkMDjUPwnj8Mz7MkTLNTzkHhrow2nDny1kaO9P9tzGrbbxC9HvA1SJ5rDzNwzI" />
      <span className="text-label-caps font-label-caps text-secondary">J. Doe</span>
      </div>
      <button className="opacity-0 group-hover:opacity-100 text-primary hover:bg-secondary-container rounded-sm p-[2px] transition-colors" type="button" aria-label="Play Arrow" data-action-id="play-arrow-8" onClick={actions?.["play-arrow-8"]}><Play className="text-[18px]" aria-hidden={true} focusable="false" /></button>
      </div>
      </div>
      {/* Card 2 */}
      <div className="bg-surface border border-outline-variant rounded-DEFAULT p-sm shadow-sm hover:border-primary cursor-pointer transition-colors group">
      <div className="flex justify-between items-start mb-sm">
      <div className="text-code-sm font-code-sm text-secondary bg-surface-variant px-1 rounded-sm border border-outline-variant">RT-8495</div>
      <span className="text-label-caps font-label-caps text-secondary">15m ago</span>
      </div>
      <h3 className="text-body-sm font-body-sm font-semibold text-on-surface mb-2 leading-tight">Awaiting payload validation from upstream</h3>
      <div className="flex justify-between items-center mt-sm pt-sm border-t border-surface-variant">
      <div className="flex items-center gap-xs">
      <div className="w-[20px] h-[20px] rounded-full bg-secondary text-on-secondary flex items-center justify-center text-label-caps font-label-caps">SYS</div>
      </div>
      <button className="opacity-0 group-hover:opacity-100 text-primary hover:bg-secondary-container rounded-sm p-[2px] transition-colors" type="button" aria-label="Play Arrow" data-action-id="play-arrow-9" onClick={actions?.["play-arrow-9"]}><Play className="text-[18px]" aria-hidden={true} focusable="false" /></button>
      </div>
      </div>
      </div>
      </div>
      {/* LANE: Converting */}
      <div className="kanban-lane">
      <div className="p-sm border-b border-outline-variant bg-surface rounded-t-DEFAULT flex justify-between items-center shrink-0">
      <div className="flex items-center gap-xs">
      <span className="w-2 h-2 rounded-full bg-[#3b82f6]"></span>
      <span className="text-label-caps font-label-caps text-[#1d4ed8] font-bold">Converting</span>
      <span className="text-label-caps font-label-caps text-outline bg-surface-variant px-1 rounded-sm ml-1">2</span>
      </div>
      <button className="text-secondary hover:bg-surface-variant rounded-sm p-[2px]" type="button" aria-label="More Horiz" data-action-id="more-horiz-10" onClick={actions?.["more-horiz-10"]}><Ellipsis className="text-[16px]" aria-hidden={true} focusable="false" /></button>
      </div>
      <div className="kanban-cards-container">
      {/* Card 3 */}
      <div className="bg-surface border border-outline-variant rounded-DEFAULT p-sm shadow-sm hover:border-primary cursor-pointer transition-colors group ring-1 ring-primary ring-offset-1">
      <div className="flex justify-between items-start mb-sm">
      <div className="text-code-sm font-code-sm text-secondary bg-surface-variant px-1 rounded-sm border border-outline-variant">RT-8488</div>
      <span className="bg-[#dbeafe] text-[#1e40af] text-label-caps font-label-caps px-1 rounded-sm flex items-center gap-[2px]">
      <RefreshCw className="text-[12px]" aria-hidden={true} focusable="false" /> In Progress
                                      </span>
      </div>
      <h3 className="text-body-sm font-body-sm font-semibold text-on-surface mb-2 leading-tight">Batch conversion of legacy ping telemetry</h3>
      <div className="w-full bg-surface-variant rounded-full h-1 mb-2">
      <div className="bg-[#3b82f6] h-1 rounded-full" style={{width: "45%"}}></div>
      </div>
      <div className="flex justify-between items-center mt-sm pt-sm border-t border-surface-variant">
      <div className="flex items-center gap-xs">
      <img alt="Owner" className="w-[20px] h-[20px] rounded-full object-cover border border-outline-variant" data-alt="Tiny avatar headshot, female engineer, wearing glasses, dark background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoP8maI0vHA8HZ3O4vKkLqFEHWCpHc3k43LszVL0VRjPpEO9P2RJ1bDpU_Qj5zro9CQtYLcPQmbofaf7rlDNXGLgNID3S6Cg_wCUP6dTnxrcnWEO7QQsMXhOAsvSGDsXCLbRncwEof-wNGb3Rpe6s72VPD_DTATuOrnp2VeCf6ycIQoOb_XJlYTzsO5m6nz8MMHRBtUQZmwa70apRfYlZFATTWB0RgI2MWlfOydJCQ12qfCXSZ_RYK9vbjofKG21LSv-V8tm0_fHfb" />
      <span className="text-label-caps font-label-caps text-secondary">A. Chen</span>
      </div>
      <button className="opacity-0 group-hover:opacity-100 text-secondary hover:bg-surface-variant rounded-sm p-[2px] transition-colors" type="button" aria-label="Pause" data-action-id="pause-11" onClick={actions?.["pause-11"]}><Pause className="text-[18px]" aria-hidden={true} focusable="false" /></button>
      </div>
      </div>
      </div>
      </div>
      {/* LANE: Verifying */}
      <div className="kanban-lane">
      <div className="p-sm border-b border-outline-variant bg-surface rounded-t-DEFAULT flex justify-between items-center shrink-0">
      <div className="flex items-center gap-xs">
      <span className="w-2 h-2 rounded-full bg-[#f59e0b]"></span>
      <span className="text-label-caps font-label-caps text-[#b45309] font-bold">Verifying</span>
      <span className="text-label-caps font-label-caps text-outline bg-surface-variant px-1 rounded-sm ml-1">1</span>
      </div>
      <button className="text-secondary hover:bg-surface-variant rounded-sm p-[2px]" type="button" aria-label="More Horiz" data-action-id="more-horiz-12" onClick={actions?.["more-horiz-12"]}><Ellipsis className="text-[16px]" aria-hidden={true} focusable="false" /></button>
      </div>
      <div className="kanban-cards-container">
      {/* Card 4 (Blocked) */}
      <div className="bg-surface border border-error rounded-DEFAULT p-sm shadow-sm hover:shadow-md cursor-pointer transition-colors group relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-error"></div>
      <div className="flex justify-between items-start mb-sm pl-xs">
      <div className="text-code-sm font-code-sm text-secondary bg-surface-variant px-1 rounded-sm border border-outline-variant">RT-8470</div>
      <span className="bg-[#fef2f2] text-error text-label-caps font-label-caps px-1 rounded-sm flex items-center gap-[2px] border border-[#fca5a5]">
      <TriangleAlert className="text-[12px]" aria-hidden={true} focusable="false" /> Blocked
                                      </span>
      </div>
      <h3 className="text-body-sm font-body-sm font-semibold text-on-surface mb-2 leading-tight pl-xs">Checksum mismatch post-conversion</h3>
      <p className="text-label-caps font-label-caps text-error mb-2 pl-xs truncate">ERR: Hash validation failed on node 3</p>
      <div className="flex justify-between items-center mt-sm pt-sm border-t border-surface-variant pl-xs">
      <div className="flex items-center gap-xs">
      <div className="w-[20px] h-[20px] rounded-full bg-secondary text-on-secondary flex items-center justify-center text-label-caps font-label-caps">SYS</div>
      </div>
      <button className="text-primary hover:bg-secondary-container rounded-sm px-1 py-[2px] transition-colors text-label-caps font-label-caps border border-outline-variant" type="button" data-action-id="resolve-13" onClick={actions?.["resolve-13"]}>Resolve</button>
      </div>
      </div>
      </div>
      </div>
      {/* LANE: Completed */}
      <div className="kanban-lane">
      <div className="p-sm border-b border-outline-variant bg-surface rounded-t-DEFAULT flex justify-between items-center shrink-0">
      <div className="flex items-center gap-xs">
      <span className="w-2 h-2 rounded-full bg-[#10b981]"></span>
      <span className="text-label-caps font-label-caps text-[#047857] font-bold">Completed</span>
      <span className="text-label-caps font-label-caps text-outline bg-surface-variant px-1 rounded-sm ml-1">24</span>
      </div>
      <button className="text-secondary hover:bg-surface-variant rounded-sm p-[2px]" type="button" aria-label="More Horiz" data-action-id="more-horiz-14" onClick={actions?.["more-horiz-14"]}><Ellipsis className="text-[16px]" aria-hidden={true} focusable="false" /></button>
      </div>
      <div className="kanban-cards-container opacity-70 hover:opacity-100 transition-opacity">
      {/* Card 5 */}
      <div className="bg-surface border border-outline-variant rounded-DEFAULT p-sm shadow-sm cursor-pointer group">
      <div className="flex justify-between items-start mb-sm">
      <div className="text-code-sm font-code-sm text-secondary line-through">RT-8465</div>
      <span className="text-label-caps font-label-caps text-secondary">2h ago</span>
      </div>
      <h3 className="text-body-sm font-body-sm text-secondary mb-2 leading-tight line-clamp-1">Routine schema migration</h3>
      </div>
      </div>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
