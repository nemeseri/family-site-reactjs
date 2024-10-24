import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

async function fetchEmailLink() {
  const response = await fetch(API_URL.concat('/get-contact'));
  if (!response.ok) {
    throw new Error(`Can't reach server API.`);
  }
  return response.json();
}

export default function EmailLink({children}: { children: string }) {
  const [emailLink, setEmailLink] = useState<string | undefined>();

  useEffect(() => {
    let timeoutId: number | undefined;

    fetchEmailLink()
      .then(d => {
        timeoutId = window.setTimeout(() => {
          setEmailLink(window.atob(d.data));
        }, 3000);
      })
      .catch(err => {});

      return () => clearTimeout(timeoutId);
  }, []);

  return <a href={emailLink} 
    className={`contact ${!emailLink ? 'disabled' : ''}`}
  >{children}</a>;
}