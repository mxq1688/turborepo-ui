import React, { useState } from 'react'
import { Input } from '@ui-lib/ui-react'

export default function InputDocs() {
  const [basicValue, setBasicValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const [validationValue, setValidationValue] = useState('')
  const [searchValue, setSearchValue] = useState('')

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  return (
    <div className="space-y-8">
      {/* 标题和描述 */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Input 输入框</h1>
        <p className="text-lg text-gray-600 mb-6">
          通过鼠标或键盘输入内容，是最基础的表单域的包装。
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <p className="text-blue-800">
            <strong>何时使用：</strong>
            需要用户输入表单域内容时使用。
          </p>
        </div>
      </div>

      {/* 基础用法 */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">基础用法</h2>
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="space-y-4 mb-6 max-w-md">
            <Input 
              placeholder="请输入内容"
              value={basicValue}
              onChange={(e) => setBasicValue(e.target.value)}
            />
            <Input 
              label="用户名"
              placeholder="请输入用户名"
            />
            <Input 
              type="password"
              label="密码"
              placeholder="请输入密码"
              value={passwordValue}
              onChange={(e) => setPasswordValue(e.target.value)}
            />
          </div>
          
          <details className="mt-4">
            <summary className="cursor-pointer text-blue-600 hover:text-blue-800">
              查看代码
            </summary>
            <pre className="mt-2 bg-gray-50 p-4 rounded text-sm overflow-x-auto">
{`<Input 
  placeholder="请输入内容"
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>

<Input 
  label="用户名"
  placeholder="请输入用户名"
/>

<Input 
  type="password"
  label="密码"
  placeholder="请输入密码"
/>`}
            </pre>
          </details>
        </div>
      </section>

      {/* 不同尺寸 */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">不同尺寸</h2>
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="space-y-4 mb-6 max-w-md">
            <Input className="h-8 px-2 text-sm" placeholder="小型输入框" />
            <Input placeholder="中型输入框（默认）" />
            <Input className="h-12 px-4 text-lg" placeholder="大型输入框" />
          </div>
          
          <details className="mt-4">
            <summary className="cursor-pointer text-blue-600 hover:text-blue-800">
              查看代码
            </summary>
            <pre className="mt-2 bg-gray-50 p-4 rounded text-sm overflow-x-auto">
{`<Input size="sm" placeholder="小型输入框" />
<Input size="md" placeholder="中型输入框（默认）" />
<Input size="lg" placeholder="大型输入框" />`}
            </pre>
          </details>
        </div>
      </section>

      {/* 禁用状态 */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">禁用状态</h2>
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="space-y-4 mb-6 max-w-md">
            <Input disabled placeholder="禁用状态" />
            <Input disabled value="已有内容的禁用状态" />
            <Input readOnly value="只读状态" />
          </div>
          
          <details className="mt-4">
            <summary className="cursor-pointer text-blue-600 hover:text-blue-800">
              查看代码
            </summary>
            <pre className="mt-2 bg-gray-50 p-4 rounded text-sm overflow-x-auto">
{`<Input disabled placeholder="禁用状态" />
<Input disabled value="已有内容的禁用状态" />
<Input readOnly value="只读状态" />`}
            </pre>
          </details>
        </div>
      </section>

      {/* 验证状态 */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">验证状态</h2>
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="space-y-4 mb-6 max-w-md">
            <Input 
              label="邮箱"
              placeholder="请输入邮箱地址"
              value={validationValue}
              onChange={(e) => setValidationValue(e.target.value)}
              error={validationValue && !validateEmail(validationValue) ? '请输入有效的邮箱地址' : undefined}
            />
            <Input 
              label="成功状态"
              value="valid@example.com"
              readOnly
            />
            <Input 
              label="警告状态"
              value="用户名已存在"
            />
            <p className="text-sm text-orange-600 mt-1">建议使用其他用户名</p>
          </div>
          
          <details className="mt-4">
            <summary className="cursor-pointer text-blue-600 hover:text-blue-800">
              查看代码
            </summary>
            <pre className="mt-2 bg-gray-50 p-4 rounded text-sm overflow-x-auto">
{`<Input 
  label="邮箱"
  placeholder="请输入邮箱地址"
  value={value}
  onChange={(e) => setValue(e.target.value)}
  error={value && !validateEmail(value) ? '请输入有效的邮箱地址' : undefined}
/>

<Input 
  label="成功状态"
  value="valid@example.com"
  readOnly
/>

<Input 
  label="警告状态"
  value="用户名已存在"
  helperText="建议使用其他用户名"
/>`}
            </pre>
          </details>
        </div>
      </section>

      {/* 前缀和后缀 */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">前缀和后缀</h2>
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="space-y-4 mb-6 max-w-md">
            <Input 
              label="搜索"
              placeholder="搜索内容..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <Input 
              label="网址"
              placeholder="example"
            />
            <Input 
              label="价格"
              placeholder="0.00"
              type="number"
            />
          </div>
          
          <details className="mt-4">
            <summary className="cursor-pointer text-blue-600 hover:text-blue-800">
              查看代码
            </summary>
            <pre className="mt-2 bg-gray-50 p-4 rounded text-sm overflow-x-auto">
{`<Input 
  label="搜索"
  placeholder="搜索内容..."
  value={searchValue}
  onChange={(e) => setSearchValue(e.target.value)}
/>

<Input 
  label="网址"
  placeholder="example"
/>

<Input 
  label="价格"
  placeholder="0.00"
  type="number"
/>`}
            </pre>
          </details>
        </div>
      </section>

      {/* 文本域 */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">文本域</h2>
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="space-y-4 mb-6 max-w-md">
            <div>
              <Input 
                label="描述"
                placeholder="请输入描述信息..."
              />
              <p className="text-sm text-gray-500 mt-1">最多输入200个字符</p>
            </div>
            <Input 
              label="备注"
              placeholder="请输入备注..."
              disabled
            />
          </div>
          
          <details className="mt-4">
            <summary className="cursor-pointer text-blue-600 hover:text-blue-800">
              查看代码
            </summary>
            <pre className="mt-2 bg-gray-50 p-4 rounded text-sm overflow-x-auto">
{`<Input 
  label="描述"
  placeholder="请输入描述信息..."
  helperText="最多输入200个字符"
/>

<Input 
  label="备注"
  placeholder="请输入备注..."
  disabled
/>`}
            </pre>
          </details>
        </div>
      </section>

      {/* API */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">API</h2>
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
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
              {[
                { prop: 'value', desc: '输入框内容', type: 'string', default: '-' },
                { prop: 'defaultValue', desc: '输入框默认内容', type: 'string', default: '-' },
                { prop: 'placeholder', desc: '占位符', type: 'string', default: '-' },
                { prop: 'type', desc: '输入框类型', type: "'text' | 'password' | 'email' | 'number' | etc.", default: "'text'" },
                { prop: 'size', desc: '输入框大小', type: "'sm' | 'md' | 'lg'", default: "'md'" },
                { prop: 'disabled', desc: '是否禁用', type: 'boolean', default: 'false' },
                { prop: 'readOnly', desc: '是否只读', type: 'boolean', default: 'false' },
                { prop: 'label', desc: '标签文本', type: 'string', default: '-' },
                { prop: 'error', desc: '错误信息', type: 'string', default: '-' },
                { prop: 'helperText', desc: '帮助文本', type: 'string', default: '-' },
                { prop: 'className', desc: '自定义样式类', type: 'string', default: '-' },
                { prop: 'onChange', desc: '输入回调', type: '(event: ChangeEvent) => void', default: '-' },
                { prop: 'onFocus', desc: '获得焦点回调', type: '(event: FocusEvent) => void', default: '-' },
                { prop: 'onBlur', desc: '失去焦点回调', type: '(event: FocusEvent) => void', default: '-' }
              ].map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-blue-600">
                    {item.prop}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {item.desc}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-600">
                    {item.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {item.default}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
} 