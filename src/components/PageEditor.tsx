import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';
import { Page, Block, BlockType, Theme } from '../lib/supabase';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Switch } from './ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Plus, 
  GripVertical, 
  Eye, 
  EyeOff, 
  Settings, 
  Palette,
  Image,
  Link,
  Share2,
  Code,
  BarChart3,
  Palette as PaletteIcon
} from 'lucide-react';
import BlockComponent from './blocks/BlockComponent';
import BlockSelector from './blocks/BlockSelector';
import ThemeCustomizer from './ThemeCustomizer';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

interface PageEditorProps {
  pageId?: string;
  onSave?: () => void;
  openAuthModal: () => void;
  openSignUpModal: () => void;
}

const PageEditor: React.FC<PageEditorProps> = ({ pageId, onSave, openAuthModal, openSignUpModal }) => {
  const { user } = useAuth();
  const [page, setPage] = useState<Page | null>(null);
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'editor' | 'preview' | 'settings'>('editor');
  const [showBlockSelector, setShowBlockSelector] = useState(false);
  const [selectedBlock, setSelectedBlock] = useState<Block | null>(null);

  useEffect(() => {
    if (pageId) {
      loadPage();
    } else {
      createNewPage();
    }
  }, [pageId]);

  const loadPage = async () => {
    if (!pageId || !user) return;

    try {
      // Load page
      const { data: pageData, error: pageError } = await supabase
        .from('pages')
        .select('*')
        .eq('id', pageId)
        .eq('user_id', user.id)
        .single();

      if (pageError) throw pageError;
      setPage(pageData);

      // Load blocks
      const { data: blocksData, error: blocksError } = await supabase
        .from('blocks')
        .select('*')
        .eq('page_id', pageId)
        .order('position', { ascending: true });

      if (blocksError) throw blocksError;
      setBlocks(blocksData || []);
    } catch (error) {
      console.error('Error loading page:', error);
    } finally {
      setLoading(false);
    }
  };

  const createNewPage = async () => {
    if (!user) return;

    try {
      const newPage: Partial<Page> = {
        user_id: user.id,
        title: 'My New Page',
        slug: `page-${Date.now()}`,
        description: 'A beautiful page created with Linkria',
        theme: {
          colors: {
            primary: '#000000',
            secondary: '#ffffff',
            text: '#000000',
            background: '#ffffff'
          },
          fonts: {
            heading: 'Inter',
            body: 'Inter'
          },
          spacing: {
            padding: '1rem'
          }
        }
      };

      const { data, error } = await supabase
        .from('pages')
        .insert(newPage)
        .select()
        .single();

      if (error) throw error;
      setPage(data);
      setBlocks([]);
    } catch (error) {
      console.error('Error creating page:', error);
    } finally {
      setLoading(false);
    }
  };

  const addBlock = async (type: BlockType) => {
    if (!page) return;

    const newBlock: Partial<Block> = {
      page_id: page.id,
      type,
      position: blocks.length,
      config: getDefaultConfig(type)
    };

    try {
      const { data, error } = await supabase
        .from('blocks')
        .insert(newBlock)
        .select()
        .single();

      if (error) throw error;
      setBlocks([...blocks, data]);
      setShowBlockSelector(false);
    } catch (error) {
      console.error('Error adding block:', error);
    }
  };

  const getDefaultConfig = (type: BlockType) => {
    switch (type) {
      case 'profile':
        return {
          profile: {
            name: 'Your Name',
            bio: 'Tell your story...',
            title: 'Creator & Entrepreneur'
          }
        };
      case 'links':
        return {
          links: {
            items: [
              { id: '1', title: 'My Website', url: 'https://example.com', icon: '🌐' },
              { id: '2', title: 'Portfolio', url: 'https://portfolio.com', icon: '💼' }
            ]
          }
        };
      case 'social':
        return {
          social: {
            items: [
              { platform: 'twitter', url: 'https://twitter.com/username', icon: '🐦' },
              { platform: 'instagram', url: 'https://instagram.com/username', icon: '📷' }
            ]
          }
        };
      case 'embed':
        return {
          embed: {
            type: 'youtube' as const,
            url: '',
            title: 'Featured Video'
          }
        };
      case 'newsletter':
        return {
          newsletter: {
            provider: 'convertkit' as const,
            form_id: '',
            title: 'Stay Updated',
            description: 'Get the latest updates delivered to your inbox.'
          }
        };
      case 'html':
        return {
          html: {
            content: '<div class="custom-html">Your custom HTML here</div>'
          }
        };
      case 'analytics':
        return {
          analytics: {
            show_views: true,
            show_clicks: true
          }
        };
      case 'theme_switcher':
        return {
          theme_switcher: {
            themes: [
              { name: 'Light', colors: { primary: '#000000', secondary: '#ffffff', text: '#000000', background: '#ffffff' } },
              { name: 'Dark', colors: { primary: '#ffffff', secondary: '#000000', text: '#ffffff', background: '#000000' } }
            ]
          }
        };
      default:
        return {};
    }
  };

  const updateBlock = async (blockId: string, updates: Partial<Block>) => {
    try {
      const { error } = await supabase
        .from('blocks')
        .update(updates)
        .eq('id', blockId);

      if (error) throw error;
      
      setBlocks(blocks.map(block => 
        block.id === blockId ? { ...block, ...updates } : block
      ));
    } catch (error) {
      console.error('Error updating block:', error);
    }
  };

  const deleteBlock = async (blockId: string) => {
    try {
      const { error } = await supabase
        .from('blocks')
        .delete()
        .eq('id', blockId);

      if (error) throw error;
      
      setBlocks(blocks.filter(block => block.id !== blockId));
    } catch (error) {
      console.error('Error deleting block:', error);
    }
  };

  const toggleBlock = async (blockId: string) => {
    const block = blocks.find(b => b.id === blockId);
    if (!block) return;

    await updateBlock(blockId, { is_active: !block.is_active });
  };

  const reorderBlocks = async (result: any) => {
    if (!result.destination) return;

    const items = Array.from(blocks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setBlocks(items);

    // Update positions in database
    const updates = items.map((block, index) => ({
      id: block.id,
      position: index
    }));

    try {
      for (const update of updates) {
        await supabase
          .from('blocks')
          .update({ position: update.position })
          .eq('id', update.id);
      }
    } catch (error) {
      console.error('Error reordering blocks:', error);
    }
  };

  const updatePage = async (updates: Partial<Page>) => {
    if (!page) return;

    try {
      const { data, error } = await supabase
        .from('pages')
        .update(updates)
        .eq('id', page.id)
        .select()
        .single();

      if (error) throw error;
      setPage(data);
    } catch (error) {
      console.error('Error updating page:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-black rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading editor...</p>
        </div>
      </div>
    );
  }

  if (!page) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-600">Page not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Input
              value={page.title}
              onChange={(e) => updatePage({ title: e.target.value })}
              className="text-xl font-bold border-none p-0 focus:ring-0"
              placeholder="Page Title"
            />
            <Button variant="outline" size="sm">
              {page.is_active ? 'Published' : 'Draft'}
            </Button>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button variant="outline" onClick={() => setActiveTab('preview')}>
              <Eye className="w-4 h-4 mr-2" />
              Preview
            </Button>
            <Button onClick={onSave}>
              Save Changes
            </Button>
          </div>
        </div>
      </div>

      <div className="flex h-[calc(100vh-80px)]">
        {/* Sidebar */}
        <div className="w-80 bg-white border-r border-gray-200 p-4">
          <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as any)}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="editor">Editor</TabsTrigger>
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="editor" className="mt-4">
              <div className="space-y-4">
                <Button 
                  onClick={() => setShowBlockSelector(true)}
                  className="w-full"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Block
                </Button>

                <div className="space-y-2">
                  {blocks.map((block, index) => (
                    <Card key={block.id} className="cursor-pointer hover:shadow-md transition-shadow">
                      <CardContent className="p-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <GripVertical className="w-4 h-4 text-gray-400" />
                            <span className="text-sm font-medium capitalize">
                              {block.type} Block
                            </span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => toggleBlock(block.id)}
                            >
                              {block.is_active ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setSelectedBlock(block)}
                            >
                              <Settings className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="preview" className="mt-4">
              <div className="space-y-4">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <div className="text-gray-500">
                    <Eye className="w-12 h-12 mx-auto mb-4" />
                    <p>Preview your page here</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="settings" className="mt-4">
              <ThemeCustomizer 
                theme={page.theme}
                onThemeChange={(theme) => updatePage({ theme })}
              />
            </TabsContent>
          </Tabs>
        </div>

        {/* Main Editor Area */}
        <div className="flex-1 p-6">
          <div className="max-w-2xl mx-auto">
            <DragDropContext onDragEnd={reorderBlocks}>
              <Droppable droppableId="blocks">
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="space-y-4"
                  >
                    {blocks.map((block, index) => (
                      <Draggable key={block.id} draggableId={block.id} index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <BlockComponent
                              block={block}
                              onUpdate={(updates) => updateBlock(block.id, updates)}
                              onDelete={() => deleteBlock(block.id)}
                              theme={page.theme}
                            />
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>

            {blocks.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Plus className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No blocks yet</h3>
                <p className="text-gray-600 mb-6">Add your first block to get started</p>
                <Button onClick={() => setShowBlockSelector(true)}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Your First Block
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Block Selector Modal */}
      {showBlockSelector && (
        <BlockSelector
          onSelect={addBlock}
          onClose={() => setShowBlockSelector(false)}
        />
      )}

      {/* Block Settings Modal */}
      {selectedBlock && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 max-h-[80vh] overflow-y-auto">
            <h3 className="text-lg font-semibold mb-4">Block Settings</h3>
            {/* Block-specific settings would go here */}
            <div className="flex justify-end space-x-2 mt-6">
              <Button variant="outline" onClick={() => setSelectedBlock(null)}>
                Cancel
              </Button>
              <Button onClick={() => setSelectedBlock(null)}>
                Save
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PageEditor; 