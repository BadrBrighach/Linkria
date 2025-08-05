import React, { useState, useRef, useEffect, ChangeEvent } from 'react';
import { Pricing } from '../components/Pricing';

const menuPanels = {
  blocks: (
    <main className="relative flex flex-1 flex-col bg-sys-bg-base min-h-[calc(100svh-theme(spacing.4))] m-2 rounded-xl shadow w-full mt-[68px] app-page" id="tour-canvas">
      <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-7 w-7 mt-3 ml-3 text-sys-title-primary" data-sidebar="trigger">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-panel-left"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M9 3v18"></path></svg>
        <span className="sr-only">Toggle Sidebar</span>
      </button>
      <div className="min-h-screen bg-black/0 transition-colors hover:bg-black/5 w-full mx-auto pb-24 md:pb-0 max-w-[624px]">
        <div className="react-grid-layout !overflow-auto w-full min-h-[100vh]" style={{ height: '282px' }}>
          <section className="react-grid-item static cssTransforms react-resizable-hide react-resizable" style={{ fontFamily: 'var(--font-sys-body)', width: '450px', height: '200px', position: 'absolute', transform: 'translate(10px, 20px)' }}>
            <div className="h-full overflow-hidden relative max-w-[624px]">
              <header className="py-4 flex flex-col">
                <img alt="Profile avatar" loading="lazy" width="80" height="80" decoding="async" data-nimg="1" className="mb-6 rounded-lg" srcSet="/_next/image?url=https%3A%2F%2Fcdn.glow.as%2Fblock-792fa503-e64b-4abe-9195-e54a4fc68e1a%2F92a0e8d2-ba9e-4638-9373-92c02219871d.webp&w=96&q=75 1x, /_next/image?url=https%3A%2F%2Fcdn.glow.as%2Fblock-792fa503-e64b-4abe-9195-e54a4fc68e1a%2F92a0e8d2-ba9e-4638-9373-92c02219871d.webp&w=256&q=75 2x" src="/_next/image?url=https%3A%2F%2Fcdn.glow.as%2Fblock-792fa503-e64b-4abe-9195-e54a4fc68e1a%2F92a0e8d2-ba9e-4638-9373-92c02219871d.webp&w=256&q=75" style={{ color: 'transparent' }} />
                <h1 className="font-bold text-4xl mb-1 text-sys-title-primary">Badr Brighach </h1>
                <p className="text-2xl text-sys-title-secondary">Developer from Morocco.</p>
              </header>
              <span className="isolate inline-flex rounded-full shadow-md z-40 absolute top-2 right-2 block-toolbar">
                <button type="button" className="relative inline-flex items-center rounded-l-full bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-stone-100 focus:z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" width="16" height="16" className="text-slate-700"><path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"></path></svg>
                </button>
                <button type="button" className="relative -ml-px inline-flex items-center rounded-r-full bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-stone-100 focus:z-10" disabled={true}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" width="16" height="16" className="text-slate-700"><path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"></path></svg>
                </button>
              </span>
            </div>
            <span className="react-resizable-handle react-resizable-handle-se"></span>
          </section>
          <section className="react-grid-item react-draggable cssTransforms react-resizable" style={{ fontFamily: 'var(--font-sys-body)', width: '28px', height: '32px', position: 'absolute', transform: 'translate(10px, 230px)' }}>
            <div className="h-full overflow-hidden relative max-w-[624px] bg-sys-bg-primary border-sys-bg-border border p-6 rounded-3xl shadow-md items-center flex group">
              <div className="flex flex-row gap-4 items-center">
                <img className="w-10 h-10 rounded-md" alt="Link icon" src="https://cdn.lin.ky/default-data/x-logo.png" />
                <div className="flex flex-col">
                  <span className="font-semibold text-base text-sys-label-primary">X</span>
                  <span className="text-sys-label-secondary text-xs">Follow us on X</span>
                </div>
              </div>
              <span className="isolate inline-flex rounded-full shadow-md z-40 absolute top-2 right-2 block-toolbar">
                <button type="button" className="relative inline-flex items-center rounded-l-full bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-stone-100 focus:z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" width="16" height="16" className="text-slate-700"><path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"></path></svg>
                </button>
                <button type="button" className="relative -ml-px inline-flex items-center rounded-r-full bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-stone-100 focus:z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" width="16" height="16" className="text-slate-700"><path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"></path></svg>
                </button>
              </span>
            </div>
            <span className="react-resizable-handle react-resizable-handle-se"></span>
          </section>
        </div>
      </div>
    </main>
  ),
  // Add more panels for other menu items as needed
};

