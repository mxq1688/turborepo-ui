import React, { useState } from 'react';
import { Upload, Button } from '@ui-lib/ui-react';

interface ApiTableProps {
  title: string;
  data: Array<{
    property: string;
    description: string;
    type: string;
    default: string;
  }>;
}

const ApiTable: React.FC<ApiTableProps> = ({ title, data }) => (
  <div className="mt-8">
    <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">属性</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">说明</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">类型</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">默认值</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.property}</td>
              <td className="px-6 py-4 text-sm text-gray-500">{row.description}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 font-mono">{row.type}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-mono">{row.default}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

interface ExampleBlockProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  code: string;
}

const ExampleBlock: React.FC<ExampleBlockProps> = ({ title, description, children, code }) => (
  <div className="mt-8">
    <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
    {description && <p className="text-gray-600 mb-4">{description}</p>}
    <div className="border border-gray-200 rounded-lg">
      <div className="p-6 bg-white border-b border-gray-200">{children}</div>
      <div className="bg-gray-50">
        <details className="group">
          <summary className="px-4 py-3 cursor-pointer text-sm text-gray-600 hover:text-gray-900 flex items-center justify-between">
            <span>显示代码</span>
            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div className="px-4 pb-4">
            <pre className="bg-gray-900 text-gray-100 p-4 rounded text-sm overflow-x-auto">
              <code>{code}</code>
            </pre>
          </div>
        </details>
      </div>
    </div>
  </div>
);

