import { useState, useRef, useEffect } from 'react';
import { combineClasses } from '@ui-lib/shared';

interface DatePickerProps {
  value?: string | Date;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  format?: string;
  className?: string;
}

export function DatePicker({
  value,
  onChange,
  placeholder = '请选择日期',
  disabled = false,

  className,
}: DatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // 格式化日期
  const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // 解析日期
  const parseDate = (dateStr: string): Date | null => {
    if (!dateStr) return null;
    const date = new Date(dateStr);
    return isNaN(date.getTime()) ? null : date;
  };

  // 显示值
  const displayValue = (() => {
    if (!value) return '';
    const date = typeof value === 'string' ? parseDate(value) : value;
    return date ? formatDate(date) : '';
  })();

  // 当前年月
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;

  // 生成日历数据
  const generateCalendarDates = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const firstDayWeek = firstDay.getDay();
    
    const dates = [];
    
    // 上个月的日期
    for (let i = firstDayWeek - 1; i >= 0; i--) {
      const date = new Date(year, month, -i);
      dates.push({
        key: `prev-${date.getDate()}`,
        day: date.getDate(),
        date: date,
        isCurrentMonth: false,
        isSelected: false,
        isToday: false
      });
    }
    
    // 本月的日期
    for (let day = 1; day <= lastDay.getDate(); day++) {
      const date = new Date(year, month, day);
      const today = new Date();
      const selectedDate = typeof value === 'string' ? parseDate(value) : value;
      
      dates.push({
        key: `current-${day}`,
        day: day,
        date: date,
        isCurrentMonth: true,
        isSelected: selectedDate ? formatDate(date) === formatDate(selectedDate) : false,
        isToday: formatDate(date) === formatDate(today)
      });
    }
    
    // 下个月的日期
    const remainingCells = 42 - dates.length; // 6 rows * 7 days
    for (let day = 1; day <= remainingCells; day++) {
      const date = new Date(year, month + 1, day);
      dates.push({
        key: `next-${day}`,
        day: day,
        date: date,
        isCurrentMonth: false,
        isSelected: false,
        isToday: false
      });
    }
    
    return dates;
  };

  const calendarDates = generateCalendarDates();

  // 切换日期选择器
  const togglePicker = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  // 选择日期
  const selectDate = (dateItem: any) => {
    if (!dateItem.isCurrentMonth) return;
    
    const selectedValue = formatDate(dateItem.date);
    onChange?.(selectedValue);
    setIsOpen(false);
  };

  // 上一月
  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  // 下一月
  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  // 点击外部关闭
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const inputClasses = combineClasses(
    'block w-full rounded-md border px-3 py-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 transition-colors',
    'border-gray-300 focus:border-blue-500 focus:ring-blue-500',
    disabled && 'bg-gray-50 cursor-not-allowed',
    'cursor-pointer',
    className
  );

  return (
    <div ref={containerRef} className="relative">
      <input
        ref={inputRef}
        type="text"
        className={inputClasses}
        placeholder={placeholder}
        disabled={disabled}
        readOnly
        value={displayValue}
        onClick={togglePicker}
      />
      
      {/* 日期选择器弹窗 */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50 p-4">
          <div className="mb-4 flex items-center justify-between">
            <button
              onClick={prevMonth}
              className="p-1 hover:bg-gray-100 rounded"
            >
              ←
            </button>
            <span className="font-medium">
              {currentYear}年{currentMonth}月
            </span>
            <button
              onClick={nextMonth}
              className="p-1 hover:bg-gray-100 rounded"
            >
              →
            </button>
          </div>
          
          {/* 日历网格 */}
          <div className="grid grid-cols-7 gap-1 text-center text-sm">
            {['日', '一', '二', '三', '四', '五', '六'].map((day) => (
              <div key={day} className="p-2 text-gray-500 font-medium">
                {day}
              </div>
            ))}
            
            {calendarDates.map((date) => (
              <div
                key={date.key}
                onClick={() => selectDate(date)}
                className={combineClasses(
                  'p-2 cursor-pointer rounded',
                  date.isCurrentMonth
                    ? 'text-gray-900 hover:bg-blue-50'
                    : 'text-gray-400',
                  date.isSelected
                    ? 'bg-blue-500 text-white'
                    : '',
                  date.isToday
                    ? 'bg-blue-100 text-blue-700'
                    : ''
                )}
              >
                {date.day}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default DatePicker; 