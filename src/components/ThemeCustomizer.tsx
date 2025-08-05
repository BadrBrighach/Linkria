import React from 'react';
import { Theme, ThemeColors, ThemeFonts, ThemeSpacing } from '../lib/supabase';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Slider } from './ui/slider';
import { Palette, Type, Ruler } from 'lucide-react';

interface ThemeCustomizerProps {
  theme: Theme;
  onThemeChange: (theme: Theme) => void;
}

const ThemeCustomizer: React.FC<ThemeCustomizerProps> = ({ theme, onThemeChange }) => {
  const updateColors = (colors: Partial<ThemeColors>) => {
    onThemeChange({
      ...theme,
      colors: { ...theme.colors, ...colors }
    });
  };

  const updateFonts = (fonts: Partial<ThemeFonts>) => {
    onThemeChange({
      ...theme,
      fonts: { ...theme.fonts, ...fonts }
    });
  };

  const updateSpacing = (spacing: Partial<ThemeSpacing>) => {
    onThemeChange({
      ...theme,
      spacing: { ...theme.spacing, ...spacing }
    });
  };

  const fontOptions = [
    'Inter',
    'Roboto',
    'Open Sans',
    'Lato',
    'Poppins',
    'Montserrat',
    'Source Sans Pro',
    'Nunito',
    'Ubuntu',
    'Playfair Display'
  ];

  const presetThemes = [
    {
      name: 'Classic',
      colors: {
        primary: '#000000',
        secondary: '#ffffff',
        text: '#000000',
        background: '#ffffff'
      }
    },
    {
      name: 'Dark',
      colors: {
        primary: '#ffffff',
        secondary: '#000000',
        text: '#ffffff',
        background: '#000000'
      }
    },
    {
      name: 'Ocean',
      colors: {
        primary: '#1e40af',
        secondary: '#ffffff',
        text: '#1f2937',
        background: '#f8fafc'
      }
    },
    {
      name: 'Sunset',
      colors: {
        primary: '#dc2626',
        secondary: '#ffffff',
        text: '#1f2937',
        background: '#fef2f2'
      }
    },
    {
      name: 'Forest',
      colors: {
        primary: '#059669',
        secondary: '#ffffff',
        text: '#1f2937',
        background: '#f0fdf4'
      }
    }
  ];

  return (
    <div className="space-y-6">
      {/* Preset Themes */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Palette className="w-5 h-5" />
            <span>Preset Themes</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {presetThemes.map((preset) => (
              <button
                key={preset.name}
                onClick={() => onThemeChange({ ...theme, colors: preset.colors })}
                className="p-3 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors text-left"
              >
                <div className="flex items-center space-x-2 mb-2">
                  <div 
                    className="w-4 h-4 rounded-full border border-gray-300"
                    style={{ backgroundColor: preset.colors.primary }}
                  />
                  <span className="font-medium text-sm">{preset.name}</span>
                </div>
                <div className="flex space-x-1">
                  <div 
                    className="w-3 h-3 rounded"
                    style={{ backgroundColor: preset.colors.primary }}
                  />
                  <div 
                    className="w-3 h-3 rounded"
                    style={{ backgroundColor: preset.colors.secondary }}
                  />
                  <div 
                    className="w-3 h-3 rounded"
                    style={{ backgroundColor: preset.colors.text }}
                  />
                </div>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Colors */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Palette className="w-5 h-5" />
            <span>Colors</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="primary-color">Primary Color</Label>
              <div className="flex items-center space-x-2 mt-1">
                <Input
                  id="primary-color"
                  type="color"
                  value={theme.colors.primary}
                  onChange={(e) => updateColors({ primary: e.target.value })}
                  className="w-12 h-10 p-1"
                />
                <Input
                  value={theme.colors.primary}
                  onChange={(e) => updateColors({ primary: e.target.value })}
                  placeholder="#000000"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="secondary-color">Secondary Color</Label>
              <div className="flex items-center space-x-2 mt-1">
                <Input
                  id="secondary-color"
                  type="color"
                  value={theme.colors.secondary}
                  onChange={(e) => updateColors({ secondary: e.target.value })}
                  className="w-12 h-10 p-1"
                />
                <Input
                  value={theme.colors.secondary}
                  onChange={(e) => updateColors({ secondary: e.target.value })}
                  placeholder="#ffffff"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="text-color">Text Color</Label>
              <div className="flex items-center space-x-2 mt-1">
                <Input
                  id="text-color"
                  type="color"
                  value={theme.colors.text}
                  onChange={(e) => updateColors({ text: e.target.value })}
                  className="w-12 h-10 p-1"
                />
                <Input
                  value={theme.colors.text}
                  onChange={(e) => updateColors({ text: e.target.value })}
                  placeholder="#000000"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="background-color">Background Color</Label>
              <div className="flex items-center space-x-2 mt-1">
                <Input
                  id="background-color"
                  type="color"
                  value={theme.colors.background}
                  onChange={(e) => updateColors({ background: e.target.value })}
                  className="w-12 h-10 p-1"
                />
                <Input
                  value={theme.colors.background}
                  onChange={(e) => updateColors({ background: e.target.value })}
                  placeholder="#ffffff"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Fonts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Type className="w-5 h-5" />
            <span>Typography</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="heading-font">Heading Font</Label>
              <Select
                value={theme.fonts.heading}
                onValueChange={(value) => updateFonts({ heading: value })}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {fontOptions.map((font) => (
                    <SelectItem key={font} value={font}>
                      {font}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="body-font">Body Font</Label>
              <Select
                value={theme.fonts.body}
                onValueChange={(value) => updateFonts({ body: value })}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {fontOptions.map((font) => (
                    <SelectItem key={font} value={font}>
                      {font}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Spacing */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Ruler className="w-5 h-5" />
            <span>Spacing</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Padding</Label>
            <div className="flex items-center space-x-4 mt-2">
              <Slider
                value={[parseInt(theme.spacing.padding) || 16]}
                onValueChange={([value]) => updateSpacing({ padding: `${value}px` })}
                max={48}
                min={8}
                step={4}
                className="flex-1"
              />
              <span className="text-sm text-gray-600 w-12">
                {theme.spacing.padding}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Preview */}
      <Card>
        <CardHeader>
          <CardTitle>Preview</CardTitle>
        </CardHeader>
        <CardContent>
          <div 
            className="p-4 rounded-lg border"
            style={{ 
              backgroundColor: theme.colors.background,
              color: theme.colors.text,
              fontFamily: theme.fonts.body,
              padding: theme.spacing.padding
            }}
          >
            <h1 
              className="text-2xl font-bold mb-2"
              style={{ 
                color: theme.colors.text,
                fontFamily: theme.fonts.heading
              }}
            >
              Sample Heading
            </h1>
            <p className="mb-4">
              This is how your content will look with the selected theme.
            </p>
            <button
              className="px-4 py-2 rounded"
              style={{ 
                backgroundColor: theme.colors.primary,
                color: theme.colors.secondary
              }}
            >
              Sample Button
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ThemeCustomizer; 