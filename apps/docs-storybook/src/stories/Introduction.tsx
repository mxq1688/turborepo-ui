import React from 'react'
import { introductionTexts } from '../utils/introduction'

interface IntroductionContentProps {
  locale?: string;
}

export const IntroductionContent: React.FC<IntroductionContentProps> = ({ locale = 'zh' }) => {
  const currentLocale = (locale as 'en' | 'zh') || 'zh'
  const texts = introductionTexts[currentLocale]

  return (
    <div className="sbdocs-content">
      <h1>{texts.title}</h1>

      <p>{texts.description}</p>

      <h2>🎨 {texts.features.title}</h2>

      <ul>
        <li><strong>{texts.features.theme}</strong></li>
        <li><strong>{texts.features.i18n}</strong></li>
        <li><strong>{texts.features.performance}</strong></li>
        <li><strong>{texts.features.responsive}</strong></li>
        <li><strong>{texts.features.accessibility}</strong></li>
      </ul>

      <h2>🚀 {texts.gettingStarted.title}</h2>

      <h3>{texts.gettingStarted.installation.title}</h3>

      <p>{texts.gettingStarted.installation.description}</p>

      <div className="sbdocs-code">
        <pre>
          <code>npm install @ui-lib/ui-react</code>
        </pre>
      </div>

      <h3>{texts.gettingStarted.basicUsage.title}</h3>

      <p>{texts.gettingStarted.basicUsage.description}</p>

      <div className="sbdocs-code">
        <pre>
          <code>{`import { Button, Table, Form } from '@ui-lib/ui-react'

function App() {
  return (
    <div>
      <Button variant="primary">Hello World</Button>
    </div>
  )
}`}</code>
        </pre>
      </div>

      <h2>📚 {texts.categories.title}</h2>

      <h3>{texts.categories.basic.title}</h3>
      <ul>
        <li><strong>{texts.categories.basic.button}</strong></li>
        <li><strong>{texts.categories.basic.input}</strong></li>
        <li><strong>{texts.categories.basic.card}</strong></li>
      </ul>

      <h3>{texts.categories.dataDisplay.title}</h3>
      <ul>
        <li><strong>{texts.categories.dataDisplay.table}</strong></li>
        <li><strong>{texts.categories.dataDisplay.tabs}</strong></li>
        <li><strong>{texts.categories.dataDisplay.badge}</strong></li>
      </ul>

      <h3>{texts.categories.form.title}</h3>
      <ul>
        <li><strong>{texts.categories.form.form}</strong></li>
        <li><strong>{texts.categories.form.checkbox}</strong></li>
        <li><strong>{texts.categories.form.radio}</strong></li>
        <li><strong>{texts.categories.form.select}</strong></li>
      </ul>

      <h2>🌍 {texts.i18n.title}</h2>

      <p>{texts.i18n.description}</p>

      <h2>🎨 {texts.theming.title}</h2>

      <p>{texts.theming.description}</p>

      <h2>📱 {texts.responsive.title}</h2>

      <p>{texts.responsive.description}</p>
      <ul>
        <li>{texts.responsive.mobile}</li>
        <li>{texts.responsive.tablet}</li>
        <li>{texts.responsive.desktop}</li>
      </ul>

      <h2>🔧 {texts.development.title}</h2>

      <ul>
        <li><strong>{texts.development.controls}</strong></li>
        <li><strong>{texts.development.docs}</strong></li>
        <li><strong>{texts.development.examples}</strong></li>
        <li><strong>{texts.development.accessibility}</strong></li>
      </ul>

      <hr />

      <p><strong>{texts.ending}</strong></p>
    </div>
  )
} 