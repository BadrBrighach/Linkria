import { CameraIcon } from '@heroicons/react/24/outline';
import { FaInstagram, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaSpotify, FaHeart, FaPen, FaTrash } from 'react-icons/fa';
import { SiNotion } from 'react-icons/si';

export const BlocksSection = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Beautifully designed blocks
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Use our drag-and-drop builder to create your page.
          </p>
        </div>

        {/* Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Social Stats Block (Join Waitlist) */}
            <div className="h-52 overflow-hidden relative bg-white border border-gray-100 p-6 rounded-3xl shadow-[inset_0_-3em_3em_rgba(0,0,0,0.1),0_0_0_2px_rgb(190,190,190),0.3em_0.3em_1em_rgba(0,0,0,0.3)] flex flex-col">
              <h2 className="text-2xl font-medium text-gray-900">Join waitlist</h2>
              <p className="text-md text-gray-500 mb-6">Get early access to a new feature</p>
              <form className="mt-auto flex w-full">
                <label htmlFor="email" className="sr-only">Email address</label>
                <input
                  id="email"
                  autoComplete="email"
                  required
                  className="min-w-0 w-full flex-1 appearance-none rounded-md border-0 bg-white px-3 py-1.5 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-gray-400 sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
                  placeholder="Enter your email"
                  type="email"
                  name="email"
                />
                <div className="ml-4 sm:flex-shrink-0">
                  <button type="button" className="flex w-full items-center justify-center rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-colors relative overflow-hidden">
                    Join
                  </button>
                </div>
              </form>
            </div>
            
            {/* Tools/Apps Block */}
            <div className="overflow-hidden relative bg-[#1c1917] border border-gray-800 rounded-[1.3rem] shadow-[inset_0_-3em_3em_rgba(0,0,0,0.1),0_0_0_2px_rgb(190,190,190),0.3em_0.3em_1em_rgba(0,0,0,0.3)] h-60 md:h-80 p-6 flex flex-col">
              <h2 className="text-2xl font-medium text-white">Tools</h2>
              <p className="text-md text-white/80">Some cool tools</p>
              <div className="flex flex-col gap-6 mt-6">
                <div className="flex items-center gap-4">
                  <svg viewBox="0 0 240 240" width="40" height="40" className="rounded-md bg-white p-1">
                    <circle cx="120" cy="120" r="120" fill="#37AEE2"/>
                    <path d="M99.6 163.2c-3.2 0-2.6-1.2-3.6-4l-9-29.6 88-52.4" fill="#C8DAEA"/>
                    <path d="M99.6 163.2c2.4 0 3.6-1.2 5.2-2.4l14-13.6-17.2-10.4" fill="#A9C9DD"/>
                    <path d="M102.8 147.2l41.2 30.4c4.8 2.8 8.2 1.2 9.4-4.4l17-80.2c1.6-6.4-2.4-9.4-7.2-7.6l-105.2 40.4c-6.4 2.4-6.4 5.6-1.2 7.2l27 8.4 62.6-39.6c2.8-1.6 5.2-.8 3.2 1.2" fill="#F6FBFE"/>
                  </svg>
                  <div className="flex flex-col">
                    <h3 className="font-medium text-white text-lg mb-0">Telegram</h3>
                    <p className="text-white/80 -mt-1">Community</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  {/* Notion Icon */}
                  <SiNotion className="w-10 h-10 text-black bg-white rounded-md p-1" />
                  <div className="flex flex-col">
                    <h3 className="font-medium text-white text-lg mb-0">Notion</h3>
                    <p className="text-white/80 -mt-1">Notes</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  {/* GitHub Icon */}
                  <FaGithub className="w-10 h-10 text-black bg-white rounded-md p-1" />
                  <div className="flex flex-col">
                    <h3 className="font-medium text-white text-lg mb-0">GitHub</h3>
                    <p className="text-white/80 -mt-1">Code</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Center Column */}
          <div className="space-y-6">
            {/* X block */}
            <div className="overflow-hidden relative w-full h-64 bg-white border border-gray-200 rounded-2xl shadow-[inset_0_-3em_3em_rgba(0,0,0,0.1),0_0_0_2px_rgb(190,190,190),0.3em_0.3em_1em_rgba(0,0,0,0.3)]">
              <img
                src="/assets/x.jpg"
                alt="Portfolio work"
                className="absolute w-full h-full object-cover"
              />
              <div className="absolute h-24 w-full bg-gradient-to-b from-transparent to-black bottom-0 z-10 px-6 py-4 flex flex-row justify-between items-end">
                <span className="flex flex-col">
                  <span className="text-white font-bold text-base">@Linkria</span>
                  <span className="text-white/70 text-sm">Follow us on X</span>
                </span>
                <FaXTwitter className="w-7 h-7 text-white ml-2" />
              </div>
            </div>
            
            {/* Instagram Block */}
            <div className="overflow-hidden relative w-full h-48 bg-white border border-gray-200 rounded-2xl shadow-[inset_0_-3em_3em_rgba(0,0,0,0.1),0_0_0_2px_rgb(190,190,190),0.3em_0.3em_1em_rgba(0,0,0,0.3)]">
              <img
                src="/assets/instagram.jpg"
                alt="Instagram post"
                className="absolute w-full h-full object-cover"
              />
              <div className="absolute h-24 w-full bg-gradient-to-b from-transparent to-black bottom-0 z-10 px-6 py-4 flex flex-row justify-between items-end">
                <span className="flex flex-col">
                  <span className="text-white font-bold text-base">@Linkria</span>
                  <span className="text-white/70 text-sm">Posted about 10 days ago</span>
                </span>
                <FaInstagram className="w-7 h-7 text-white ml-2" />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Music Player Block */}
            <div className="overflow-hidden relative bg-gradient-to-tr from-[#0A0B0D] to-[#402650] h-32 rounded-[1.3rem] shadow-[inset_0_-3em_3em_rgba(0,0,0,0.1),0_0_0_2px_rgb(190,190,190),0.3em_0.3em_1em_rgba(0,0,0,0.3)] border border-gray-700 p-6 flex gap-3">
              <img src="/assets/moroccan-talks.jpg" className="w-16 h-16 object-cover rounded-lg" alt="Album cover" />
              <div className="flex flex-col justify-center">
                <p className="text-xs text-white/60 uppercase font-bold flex items-center gap-2">
                  <span className="flex items-end gap-0.5 h-3">
                    <span className="w-0.5 h-2 bg-green-400 rounded styles_bounce_bar" style={{ animationDelay: '0ms' }} />
                    <span className="w-0.5 h-3 bg-green-400 rounded styles_bounce_bar" style={{ animationDelay: '400ms' }} />
                    <span className="w-0.5 h-1 bg-green-400 rounded styles_bounce_bar" style={{ animationDelay: '800ms' }} />
                  </span>
                  Playing Now
                </p>
                <p className="text-md text-white font-bold leading-tight">Moroccan Talks</p>
                <p className="text-sm text-white">Hobawi</p>
              </div>
              <FaSpotify className="absolute right-6 bottom-6 w-7 h-7 text-[#1ed760]" />
              <style>{`
                @keyframes styles_bounce__3YxgF {
                  0%, 100% { transform: scaleY(0.3); }
                  20% { transform: scaleY(1); }
                  40% { transform: scaleY(0.5); }
                  60% { transform: scaleY(0.8); }
                  80% { transform: scaleY(0.6); }
                }
                .styles_bounce_bar {
                  transition: opacity .3s ease-out;
                  animation: styles_bounce__3YxgF 2.2s ease infinite alternate;
                }
              `}</style>
            </div>
            
            {/* Map Block */}
            <div className="h-52 overflow-hidden relative bg-white border border-gray-100 p-6 rounded-3xl shadow-[inset_0_-3em_3em_rgba(0,0,0,0.1),0_0_0_2px_rgb(190,190,190),0.3em_0.3em_1em_rgba(0,0,0,0.3)] flex flex-col">
              {/* Map background (image) */}
              <div className="absolute inset-0 w-full h-full">
                <img src="/assets/map.jpg" alt="Map of Paris" className="w-full h-full object-cover" />
              </div>
            </div>
            
            {/* Reactions Block */}
            <div className="relative h-40 bg-white border-2 border-gray-300 rounded-3xl shadow-[inset_0_-3em_3em_rgba(0,0,0,0.1),0_0_0_2px_rgb(190,190,190),0.3em_0.3em_1em_rgba(0,0,0,0.3)] overflow-hidden flex flex-col justify-between">
              <button className="flex items-center justify-between gap-2 py-4 px-4 group relative w-full h-full bg-white">
                <div className="flex flex-col text-left gap-1 z-10">
                  <span className="uppercase font-bold text-xs tracking-wider text-gray-700">Love</span>
                  <span className="text-4xl font-medium text-gray-700">0</span>
                </div>
                <div className="mr-8 flex justify-center z-10">
                  <FaHeart className="w-10 h-10 text-pink-500" />
                </div>
                {/* Pink SVG wave at the bottom */}
                <div className="absolute bottom-0 left-0 right-0 w-full" style={{ height: '32px' }}>
                  <svg width="100%" height="32" preserveAspectRatio="none" viewBox="0 0 1440 320">
                    <path fill="#FF6096" d="m0 128 26.7-5.3c26.6-5.7 80.3-15.7 133.3 0 53.3 16.3 107 58.3 160 74.6 53.3 15.7 107 5.7 160 0 53.3-5.3 107-5.3 160 10.7 53.3 16 107 48 160 48 53.3 0 107-32 160-74.7 53.3-42.3 107-96.3 160-90.6 53.3 5.3 107 69.3 160 80 53.3 10.3 107-31.7 133-53.4l27-21.3v224H0Z"></path>
                  </svg>
                  <div className="w-full h-full bg-gradient-to-b from-[#FF6096] to-[#FF2A76] absolute top-0 left-0 opacity-60"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};