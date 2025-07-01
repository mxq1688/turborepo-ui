#!/bin/bash

echo "🚀 Setting up UI Component Library Documentation Projects..."

# Install dependencies for all projects
echo "📦 Installing dependencies..."
npm install

# Install VitePress dependencies
echo "📖 Installing VitePress dependencies..."
cd apps/docs-vitepress && npm install && cd ../..

# Install Storybook dependencies  
echo "📚 Installing Storybook dependencies..."
cd apps/docs-storybook && npm install && cd ../..

echo "✅ All documentation projects are ready!"
echo ""
echo "🎯 Available commands:"
echo "  npm run dev:react      - Start React docs (Next.js) on port 3000"
echo "  npm run dev:vue        - Start Vue docs (Vite) on port 3001"
echo "  npm run dev:vitepress  - Start VitePress docs on port 5173"
echo "  npm run dev:storybook  - Start Storybook docs on port 6006"
echo ""
echo "📝 Documentation URLs:"
echo "  React (Custom):     http://localhost:3000"
echo "  Vue (Custom):       http://localhost:3001"
echo "  VitePress:          http://localhost:5173"
echo "  Storybook:          http://localhost:6006"
echo ""
echo "🎉 Happy documenting!" 