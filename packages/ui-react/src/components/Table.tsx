import React, { useState, useMemo } from 'react';
import { combineClasses } from '@ui-lib/shared';

// ===== 类型定义 =====
export interface TableColumn<T = any> {
  key: string;
  title: string;
  dataIndex?: string;
  width?: number | string;
  align?: 'left' | 'center' | 'right';
  sortable?: boolean;
  render?: (value: any, record: T, index: number) => React.ReactNode;
  className?: string;
}

export interface TableProps<T = any> {
  columns: TableColumn<T>[];
  dataSource: T[];
  rowKey?: string | ((record: T) => string);
  loading?: boolean;
  bordered?: boolean;
  striped?: boolean;
  hoverable?: boolean;
  size?: 'small' | 'middle' | 'large';
  pagination?: boolean | {
    current?: number;
    pageSize?: number;
    total?: number;
    onChange?: (page: number, pageSize: number) => void;
  };
  className?: string;
  style?: React.CSSProperties;
}

type SortOrder = 'ascend' | 'descend' | null;

export function Table<T = any>({
  columns,
  dataSource,
  rowKey = 'id',
  loading = false,
  bordered = false,
  striped = false,
  hoverable = true,
  size = 'middle',
  pagination = false,
  className,
  style,
}: TableProps<T>) {
  const [sortedInfo, setSortedInfo] = useState<{
    columnKey: string;
    order: SortOrder;
  }>({ columnKey: '', order: null });
  
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  // 获取行唯一标识
  const getRowKey = (record: T, index: number): string => {
    if (typeof rowKey === 'function') {
      return rowKey(record);
    }
    return (record as any)[rowKey] || index.toString();
  };

  // 排序逻辑
  const sortedData = useMemo(() => {
    if (!sortedInfo.order || !sortedInfo.columnKey) {
      return dataSource;
    }

    const column = columns.find(col => col.key === sortedInfo.columnKey);
    if (!column || !column.dataIndex) {
      return dataSource;
    }

    return [...dataSource].sort((a, b) => {
      const aValue = (a as any)[column.dataIndex!];
      const bValue = (b as any)[column.dataIndex!];
      
      if (aValue < bValue) {
        return sortedInfo.order === 'ascend' ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortedInfo.order === 'ascend' ? 1 : -1;
      }
      return 0;
    });
  }, [dataSource, sortedInfo, columns]);

  // 分页逻辑
  const paginatedData = useMemo(() => {
    if (!pagination) {
      return sortedData;
    }
    
    const start = (currentPage - 1) * pageSize;
    return sortedData.slice(start, start + pageSize);
  }, [sortedData, pagination, currentPage, pageSize]);

  // 处理排序
  const handleSort = (columnKey: string) => {
    let order: SortOrder = 'ascend';
    
    if (sortedInfo.columnKey === columnKey) {
      if (sortedInfo.order === 'ascend') {
        order = 'descend';
      } else if (sortedInfo.order === 'descend') {
        order = null;
      }
    }
    
    setSortedInfo({ columnKey, order });
  };

  // 样式类
  const tableClasses = combineClasses(
    'min-w-full divide-y divide-gray-200 bg-white',
    bordered && 'border border-gray-200',
    className
  );

  const headerClasses = combineClasses(
    'bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider',
    size === 'small' && 'px-3 py-2',
    size === 'middle' && 'px-4 py-3',
    size === 'large' && 'px-6 py-4'
  );

  const cellClasses = combineClasses(
    'text-sm text-gray-900',
    size === 'small' && 'px-3 py-2',
    size === 'middle' && 'px-4 py-3',
    size === 'large' && 'px-6 py-4',
    bordered && 'border-r border-gray-200 last:border-r-0'
  );

  const rowClasses = combineClasses(
    'transition-colors duration-150',
    striped && 'even:bg-gray-50',
    hoverable && 'hover:bg-gray-50',
    bordered && 'border-b border-gray-200'
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        <span className="ml-2 text-gray-500">加载中...</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col" style={style}>
      <div className="overflow-auto">
        <table className={tableClasses}>
          <thead>
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={combineClasses(
                    headerClasses,
                    column.align === 'center' && 'text-center',
                    column.align === 'right' && 'text-right',
                    column.sortable && 'cursor-pointer select-none hover:bg-gray-100',
                    column.className
                  )}
                  style={{ width: column.width }}
                  onClick={() => column.sortable && handleSort(column.key)}
                >
                  <div className="flex items-center space-x-1">
                    <span>{column.title}</span>
                    {column.sortable && (
                      <div className="flex flex-col">
                        <div 
                          className={combineClasses(
                            'w-0 h-0 border-l-2 border-r-2 border-b-2 border-transparent border-b-gray-400',
                            sortedInfo.columnKey === column.key && sortedInfo.order === 'ascend' && 'border-b-blue-500'
                          )}
                        />
                        <div 
                          className={combineClasses(
                            'w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-gray-400',
                            sortedInfo.columnKey === column.key && sortedInfo.order === 'descend' && 'border-t-blue-500'
                          )}
                        />
                      </div>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          
          <tbody className="bg-white divide-y divide-gray-200">
            {paginatedData.map((record, index) => {
              const recordKey = getRowKey(record, index);
              
              return (
                <tr key={recordKey} className={rowClasses}>
                  {columns.map((column) => {
                    const value = column.dataIndex ? (record as any)[column.dataIndex] : record;
                    const content = column.render
                      ? column.render(value, record, index)
                      : value;
                    
                    return (
                      <td
                        key={column.key}
                        className={combineClasses(
                          cellClasses,
                          column.align === 'center' && 'text-center',
                          column.align === 'right' && 'text-right',
                          column.className
                        )}
                      >
                        {content}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      
      {/* 分页 */}
      {pagination && typeof pagination === 'object' && (
        <div className="flex items-center justify-between mt-4">
          <div className="text-sm text-gray-700">
            显示 {((currentPage - 1) * pageSize) + 1} 到{' '}
            {Math.min(currentPage * pageSize, sortedData.length)} 项，
            共 {sortedData.length} 项
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50"
              disabled={currentPage === 1}
              onClick={() => {
                const newPage = currentPage - 1;
                setCurrentPage(newPage);
                pagination.onChange?.(newPage, pageSize);
              }}
            >
              上一页
            </button>
            
            <span className="text-sm text-gray-700">
              第 {currentPage} 页 / 共 {Math.ceil(sortedData.length / pageSize)} 页
            </span>
            
            <button
              className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50"
              disabled={currentPage >= Math.ceil(sortedData.length / pageSize)}
              onClick={() => {
                const newPage = currentPage + 1;
                setCurrentPage(newPage);
                pagination.onChange?.(newPage, pageSize);
              }}
            >
              下一页
            </button>
          </div>
        </div>
      )}
      
      {/* 空状态 */}
      {paginatedData.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <p className="mt-2">暂无数据</p>
        </div>
      )}
    </div>
  );
}

export default Table; 