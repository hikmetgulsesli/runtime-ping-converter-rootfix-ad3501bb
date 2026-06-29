// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Record Operations - Runtime Ping Converter Rootfix
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { BadgeHelp, BarChart3, CalendarDays, CheckCircle2, ChevronDown, CircleAlert, CircleHelp, CirclePlus, Eye, LayoutDashboard, ListFilter, Minus, Pencil, Plus, RefreshCw, Search, Settings, Terminal, Trash2, TrendingUp, TriangleAlert } from "lucide-react";


export type RecordOperationsRuntimePingConverterRootfixActionId = "act-create-record-1" | "settings-2" | "help-3" | "act-retry-load-4" | "act-create-record-5" | "status-all-6" | "date-last-7-days-7" | "view-details-8" | "edit-9" | "delete-10" | "view-details-11" | "edit-12" | "delete-13" | "view-details-14" | "edit-15" | "delete-16" | "view-details-17" | "edit-18" | "delete-19" | "previous-20" | "1-21" | "2-22" | "3-23" | "next-24" | "operations-1" | "board-2" | "insights-3" | "editor-4" | "operations-5" | "board-6" | "insights-7" | "editor-8";

export interface RecordOperationsRuntimePingConverterRootfixProps {
  actions?: Partial<Record<RecordOperationsRuntimePingConverterRootfixActionId, () => void>>;

}

