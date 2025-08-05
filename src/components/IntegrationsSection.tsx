import { FaInstagram, FaYoutube, FaSpotify } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa6';
import { SiThreads } from 'react-icons/si';

export const IntegrationsSection = () => {
  return (
    <div className="py-20 relative bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-tight md:leading-snug">
            With integrations so you can show your{' '}
            <span className="font-black">latest posts</span>
            <span className="inline-flex flex-row-reverse items-center justify-center ml-2 top-1 relative">
              <FaInstagram className="-ml-2 w-8 h-8 text-pink-500" />
              <SiThreads className="-ml-2 w-8 h-8 text-black" />
            </span>
            , your{' '}
            <span className="font-black">latest videos</span>
            <span className="inline-flex flex-row-reverse items-center justify-center ml-2 top-1 relative">
              <FaYoutube className="-ml-2 w-8 h-8 text-red-600" />
              <FaTiktok className="-ml-2 w-8 h-8 text-black" />
            </span>
            , or what you're{' '}
            <span className="font-black">listening to</span>
            <span className="inline-flex flex-row-reverse items-center justify-center ml-2 top-1 relative">
              <FaSpotify className="-ml-2 w-8 h-8 text-green-500" />
            </span>{' '}
            right now!
          </h2>
        </div>
      </div>
    </div>
  );
};