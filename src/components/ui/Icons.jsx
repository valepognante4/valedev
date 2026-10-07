function Svg({ className = "h-6 w-6", children }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {children}
    </svg>
  );
}

export function IconSun({ className }) {
  return (
    <Svg className={className}>
      <circle cx="12" cy="12" r="3.25" />
      <path d="M12 3.5v1.75M12 18.75V20.5M3.5 12h1.75M18.75 12H20.5M5.4 5.4l1.25 1.25M17.35 17.35l1.25 1.25M18.6 5.4l-1.25 1.25M6.65 17.35 5.4 18.6" />
    </Svg>
  );
}

export function IconMoon({ className }) {
  return (
    <Svg className={className}>
      <path d="M16.5 13.2A6.2 6.2 0 0 1 10.8 4.5 6.4 6.4 0 1 0 19.5 13.2a6.2 6.2 0 0 1-3 0Z" />
    </Svg>
  );
}

export function IconMenu({ className }) {
  return (
    <Svg className={className}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </Svg>
  );
}

export function IconClose({ className }) {
  return (
    <Svg className={className}>
      <path d="M6 6l12 12M18 6 6 18" />
    </Svg>
  );
}

export function IconArrow({ className }) {
  return (
    <Svg className={className}>
      <path d="M7 17 17 7M9 7h8v8" />
    </Svg>
  );
}

export function IconServer({ className }) {
  return (
    <Svg className={className}>
      <rect x="3" y="4" width="18" height="6" rx="1.25" />
      <rect x="3" y="14" width="18" height="6" rx="1.25" />
      <path d="M7 7h.01M7 17h.01" />
    </Svg>
  );
}

export function IconWindow({ className }) {
  return (
    <Svg className={className}>
      <rect x="3.5" y="4.5" width="17" height="15" rx="1.5" />
      <path d="M3.5 9h17" />
    </Svg>
  );
}

export function IconNodes({ className }) {
  return (
    <Svg className={className}>
      <circle cx="6" cy="12" r="2.25" />
      <circle cx="18" cy="7" r="2.25" />
      <circle cx="18" cy="17" r="2.25" />
      <path d="M8.1 11.2 15.7 8.1M8.1 12.8l7.6 3.1" />
    </Svg>
  );
}

export function IconChat({ className }) {
  return (
    <Svg className={className}>
      <path d="M5 6.5h14v8.5H8.5L5 18.5v-12Z" />
    </Svg>
  );
}

export function IconGithub({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        fill="currentColor"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.56 9.56 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"
      />
    </svg>
  );
}

export function IconLinkedin({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        fill="currentColor"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      />
    </svg>
  );
}

export function IconWhatsapp({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        fill="currentColor"
        d="M20.5 3.5A11 11 0 0 0 2.1 16.8L1 23l6.4-1.1A11 11 0 0 0 12 23a11 11 0 0 0 8.5-19.5ZM12 21a9 9 0 0 1-4.6-1.3l-.3-.2-3.8.6.6-3.7-.2-.3A9 9 0 1 1 12 21Zm5-6.7c-.3-.1-1.6-.8-1.8-.9s-.4-.1-.6.1-.7.9-.8 1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.5.2-.3a.5.5 0 0 0 0-.5c0-.1-.6-1.4-.8-1.9s-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 12 12 0 0 0 4.5 4 15 15 0 0 0 1.5.6 3.6 3.6 0 0 0 1.7.1 2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .2-1.2c-.1-.1-.3-.2-.6-.3Z"
      />
    </svg>
  );
}

export function IconInstagram({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        fill="currentColor"
        d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm10 2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm-5 3.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2Zm0 2A1.8 1.8 0 1 0 13.8 12 1.8 1.8 0 0 0 12 10.2ZM17.2 7.3a.9.9 0 1 1-.9.9.9.9 0 0 1 .9-.9Z"
      />
    </svg>
  );
}

export function IconMail({ className = "h-4 w-4" }) {
  return (
    <Svg className={className}>
      <rect x="3" y="5.5" width="18" height="13" rx="1.5" />
      <path d="m4 7 8 6 8-6" />
    </Svg>
  );
}