const pages = [
  {
    id: 'badrbrighach',
    name: '/badrbrighach',
    avatar: 'https://avatar.vercel.sh/32550e6d-9c43-4243-85cd-e969b8872b0e.png',
  },
  // Add more pages as needed
];

const themes = [
  { name: 'Default', color: 'bg-gray-800', border: 'border-gray-500' },
  { name: 'Purple', color: 'bg-purple-900', border: 'border-purple-500' },
  { name: 'Black', color: 'bg-black', border: 'border-gray-700' },
  { name: 'Forest', color: 'bg-green-900', border: 'border-green-500' },
  { name: 'Lilac', color: 'bg-purple-400', border: 'border-purple-300' },
  { name: 'OrangePunch', color: 'bg-orange-600', border: 'border-orange-400' },
];

// Update themeStyles for light backgrounds and preview colors
const themeStyles = {
  Default: { bg: 'bg-white', border: 'border-gray-300', avatar: 'bg-gray-300', text: 'text-gray-900', line: 'bg-gray-400', pill: 'bg-gray-100 text-gray-700' },
  Purple: { bg: 'bg-purple-100', border: 'border-purple-400', avatar: 'bg-purple-300', text: 'text-purple-900', line: 'bg-purple-400', pill: 'bg-purple-100 text-purple-700' },
  Black: { bg: 'bg-gray-900', border: 'border-gray-700', avatar: 'bg-gray-700', text: 'text-white', line: 'bg-gray-600', pill: 'bg-gray-800 text-white' },
  Forest: { bg: 'bg-green-100', border: 'border-green-400', avatar: 'bg-green-300', text: 'text-green-900', line: 'bg-green-400', pill: 'bg-green-100 text-green-700' },
  Lilac: { bg: 'bg-purple-200', border: 'border-purple-300', avatar: 'bg-purple-300', text: 'text-purple-900', line: 'bg-purple-400', pill: 'bg-purple-100 text-purple-700' },
  OrangePunch: { bg: 'bg-orange-100', border: 'border-orange-400', avatar: 'bg-orange-300', text: 'text-orange-900', line: 'bg-orange-400', pill: 'bg-orange-100 text-orange-700' },
};

// Theme preview card color definitions for each theme
const themeCardStyles = {
  Default: {
    outer: 'bg-white border border-black',
    avatar: 'bg-black',
    line1: 'bg-black',
    card: 'bg-gray-100',
    line2: 'bg-gray-400',
    borderSelected: 'border-4 border-black',
  },
  Purple: {
    outer: 'bg-[#231942] border border-[#bfaaff]',
    avatar: 'bg-[#bfaaff]',
    line1: 'bg-white',
    card: 'bg-[#2d1950]',
    line2: 'bg-[#bfaaff]',
    borderSelected: 'border-4 border-[#bfaaff]',
  },
  Black: {
    outer: 'bg-black border border-gray-700',
    avatar: 'bg-white',
    line1: 'bg-white',
    card: 'bg-[#18191c]',
    line2: 'bg-gray-400',
    borderSelected: 'border-4 border-white',
  },
  Forest: {
    outer: 'bg-[#495e57] border border-[#b7e4c7]',
    avatar: 'bg-[#b7e4c7]',
    line1: 'bg-white',
    card: 'bg-[#6a8f72]',
    line2: 'bg-[#b7e4c7]',
    borderSelected: 'border-4 border-[#b7e4c7]',
  },
  Lilac: {
    outer: 'bg-[#d6c7ff] border border-[#bfaaff]',
    avatar: 'bg-[#6c47a6]',
    line1: 'bg-[#6c47a6]',
    card: 'bg-[#ede7f6]',
    line2: 'bg-[#6c47a6]',
    borderSelected: 'border-4 border-[#bfaaff]',
  },
  OrangePunch: {
    outer: 'bg-[#e4572e] border border-black',
    avatar: 'bg-[#44cf6c]',
    line1: 'bg-white',
    card: 'bg-[#29335c]',
    line2: 'bg-[#44cf6c]',
    borderSelected: 'border-4 border-black',
  },
};