export function RecordOperationsRuntimePingConverterRootfix({ actions }: RecordOperationsRuntimePingConverterRootfixProps) {
  return (
    <>
      {/* Mobile Top Navigation (md:hidden) */}
      <header className="md:hidden bg-surface dark:bg-surface-container-lowest border-b border-outline-variant dark:border-outline flat no shadows flex justify-between items-center w-full px-lg mx-auto h-16 sticky top-0 z-50">
      <div className="flex items-center gap-2">
      <Terminal className="text-primary" aria-hidden={true} focusable="false" />
      <h1 className="text-headline-md font-headline-md font-extrabold text-primary dark:text-primary-fixed">Runtime Ping Converter Rootfix</h1>
      </div>
      <div className="flex items-center gap-md text-primary dark:text-on-primary-fixed">
      <Settings className="cursor-pointer hover:bg-surface-container-low dark:hover:bg-surface-container-high transition-colors p-1 rounded" aria-hidden={true} focusable="false" />
      <CircleHelp className="cursor-pointer hover:bg-surface-container-low dark:hover:bg-surface-container-high transition-colors p-1 rounded" aria-hidden={true} focusable="false" />
      </div>
      </header>
      {/* SideNavBar (Web) */}
      <nav className="hidden md:flex flex-col fixed left-0 top-0 h-full w-[240px] bg-surface-container-low dark:bg-surface-container-lowest border-r border-outline-variant dark:border-outline flat no shadows p-md gap-sm transition-colors duration-200 ease-in-out z-40">
      {/* Header */}
      <div className="flex flex-col mb-xl gap-sm">
      <div className="flex items-center gap-sm">
      <img alt="User Profile" className="w-8 h-8 rounded-full border border-outline-variant object-cover" data-alt="A small, professional avatar placeholder image, completely blank light gray circle with a darker gray border, suitable for a system admin profile picture in a technical dashboard." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUPL04ydw5rV6HVm5rdfxcuvRx87C0csSYNjUWhXK-6Syh3ft0XhxRbZcbHpC1D0cTzhjJjNBEmR0kN9vhirthRdX_Yof-AyZX5_5DFb1w3B_5nXjrdLXl9ZO2Fyr7vuBX4R375kXdBSR8U5jC-qt295_SY6B6eceqDBFgLlyy-ZLqvsEj6OBQdtko1uPFi7OTLIcYy9bDYqIanVAlUnzmP2LzvmhZnKUZKcRD5HuzMRWSCO0vR-l3epoJYCJgL7Pss71We1dnrLsI" />
      <div>
      <h2 className="text-headline-md font-headline-md text-primary dark:text-primary-fixed">Rootfix Console</h2>
      <p className="text-body-sm font-body-sm text-on-surface-variant">System Admin</p>
      </div>
      </div>
      </div>
      {/* Navigation Links */}
      <div className="flex flex-col gap-xs flex-grow">
      {/* Active Tab: Operations */}
      <a className="flex items-center gap-sm p-sm bg-secondary-container dark:bg-primary-container text-on-secondary-container dark:text-on-primary-container rounded-lg font-bold" href="#" data-action-id="operations-1" onClick={(event) => { event.preventDefault(); actions?.["operations-1"]?.(); }}>
      <BadgeHelp aria-hidden={true} focusable="false" />
      <span className="text-body-sm font-body-sm">Operations</span>
      </a>
      {/* Inactive Tabs */}
      <a className="flex items-center gap-sm p-sm text-on-surface-variant dark:text-on-secondary-fixed-variant hover:bg-surface-variant dark:hover:bg-surface-container-high rounded-lg transition-colors" href="#" data-action-id="board-2" onClick={(event) => { event.preventDefault(); actions?.["board-2"]?.(); }}>
      <LayoutDashboard aria-hidden={true} focusable="false" />
      <span className="text-body-sm font-body-sm">Board</span>
      </a>
      <a className="flex items-center gap-sm p-sm text-on-surface-variant dark:text-on-secondary-fixed-variant hover:bg-surface-variant dark:hover:bg-surface-container-high rounded-lg transition-colors" href="#" data-action-id="insights-3" onClick={(event) => { event.preventDefault(); actions?.["insights-3"]?.(); }}>
      <BarChart3 aria-hidden={true} focusable="false" />
      <span className="text-body-sm font-body-sm">Insights</span>
      </a>
      <a className="flex items-center gap-sm p-sm text-on-surface-variant dark:text-on-secondary-fixed-variant hover:bg-surface-variant dark:hover:bg-surface-container-high rounded-lg transition-colors" href="#" data-action-id="editor-4" onClick={(event) => { event.preventDefault(); actions?.["editor-4"]?.(); }}>
      <Pencil aria-hidden={true} focusable="false" />
      <span className="text-body-sm font-body-sm">Editor</span>
      </a>
      </div>
      {/* CTA */}
      <div className="mt-auto">
      <button aria-label="ACT_CREATE_RECORD" className="w-full bg-primary-container text-on-primary font-body-sm font-semibold py-sm rounded flex items-center justify-center gap-xs hover:bg-primary transition-colors focus:ring-2 focus:ring-primary-container focus:outline-none" type="button" data-action-id="act-create-record-1" onClick={actions?.["act-create-record-1"]}>
      <Plus className="text-[18px]" aria-hidden={true} focusable="false" />
                      New Record
                  </button>
      </div>
      </nav>
      {/* Main Content Canvas */}
      <main className="flex-grow flex flex-col md:ml-[240px] w-full min-h-screen">
      {/* Desktop Top App Bar (If needed for horizontal nav, though side nav is primary on desktop based on layout mandate. We will use a simplified header area for the canvas title and actions) */}
      <div className="hidden md:flex justify-between items-center w-full px-lg mx-auto h-16 border-b border-outline-variant bg-surface sticky top-0 z-30">
      <h1 className="text-headline-md font-headline-md font-extrabold text-primary">Runtime Ping Converter Rootfix - Operations</h1>
      <div className="flex items-center gap-md text-on-surface-variant">
      <button aria-label="Settings" className="hover:bg-surface-container-low p-1 rounded text-secondary" type="button" data-action-id="settings-2" onClick={actions?.["settings-2"]}>
      <Settings aria-hidden={true} focusable="false" />
      </button>
      <button aria-label="Help" className="hover:bg-surface-container-low p-1 rounded text-secondary" type="button" data-action-id="help-3" onClick={actions?.["help-3"]}>
      <CircleHelp aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      {/* Dashboard Content */}
      <div className="p-margin-mobile md:p-margin-desktop w-full max-w-[1600px] mx-auto flex flex-col gap-lg flex-grow">
      {/* Page Header & Primary Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-md">
      <div>
      <h2 className="text-headline-lg font-headline-lg text-primary">Record Operations</h2>
      <p className="text-body-sm font-body-sm text-on-surface-variant mt-1">Manage and monitor runtime ping conversions.</p>
      </div>
      <div className="flex items-center gap-sm">
      <button aria-label="ACT_RETRY_LOAD" className="bg-surface border border-outline-variant text-primary px-md py-sm rounded text-body-sm font-semibold hover:bg-surface-container-low transition-colors flex items-center gap-xs" type="button" data-action-id="act-retry-load-4" onClick={actions?.["act-retry-load-4"]}>
      <RefreshCw className="text-[18px]" aria-hidden={true} focusable="false" />
                              Retry Load
                          </button>
      <button aria-label="ACT_CREATE_RECORD" className="bg-primary-container text-on-primary px-md py-sm rounded text-body-sm font-semibold hover:opacity-90 transition-opacity flex items-center gap-xs shadow-sm focus:ring-2 focus:ring-primary-container focus:ring-offset-1" type="button" data-action-id="act-create-record-5" onClick={actions?.["act-create-record-5"]}>
      <CirclePlus className="text-[18px]" aria-hidden={true} focusable="false" />
                              Create Record
                          </button>
      </div>
      </div>
      {/* Summary Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
      {/* Metric Card 1 */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded p-md flex flex-col">
      <span className="text-label-caps font-label-caps text-on-surface-variant uppercase tracking-wider mb-xs">Total Records</span>
      <span className="text-headline-lg font-headline-lg text-primary">124,592</span>
      <div className="flex items-center gap-1 mt-2 text-body-sm font-body-sm text-on-surface-variant">
      <TrendingUp className="text-[14px] text-[#059669]" aria-hidden={true} focusable="false" />
      <span className="text-[#059669]">+2.4%</span> vs last week
                          </div>
      </div>
      {/* Metric Card 2 */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded p-md flex flex-col">
      <span className="text-label-caps font-label-caps text-on-surface-variant uppercase tracking-wider mb-xs">Success Rate</span>
      <span className="text-headline-lg font-headline-lg text-primary">99.8%</span>
      <div className="flex items-center gap-1 mt-2 text-body-sm font-body-sm text-on-surface-variant">
      <Minus className="text-[14px] text-on-surface-variant" aria-hidden={true} focusable="false" />
                              Stable
                          </div>
      </div>
      {/* Metric Card 3 */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded p-md flex flex-col">
      <span className="text-label-caps font-label-caps text-on-surface-variant uppercase tracking-wider mb-xs">Avg Latency</span>
      <span className="text-headline-lg font-headline-lg text-primary">42ms</span>
      <div className="flex items-center gap-1 mt-2 text-body-sm font-body-sm text-on-surface-variant">
      <BadgeHelp className="text-[14px] text-[#D97706]" aria-hidden={true} focusable="false" />
      <span className="text-[#D97706]">-5ms</span> vs last week
                          </div>
      </div>
      </div>
      {/* Data Table Section */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded flex flex-col flex-grow overflow-hidden">
      {/* Toolbar: Search & Filters */}
      <div className="p-md border-b border-outline-variant flex flex-col sm:flex-row justify-between items-start sm:items-center gap-md bg-surface-container-low">
      {/* Search */}
      <div className="relative w-full sm:w-96">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]" aria-hidden={true} focusable="false" />
      <input aria-label="ACT_SEARCH_RECORDS" className="w-full pl-10 pr-4 py-2 bg-surface-container-lowest border border-outline-variant rounded text-body-md font-body-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-shadow" placeholder="Search records by ID or Ping..." type="text" />
      </div>
      {/* Filters */}
      <div className="flex items-center gap-sm w-full sm:w-auto">
      <div className="relative group">
      <button className="bg-surface-container-lowest border border-outline-variant text-on-surface-variant px-sm py-1.5 rounded text-body-sm font-body-sm hover:bg-surface-container-low transition-colors flex items-center gap-xs" type="button" data-action-id="status-all-6" onClick={actions?.["status-all-6"]}>
      <ListFilter className="text-[16px]" aria-hidden={true} focusable="false" />
                                      Status: All
                                      <ChevronDown className="text-[16px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      <div className="relative group">
      <button className="bg-surface-container-lowest border border-outline-variant text-on-surface-variant px-sm py-1.5 rounded text-body-sm font-body-sm hover:bg-surface-container-low transition-colors flex items-center gap-xs" type="button" data-action-id="date-last-7-days-7" onClick={actions?.["date-last-7-days-7"]}>
      <CalendarDays className="text-[16px]" aria-hidden={true} focusable="false" />
                                      Date: Last 7 Days
                                      <ChevronDown className="text-[16px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      </div>
      {/* Table Container */}
      <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse min-w-[800px]">
      <thead>
      <tr className="bg-surface-container-low border-b border-outline-variant">
      <th className="p-sm px-md text-label-caps font-label-caps text-on-surface-variant font-semibold">Record ID</th>
      <th className="p-sm px-md text-label-caps font-label-caps text-on-surface-variant font-semibold">Status</th>
      <th className="p-sm px-md text-label-caps font-label-caps text-on-surface-variant font-semibold">Last Ping</th>
      <th className="p-sm px-md text-label-caps font-label-caps text-on-surface-variant font-semibold">Payload Size</th>
      <th className="p-sm px-md text-label-caps font-label-caps text-on-surface-variant font-semibold text-right">Actions</th>
      </tr>
      </thead>
      <tbody className="text-body-md font-body-md divide-y divide-outline-variant">
      {/* Row 1 */}
      <tr className="hover:bg-surface-container-low transition-colors group">
      <td className="p-sm px-md font-code-md text-primary">RT-8492-AX</td>
      <td className="p-sm px-md">
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-semibold tracking-wide">
      <CheckCircle2 className="text-[12px]" aria-hidden={true} focusable="false" />
                                              ACTIVE
                                          </span>
      </td>
      <td className="p-sm px-md text-on-surface-variant">2023-10-27 14:32:01 UTC</td>
      <td className="p-sm px-md text-on-surface-variant">1.2 KB</td>
      <td className="p-sm px-md text-right">
      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
      <button aria-label="View Details" className="text-secondary hover:text-primary p-1 rounded" type="button" data-action-id="view-details-8" onClick={actions?.["view-details-8"]}><Eye className="text-[18px]" aria-hidden={true} focusable="false" /></button>
      <button aria-label="Edit" className="text-secondary hover:text-primary p-1 rounded" type="button" data-action-id="edit-9" onClick={actions?.["edit-9"]}><Pencil className="text-[18px]" aria-hidden={true} focusable="false" /></button>
      <button aria-label="Delete" className="text-secondary hover:text-error p-1 rounded" type="button" data-action-id="delete-10" onClick={actions?.["delete-10"]}><Trash2 className="text-[18px]" aria-hidden={true} focusable="false" /></button>
      </div>
      </td>
      </tr>
      {/* Row 2 */}
      <tr className="hover:bg-surface-container-low transition-colors group">
      <td className="p-sm px-md font-code-md text-primary">RT-8493-BY</td>
      <td className="p-sm px-md">
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[11px] font-semibold tracking-wide">
      <TriangleAlert className="text-[12px]" aria-hidden={true} focusable="false" />
                                              DELAYED
                                          </span>
      </td>
      <td className="p-sm px-md text-on-surface-variant">2023-10-27 14:30:15 UTC</td>
      <td className="p-sm px-md text-on-surface-variant">4.5 KB</td>
      <td className="p-sm px-md text-right">
      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
      <button aria-label="View Details" className="text-secondary hover:text-primary p-1 rounded" type="button" data-action-id="view-details-11" onClick={actions?.["view-details-11"]}><Eye className="text-[18px]" aria-hidden={true} focusable="false" /></button>
      <button aria-label="Edit" className="text-secondary hover:text-primary p-1 rounded" type="button" data-action-id="edit-12" onClick={actions?.["edit-12"]}><Pencil className="text-[18px]" aria-hidden={true} focusable="false" /></button>
      <button aria-label="Delete" className="text-secondary hover:text-error p-1 rounded" type="button" data-action-id="delete-13" onClick={actions?.["delete-13"]}><Trash2 className="text-[18px]" aria-hidden={true} focusable="false" /></button>
      </div>
      </td>
      </tr>
      {/* Row 3 */}
      <tr className="hover:bg-surface-container-low transition-colors group">
      <td className="p-sm px-md font-code-md text-primary">RT-8494-CZ</td>
      <td className="p-sm px-md">
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-100 text-red-800 text-[11px] font-semibold tracking-wide">
      <CircleAlert className="text-[12px]" aria-hidden={true} focusable="false" />
                                              FAILED
                                          </span>
      </td>
      <td className="p-sm px-md text-on-surface-variant">2023-10-27 14:25:50 UTC</td>
      <td className="p-sm px-md text-on-surface-variant">0.8 KB</td>
      <td className="p-sm px-md text-right">
      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
      <button aria-label="View Details" className="text-secondary hover:text-primary p-1 rounded" type="button" data-action-id="view-details-14" onClick={actions?.["view-details-14"]}><Eye className="text-[18px]" aria-hidden={true} focusable="false" /></button>
      <button aria-label="Edit" className="text-secondary hover:text-primary p-1 rounded" type="button" data-action-id="edit-15" onClick={actions?.["edit-15"]}><Pencil className="text-[18px]" aria-hidden={true} focusable="false" /></button>
      <button aria-label="Delete" className="text-secondary hover:text-error p-1 rounded" type="button" data-action-id="delete-16" onClick={actions?.["delete-16"]}><Trash2 className="text-[18px]" aria-hidden={true} focusable="false" /></button>
      </div>
      </td>
      </tr>
      {/* Row 4 */}
      <tr className="hover:bg-surface-container-low transition-colors group">
      <td className="p-sm px-md font-code-md text-primary">RT-8495-DW</td>
      <td className="p-sm px-md">
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-semibold tracking-wide">
      <CheckCircle2 className="text-[12px]" aria-hidden={true} focusable="false" />
                                              ACTIVE
                                          </span>
      </td>
      <td className="p-sm px-md text-on-surface-variant">2023-10-27 14:20:11 UTC</td>
      <td className="p-sm px-md text-on-surface-variant">2.1 KB</td>
      <td className="p-sm px-md text-right">
      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
      <button aria-label="View Details" className="text-secondary hover:text-primary p-1 rounded" type="button" data-action-id="view-details-17" onClick={actions?.["view-details-17"]}><Eye className="text-[18px]" aria-hidden={true} focusable="false" /></button>
      <button aria-label="Edit" className="text-secondary hover:text-primary p-1 rounded" type="button" data-action-id="edit-18" onClick={actions?.["edit-18"]}><Pencil className="text-[18px]" aria-hidden={true} focusable="false" /></button>
      <button aria-label="Delete" className="text-secondary hover:text-error p-1 rounded" type="button" data-action-id="delete-19" onClick={actions?.["delete-19"]}><Trash2 className="text-[18px]" aria-hidden={true} focusable="false" /></button>
      </div>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      {/* Pagination / Footer */}
      <div className="p-sm px-md border-t border-outline-variant bg-surface-container-lowest flex justify-between items-center text-body-sm text-on-surface-variant">
      <span>Showing 1 to 4 of 124,592 entries</span>
      <div className="flex gap-1">
      <button className="px-2 py-1 rounded hover:bg-surface-container-low disabled:opacity-50" disabled={true} type="button" data-action-id="previous-20" onClick={actions?.["previous-20"]}>Previous</button>
      <button className="px-2 py-1 rounded bg-surface-container-high text-primary font-semibold" type="button" data-action-id="1-21" onClick={actions?.["1-21"]}>1</button>
      <button className="px-2 py-1 rounded hover:bg-surface-container-low" type="button" data-action-id="2-22" onClick={actions?.["2-22"]}>2</button>
      <button className="px-2 py-1 rounded hover:bg-surface-container-low" type="button" data-action-id="3-23" onClick={actions?.["3-23"]}>3</button>
      <span className="px-2 py-1">...</span>
      <button className="px-2 py-1 rounded hover:bg-surface-container-low" type="button" data-action-id="next-24" onClick={actions?.["next-24"]}>Next</button>
      </div>
      </div>
      </div>
      </div>
      </main>
      {/* BottomNavBar (Mobile only - hidden on md) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-surface-container-lowest border-t border-outline-variant flex justify-around items-center h-16 z-50 px-2 pb-safe">
      <a className="flex flex-col items-center justify-center w-full h-full text-primary dark:text-primary-fixed font-bold border-t-2 border-primary pt-1" href="#" data-action-id="operations-5" onClick={(event) => { event.preventDefault(); actions?.["operations-5"]?.(); }}>
      <BadgeHelp data-weight="fill" className="text-[24px]" aria-hidden={true} focusable="false" />
      <span className="text-[10px] mt-1 font-medium">Operations</span>
      </a>
      <a className="flex flex-col items-center justify-center w-full h-full text-secondary dark:text-secondary-fixed-dim hover:bg-surface-container-low transition-colors pt-1 border-t-2 border-transparent" href="#" data-action-id="board-6" onClick={(event) => { event.preventDefault(); actions?.["board-6"]?.(); }}>
      <LayoutDashboard className="text-[24px]" aria-hidden={true} focusable="false" />
      <span className="text-[10px] mt-1 font-medium">Board</span>
      </a>
      <a className="flex flex-col items-center justify-center w-full h-full text-secondary dark:text-secondary-fixed-dim hover:bg-surface-container-low transition-colors pt-1 border-t-2 border-transparent" href="#" data-action-id="insights-7" onClick={(event) => { event.preventDefault(); actions?.["insights-7"]?.(); }}>
      <BarChart3 className="text-[24px]" aria-hidden={true} focusable="false" />
      <span className="text-[10px] mt-1 font-medium">Insights</span>
      </a>
      <a className="flex flex-col items-center justify-center w-full h-full text-secondary dark:text-secondary-fixed-dim hover:bg-surface-container-low transition-colors pt-1 border-t-2 border-transparent" href="#" data-action-id="editor-8" onClick={(event) => { event.preventDefault(); actions?.["editor-8"]?.(); }}>
      <Pencil className="text-[24px]" aria-hidden={true} focusable="false" />
      <span className="text-[10px] mt-1 font-medium">Editor</span>
      </a>
      </nav>
    </>
  );
}
