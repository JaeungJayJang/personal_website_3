#!/bin/bash

# Deploy script for Vercel
echo "🚀 Deploying Personal Website to Vercel"

# Check if we're logged in to Vercel
if ! vercel --version &> /dev/null; then
    echo "❌ Vercel CLI not found. Please install it:"
    echo "npm install -g vercel"
    exit 1
fi

# Build the project first
echo "🔨 Building project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Deploy to Vercel
    echo "📦 Deploying to Vercel..."
    vercel --prod
    
    if [ $? -eq 0 ]; then
        echo "✅ Deployment successful!"
        echo "🌐 Your site is now live!"
        echo ""
        echo "📝 Next steps:"
        echo "1. Set up environment variables in Vercel dashboard"
        echo "2. Configure email settings (SMTP_* variables)"
        echo "3. Test the contact form on your live site"
        echo ""
        echo "📚 See DEPLOYMENT.md for detailed instructions"
    else
        echo "❌ Deployment failed"
        exit 1
    fi
else
    echo "❌ Build failed. Please fix errors and try again."
    exit 1
fi
