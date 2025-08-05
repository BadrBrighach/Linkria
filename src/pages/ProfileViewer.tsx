import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { Profile, Link, SocialLink } from '../lib/supabase';

const ProfileViewer: React.FC = () => {
  const { username } = useParams<{ username: string }>();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [links, setLinks] = useState<Link[]>([]);
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (username) {
      fetchProfile();
    }
  }, [username]);

  const fetchProfile = async () => {
    try {
      setLoading(true);
      setError(null);

      // First, get the user by username
      const { data: userData, error: userError } = await supabase
        .from('users')
        .select('id')
        .eq('username', username)
        .single();

      if (userError || !userData) {
        setError('Profile not found');
        return;
      }

      // Get the user's active profile
      const { data: profileData, error: profileError } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', userData.id)
        .eq('is_active', true)
        .single();

      if (profileError || !profileData) {
        setError('Profile not found');
        return;
      }

      setProfile(profileData);

      // Get links for this profile
      const { data: linksData, error: linksError } = await supabase
        .from('links')
        .select('*')
        .eq('profile_id', profileData.id)
        .eq('is_active', true)
        .order('position', { ascending: true });

      if (!linksError) {
        setLinks(linksData || []);
      }

      // Get social links for this profile
      const { data: socialLinksData, error: socialLinksError } = await supabase
        .from('social_links')
        .select('*')
        .eq('profile_id', profileData.id)
        .eq('is_active', true)
        .order('position', { ascending: true });

      if (!socialLinksError) {
        setSocialLinks(socialLinksData || []);
      }

    } catch (error) {
      console.error('Error fetching profile:', error);
      setError('Failed to load profile');
    } finally {
      setLoading(false);
    }
  };

  const handleLinkClick = async (linkId: string) => {
    try {
      // Track analytics
      await supabase
        .from('analytics')
        .insert({
          profile_id: profile?.id,
          link_id: linkId,
          visitor_ip: 'tracked', // In production, get real IP
          user_agent: navigator.userAgent,
          referrer: document.referrer
        });
    } catch (error) {
      console.error('Error tracking analytics:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-black rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (error || !profile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Profile Not Found</h1>
          <p className="text-gray-600">The profile you're looking for doesn't exist or is not active.</p>
        </div>
      </div>
    );
  }

  // Fallback theme colors
  const theme = (profile as any).theme || {
    colors: {
      background: '#ffffff',
      text: '#222222',
      accent: '#5E936C',
    }
  };

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center py-8 px-4"
      style={{ backgroundColor: theme.colors.background }}
    >
      <div className="w-full max-w-md mx-auto text-center">
        {/* Profile Header */}
        <div className="mb-8">
          <h1 
            className="text-3xl font-bold mb-2"
            style={{ color: theme.colors.text }}
          >
            {profile.title}
          </h1>
          {profile.description && (
            <p 
              className="text-lg opacity-80"
              style={{ color: theme.colors.text }}
            >
              {profile.description}
            </p>
          )}
        </div>

        {/* Links */}
        <div className="space-y-4 mb-8">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleLinkClick(link.id)}
              className="block w-full py-4 px-6 rounded-lg font-medium transition-all duration-200 hover:scale-105"
              style={{
                backgroundColor: theme.colors.accent || '#5E936C',
                color: '#ffffff'
              }}
            >
              {link.title}
            </a>
          ))}
        </div>

        {/* Social Links */}
        {socialLinks.length > 0 && (
          <div className="flex justify-center space-x-4">
            {socialLinks.map((socialLink) => (
              <a
                key={socialLink.id}
                href={socialLink.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleLinkClick(socialLink.id)}
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{
                  backgroundColor: theme.colors.accent || '#5E936C',
                  color: '#ffffff'
                }}
                title={socialLink.platform}
              >
                {/* You can add platform-specific icons here */}
                {socialLink.platform.charAt(0).toUpperCase()}
              </a>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="mt-12">
          <p 
            className="text-sm opacity-60"
            style={{ color: theme.colors.text }}
          >
            Powered by Linkria
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileViewer; 