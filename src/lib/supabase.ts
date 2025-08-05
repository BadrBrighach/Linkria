import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key'

// Check if environment variables are properly set
if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
  console.warn('⚠️ Supabase environment variables are not set. Please create a .env file with:')
  console.warn('VITE_SUPABASE_URL=your-supabase-url')
  console.warn('VITE_SUPABASE_ANON_KEY=your-supabase-anon-key')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database Types
export interface Profile {
  id: string
  user_id: string
  title: string
  description: string
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface Link {
  id: string
  profile_id: string
  title: string
  url: string
  position: number
  is_active: boolean
  created_at: string
  updated_at: string
}

export interface SocialLink {
  id: string
  profile_id: string
  platform: string
  url: string
  position: number
  is_active: boolean
  created_at: string
  updated_at: string
}

// New Page Editor Types
export interface Page {
  id: string
  user_id: string
  title: string
  slug: string
  description: string
  is_active: boolean
  theme: Theme
  custom_domain?: string
  favicon_url?: string
  logo_url?: string
  created_at: string
  updated_at: string
}

export interface Block {
  id: string
  page_id: string
  type: BlockType
  position: number
  is_active: boolean
  config: BlockConfig
  created_at: string
  updated_at: string
}

export interface PageAnalytics {
  id: string
  page_id: string
  visitor_ip?: string
  user_agent?: string
  referrer?: string
  event_type: 'page_view' | 'button_click' | 'link_click'
  block_id?: string
  metadata?: Record<string, any>
  created_at: string
}

export type BlockType = 
  | 'profile'
  | 'links'
  | 'social'
  | 'embed'
  | 'newsletter'
  | 'html'
  | 'analytics'
  | 'theme_switcher'

export interface BlockConfig {
  // Profile block
  profile?: {
    image_url?: string
    name?: string
    bio?: string
    title?: string
  }
  
  // Links block
  links?: {
    items: Array<{
      id: string
      title: string
      url: string
      icon?: string
    }>
  }
  
  // Social block
  social?: {
    items: Array<{
      platform: string
      url: string
      icon: string
    }>
  }
  
  // Embed block
  embed?: {
    type: 'youtube' | 'spotify' | 'twitter' | 'instagram' | 'tiktok'
    url: string
    title?: string
  }
  
  // Newsletter block
  newsletter?: {
    provider: 'convertkit' | 'mailchimp'
    form_id: string
    title?: string
    description?: string
  }
  
  // HTML block
  html?: {
    content: string
  }
  
  // Analytics block
  analytics?: {
    show_views: boolean
    show_clicks: boolean
  }
  
  // Theme switcher block
  theme_switcher?: {
    themes: Array<{
      name: string
      colors: ThemeColors
    }>
  }
}

export interface Theme {
  colors: ThemeColors
  fonts: ThemeFonts
  spacing: ThemeSpacing
}

export interface ThemeColors {
  primary: string
  secondary: string
  text: string
  background: string
  accent?: string
}

export interface ThemeFonts {
  heading: string
  body: string
}

export interface ThemeSpacing {
  padding: string
  margin?: string
  gap?: string
}

// Test function for Google OAuth
export const testGoogleOAuth = async () => {
  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/dashboard`
      }
    })
    
    if (error) {
      console.error('Google OAuth error:', error)
      return { success: false, error: error.message }
    }
    
    return { success: true, data }
  } catch (error) {
    console.error('Google OAuth test failed:', error)
    return { success: false, error: 'Failed to test Google OAuth' }
  }
} 