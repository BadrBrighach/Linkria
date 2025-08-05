import React from 'react';
import { BlockType } from '../../lib/supabase';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { 
  X,
  Image as ImageIcon,
  Link,
  Share2,
  Code,
  Mail,
  FileText,
  BarChart3,
  Palette
} from 'lucide-react';

interface BlockSelectorProps {
  onSelect: (type: BlockType) => void;
  onClose: () => void;
}

const BlockSelector: React.FC<BlockSelectorProps> = ({ onSelect, onClose }) => {
  const blockTypes = [
    {
      type: 'profile' as BlockType,
      title: 'Profile',
      description: 'Add your photo, name, and bio',
      icon: ImageIcon,
      color: 'bg-blue-500'
    },
    {
      type: 'links' as BlockType,
      title: 'Links',
      description: 'Add clickable links to your content',
      icon: Link,
      color: 'bg-green-500'
    },
    {
      type: 'social' as BlockType,
      title: 'Social Media',
      description: 'Connect your social media accounts',
      icon: Share2,
      color: 'bg-purple-500'
    },
    {
      type: 'embed' as BlockType,
      title: 'Embed',
      description: 'Embed videos, music, or other content',
      icon: Code,
      color: 'bg-orange-500'
    },
    {
      type: 'newsletter' as BlockType,
      title: 'Newsletter',
      description: 'Collect email subscribers',
      icon: Mail,
      color: 'bg-red-500'
    },
    {
      type: 'html' as BlockType,
      title: 'Custom HTML',
      description: 'Add custom HTML code',
      icon: FileText,
      color: 'bg-gray-500'
    },
    {
      type: 'analytics' as BlockType,
      title: 'Analytics',
      description: 'Show page views and click stats',
      icon: BarChart3,
      color: 'bg-indigo-500'
    },
    {
      type: 'theme_switcher' as BlockType,
      title: 'Theme Switcher',
      description: 'Let visitors choose different themes',
      icon: Palette,
      color: 'bg-pink-500'
    }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-4xl max-h-[80vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Add a Block</h2>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {blockTypes.map((blockType) => (
            <Card 
              key={blockType.type}
              className="cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => onSelect(blockType.type)}
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${blockType.color}`}>
                    <blockType.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{blockType.title}</h3>
                    <p className="text-gray-600 text-sm">{blockType.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-6 text-center">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlockSelector; 