import React, { useState } from 'react';
import { styleUtils, combineClasses } from '@ui-lib/shared';

export interface Tab {
  key: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  tabs: Tab[];
  defaultActiveKey?: string;
  activeKey?: string;
  onChange?: (key: string) => void;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  defaultActiveKey,
  activeKey: controlledActiveKey,
  onChange,
  className
}) => {
  const [internalActiveKey, setInternalActiveKey] = useState(
    defaultActiveKey || tabs[0]?.key || ''
  );

  const activeKey = controlledActiveKey ?? internalActiveKey;
  const isControlled = controlledActiveKey !== undefined;

  const handleTabClick = (key: string) => {
    if (!isControlled) {
      setInternalActiveKey(key);
    }
    onChange?.(key);
  };

  const activeTab = tabs.find(tab => tab.key === activeKey);

  return (
    <div className={className}>
      {/* Tab List */}
      <div className={styleUtils.tabs.list} role="tablist">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            role="tab"
            aria-selected={activeKey === tab.key}
            disabled={tab.disabled}
            className={combineClasses(
              styleUtils.tabs.tab,
              activeKey === tab.key && styleUtils.tabs.activeTab,
              tab.disabled && 'opacity-50 cursor-not-allowed'
            )}
            onClick={() => !tab.disabled && handleTabClick(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className={styleUtils.tabs.panel} role="tabpanel">
        {activeTab?.content}
      </div>
    </div>
  );
};

// Tab Panel 组件 - 用于更灵活的 Tab 内容组织
export interface TabPanelProps {
  children: React.ReactNode;
  className?: string;
}

export const TabPanel: React.FC<TabPanelProps> = ({ children, className }) => {
  return (
    <div className={combineClasses(styleUtils.tabs.panel, className)}>
      {children}
    </div>
  );
}; 