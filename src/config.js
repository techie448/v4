module.exports = {
  siteTitle: 'Rishabh Kharbanda | Software Engineer',
  siteDescription:
    'Rishabh Kharbanda is a software engineer based in Canada who specializes in building (and occasionally designing) exceptional websites, applications, and everything in between.',
  siteKeywords:
    'Rishabh Kharbanda, Rishabh, Kharbanda, techie448, software engineer, front-end engineer, back-end engineer, web developer, javascript, full stack developer',
  siteUrl: 'https://github.com/techie448',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-175795169-1',
  googleVerification: '4MvVRXF8cIXzruAr5mPa1pCPEkva7BeElOkCSisduh0',
  name: 'Rishabh Kharbanda',
  location: 'Canada',
  email: 'kharbanda.rishabh7@gmail.com',
  github: 'https://github.com/techie448',
  twitterHandle: '@r15h48h',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/techie448',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/rishabh-kharbanda',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/techie448',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/rishabh_kharbanda/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