const Dashboard: React.FC = () => {
  const [selectedMenu, setSelectedMenu] = useState<'blocks' | null>('blocks');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState(pages[0]);
  const [search, setSearch] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalStep, setModalStep] = useState(1);
  const [handleInput, setHandleInput] = useState('');
  const [handleError, setHandleError] = useState('');
  const [selectedTheme, setSelectedTheme] = useState(themes[0].name);
  const [pageList, setPageList] = useState(pages);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleInputRef = useRef<HTMLInputElement>(null);
  const [avatarFile, setAvatarFile] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);
  const [showPricing, setShowPricing] = useState(false);

  // Accessibility: Focus input on open
  useEffect(() => {
    if (modalOpen && modalStep === 1 && handleInputRef.current) {
      handleInputRef.current.focus();
    }
  }, [modalOpen, modalStep]);

  // Accessibility: Close modal on Escape
  useEffect(() => {
    if (!modalOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleModalClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [modalOpen]);

  const filteredPages = pageList.filter(page =>
    page.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelectPage = (page: typeof pages[0]) => {
    setSelectedPage(page);
    setDropdownOpen(false);
    // TODO: Navigate to the selected page
  };

  const handleCreatePage = () => {
    setDropdownOpen(false);
    setModalOpen(true);
    setModalStep(1);
    setHandleInput('');
    setHandleError('');
    setSelectedTheme(themes[0].name);
    setAvatarFile(null);
  };

  const validateHandle = (value: string) => {
    if (!value) return 'Please provide a page slug';
    if (!/^[a-z0-9_-]+$/.test(value)) return 'Only lowercase letters, numbers, dashes, and underscores.';
    if (pageList.some(page => page.id === value)) return 'This handle is already taken.';
    return '';
  };

  const handleNext = () => {
    const err = validateHandle(handleInput);
    setHandleError(err);
    if (!err) setModalStep(2);
  };

  const handleAvatarChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setAvatarFile(ev.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCreate = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // Add new page to list
      const newPage = {
        id: handleInput,
        name: `/${handleInput}`,
        avatar: avatarFile || 'https://avatar.vercel.sh/' + handleInput,
        theme: selectedTheme,
      };
      setPageList([...pageList, newPage]);
      setSelectedPage(newPage);
      setShowToast(true);
      setModalOpen(false); // Close modal immediately after creation
      setModalStep(1);
      setHandleInput('');
      setHandleError('');
      setSelectedTheme(themes[0].name);
      setAvatarFile(null);
      setTimeout(() => {
        setShowToast(false);
      }, 2000);
    }, 1200);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setModalStep(1);
    setHandleInput('');
    setHandleError('');
    setSelectedTheme(themes[0].name);
    setAvatarFile(null);
  };
  return (
    <div>
      {/* Top bar */}
      <div className="flex-col flex fixed w-full left-0 top-0 z-50">
        <div className="border-b bg-white">
          <div className="flex flex-row h-14 items-center px-4 w-full">
            {/* Left content */}
            <div className="flex items-center relative z-10">
              <a href="/">
                <img src="/assets/logo.png" alt="Linkria Logo" className="mr-3" style={{ width: 95, height: 46 }} />
              </a>
              {/* Dropdown for pages */}
              <div className="relative">
                <button
                  className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 md:w-[200px] justify-between w-[200px]"
                  onClick={() => setDropdownOpen((open) => !open)}
                >
                  <span className="relative flex shrink-0 overflow-hidden rounded-full mr-2 h-5 w-5">
                      <img className="aspect-square h-full w-full" alt={selectedPage.name} src={selectedPage.avatar} />
                  </span>
                    {selectedPage.name}
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-auto h-4 w-4 shrink-0 opacity-50">
                    <path d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                  </svg>
                </button>
                  {dropdownOpen && (
                    <div className="absolute left-0 mt-2 w-[260px] rounded-md bg-background border border-input shadow-lg z-50">
                      <div className="px-3 py-2">
                        <input
                          type="text"
                          placeholder="Search pages..."
                          className="w-full rounded-md border border-input bg-background px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-ring"
                          value={search}
                          onChange={e => setSearch(e.target.value)}
                        />
                      </div>
                      <ul className="max-h-48 overflow-auto">
                        {filteredPages.map(page => (
                          <li key={page.id}>
                            <button
                              className={`flex items-center w-full px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground ${selectedPage.id === page.id ? 'font-semibold' : ''}`}
                              onClick={() => handleSelectPage(page)}
                            >
                              <span className="relative flex shrink-0 overflow-hidden rounded-full mr-2 h-5 w-5">
                                <img className="aspect-square h-full w-full" alt={page.name} src={page.avatar} />
                              </span>
                              {page.name}
                              {selectedPage.id === page.id && (
                                <svg className="ml-auto h-4 w-4 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                              )}
                            </button>
                          </li>
                        ))}
                      </ul>
                      <button
                        className="flex items-center w-full px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground border-t border-input"
                        onClick={handleCreatePage}
                      >
                        <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v8M8 12h8" /></svg>
                        Create Page
                      </button>
                    </div>
                  )}
                </div>
            </div>
            {/* Center content: Segmented Control */}
            <div className="flex-1 flex justify-center">
              <div className="inline-flex h-9 items-center justify-center rounded-lg bg-gray-100 p-1">
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-6 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-foreground shadow-sm border border-gray-200">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                  </svg>
                </button>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-6 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75A2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                  </svg>
                </button>
              </div>
            </div>
            {/* Right content: Upgrade and Icon */}
            <div className="flex items-center gap-6">
              <button
                className="inline-flex items-center rounded-full bg-purple-50 px-3 py-1 text-sm font-medium text-purple-700 ring-1 ring-inset ring-purple-600/10 hover:bg-purple-100 transition-colors"
                onClick={() => setShowPricing(true)}
              >
                Upgrade to Premium
              </button>
              <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground px-4 py-2 h-10 w-10 rounded-full bg-gray-100 border border-gray-200">
                <span className="relative flex shrink-0 overflow-hidden rounded-full h-8 w-8"><img className="aspect-square h-full w-full" alt="badr brighach" src="https://lh3.googleusercontent.com/a/ACg8ocI4_KhdgzyW-KNP5uelSI5xXlFpkJQOJG6x9I-Q-CZT3yPlLF1UYA=s96-c"></img></span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Toast notification */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-white text-black rounded-xl shadow-lg px-6 py-3 text-base font-normal animate-fade-in-out">
          Page created
        </div>
      )}
      {/* Pricing Modal */}
      {showPricing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-xl shadow-2xl p-0 max-w-md w-full relative flex flex-col items-center">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl"
              aria-label="Close"
              onClick={() => setShowPricing(false)}
              style={{ zIndex: 10 }}
            >
              &times;
            </button>
            <div className="w-full p-8 flex flex-col items-center">
              <Pricing openAuthModal={() => {}} openSignUpModal={() => {}} />
            </div>
          </div>
        </div>
      )}
      {/* Add animation for fade-in-out */}
      <style>
        {`
        @keyframes fade-in-out {
          0% { opacity: 0; transform: translateY(20px); }
          10% { opacity: 1; transform: translateY(0); }
          90% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(20px); }
        }
        .animate-fade-in-out {
          animation: fade-in-out 2s both;
        }
        `}
      </style>
    </div>
  );
};

export default Dashboard; 