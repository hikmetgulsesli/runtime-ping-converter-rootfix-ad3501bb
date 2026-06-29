// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Record Editor - Runtime Ping Converter Rootfix
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { BadgeHelp, BarChart3, CircleAlert, CircleHelp, FilePenLine, LayoutDashboard, Menu, Pencil, Plus, Save, Settings, SlidersHorizontal } from "lucide-react";


export type RecordEditorRuntimePingConverterRootfixActionId = "new-record-1" | "menu-2" | "settings-3" | "help-4" | "show-advanced-configuration-5" | "cancel-6" | "save-record-7" | "operations-1" | "board-2" | "insights-3" | "editor-4" | "operations-5" | "board-6" | "insights-7";

export interface RecordEditorRuntimePingConverterRootfixProps {
  actions?: Partial<Record<RecordEditorRuntimePingConverterRootfixActionId, () => void>>;

}

export function RecordEditorRuntimePingConverterRootfix({ actions }: RecordEditorRuntimePingConverterRootfixProps) {
  return (
    <>
      {/* SideNavBar (Desktop) */}
      <nav className="hidden md:flex flex-col h-screen w-[240px] fixed left-0 top-0 bg-surface-container-low dark:bg-surface-container-lowest border-r border-outline-variant dark:border-outline p-md gap-sm transition-colors duration-200 ease-in-out z-20">
      <div className="mb-lg">
      <h1 className="text-headline-md font-headline-md text-primary dark:text-primary-fixed">Rootfix Console</h1>
      <p className="text-body-sm font-body-sm text-secondary">System Admin</p>
      </div>
      <div className="flex flex-col gap-xs flex-grow">
      {/* Inactive */}
      <a className="flex items-center gap-sm px-sm py-sm rounded-DEFAULT text-on-surface-variant dark:text-on-secondary-fixed-variant hover:bg-surface-variant dark:hover:bg-surface-container-high transition-colors" href="#" data-action-id="operations-1" onClick={(event) => { event.preventDefault(); actions?.["operations-1"]?.(); }}>
      <BadgeHelp className="text-xl" aria-hidden={true} focusable="false" />
      <span className="text-body-sm font-body-sm">Operations</span>
      </a>
      {/* Inactive */}
      <a className="flex items-center gap-sm px-sm py-sm rounded-DEFAULT text-on-surface-variant dark:text-on-secondary-fixed-variant hover:bg-surface-variant dark:hover:bg-surface-container-high transition-colors" href="#" data-action-id="board-2" onClick={(event) => { event.preventDefault(); actions?.["board-2"]?.(); }}>
      <LayoutDashboard className="text-xl" aria-hidden={true} focusable="false" />
      <span className="text-body-sm font-body-sm">Board</span>
      </a>
      {/* Inactive */}
      <a className="flex items-center gap-sm px-sm py-sm rounded-DEFAULT text-on-surface-variant dark:text-on-secondary-fixed-variant hover:bg-surface-variant dark:hover:bg-surface-container-high transition-colors" href="#" data-action-id="insights-3" onClick={(event) => { event.preventDefault(); actions?.["insights-3"]?.(); }}>
      <BarChart3 className="text-xl" aria-hidden={true} focusable="false" />
      <span className="text-body-sm font-body-sm">Insights</span>
      </a>
      {/* Active */}
      <a className="flex items-center gap-sm px-sm py-sm bg-secondary-container dark:bg-primary-container text-on-secondary-container dark:text-on-primary-container rounded-lg font-bold transition-colors" href="#" data-action-id="editor-4" onClick={(event) => { event.preventDefault(); actions?.["editor-4"]?.(); }}>
      <Pencil className="text-xl" aria-hidden={true} focusable="false" />
      <span className="text-body-sm font-body-sm">Editor</span>
      </a>
      </div>
      <div className="mt-auto">
      <button className="w-full flex items-center justify-center gap-sm py-sm bg-primary-container text-on-primary rounded-DEFAULT hover:bg-primary transition-colors" type="button" data-action-id="new-record-1" onClick={actions?.["new-record-1"]}>
      <Plus className="text-xl" aria-hidden={true} focusable="false" />
      <span className="text-body-sm font-body-sm font-bold">New Record</span>
      </button>
      </div>
      </nav>
      {/* Main Content Area */}
      <div className="flex-1 md:ml-[240px] flex flex-col min-h-screen">
      {/* TopNavBar */}
      <header className="bg-surface dark:bg-surface-container-lowest border-b border-outline-variant dark:border-outline w-full h-16 flex justify-between items-center px-lg max-w-[1600px] mx-auto z-10 sticky top-0">
      <div className="flex items-center gap-md">
      {/* Mobile Menu Toggle */}
      <button className="md:hidden p-xs text-on-surface hover:bg-surface-container-low rounded-DEFAULT" type="button" aria-label="Menu" data-action-id="menu-2" onClick={actions?.["menu-2"]}>
      <Menu aria-hidden={true} focusable="false" />
      </button>
      <div className="text-headline-md font-headline-md font-extrabold text-primary dark:text-primary-fixed md:hidden">
                          Runtime Ping Converter Rootfix
                      </div>
      </div>
      <div className="hidden md:flex gap-md items-center h-full">
      <a className="h-full flex items-center text-secondary dark:text-secondary-fixed-dim font-body-md hover:bg-surface-container-low dark:hover:bg-surface-container-high transition-colors px-sm" href="#" data-action-id="operations-5" onClick={(event) => { event.preventDefault(); actions?.["operations-5"]?.(); }}>Operations</a>
      <a className="h-full flex items-center text-secondary dark:text-secondary-fixed-dim font-body-md hover:bg-surface-container-low dark:hover:bg-surface-container-high transition-colors px-sm" href="#" data-action-id="board-6" onClick={(event) => { event.preventDefault(); actions?.["board-6"]?.(); }}>Board</a>
      <a className="h-full flex items-center text-secondary dark:text-secondary-fixed-dim font-body-md hover:bg-surface-container-low dark:hover:bg-surface-container-high transition-colors px-sm" href="#" data-action-id="insights-7" onClick={(event) => { event.preventDefault(); actions?.["insights-7"]?.(); }}>Insights</a>
      </div>
      <div className="flex items-center gap-sm text-primary dark:text-on-primary-fixed">
      <button className="p-xs hover:bg-surface-container-low dark:hover:bg-surface-container-high rounded-full transition-colors active:scale-95 duration-150" type="button" aria-label="Settings" data-action-id="settings-3" onClick={actions?.["settings-3"]}>
      <Settings aria-hidden={true} focusable="false" />
      </button>
      <button className="p-xs hover:bg-surface-container-low dark:hover:bg-surface-container-high rounded-full transition-colors active:scale-95 duration-150" type="button" aria-label="Help" data-action-id="help-4" onClick={actions?.["help-4"]}>
      <CircleHelp aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* Canvas */}
      <main className="flex-1 p-margin-mobile md:p-margin-desktop max-w-[1600px] mx-auto w-full">
      <div className="max-w-3xl mx-auto">
      {/* Editor Header */}
      <div className="flex items-center justify-between mb-xl">
      <div>
      <h2 className="text-headline-lg font-headline-lg text-on-surface mb-xs">Edit Record</h2>
      <div className="flex items-center gap-sm">
      <span className="flex items-center gap-xs px-sm py-xs bg-surface-container-highest text-on-surface-variant text-label-caps font-label-caps rounded-full">
      <FilePenLine className="text-[14px]" aria-hidden={true} focusable="false" />
                                      Draft - Unsaved
                                  </span>
      </div>
      </div>
      </div>
      {/* Editor Form Card */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-lg shadow-sm">
      <form className="flex flex-col gap-lg">
      {/* Record Name */}
      <div className="flex flex-col gap-xs">
      <label className="text-body-sm font-body-sm font-bold text-primary" htmlFor="record-name">Record Name <span className="text-error">*</span></label>
      <input className="w-full bg-surface-container-lowest border border-outline-variant rounded-DEFAULT px-md py-sm text-body-md font-body-md focus:outline-none focus:ring-2 focus:ring-primary-container focus:border-transparent transition-colors" id="record-name" name="record-name" type="text" defaultValue="Prod-Router-Ping-01" />
      </div>
      {/* Source URL */}
      <div className="flex flex-col gap-xs">
      <label className="text-body-sm font-body-sm font-bold text-primary" htmlFor="source-url">Source URL <span className="text-error">*</span></label>
      <input className="w-full bg-surface-container-lowest border border-error rounded-DEFAULT px-md py-sm text-body-md font-body-md focus:outline-none focus:ring-2 focus:ring-error focus:border-transparent transition-colors" id="source-url" name="source-url" type="text" defaultValue="http//internal-router.prod.local" />
      <span className="text-body-sm font-body-sm text-error flex items-center gap-xs mt-xs">
      <CircleAlert className="text-[16px]" aria-hidden={true} focusable="false" />
                                      Invalid URL format. Must include valid protocol.
                                  </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
      {/* Ping Interval */}
      <div className="flex flex-col gap-xs">
      <label className="text-body-sm font-body-sm font-bold text-primary" htmlFor="ping-interval">Ping Interval (ms) <span className="text-error">*</span></label>
      <div className="relative">
      <input className="w-full bg-surface-container-lowest border border-outline-variant rounded-DEFAULT pl-md pr-xl py-sm text-code-sm font-code-sm focus:outline-none focus:ring-2 focus:ring-primary-container focus:border-transparent transition-colors" id="ping-interval" name="ping-interval" type="number" defaultValue="1500" />
      <span className="absolute right-md top-1/2 -translate-y-1/2 text-body-sm text-on-surface-variant pointer-events-none">ms</span>
      </div>
      </div>
      {/* Rootfix Protocol */}
      <div className="flex flex-col gap-xs">
      <label className="text-body-sm font-body-sm font-bold text-primary" htmlFor="protocol">Rootfix Protocol</label>
      <select className="w-full bg-surface-container-lowest border border-outline-variant rounded-DEFAULT px-md py-sm text-body-md font-body-md focus:outline-none focus:ring-2 focus:ring-primary-container focus:border-transparent transition-colors appearance-none cursor-pointer" id="protocol" name="protocol">
      <option value="icmp">ICMP (Default)</option>
      <option selected={true} value="tcp">TCP Connect</option>
      <option value="udp">UDP Echo</option>
      <option value="http">HTTP HEAD</option>
      </select>
      </div>
      </div>
      {/* Advanced Settings Toggle (Example of density) */}
      <div className="mt-md border-t border-outline-variant pt-md">
      <button className="flex items-center gap-sm text-body-sm font-body-sm text-secondary hover:text-primary transition-colors" type="button" data-action-id="show-advanced-configuration-5" onClick={actions?.["show-advanced-configuration-5"]}>
      <SlidersHorizontal className="text-[18px]" aria-hidden={true} focusable="false" />
                                      Show Advanced Configuration
                                  </button>
      </div>
      </form>
      </div>
      {/* Action Footer */}
      <div className="mt-xl flex items-center justify-end gap-md">
      <button className="px-md py-sm bg-surface-container-lowest border border-outline-variant text-primary text-body-md font-body-md font-medium rounded-DEFAULT hover:bg-surface-container-low transition-colors" type="button" data-action-id="cancel-6" onClick={actions?.["cancel-6"]}>
                              Cancel
                          </button>
      <button className="px-md py-sm bg-primary-container text-on-primary text-body-md font-body-md font-medium rounded-DEFAULT hover:opacity-90 transition-opacity flex items-center gap-sm" type="button" data-action-id="save-record-7" onClick={actions?.["save-record-7"]}>
      <Save className="text-[18px]" aria-hidden={true} focusable="false" />
                              Save Record
                          </button>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
