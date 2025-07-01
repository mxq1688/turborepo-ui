import React, { useState } from 'react';
import { styleUtils, combineClasses } from '@ui-lib/shared';

export interface Tab {
  key: string;
  label: string;
  content?: React.ReactNode;
  children?: React.ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  tabs?: Tab[];
  items?: Tab[];
  defaultActiveKey?: string;
  activeKey?: string;
  onChange?: (key: string) => void;
  className?: string;
  type?: 'line' | 'card';
  size?: 'small' | 'default' | 'large';
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  items,
  defaultActiveKey,
  activeKey: controlledActiveKey,
  onChange,
  className
}) => {
  // Support both tabs and items props (items takes precedence for Ant Design compatibility)
  const tabData = items || tabs || [];
  
  const [internalActiveKey, setInternalActiveKey] = useState(
    defaultActiveKey || tabData[0]?.key || ''
  );

  const activeKey = controlledActiveKey ?? internalActiveKey;
  const isControlled = controlledActiveKey !== undefined;

  const handleTabClick = (key: string) => {
    if (!isControlled) {
      setInternalActiveKey(key);
    }
    onChange?.(key);
  };

  const activeTab = tabData.find(tab => tab.key === activeKey);

  return (
    <div className={className}>
      {/* Tab List */}
      <div className={styleUtils.tabs.list} role="tablist">
        {tabData.map((tab) => (
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
        {activeTab?.content || activeTab?.children}
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