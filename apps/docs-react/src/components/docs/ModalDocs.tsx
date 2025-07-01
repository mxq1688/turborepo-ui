import React, { useState } from 'react';
import { Modal, Button } from '@ui-lib/ui-react';

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
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              属性
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              说明
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              类型
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              默认值
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {row.property}
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                {row.description}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 font-mono">
                {row.type}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-mono">
                {row.default}
              </td>
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
      <div className="p-6 bg-white border-b border-gray-200">
        {children}
      </div>
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

const ModalDocs: React.FC = () => {
  const [basicModalOpen, setBasicModalOpen] = useState(false);
  const [smallModalOpen, setSmallModalOpen] = useState(false);
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);

  const modalApiData = [
    { property: 'isOpen', description: '对话框是否可见', type: 'boolean', default: 'false' },
    { property: 'onClose', description: '点击遮罩层或右上角叉号的回调', type: '() => void', default: '-' },
    { property: 'title', description: '标题', type: 'string', default: '-' },
    { property: 'size', description: '尺寸', type: "'sm' | 'md' | 'lg' | 'xl'", default: "'md'" },
    { property: 'closable', description: '是否显示右上角的关闭按钮', type: 'boolean', default: 'true' },
    { property: 'maskClosable', description: '点击蒙层是否允许关闭', type: 'boolean', default: 'true' },
    { property: 'className', description: '自定义 CSS 类名', type: 'string', default: '-' },
    { property: 'children', description: '对话框内容', type: 'ReactNode', default: '-' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Modal 对话框</h1>
        <p className="text-lg text-gray-600">模态对话框。</p>
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">何时使用</h2>
          <ul className="text-gray-600 space-y-2">
            <li>• 需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。</li>
            <li>• 另外当需要一个简洁的确认框询问用户时，可以使用 Modal.confirm() 等语法糖方法。</li>
          </ul>
        </div>

        <ExampleBlock
          title="基础用法"
          description="第一个对话框。"
          code={`import { Modal, Button } from '@ui-lib/ui-react';
import { useState } from 'react';

export default function BasicModal() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>
        打开对话框
      </Button>
      
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="基础对话框"
      >
        <div className="space-y-4">
          <p>这是一个基础的对话框示例。</p>
          <p>点击遮罩层或右上角的关闭按钮可以关闭对话框。</p>
          
          <div className="flex justify-end space-x-2 pt-4">
            <Button variant="outline" onClick={() => setOpen(false)}>
              取消
            </Button>
            <Button onClick={() => setOpen(false)}>
              确定
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}`}
        >
          <div>
            <Button onClick={() => setBasicModalOpen(true)}>
              打开对话框
            </Button>
            
            <Modal
              isOpen={basicModalOpen}
              onClose={() => setBasicModalOpen(false)}
              title="基础对话框"
            >
              <div className="space-y-4">
                <p>这是一个基础的对话框示例。</p>
                <p>点击遮罩层或右上角的关闭按钮可以关闭对话框。</p>
                
                <div className="flex justify-end space-x-2 pt-4">
                  <Button variant="outline" onClick={() => setBasicModalOpen(false)}>
                    取消
                  </Button>
                  <Button onClick={() => setBasicModalOpen(false)}>
                    确定
                  </Button>
                </div>
              </div>
            </Modal>
          </div>
        </ExampleBlock>

        <ExampleBlock
          title="自定义宽度"
          description="使用 width 来设置模态对话框的宽度。"
          code={`import { Modal, Button } from '@ui-lib/ui-react';
import { useState } from 'react';

export default function SmallModal() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>
        小对话框
      </Button>
      
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="小对话框"
        size="sm"
      >
        <div className="space-y-4">
          <p>这是一个较小的对话框。</p>
          
          <div className="flex justify-end space-x-2 pt-4">
            <Button size="sm" onClick={() => setOpen(false)}>
              确定
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}`}
        >
          <div>
            <Button onClick={() => setSmallModalOpen(true)}>
              小对话框
            </Button>
            
                          <Modal
                isOpen={smallModalOpen}
                onClose={() => setSmallModalOpen(false)}
                title="小对话框"
                size="sm"
            >
              <div className="space-y-4">
                <p>这是一个较小的对话框。</p>
                
                <div className="flex justify-end space-x-2 pt-4">
                  <Button size="sm" onClick={() => setSmallModalOpen(false)}>
                    确定
                  </Button>
                </div>
              </div>
            </Modal>
          </div>
        </ExampleBlock>

        <ExampleBlock
          title="确认对话框"
          description="使用 confirm() 可以快捷地弹出确认框。"
          code={`import { Modal, Button } from '@ui-lib/ui-react';
import { useState } from 'react';

export default function ConfirmModal() {
  const [open, setOpen] = useState(false);

  const handleConfirm = () => {
    alert('已确认删除');
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outline" onClick={() => setOpen(true)}>
        删除确认
      </Button>
      
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="确认删除"
        size="sm"
      >
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">确认删除</h3>
              <p className="mt-2 text-sm text-gray-500">
                您确定要删除这条记录吗？此操作不可撤销。
              </p>
            </div>
          </div>
          
          <div className="flex justify-end space-x-2 pt-4">
            <Button variant="outline" onClick={() => setOpen(false)}>
              取消
            </Button>
            <Button variant="primary" onClick={handleConfirm}>
              确认删除
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}`}
        >
          <div>
            <Button variant="outline" onClick={() => setConfirmModalOpen(true)}>
              删除确认
            </Button>
            
                          <Modal
                isOpen={confirmModalOpen}
                onClose={() => setConfirmModalOpen(false)}
                title="确认删除"
                size="sm"
            >
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">确认删除</h3>
                    <p className="mt-2 text-sm text-gray-500">
                      您确定要删除这条记录吗？此操作不可撤销。
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-end space-x-2 pt-4">
                  <Button variant="outline" onClick={() => setConfirmModalOpen(false)}>
                    取消
                  </Button>
                  <Button variant="primary" onClick={() => {
                    alert('已确认删除');
                    setConfirmModalOpen(false);
                  }}>
                    确认删除
                  </Button>
                </div>
              </div>
            </Modal>
          </div>
        </ExampleBlock>

        <ApiTable title="Modal API" data={modalApiData} />

        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">设计指引</h3>
          <div className="bg-gray-50 rounded-lg p-6 space-y-4">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">使用场景</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <strong>信息反馈</strong>：向用户显示重要信息或警告</li>
                <li>• <strong>二次确认</strong>：确认用户的重要操作</li>
                <li>• <strong>复杂交互</strong>：承载复杂的操作界面</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">交互建议</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 关闭方式应该多样化：ESC键、点击遮罩、关闭按钮</li>
                <li>• 重要操作应该有明确的确认和取消按钮</li>
                <li>• 对话框应该有合适的尺寸，不宜过大或过小</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDocs; 