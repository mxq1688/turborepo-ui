import React, { useState, useRef } from 'react';
import { combineClasses } from '@ui-lib/shared';

interface UploadFile {
  uid: string;
  name: string;
  size: number;
  type: string;
  status: 'uploading' | 'done' | 'error' | 'removed';
  percent: number;
  url?: string;
  response?: any;
  error?: any;
  originFileObj?: File;
}

interface UploadProps {
  accept?: string;
  multiple?: boolean;
  disabled?: boolean;
  listType?: 'text' | 'picture' | 'picture-card';
  maxCount?: number;
  maxSize?: number; // bytes
  beforeUpload?: (file: File) => boolean | Promise<boolean>;
  customRequest?: (options: any) => void;
  onChange?: (fileList: UploadFile[]) => void;
  onRemove?: (file: UploadFile) => void;
  onPreview?: (file: UploadFile) => void;
  className?: string;
}

export function Upload({
  accept = '*',
  multiple = false,
  disabled = false,
  listType = 'picture',
  maxCount = Infinity,
  maxSize = Infinity,
  beforeUpload,
  customRequest,
  onChange,
  onRemove,

  className,
}: UploadProps) {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 生成唯一ID
  const generateUID = (): string => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };

  // 格式化文件大小
  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  // 接受的文件类型提示
  const acceptText = accept === '*' ? '支持任意格式文件' : `支持格式: ${accept}`;

  // 触发文件选择
  const triggerFileInput = () => {
    if (disabled) return;
    fileInputRef.current?.click();
  };

  // 处理文件选择
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      handleFiles(Array.from(files));
    }
  };

  // 处理拖拽上传
  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    setIsDragOver(false);
    
    if (disabled) return;
    
    const files = event.dataTransfer?.files;
    if (files) {
      handleFiles(Array.from(files));
    }
  };

  // 处理文件
  const handleFiles = async (files: File[]) => {
    // 检查文件数量限制
    if (fileList.length + files.length > maxCount) {
      console.warn(`最多只能上传 ${maxCount} 个文件`);
      return;
    }

    const newFileList = [...fileList];

    for (const file of files) {
      // 检查文件大小
      if (file.size > maxSize) {
        console.warn(`文件 ${file.name} 超过大小限制`);
        continue;
      }

      // 执行 beforeUpload 钩子
      if (beforeUpload) {
        try {
          const result = await beforeUpload(file);
          if (result === false) {
            continue;
          }
        } catch (error) {
          console.error('beforeUpload error:', error);
          continue;
        }
      }

      // 创建文件对象
      const uploadFile: UploadFile = {
        uid: generateUID(),
        name: file.name,
        size: file.size,
        type: file.type,
        status: 'uploading',
        percent: 0,
        originFileObj: file
      };

      newFileList.push(uploadFile);

      // 模拟上传过程
      if (customRequest) {
        customRequest({
          file,
          filename: file.name,
          onProgress: (percent: number) => {
            uploadFile.percent = percent;
            setFileList([...newFileList]);
          },
          onSuccess: (response: any) => {
            uploadFile.status = 'done';
            uploadFile.response = response;
            uploadFile.url = response?.url;
            setFileList([...newFileList]);
          },
          onError: (error: any) => {
            uploadFile.status = 'error';
            uploadFile.error = error;
            setFileList([...newFileList]);
          }
        });
      } else {
        // 默认模拟上传
        simulateUpload(uploadFile, newFileList);
      }
    }

    setFileList(newFileList);
    onChange?.(newFileList);
  };

  // 模拟上传过程
  const simulateUpload = (uploadFile: UploadFile, currentFileList: UploadFile[]) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 30;
      uploadFile.percent = Math.min(Math.round(progress), 100);
      
      setFileList([...currentFileList]);
      
      if (progress >= 100) {
        clearInterval(interval);
        uploadFile.status = 'done';
        uploadFile.url = URL.createObjectURL(uploadFile.originFileObj!);
        setFileList([...currentFileList]);
      }
    }, 200);
  };

  // 移除文件
  const removeFile = (index: number) => {
    const file = fileList[index];
    if (file) {
      const newFileList = fileList.filter((_, i) => i !== index);
      setFileList(newFileList);
      onRemove?.(file);
      onChange?.(newFileList);
    }
  };

  const uploadAreaClasses = combineClasses(
    'border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors',
    isDragOver
      ? 'border-blue-400 bg-blue-50'
      : 'border-gray-300 hover:border-gray-400',
    disabled && 'cursor-not-allowed opacity-50',
    className
  );

  return (
    <div className="upload-component">
      {/* 拖拽上传区域 */}
      {listType !== 'text' ? (
        <div
          onClick={triggerFileInput}
          onDrop={handleDrop}
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragOver(true);
          }}
          onDragEnter={(e) => e.preventDefault()}
          onDragLeave={() => setIsDragOver(false)}
          className={uploadAreaClasses}
        >
          <div className="mb-4">
            <svg className="w-12 h-12 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
          </div>
          <div className="text-sm text-gray-600">
            <span className="font-medium text-blue-600">点击上传</span>
            或拖拽文件到此区域
          </div>
          <div className="text-xs text-gray-500 mt-2">
            {acceptText}
          </div>
        </div>
      ) : (
        /* 按钮上传 */
        <button
          onClick={triggerFileInput}
          disabled={disabled}
          className={combineClasses(
            'inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
            disabled && 'opacity-50 cursor-not-allowed',
            className
          )}
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
          选择文件
        </button>
      )}

      {/* 隐藏的文件输入框 */}
      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        disabled={disabled}
        onChange={handleFileSelect}
        className="hidden"
      />

      {/* 文件列表 */}
      {fileList.length > 0 && (
        <div className="mt-4 space-y-2">
          {fileList.map((file, index) => (
            <div
              key={file.uid}
              className="flex items-center justify-between p-3 border border-gray-200 rounded-lg"
            >
              <div className="flex items-center space-x-3 flex-1">
                {/* 文件图标 */}
                <div className="flex-shrink-0">
                  {file.status === 'uploading' ? (
                    <svg className="w-5 h-5 text-blue-500 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : file.status === 'done' ? (
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  ) : file.status === 'error' ? (
                    <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                
                {/* 文件信息 */}
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-gray-900 truncate">
                    {file.name}
                  </div>
                  <div className="text-xs text-gray-500">
                    {formatFileSize(file.size)}
                    {file.status === 'uploading' && (
                      <span className="ml-2">{file.percent}%</span>
                    )}
                  </div>
                </div>
              </div>

              {/* 删除按钮 */}
              <button
                onClick={() => removeFile(index)}
                className="ml-3 p-1 text-gray-400 hover:text-red-500 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Upload; 