const UploadDocs: React.FC = () => {
  const [fileList, setFileList] = useState<File[]>([]);

  const uploadApiData = [
    { property: 'accept', description: '接受上传的文件类型', type: 'string', default: '-' },
    { property: 'multiple', description: '是否支持多选文件', type: 'boolean', default: 'false' },
    { property: 'maxCount', description: '限制上传数量。当为 1 时，始终用最新上传的文件代替当前文件', type: 'number', default: '-' },
    { property: 'maxSize', description: '限制文件大小，单位：字节', type: 'number', default: '-' },
    { property: 'disabled', description: '是否禁用', type: 'boolean', default: 'false' },
    { property: 'showUploadList', description: '是否展示文件列表', type: 'boolean', default: 'true' },
    { property: 'fileList', description: '已经上传的文件列表（受控）', type: 'File[]', default: '-' },
    { property: 'onChange', description: '上传文件改变时的回调', type: '(fileList: File[]) => void', default: '-' },
    { property: 'onPreview', description: '点击文件链接或预览图标时的回调', type: '(file: File) => void', default: '-' },
    { property: 'onRemove', description: '点击移除文件时的回调', type: '(file: File) => void', default: '-' },
    { property: 'children', description: '上传按钮内容', type: 'ReactNode', default: '-' },
    { property: 'className', description: '自定义 CSS 类名', type: 'string', default: '-' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Upload 上传</h1>
        <p className="text-lg text-gray-600">文件选择上传和拖拽上传控件。</p>
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">何时使用</h2>
          <ul className="text-gray-600 space-y-2">
            <li>• 上传是将信息（网页、文字、图片、视频等）发送到远程服务器过程。</li>
            <li>• 当需要上传一个或一些文件时。</li>
            <li>• 当需要展现上传的进度时。</li>
            <li>• 当需要使用拖拽交互时。</li>
          </ul>
        </div>

        <ExampleBlock
          title="点击上传"
          description="经典款式，用户点击按钮弹出文件选择框。"
          code={`import { Upload, Button } from '@ui-lib/ui-react';

export default function BasicUpload() {
  return (
    <Upload>
      <Button>点击上传</Button>
    </Upload>
  );
}`}
        >
          <Upload>
            <Button>点击上传</Button>
          </Upload>
        </ExampleBlock>

        <ExampleBlock
          title="多文件上传"
          description="支持多文件上传。"
          code={`import { Upload, Button } from '@ui-lib/ui-react';

export default function MultipleUpload() {
  return (
    <Upload multiple>
      <Button>选择多个文件</Button>
    </Upload>
  );
}`}
        >
          <Upload multiple>
            <Button>选择多个文件</Button>
          </Upload>
        </ExampleBlock>

        <ExampleBlock
          title="文件类型限制"
          description="通过 accept 限制上传文件类型。"
          code={`import { Upload, Button } from '@ui-lib/ui-react';

export default function AcceptUpload() {
  return (
    <div className="space-y-4">
      <div>
        <p className="mb-2 text-sm font-medium">只能上传图片:</p>
        <Upload accept="image/*">
          <Button>选择图片</Button>
        </Upload>
      </div>
      
      <div>
        <p className="mb-2 text-sm font-medium">只能上传PDF:</p>
        <Upload accept=".pdf">
          <Button>选择PDF</Button>
        </Upload>
      </div>
    </div>
  );
}`}
        >
          <div className="space-y-4">
            <div>
              <p className="mb-2 text-sm font-medium">只能上传图片:</p>
              <Upload accept="image/*">
                <Button>选择图片</Button>
              </Upload>
            </div>
            
            <div>
              <p className="mb-2 text-sm font-medium">只能上传PDF:</p>
              <Upload accept=".pdf">
                <Button>选择PDF</Button>
              </Upload>
            </div>
          </div>
        </ExampleBlock>

        <ExampleBlock
          title="拖拽上传"
          description="把文件拖入指定区域，完成上传，同样支持点击上传。"
          code={`import { Upload } from '@ui-lib/ui-react';

export default function DragUpload() {
  return (
    <Upload drag>
      <div className="text-center p-8">
        <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
          <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <p className="mt-2 text-sm text-gray-600">
          <span className="font-medium text-blue-600 hover:text-blue-500">点击上传</span>
          &nbsp;或拖拽文件到此区域
        </p>
        <p className="text-xs text-gray-500">
          支持单个或批量上传
        </p>
      </div>
    </Upload>
  );
}`}
        >
          <Upload drag>
            <div className="text-center p-8">
              <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="mt-2 text-sm text-gray-600">
                <span className="font-medium text-blue-600 hover:text-blue-500">点击上传</span>
                &nbsp;或拖拽文件到此区域
              </p>
              <p className="text-xs text-gray-500">
                支持单个或批量上传
              </p>
            </div>
          </Upload>
        </ExampleBlock>

        <ExampleBlock
          title="受控的文件列表"
          description="通过 fileList 对列表进行完全控制，可以实现各种自定义功能。"
          code={`import { Upload, Button } from '@ui-lib/ui-react';
import { useState } from 'react';

export default function ControlledUpload() {
  const [fileList, setFileList] = useState<File[]>([]);

  return (
    <div>
      <Upload
        fileList={fileList}
        onChange={setFileList}
        multiple
      >
        <Button>选择文件</Button>
      </Upload>
      
      <div className="mt-4">
        <p className="text-sm font-medium">已选择 {fileList.length} 个文件:</p>
        <ul className="mt-2 text-sm text-gray-600">
          {fileList.map((file, index) => (
            <li key={index}>
              {file.name} ({(file.size / 1024).toFixed(1)} KB)
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}`}
        >
          <div>
            <Upload
              fileList={fileList}
              onChange={setFileList}
              multiple
            >
              <Button>选择文件</Button>
            </Upload>
            
            <div className="mt-4">
              <p className="text-sm font-medium">已选择 {fileList.length} 个文件:</p>
              <ul className="mt-2 text-sm text-gray-600">
                {fileList.map((file, index) => (
                  <li key={index}>
                    {file.name} ({(file.size / 1024).toFixed(1)} KB)
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ExampleBlock>

        <ExampleBlock
          title="限制文件大小和数量"
          description="可以使用 maxSize 和 maxCount 来限制文件。"
          code={`import { Upload, Button } from '@ui-lib/ui-react';

export default function LimitUpload() {
  return (
    <div className="space-y-4">
      <div>
        <p className="mb-2 text-sm font-medium">最多3个文件:</p>
        <Upload maxCount={3} multiple>
          <Button>选择文件 (最多3个)</Button>
        </Upload>
      </div>
      
      <div>
        <p className="mb-2 text-sm font-medium">文件大小限制1MB:</p>
        <Upload maxSize={1024 * 1024}>
          <Button>选择文件 (最大1MB)</Button>
        </Upload>
      </div>
    </div>
  );
}`}
        >
          <div className="space-y-4">
            <div>
              <p className="mb-2 text-sm font-medium">最多3个文件:</p>
              <Upload maxCount={3} multiple>
                <Button>选择文件 (最多3个)</Button>
              </Upload>
            </div>
            
            <div>
              <p className="mb-2 text-sm font-medium">文件大小限制1MB:</p>
              <Upload maxSize={1024 * 1024}>
                <Button>选择文件 (最大1MB)</Button>
              </Upload>
            </div>
          </div>
        </ExampleBlock>

        <ApiTable title="Upload API" data={uploadApiData} />

        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">设计指引</h3>
          <div className="bg-gray-50 rounded-lg p-6 space-y-4">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">上传方式</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <strong>点击上传</strong>：经典方式，适用于大多数场景</li>
                <li>• <strong>拖拽上传</strong>：提供更好的用户体验，适合批量上传</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">使用建议</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 明确告知用户文件类型和大小限制</li>
                <li>• 提供清晰的上传进度反馈</li>
                <li>• 支持文件预览和删除功能</li>
                <li>• 处理上传失败的错误提示</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadDocs; 