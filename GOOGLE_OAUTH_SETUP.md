# 🔐 Google OAuth Setup Guide for Linkria

## 📋 Prerequisites
- Supabase project: `fctdljspgymbtlbqempu`
- Google account for creating OAuth credentials
- Domain for production (optional for development)

## 🚀 Step-by-Step Setup

### 1. **Supabase Dashboard Configuration**

#### 1.1 Enable Google Provider
1. Go to [supabase.com](https://supabase.com)
2. Sign in and select your project: `fctdljspgymbtlbqempu`
3. Navigate to **Authentication** → **Providers**
4. Find **Google** and toggle it **ON**
5. Click **Save**

#### 1.2 Configure Site URL
1. Go to **Authentication** → **Settings**
2. Set **Site URL** to: `http://localhost:5173` (for development)
3. Add **Redirect URLs**:
   ```
   http://localhost:5173/dashboard
   https://your-domain.com/dashboard (for production)
   ```

### 2. **Google Cloud Console Setup**

#### 2.1 Create Google Cloud Project
1. Go to [console.cloud.google.com](https://console.cloud.google.com)
2. Create a new project or select existing one
3. Note your **Project ID**

#### 2.2 Enable APIs
1. Go to **APIs & Services** → **Library**
2. Search and enable these APIs:
   - **Google+ API** (or Google Identity)
   - **Google Identity and Access Management (IAM) API**

#### 2.3 Configure OAuth Consent Screen
1. Go to **APIs & Services** → **OAuth consent screen**
2. Choose **External** user type
3. Fill in the form:
   - **App name**: `Linkria`
   - **User support email**: Your email
   - **Developer contact information**: Your email
   - **Authorized domains**: Add your domain (optional)
4. Click **Save and Continue**
5. Skip scopes section, click **Save and Continue**
6. Add test users if needed, click **Save and Continue**

#### 2.4 Create OAuth 2.0 Credentials
1. Go to **APIs & Services** → **Credentials**
2. Click **Create Credentials** → **OAuth 2.0 Client IDs**
3. Choose **Web application**
4. Fill in the form:
   - **Name**: `Linkria Web Client`
   - **Authorized JavaScript origins**:
     ```
     http://localhost:5173
     https://your-domain.com (for production)
     ```
   - **Authorized redirect URIs**:
     ```
     https://fctdljspgymbtlbqempu.supabase.co/auth/v1/callback
     ```
5. Click **Create**
6. **Save your credentials**:
   - **Client ID**: Copy this
   - **Client Secret**: Copy this

### 3. **Connect Google to Supabase**

#### 3.1 Add Credentials to Supabase
1. Go back to Supabase Dashboard
2. Navigate to **Authentication** → **Providers** → **Google**
3. Enter your credentials:
   - **Client ID**: (from Google Cloud Console)
   - **Client Secret**: (from Google Cloud Console)
4. Click **Save**

### 4. **Test the Configuration**

#### 4.1 Development Testing
1. Start your development server:
   ```bash
   npm run dev
   ```
2. Go to `http://localhost:5173`
3. Click "Sign up" or "Log in"
4. Click "Continue with Google"
5. You should be redirected to Google's OAuth page

#### 4.2 Verify User Creation
1. After successful login, check your Supabase dashboard
2. Go to **Authentication** → **Users**
3. You should see the new user created automatically

### 5. **Production Deployment**

#### 5.1 Update Site URLs
1. In Supabase Dashboard:
   - Go to **Authentication** → **Settings**
   - Update **Site URL** to your production domain
   - Add production redirect URLs

2. In Google Cloud Console:
   - Go to **Credentials** → **OAuth 2.0 Client IDs**
   - Add your production domain to **Authorized JavaScript origins**
   - Add production redirect URIs

#### 5.2 Environment Variables
Create `.env.production` file:
```env
VITE_SUPABASE_URL=https://fctdljspgymbtlbqempu.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key
VITE_SITE_URL=https://your-domain.com
```

## 🔧 Troubleshooting

### Common Issues:

#### 1. **"Invalid redirect_uri" Error**
- Check that your redirect URI in Google Cloud Console matches exactly
- Make sure the URI is: `https://fctdljspgymbtlbqempu.supabase.co/auth/v1/callback`

#### 2. **"Client not authorized" Error**
- Verify your domain is added to **Authorized JavaScript origins**
- Check that your OAuth consent screen is configured properly

#### 3. **User not created in database**
- Check that the database trigger is working
- Verify RLS policies are correct
- Check Supabase logs for errors

#### 4. **Redirect not working**
- Ensure your redirect URL is added to Supabase settings
- Check that the URL format is correct

## 📞 Support

If you encounter issues:
1. Check Supabase logs in the dashboard
2. Verify Google Cloud Console configuration
3. Test with the provided test function in `src/lib/supabase.ts`

## ✅ Verification Checklist

- [ ] Google provider enabled in Supabase
- [ ] OAuth consent screen configured
- [ ] OAuth 2.0 credentials created
- [ ] Credentials added to Supabase
- [ ] Site URLs configured correctly
- [ ] Test login works in development
- [ ] User created in database
- [ ] Production URLs configured (if deploying) 