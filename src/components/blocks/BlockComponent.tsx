import React, { useState } from 'react';
import { Block, Theme, BlockConfig } from '../../lib/supabase';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Switch } from '../ui/switch';
import { 
  Edit, 
  Trash2, 
  Eye, 
  EyeOff,
  Image as ImageIcon,
  Link,
  Share2,
  Code,
  BarChart3,
  Palette
} from 'lucide-react';

interface BlockComponentProps {
  block: Block;
  theme: Theme;
  onUpdate: (updates: Partial<Block>) => void;
  onDelete: () => void;
}

const BlockComponent: React.FC<BlockComponentProps> = ({ 
  block, 
  theme, 
  onUpdate, 
  onDelete 
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const renderBlockContent = () => {
    switch (block.type) {
      case 'profile':
        return <ProfileBlock block={block} theme={theme} onUpdate={onUpdate} />;
      case 'links':
        return <LinksBlock block={block} theme={theme} onUpdate={onUpdate} />;
      case 'social':
        return <SocialBlock block={block} theme={theme} onUpdate={onUpdate} />;
      case 'embed':
        return <EmbedBlock block={block} theme={theme} onUpdate={onUpdate} />;
      case 'newsletter':
        return <NewsletterBlock block={block} theme={theme} onUpdate={onUpdate} />;
      case 'html':
        return <HtmlBlock block={block} theme={theme} onUpdate={onUpdate} />;
      case 'analytics':
        return <AnalyticsBlock block={block} theme={theme} onUpdate={onUpdate} />;
      case 'theme_switcher':
        return <ThemeSwitcherBlock block={block} theme={theme} onUpdate={onUpdate} />;
      default:
        return <div>Unknown block type</div>;
    }
  };

  return (
    <Card className="relative group">
      <CardContent className="p-6">
        {/* Block Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            {getBlockIcon(block.type)}
            <span className="font-medium capitalize">{block.type} Block</span>
          </div>
          
          <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onUpdate({ is_active: !block.is_active })}
            >
              {block.is_active ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsEditing(!isEditing)}
            >
              <Edit className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={onDelete}
              className="text-red-600 hover:text-red-700"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Block Content */}
        {block.is_active && renderBlockContent()}
        
        {!block.is_active && (
          <div className="text-center py-8 text-gray-500">
            <EyeOff className="w-8 h-8 mx-auto mb-2" />
            <p>This block is hidden</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

// Block Icon Helper
const getBlockIcon = (type: string) => {
  switch (type) {
    case 'profile':
      return <ImageIcon className="w-4 h-4" />;
    case 'links':
      return <Link className="w-4 h-4" />;
    case 'social':
      return <Share2 className="w-4 h-4" />;
    case 'embed':
      return <Code className="w-4 h-4" />;
    case 'newsletter':
      return <Link className="w-4 h-4" />;
    case 'html':
      return <Code className="w-4 h-4" />;
    case 'analytics':
      return <BarChart3 className="w-4 h-4" />;
    case 'theme_switcher':
      return <Palette className="w-4 h-4" />;
    default:
      return <div className="w-4 h-4" />;
  }
};

// Individual Block Components
const ProfileBlock: React.FC<{ block: Block; theme: Theme; onUpdate: (updates: Partial<Block>) => void }> = ({ 
  block, 
  theme, 
  onUpdate 
}) => {
  const config = block.config.profile || {};
  
  return (
    <div className="text-center space-y-4">
      <div className="w-24 h-24 mx-auto rounded-full bg-gray-200 flex items-center justify-center">
        {config.image_url ? (
          <img src={config.image_url} alt="Profile" className="w-full h-full rounded-full object-cover" />
        ) : (
          <ImageIcon className="w-8 h-8 text-gray-400" />
        )}
      </div>
      
      <div>
        <h2 className="text-2xl font-bold" style={{ color: theme.colors.text }}>
          {config.name || 'Your Name'}
        </h2>
        <p className="text-lg text-gray-600 mb-2">
          {config.title || 'Creator & Entrepreneur'}
        </p>
        <p className="text-gray-500 max-w-md mx-auto">
          {config.bio || 'Tell your story...'}
        </p>
      </div>
    </div>
  );
};

const LinksBlock: React.FC<{ block: Block; theme: Theme; onUpdate: (updates: Partial<Block>) => void }> = ({ 
  block, 
  theme, 
  onUpdate 
}) => {
  const config = block.config.links || { items: [] };
  
  return (
    <div className="space-y-3">
      {config.items.map((item) => (
        <a
          key={item.id}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full p-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors text-center"
          style={{ backgroundColor: theme.colors.background, color: theme.colors.text }}
        >
          <span className="text-lg mr-2">{item.icon}</span>
          {item.title}
        </a>
      ))}
    </div>
  );
};

const SocialBlock: React.FC<{ block: Block; theme: Theme; onUpdate: (updates: Partial<Block>) => void }> = ({ 
  block, 
  theme, 
  onUpdate 
}) => {
  const config = block.config.social || { items: [] };
  
  return (
    <div className="flex justify-center space-x-4">
      {config.items.map((item, index) => (
        <a
          key={index}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full flex items-center justify-center text-2xl hover:scale-110 transition-transform"
          style={{ backgroundColor: theme.colors.primary, color: theme.colors.secondary }}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

const EmbedBlock: React.FC<{ block: Block; theme: Theme; onUpdate: (updates: Partial<Block>) => void }> = ({ 
  block, 
  theme, 
  onUpdate 
}) => {
  const config = block.config.embed || {};
  
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-center" style={{ color: theme.colors.text }}>
        {(config as any).title || 'Featured Content'}
      </h3>
      <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
        {(config as any).url ? (
          <iframe
            src={(config as any).url}
            className="w-full h-full rounded-lg"
            frameBorder="0"
            allowFullScreen
          />
        ) : (
          <div className="text-gray-500 text-center">
            <Code className="w-8 h-8 mx-auto mb-2" />
            <p>Add embed URL</p>
          </div>
        )}
      </div>
    </div>
  );
};

const NewsletterBlock: React.FC<{ block: Block; theme: Theme; onUpdate: (updates: Partial<Block>) => void }> = ({ 
  block, 
  theme, 
  onUpdate 
}) => {
  const config = block.config.newsletter || {};
  
  return (
    <div className="text-center space-y-4">
      <h3 className="text-xl font-semibold" style={{ color: theme.colors.text }}>
        {(config as any).title || 'Stay Updated'}
      </h3>
      <p className="text-gray-600">
        {(config as any).description || 'Get the latest updates delivered to your inbox.'}
      </p>
      <div className="flex max-w-md mx-auto">
        <Input
          type="email"
          placeholder="Enter your email"
          className="flex-1 rounded-r-none"
        />
        <Button className="rounded-l-none">
          Subscribe
        </Button>
      </div>
    </div>
  );
};

const HtmlBlock: React.FC<{ block: Block; theme: Theme; onUpdate: (updates: Partial<Block>) => void }> = ({ 
  block, 
  theme, 
  onUpdate 
}) => {
  const config = block.config.html || {};
  
  return (
    <div 
      className="prose max-w-none"
      dangerouslySetInnerHTML={{ __html: (config as any).content || '<div>Custom HTML content</div>' }}
    />
  );
};

const AnalyticsBlock: React.FC<{ block: Block; theme: Theme; onUpdate: (updates: Partial<Block>) => void }> = ({ 
  block, 
  theme, 
  onUpdate 
}) => {
  const config = block.config.analytics || {};
  
  return (
    <div className="text-center space-y-4">
      <h3 className="text-lg font-semibold" style={{ color: theme.colors.text }}>
        Page Analytics
      </h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 rounded-lg border border-gray-200">
          <div className="text-2xl font-bold" style={{ color: theme.colors.primary }}>
            1,234
          </div>
          <div className="text-sm text-gray-600">Page Views</div>
        </div>
        <div className="p-4 rounded-lg border border-gray-200">
          <div className="text-2xl font-bold" style={{ color: theme.colors.primary }}>
            567
          </div>
          <div className="text-sm text-gray-600">Link Clicks</div>
        </div>
      </div>
    </div>
  );
};

const ThemeSwitcherBlock: React.FC<{ block: Block; theme: Theme; onUpdate: (updates: Partial<Block>) => void }> = ({ 
  block, 
  theme, 
  onUpdate 
}) => {
  const config = block.config.theme_switcher || { themes: [] };
  
  return (
    <div className="text-center space-y-4">
      <h3 className="text-lg font-semibold" style={{ color: theme.colors.text }}>
        Choose Theme
      </h3>
      <div className="flex justify-center space-x-2">
        {config.themes.map((themeOption, index) => (
          <button
            key={index}
            className="w-8 h-8 rounded-full border-2 border-gray-300 hover:border-gray-400 transition-colors"
            style={{ backgroundColor: themeOption.colors.background }}
            title={themeOption.name}
          />
        ))}
      </div>
    </div>
  );
};

export default BlockComponent; 