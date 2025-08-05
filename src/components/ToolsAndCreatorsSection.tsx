import { FaPinterest, FaGithub } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { SiNotion } from 'react-icons/si';
import { FaInstagram } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { FaBehance, FaDiscord, FaReddit } from 'react-icons/fa';
import Marquee from "react-fast-marquee";
import { FaFacebook, FaTelegram, FaFigma, FaSnapchatGhost, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { SiGooglemaps } from 'react-icons/si';
import { FaTwitter, FaSpotify } from 'react-icons/fa';
import { SiSubstack } from 'react-icons/si';
import { FaXTwitter } from 'react-icons/fa6';
import { HiArrowRight } from 'react-icons/hi';


export const ToolsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Big Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight text-gray-900">
            Your Videos. Podcasts.<br />
            Newsletters. Photos.<br />
            Paid Products. Streams.<br />
            <span className="bg-gradient-to-t from-white to-black bg-clip-text text-transparent">Calendar.</span>
          </h1>
        </div>
        {/* Subheadline */}
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto text-center">
          Don’t just share a link — share your identity.<br />
          One page for all your content, everywhere.
        </p>
        {/* Responsive Grid of Content Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mb-12">
          {/* Example Card: Pinterest (clean logo, Instagram card style) */}
          <div className="bg-white rounded-2xl border-2 border-gray-300 shadow-md p-4 flex flex-col items-start w-full max-w-xs mx-auto">
            <div className="flex flex-col items-start w-full mb-2">
              <FaPinterest className="w-8 h-8 text-red-600 mb-2" />
              <span className="font-semibold text-black text-sm">Pinterest Board</span>
            </div>
            <div className="grid grid-cols-2 gap-2 w-full mb-4">
              <img src="/assets/pin1.jpg" alt="Pin 1" className="w-full h-16 object-cover rounded-lg" />
              <img src="/assets/pin2.jpg" alt="Pin 2" className="w-full h-16 object-cover rounded-lg" />
              <img src="/assets/pin3.jpg" alt="Pin 3" className="w-full h-16 object-cover rounded-lg" />
              <img src="/assets/pin4.jpg" alt="Pin 4" className="w-full h-16 object-cover rounded-lg" />
            </div>
            <button className="mt-auto w-full text-xs bg-red-500 text-white px-3 py-2 rounded-full font-semibold flex items-center justify-center">
              Follow <span className="ml-1 font-bold">25k</span>
            </button>
          </div>
          {/* Example Card: Quote */}
          <div className="bg-white rounded-2xl border-2 border-gray-300 shadow-md p-6 flex flex-col justify-center items-center">
            <blockquote className="text-gray-700 text-base italic mb-2">Build something 100 people love, not something 1 million people kind of like.</blockquote>
            <span className="text-xs text-gray-400">— Brian Chesky, Co-founder of Airbnb</span>
          </div>
          {/* Example Card: YouTube Grid (updated design) */}
          <div className="bg-[#fff6f6] rounded-2xl border-2 border-gray-300 shadow-md p-5 flex flex-col w-full max-w-xs h-20">
            <div className="flex items-center justify-between w-full mb-2">
              <div className="flex items-center">
                <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-2">
                  <FaYoutube className="text-red-600 w-5 h-5" />
                </span>
                <span className="text-xs text-gray-800 font-semibold">Linkria / linkinbio</span>
              </div>
              <button className="text-xs bg-red-500 text-white px-3 py-1 rounded-full font-semibold">Subscribe 296k</button>
            </div>
          </div>
          {/* Example Card: tools */}
          <div className="overflow-hidden relative bg-white border-2 border-gray-300 rounded-[1.3rem] shadow-md h-60 md:h-80 p-6 flex flex-col">
              <h2 className="text-2xl font-medium text-black">Tools</h2>
              <p className="text-md text-gray-700">Some cool tools</p>
              <div className="flex flex-col gap-6 mt-6">
                <div className="flex items-center gap-4">
                  <svg viewBox="0 0 240 240" width="40" height="40" className="rounded-md bg-white p-1">
                    <circle cx="120" cy="120" r="120" fill="#37AEE2"/>
                    <path d="M99.6 163.2c-3.2 0-2.6-1.2-3.6-4l-9-29.6 88-52.4" fill="#C8DAEA"/>
                    <path d="M99.6 163.2c2.4 0 3.6-1.2 5.2-2.4l14-13.6-17.2-10.4" fill="#A9C9DD"/>
                    <path d="M102.8 147.2l41.2 30.4c4.8 2.8 8.2 1.2 9.4-4.4l17-80.2c1.6-6.4-2.4-9.4-7.2-7.6l-105.2 40.4c-6.4 2.4-6.4 5.6-1.2 7.2l27 8.4 62.6-39.6c2.8-1.6 5.2-.8 3.2 1.2" fill="#F6FBFE"/>
                  </svg>
                  <div className="flex flex-col">
                    <h3 className="font-medium text-black text-lg mb-0">Telegram</h3>
                    <p className="text-gray-700 -mt-1">Community</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  {/* Notion Icon */}
                  <SiNotion className="w-10 h-10 text-black bg-white rounded-md p-1" />
                  <div className="flex flex-col">
                    <h3 className="font-medium text-black text-lg mb-0">Notion</h3>
                    <p className="text-gray-700 -mt-1">Notes</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  {/* GitHub Icon */}
                  <FaGithub className="w-10 h-10 text-black bg-white rounded-md p-1" />
                  <div className="flex flex-col">
                    <h3 className="font-medium text-black text-lg mb-0">GitHub</h3>
                    <p className="text-gray-700 -mt-1">Code</p>
                  </div>
                </div>
              </div>
            </div>
          {/* Example Card: Map */}
          <div className="relative rounded-2xl border-2 border-gray-300 shadow-md overflow-hidden flex items-center justify-center w-full max-w-xs mx-auto h-60">
              {/* Map background (image) */}
              <div className="absolute inset-0 w-full h-full">
                <img src="/assets/map.jpg" alt="Map of Paris" className="w-full h-full object-cover" />
              </div>
          </div>
          {/* Example Card: Podcast */}
          <div className="overflow-hidden relative bg-white h-32 rounded-[1.3rem] border-2 border-gray-300 p-6 flex gap-3">
              <img src="/assets/moroccan-talks.jpg" className="w-16 h-16 object-cover rounded-lg" alt="Album cover" />
              <div className="flex flex-col justify-center">
                <p className="text-xs text-gray-600 uppercase font-bold flex items-center gap-2">
                  <span className="flex items-end gap-0.5 h-3">
                    <span className="w-0.5 h-2 bg-green-400 rounded styles_bounce_bar" style={{ animationDelay: '0ms' }} />
                    <span className="w-0.5 h-3 bg-green-400 rounded styles_bounce_bar" style={{ animationDelay: '400ms' }} />
                    <span className="w-0.5 h-1 bg-green-400 rounded styles_bounce_bar" style={{ animationDelay: '800ms' }} />
              </span>
                  Playing Now
                </p>
                <p className="text-md text-black font-bold leading-tight">Moroccan Talks</p>
                <p className="text-sm text-gray-800">Hobawi</p>
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
          {/* Reactions Block */}
          <div className="relative h-40 bg-white  border-2 border-gray-300 rounded-3xl overflow-hidden flex flex-col justify-between mt-4">
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
          {/* Social Stats (Join Waitlist) */}
          <div className="h-52 overflow-hidden relative bg-white border-2 border-gray-300 p-6 rounded-3xl flex flex-col mt-4">
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
            
          {/* Example Card: Instagram (YouTube style) */}
          <div className="bg-white-to-br from-pink-100 to-yellow-100 rounded-2xl border-2 border-gray-300 shadow-md p-5 flex flex-col w-full max-w-xs h-20">
            <div className="flex items-center justify-between w-full mb-4">
              <div className="flex items-center">
              <span className="w-8 h-8 bg-gradient-to-br from-pink-500 to-yellow-400 rounded-full flex items-center justify-center mr-2">
                  <FaInstagram className="w-5 h-5 text-white" />
              </span>
                <span className="text-xs text-gray-800 font-semibold">Linkria</span>
            </div>
              <button className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold">Follow 25k</button>
            </div>
          </div>
        </div>
        {/* And many more */}
        <div className="mt-8 mb-2 text-center">
          <span className="text-gray-400 text-sm">And many more</span>
          <div className="relative w-1/2 mx-auto">
            {/* Left fade */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-10 z-10"
                 style={{ background: "linear-gradient(to right, white 60%, transparent)" }} />
            {/* Right fade */}
            <div className="pointer-events-none absolute right-0 top-0 h-full w-10 z-10"
                 style={{ background: "linear-gradient(to left, white 60%, transparent)" }} />
            <Marquee
              gradient={true}
              gradientWidth={60}
              gradientColor="white"
              speed={40}
              pauseOnHover={false}
              className="my-6"
            >
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#1769ff]">
                  <FaBehance className="text-white text-xl" />
                </div>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#e60023]">
                  <FaPinterest className="text-white text-xl" />
                </div>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#5865f2]">
                  <FaDiscord className="text-white text-xl" />
                </div>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#ff5700]">
                  <FaReddit className="text-white text-xl" />
                </div>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-pink-500 to-yellow-400">
                  <FaInstagram className="text-white text-xl" />
                </div>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#1877f3]">
                  <FaFacebook className="text-white text-xl" />
                </div>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#ff0000]">
                  <FaYoutube className="text-white text-xl" />
                </div>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#1ed760]">
                  <FaSpotify className="text-white text-xl" />
                </div>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-black">
                  <SiNotion className="text-white text-xl" />
                </div>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#333]">
                  <FaGithub className="text-white text-xl" />
                </div>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#229ed9]">
                  <FaTelegram className="text-white text-xl" />
                </div>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#4285F4]">
                  <SiGooglemaps className="text-white text-xl" />
                </div>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#f24e1e]">
                  <FaFigma className="text-white text-xl" />
                </div>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#fffc00]">
                  <FaSnapchatGhost className="text-black text-xl" />
                </div>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-black">
                  <FaTiktok className="text-white text-xl" />
                </div>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#25d366]">
                  <FaWhatsapp className="text-white text-xl" />
                </div>
                {/* Spacer for loop gap */}
                <div className="w-1" />
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
};

export const CreatorsSection = ({ openAuthModal, username, setUsername }: { openAuthModal: () => void, username: string, setUsername: (v: string) => void }) => {

  return (
    <section className="py-20 px-4 bg-white flex flex-col items-center">
      <div className="max-w-3xl w-full mx-auto flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-black text-center mb-2">Your unique link.</h2>
        <p className="text-gray-400 text-center mb-10">And btw, the good ones are still free.</p>
        <div className="relative w-full max-w-3xl min-h-[380px] sm:min-h-[420px] bg-white rounded-2xl border border-gray-200 flex items-center justify-center overflow-visible mb-20 shadow-sm">
          {/* Floating Cards */}
          {/* Twitter Card */}
          <div className="absolute -top-8 -left-8 sm:-top-12 sm:-left-12 bg-white rounded-2xl shadow-lg border border-gray-100 p-4 flex flex-col items-start w-48 rotate-[-8deg]">
            <div className="flex items-center mb-2">
              <span className="w-8 h-8 bg-black rounded-full flex items-center justify-center mr-2">
                <FaXTwitter className="w-5 h-5 text-white" />
              </span>
              <span className="font-semibold text-gray-700">My Tweeeets</span>
            </div>
            <span className="text-xs text-gray-400 mb-2">@Linkria</span>
            <button className="mt-2 bg-black text-white text-xs font-semibold px-3 py-1 rounded-full">Follow 12k</button>
          </div>
          {/* Instagram Card */}
          <div className="absolute -top-8 -right-8 sm:-top-12 sm:-right-12 bg-white rounded-2xl shadow-lg border border-gray-100 p-4 flex flex-col items-start w-48 rotate-[8deg]">
            <div className="flex items-center mb-2">
              <span className="w-8 h-8 bg-gradient-to-br from-pink-500 to-yellow-400 rounded-full flex items-center justify-center mr-2">
                <FaInstagram className="w-5 h-5 text-white" />
              </span>
              <span className="font-semibold text-gray-700">Instagram</span>
            </div>
            <span className="text-xs text-gray-400 mb-2">@Linkria</span>
            <button className="mt-2 bg-gradient-to-br from-pink-500 to-yellow-400 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">Follow <span className="font-bold">5k</span></button>
          </div>
          {/* Spotify Card */}
          <div className="absolute -bottom-8 -left-8 sm:-bottom-12 sm:-left-12 bg-white rounded-2xl shadow-lg border border-gray-100 p-4 flex items-center w-80 rotate-[-4deg]">
            <span className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center mr-3">
              <FaSpotify className="w-5 h-5 text-white" />
            </span>
            <div className="flex-1">
              <div className="text-xs text-gray-700 font-semibold mb-1">Mike Matas speaks about his solo career as a designer</div>
              <div className="text-xs text-gray-400">The Vergecast</div>
            </div>
            <img src="/assets/moroccan-talks.jpg" alt="Vergecast" className="w-14 h-14 object-cover rounded-xl ml-3" />
          </div>
          {/* Main Centered Content */}
          <div className="flex flex-col items-center justify-center w-full py-16">
            <div className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-400 leading-tight text-center">
              <div>mary</div>
              <div>clara</div>
              <div>eike</div>
              <div className="text-black font-bold">Linkria.com/<span className="text-4xl sm:text-5xl md:text-6xl font-black text-black">Adam</span></div>
              <div>silvan</div>
              <div>adeline</div>
              <div>dennis</div>
            </div>
          </div>
        </div>
        {/* Create Button with Input */}
        <div className="mb-12 flex flex-col items-center w-full">
          <div className="w-full max-w-md inline-flex flex-row items-center rounded-full bg-white pl-4 border-2 border-gray-400 shadow-sm justify-center">
            <span className="text-slate-600 font-medium">Linkria.com/</span>
            <input
              type="text"
              placeholder="name"
              className="bg-transparent border-0 px-0 focus:outline-none focus:ring-0 rounded-full w-full text-base ml-2"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
            <button
              type="button"
              className="items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white shadow hover:bg-black/90 h-12 text-base font-bold flex group rounded-full px-6 md:px-10 ml-2"
              aria-haspopup="dialog"
              aria-expanded="false"
              onClick={openAuthModal}
            >
              <span>Claim page</span>
              <HiArrowRight className="w-5 h-5 ml-2 -mr-6 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:-mr-4 transition-all ease-in-out duration-200" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};