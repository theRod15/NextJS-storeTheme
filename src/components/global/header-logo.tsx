import React from 'react';

type Props = {
  titleAccess?: string;
};

const HeaderLogo: React.VFC<Props> = ({ titleAccess = 'Art With Aliens' }) => (
  <svg
    width={134}
    height={38}
    viewBox="0 0 134 38"
    role="img"
    aria-label={titleAccess}
    style={{
      fill: 'currentColor',
      verticalAlign: 'middle',
    }}
  >
    <path d="M16.89,29.51a28.68,28.68,0,0,1-.75-3.4c-.11-.58-.21-1.18-.34-1.77l-.12-.56c-.3-1.47-.62-3-1-4.48a3.06,3.06,0,0,1,0-1.91c.13-.34.29-.66.45-1a11.62,11.62,0,0,0,.49-1.07,11.39,11.39,0,0,0,.61-4.78,8.83,8.83,0,0,0-1.5-4.09c-.07-.1-.14-.22-.21-.34-.58-1-1.36-2.27-2.65-2.29a1.19,1.19,0,0,0-.91.35,3,3,0,0,0-.43,2.14v.24c.14,3.37.28,6.86.47,10.29l.08,1.26a1.41,1.41,0,0,0,0,.18c0,.07,0,.22,0,.28l0,.06a.61.61,0,0,0-.22.34.63.63,0,0,0,.08.45.2.2,0,0,1,0,.08l0,0,.17.17h0v0l0,.07,0,.08a3.6,3.6,0,0,1,.06.89c0,.16,0,.33,0,.48.1,1.68.21,3.49.3,5.26,0,.42.05.85.08,1.28.07,1.18.15,2.4.11,3.57,0,.09,0,.19,0,.3a2.46,2.46,0,0,0,.18,1.42.67.67,0,0,0,.57.39h.1a1.13,1.13,0,0,0,.71-.93,4.26,4.26,0,0,0-.06-1.38c0-.2-.06-.38-.07-.56-.05-.57-.07-1.17-.09-1.74l0-.77L13,27c-.05-1.34-.11-2.68-.16-4l0-1c0-.49,0-1,0-1.5a3.29,3.29,0,0,0,0-.42,1.93,1.93,0,0,1,.07-1.11c.12-.2.24-.19.28-.19a.68.68,0,0,1,.48.43,6.55,6.55,0,0,1,.37,1.54c0,.2.06.4.1.59.29,1.47.5,3,.7,4.44.05.4.11.81.17,1.21.13.92.3,1.87.53,2.9a1.55,1.55,0,0,0,0,.21c.1.53.24,1.26.84,1.54a.68.68,0,0,0,.77,0c.36-.33.15-1.11-.11-1.88C16.91,29.6,16.9,29.55,16.89,29.51Zm-2.14-17.4a13.27,13.27,0,0,1-.65,3.33c-.19.57-.54,1.62-1.13,1.81-.17,0-.19-.06-.2-.45a2.35,2.35,0,0,0,0-.26l0-.62c0-.33-.05-.67-.07-1-.06-.84-.13-1.67-.2-2.51l-.38-4.88c0-.09,0-.23-.05-.4-.07-.42-.25-1.53,0-1.7l.07,0c.16,0,.57.19,1.48,1.63l.06.09A8.26,8.26,0,0,1,14.75,12.11Z" />
    <path d="M26.53,6.53a5,5,0,0,1-.63,0l-1.18-.09h-.27a3.45,3.45,0,0,1-.75-.06s0-.05,0-.08a.53.53,0,0,0-.55-.47.57.57,0,0,0-.42.17.75.75,0,0,0-.18.3L21.3,6.21c-.86-.07-1.76-.15-2.64-.18h0c-.38,0-1.07,0-1.29.38a.5.5,0,0,0,0,.44c.14.31.55.44,1,.56l.08,0a10.57,10.57,0,0,0,3,.4h.19c.22,0,.56,0,.67.09s.09.72.08,1,0,.27,0,.36c.09,3.17.26,6.38.42,9.49.13,2.39.26,4.86.35,7.29l0,.67c0,.87.07,1.77.06,2.65,0,.08,0,.17,0,.28a2.16,2.16,0,0,0,.27,1.54.65.65,0,0,0,.46.22.84.84,0,0,0,.18,0c.53-.19.72-1.18.73-1.36a7.52,7.52,0,0,0-.07-1.58c0-.29-.06-.57-.07-.86-.12-2.33-.29-4.7-.45-7-.22-3-.45-6.2-.54-9.3,0-.31,0-.61,0-.92s0-.82,0-1.24a.71.71,0,0,0,0-.14c0-.23-.06-.91.08-1.05A4.15,4.15,0,0,1,25,8l.45.06.5,0a9.92,9.92,0,0,0,1.23.07c.25,0,1.22-.12,1.42-.64.06-.17.07-.43-.27-.74A2.35,2.35,0,0,0,26.53,6.53Z" />
    <path d="M45.36,0a1.27,1.27,0,0,0-1,.35,1.58,1.58,0,0,0-.25,1.2,1.94,1.94,0,0,1,0,.24,14.51,14.51,0,0,1-.06,1.56C44,4.17,44,5,43.88,5.77l-.09,1c-.13,1.45-.26,2.89-.4,4.33-.07.83-.15,1.66-.22,2.48-.11,1.22-.24,2.45-.36,3.64-.1,1-.21,2.07-.3,3.1-.08.8-.11,1.6-.14,2.38s-.06,1.35-.11,2c0-.33,0-.66-.09-1-.14-1.32-.36-2.73-.68-4.31-.17-.87-.36-1.75-.55-2.59a57,57,0,0,1-1.12-6.13c-.08-.73-.13-1.4-.15-2.06a6.55,6.55,0,0,1,0-.88,8.11,8.11,0,0,0,0-.86A1.19,1.19,0,0,0,39.44,6a.75.75,0,0,0-.62-.18c-.61,0-1,.57-.94,1.39a26.5,26.5,0,0,1-.19,3.19c0,.34-.07.68-.09,1-.07.72-.09,1.45-.12,2.16s0,1.43-.11,2.14c-.1,1.2-.25,2.4-.4,3.57-.18,1.43-.36,2.89-.46,4.36-.13-1.13-.29-2.73-.47-4.8,0-.35,0-.6-.06-.7-.08-.77-.16-1.55-.25-2.32-.14-1.27-.28-2.58-.4-3.87s-.22-2.87-.3-4.73a18.2,18.2,0,0,0-.24-2.3l0-.13A2.35,2.35,0,0,0,34,3.2a.75.75,0,0,0-.86-.12c-.47.31-.36,1.3-.17,2.32l0,.11c.25,1.46.45,2.89.61,4.36l.16,1.46q.43,4.06.89,8.13c.1.92.22,1.85.33,2.75.27,2.17.55,4.41.65,6.62,0,.2,0,.42,0,.66A4.36,4.36,0,0,0,36.11,32a.82.82,0,0,0,.64.43l.13,0c.51-.13.65-1,.69-1.23.11-.89.13-1.81.15-2.69,0-.48,0-1,.05-1.44.09-1.62.19-3.37.32-5.14s.31-3.43.57-5.25a17.33,17.33,0,0,0,.16-2.33v-.16a8.48,8.48,0,0,1,0-1.13v.73a23.11,23.11,0,0,0,.34,2.5l.12.66c.13.78.27,1.54.41,2.31.22,1.27.45,2.57.65,3.86.29,1.9.5,3.87.63,5.83.07,1.06.29,2.89,1,3.21a.59.59,0,0,0,.63-.08c.34-.25.38-.87.4-1.28,0-.05,0-.09,0-.13,0-.39,0-.78,0-1.16s0-.67,0-1c.1-1.55.3-3.12.5-4.64.08-.58.15-1.16.23-1.74.52-4.34.86-8.69,1.13-12.38.16-2.18.39-4.42.71-6.85.06-.42.08-.85.11-1.27,0-.22,0-.45,0-.67a.64.64,0,0,0,0-.09.83.83,0,0,0,0-.52A.59.59,0,0,0,45.36,0Z" />
    <path d="M54.79,29.57a3.53,3.53,0,0,0-1.17,0l-.5.05h-.06c-.42,0-.86,0-1.08-.25a1.79,1.79,0,0,1-.16-1.1v-.11c0-1.13,0-2.32,0-3.77-.07-2.58-.1-5.27-.1-8,0-1.51,0-3,0-4.54,0-1.16,0-2.32,0-3.47A.65.65,0,0,1,51.8,8c.12-.11.44-.1.77-.08h.18c.47,0,1,0,1.21-.25a.57.57,0,0,0,.12-.52c-.13-.62-.83-.65-1.21-.66h-.11c-.33,0-.63,0-.9-.07l-.12,0v0s0-.08,0-.13,0-.11,0-.17a.83.83,0,0,0-.23-.66A.59.59,0,0,0,51,5.29c-.54.08-.57.61-.56,1a11.47,11.47,0,0,0-1.55,0,1.27,1.27,0,0,0-1.06.61.67.67,0,0,0,.17.72,1.47,1.47,0,0,0,1.43.24c.3-.06.6-.11.73,0a.69.69,0,0,1,.13.47c0,3,0,6.07-.1,8.93-.08,3.2,0,6.3.13,9.22l0,.51c0,.56.06,1.13.07,1.7v.21c0,.34,0,.82-.2,1a.69.69,0,0,1-.37,0,1,1,0,0,0-.7.15.71.71,0,0,0-.3.65.77.77,0,0,0,.51.6,1.5,1.5,0,0,0,.72.05,1.22,1.22,0,0,1,.43,0l.07,0v.33c0,.44.07.93.13,1.41,0,.27.2.75.56.87l.15,0a.64.64,0,0,0,.46-.23,1.34,1.34,0,0,0,.16-1c0-.08,0-.15,0-.21V31.39c.12,0,.24,0,.35,0a5.66,5.66,0,0,1,.92,0l.25,0a2.1,2.1,0,0,0,1.73-.3.82.82,0,0,0,.25-.84A1,1,0,0,0,54.79,29.57Z" />
    <path d="M64.12,7.1c-.19-.6-.85-.52-1.24-.48l-.24,0h0a5.51,5.51,0,0,0-.7.06,4.05,4.05,0,0,1-1,0c-.42-.05-.42-.05-.4-.43a2.53,2.53,0,0,0,0-.29s0-.1,0-.17a2.13,2.13,0,0,0-.25-1.43.57.57,0,0,0-.65-.19.81.81,0,0,0-.44.74c0,.18,0,.36,0,.54a5.42,5.42,0,0,1,0,.57c0,.07,0,.14,0,.21a1.49,1.49,0,0,1,0,.24.77.77,0,0,1-.2,0,9.37,9.37,0,0,1-1.68-.13l-.13,0c-1-.14-1.89-.21-2.16.28a.54.54,0,0,0,0,.55c.3.53,1.62.63,2.17.64.16,0,.36,0,.57,0,.75-.06,1.43-.08,1.48.3a7.27,7.27,0,0,1,0,1.15c0,.25,0,.5,0,.75,0,.77.07,1.59.12,2.53s.11,2.08.18,3.12l.09,1.52c.18,3,.31,6.13.4,9.35V27c0,1,.06,2,0,3a2.38,2.38,0,0,1,0,.36,3.12,3.12,0,0,0,.24,2.09.72.72,0,0,0,.55.33l.14,0c.48-.14.66-.93.69-1.22a9.88,9.88,0,0,0,0-1.54c0-.22,0-.43,0-.65-.08-2.8-.23-5.79-.48-9.42L61,18.19c-.19-2.81-.4-5.7-.42-8.56,0-.1,0-.24,0-.39,0-.38-.1-1.17.12-1.32s1.07,0,1.54.1l.46.09c.17,0,1,.13,1.37-.3A.68.68,0,0,0,64.12,7.1Z" />
    <path d="M95.84,30.59a3.73,3.73,0,0,0-2.28-.33l-.63,0a2.31,2.31,0,0,1-.45,0,1.69,1.69,0,0,1-.06-.44,21.14,21.14,0,0,1,0-2.64c0-.27,0-.54,0-.81,0-1,0-2,0-3s0-1.75,0-2.62c.06-2.56,0-5.23,0-7.38,0-.55,0-1.11,0-1.67a50.13,50.13,0,0,1,.09-5.2V6.38a1.16,1.16,0,0,0-.15-.9.61.61,0,0,0-.51-.24.73.73,0,0,0-.58.3,2.53,2.53,0,0,0-.21,1.66,5.07,5.07,0,0,1,0,.52c-.09,3.58-.1,7.23-.11,10.75,0,1.42,0,2.84,0,4.26,0,1.58,0,2.9,0,4.14,0,.71,0,1.42-.06,2.13v.09l0,.86a1.09,1.09,0,0,0,0,.18v.13H90.8a.78.78,0,0,1-.22,0c-.24-.06-.67-.17-.84.49a2.35,2.35,0,0,0,0,.59.64.64,0,0,0,.43.5,1.85,1.85,0,0,0,.58.09,1.35,1.35,0,0,1,.37,0l.18,0a1.72,1.72,0,0,0,.52.12h.09a2.68,2.68,0,0,0,.65-.1,1.2,1.2,0,0,1,.24,0,8.08,8.08,0,0,1,1.63,0l.48,0c.45,0,1.14-.17,1.3-.61C96.29,31.22,96.29,30.91,95.84,30.59Z" />
    <path d="M105.43,29.65a2.48,2.48,0,0,0-1.57,0,2,2,0,0,1-1.25,0c-.61-.29-.5-1.61-.42-2.49,0-.31,0-.58,0-.79,0-1.17-.06-2.36-.1-3.51-.06-1.8-.12-3.66-.11-5.49,0-.85,0-1.72,0-2.55,0-2.11.1-4.28,0-6.42,0-.19,0-.32.09-.38s.63-.11,1-.06l.47.05h.06c.34,0,.91,0,1.18-.31a.59.59,0,0,0,.12-.52.92.92,0,0,0-.53-.55A3.08,3.08,0,0,0,103,6.41a3.36,3.36,0,0,1-1-.06l-.08,0s0,0,0-.06a.83.83,0,0,1,0-.28,1.27,1.27,0,0,0,0-.43.65.65,0,0,0-.44-.56.56.56,0,0,0-.57.08c-.28.23-.3.68-.26,1.18l-2-.07c-.3,0-1.23.09-1.46.58a.68.68,0,0,0,.18.75c.47.54,1.23.38,1.91.23s1.16-.22,1.36.12a2.43,2.43,0,0,1,0,1.16c0,.2,0,.38,0,.54,0,.47,0,.93,0,1.4s0,1,0,1.44c0,1.1,0,2.23,0,3.32,0,.67,0,1.33,0,2v.69c0,3.21-.09,6.52.18,9.74l0,.32a2.3,2.3,0,0,1,0,1.05c-.09.23-.16.23-.43.21a1.14,1.14,0,0,0-.74.14.69.69,0,0,0-.38.69.81.81,0,0,0,.63.63,2,2,0,0,0,.63.08h.33l.11,0v0c0,.06,0,.13,0,.21s0,.07,0,.12c0,.6.09,1.24.48,1.44a.52.52,0,0,0,.23.06A.71.71,0,0,0,102,33c.31-.2.32-.69.32-1a.66.66,0,0,1,0-.15,1.34,1.34,0,0,0,0-.19,2.27,2.27,0,0,1,0-.28.25.25,0,0,0,0-.07l.14,0a2.84,2.84,0,0,1,1.29,0,3.27,3.27,0,0,0,1.39,0,1,1,0,0,0,.72-.84A.79.79,0,0,0,105.43,29.65Z" />
    <path d="M113.1,7.43a3.33,3.33,0,0,0-1.91-.51l-.41,0c-.22,0-.45-.06-.69-.1a5.37,5.37,0,0,0-1.69-.1c-1,.16-1,1.07-1,1.5s0,.77.07,1.14.06.83.07,1.24c0,2.06,0,4.07,0,5.6v.31h0a1.32,1.32,0,0,1-.2,0h-.2c-.27,0-.77,0-.84.6a.7.7,0,0,0,.18.58,1.46,1.46,0,0,0,1.08.3l0,1c0,2.32-.07,4.72,0,7.08,0,.29,0,.59,0,.89a17.75,17.75,0,0,1,0,1.93,5.43,5.43,0,0,0,0,.58,5.59,5.59,0,0,1-.1,1.11,1.11,1.11,0,0,0,0,.13h-.07a.61.61,0,0,0-.3,0,.67.67,0,0,0-.5.38.62.62,0,0,0,0,.55c.16.33.61.44.9.51a5.64,5.64,0,0,0,1.37.17,3.17,3.17,0,0,0,.44,0,2.48,2.48,0,0,0,.44-.08,2,2,0,0,1,.48-.07c2.24,0,2.46-.5,2.53-.65a.65.65,0,0,0-.17-.71c-.43-.48-1.15-.38-1.79-.3a2.7,2.7,0,0,1-.92,0c-.63-.17-.7-.9-.73-1.83,0-.12,0-.24,0-.35-.1-1.65-.06-3.34,0-5,0-1,0-2,0-3,0-.43,0-1-.06-1.5v-.12c0-.26-.07-.6.08-.73s.41-.06.85.18a1.71,1.71,0,0,0,.9.31.92.92,0,0,0,.93-.83,1.19,1.19,0,0,0-.84-1.26,2.19,2.19,0,0,0-.92,0c-.49.06-.79.09-1-.2a2.49,2.49,0,0,1-.13-1.4v-.16c.06-.8.1-1.47.11-2.11l0-.76c0-.46,0-.94,0-1.41a4.73,4.73,0,0,0-.07-.73,3.26,3.26,0,0,1,0-1.07.37.37,0,0,1,.18-.25c.33-.2,1,0,1.48.11l.31.08a3.83,3.83,0,0,1,.48.16,2.27,2.27,0,0,0,1.35.22.89.89,0,0,0,.61-.66A.84.84,0,0,0,113.1,7.43Z" />
    <path d="M125.08,4a.64.64,0,0,0-.59.12,1.16,1.16,0,0,0-.31,1v.06l.06,1.2c0,.64.08,1.31.07,2,0,1.51,0,3-.09,4.54,0,.83-.06,1.67-.08,2.5,0,2.48-.12,4.75-.22,6.93-.06,1.36-.12,2.47-.18,3.49,0,.18,0,.36,0,.54,0,.39,0,.77-.07,1.16v.36c0,.13,0,.27,0,.4a22,22,0,0,1-1.1-4c-.15-.73-.3-1.48-.5-2.21a61.33,61.33,0,0,0-2-5.92l-.51-1.38a72.43,72.43,0,0,1-2.21-7.15c-.1-.42-.31-.94-.72-1a.82.82,0,0,0-.8.35,3.65,3.65,0,0,0-.51,2.53c0,.22,0,.42,0,.61,0,.9,0,1.8-.08,2.7,0,1.65-.11,3.35-.09,5,0,1.28.05,2.58.08,3.83s.08,2.7.09,4,0,2.62-.08,3.92c0,.16,0,.35,0,.56-.09.92-.21,2.06.36,2.7a.83.83,0,0,0,.61.3h0a.78.78,0,0,0,.61-.37,2.18,2.18,0,0,0,.14-1.53,2.08,2.08,0,0,1,0-.23,16.86,16.86,0,0,1-.09-2.66V27.28c0-1.49,0-3-.06-4.48s0-2.84-.06-4.26c0-.48,0-1,0-1.46,0-1,0-2,0-3v-.38a19.28,19.28,0,0,1,.1-3.31,6.21,6.21,0,0,1,.35,1l.15.45c.3.87.59,1.75.86,2.62.38,1.23.75,2.49,1.11,3.71.13.45.27.91.4,1.37.54,1.79,1.07,3.59,1.61,5.38l.24.79a30.25,30.25,0,0,1,1.1,4.31l0,.26a2,2,0,0,0,.46,1.3.89.89,0,0,0,.75.23,1.23,1.23,0,0,0,.88-.57,2.76,2.76,0,0,0,.3-1.5V29.6c0-.63,0-1.29.1-2.15.19-3,.31-6,.43-8.91l.09-2.25c0-.84.08-1.69.13-2.51.06-1.12.12-2.28.16-3.43s0-2.15,0-3c0-.22,0-.46,0-.72a4.65,4.65,0,0,0-.15-1.94A1.15,1.15,0,0,0,125.08,4Z" />
    <path d="M133.78,6.89a2.35,2.35,0,0,0-1.42-.7l-.06,0a2.36,2.36,0,0,0-2.65.88c-1.5,2-1.29,4.78-.85,6.77a21.5,21.5,0,0,0,1.65,4.38,30.41,30.41,0,0,1,1.2,2.81,12.8,12.8,0,0,1,.52,6.56c-.39,2.12-1.16,3.14-2.29,3.05a2.73,2.73,0,0,1-.53-.13,2.57,2.57,0,0,0-.79-.14.72.72,0,0,0-.71.37.62.62,0,0,0,.22.69,2.49,2.49,0,0,0,1.75.62,3.21,3.21,0,0,0,1.23-.23c1.55-.63,2.45-2.41,2.7-5.27a14.53,14.53,0,0,0-1.15-7.06c-.26-.61-.55-1.21-.82-1.79a14.59,14.59,0,0,1-1.87-6,5.83,5.83,0,0,1,.72-3.45c.5-.7,1.16-.56,2.18-.24l.49.14h.07a.58.58,0,0,0,.57-.31A.92.92,0,0,0,133.78,6.89Z" />
    <path d="M87.84,24h0l-.13,0s0-.05,0-.08,0-.11,0-.18c0-.27-.1-.6-.13-.91a5.4,5.4,0,0,1,0-1.06,15.07,15.07,0,0,0-.08-2.52c0-.41-.07-.84-.09-1.27,0-1.1-.16-2.22-.28-3.31-.08-.76-.17-1.56-.23-2.33l-.07-.94c-.11-1.48-.22-3-.28-4.5,0-.21,0-.42,0-.63,0-.61,0-1.25-.11-1.87l0-.12c-.07-.64-.21-1.84-1-2a.72.72,0,0,0-.6.13c-.69.47-1,2-1.24,3.47,0,.21-.06.37-.08.47-.89,4-1.64,7.56-2.31,11.05l-.55,3c-.1.54-.19,1.09-.29,1.63,0,.1,0,.27,0,.46a4.73,4.73,0,0,1-.14,1,4.07,4.07,0,0,1-.82-.07l-.4-.05h-.06c-.26,0-.75,0-.84.53a.66.66,0,0,0,.14.53c.34.39,1.17.37,1.72.36h0c0,.38-.11.76-.16,1.14-.11.85-.23,1.74-.4,2.59-.1.49-.24.94-.38,1.42l-.1.32c-.09.32-.29,1,.4,1.2a.78.78,0,0,0,.67-.07c.52-.35.65-1.31.74-2.27,0-.14,0-.26,0-.34,0-.27.09-.55.13-.83s.1-.7.16-1c0-.11,0-.22,0-.34a2.52,2.52,0,0,1,.33-1.18c.44-.57,1.76-.19,2.19-.06a6.47,6.47,0,0,1,.84.3,8.19,8.19,0,0,0,1.12.38l.24,0c.22,0,.3,0,.36.15a1.59,1.59,0,0,1,.06.71v.21c0,.38,0,.77,0,1.16s0,.61,0,.92c0,.13,0,.28,0,.43a3.84,3.84,0,0,0,.16,1.7.94.94,0,0,0,.65.55l.18,0a.89.89,0,0,0,.59-.23A1.48,1.48,0,0,0,88,30.39a1.8,1.8,0,0,1,0-.22l0-.91c0-.53,0-1.06,0-1.58s0-.83,0-1.25a.83.83,0,0,0,0-.13c0-.05,0-.13,0-.17h0a.7.7,0,0,0,.42-.1c.42-.25.47-1.11.3-1.57A.61.61,0,0,0,87.84,24Zm-1.73.06c-.12.15-.45.12-.72.1h-.23a5,5,0,0,1-1.52-.23,8.09,8.09,0,0,0-1.84-.36,1.09,1.09,0,0,1-.34-.06,1.17,1.17,0,0,1,0-.41c.2-1.4.48-2.81.75-4.18.2-1,.41-2,.58-3a25.22,25.22,0,0,1,.83-3.24,25.52,25.52,0,0,0,.87-3.47c.06-.36.1-.72.15-1.07s.09-.69.14-1c.07.55.15,1.09.23,1.63s.15,1,.21,1.54c.16,1.34.35,3.11.48,4.87.08,1.23.13,2.49.17,3.7,0,.38,0,.77,0,1.15,0,.69.06,1.59.13,2.5a3.56,3.56,0,0,0,.05.43C86.18,23.28,86.27,23.85,86.11,24.06Z" />
    <path d="M72.68,18a1.89,1.89,0,0,0-.38.09,1.28,1.28,0,0,1-.34.07c-.08,0-.11-.06-.12-.39v-.23a11.19,11.19,0,0,1,0-1.42c0-.23,0-.45,0-.68,0-1.34,0-2.7-.08-4,0-.85-.06-1.74-.08-2.6V8.14c0-.89,0-1.81,0-2.71a1.41,1.41,0,0,1,0-.2,1.14,1.14,0,0,0-.36-1.12A.81.81,0,0,0,70.61,4,.76.76,0,0,0,70,4.8a10.12,10.12,0,0,0,0,2.27c0,.32,0,.62.06.92,0,1.07.08,2.21.15,3.7,0,.49.06,1,.08,1.46,0,.65.08,1.31.11,2,0,.2,0,.4,0,.61a5.11,5.11,0,0,1-.06,1.84c-.16.55-.55.55-1.27.52l-.33,0-.43,0a3.25,3.25,0,0,1-1,0c-.2-.11-.2-.3-.16-.7a.92.92,0,0,1,0-.16c.11-1.56.1-3.16.1-4.71V10.6c0-.08,0-.21,0-.39.11-1.57.13-3.09-.43-3.62a.7.7,0,0,0-.58-.2c-.93.11-.88,1.87-.69,3.76a2.86,2.86,0,0,1,0,.32l.06,1.23a60.42,60.42,0,0,1,.06,6.17h-.07a2,2,0,0,0-1.36,0,.64.64,0,0,0-.26.48.76.76,0,0,0,.24.6,1,1,0,0,0,.63.19h.31a4.35,4.35,0,0,1,.49,0c0,.15,0,.44,0,.56a2.07,2.07,0,0,0,0,.21c0,.27,0,.54,0,.81l0,.31c.06,1.69,0,3.41,0,5.08,0,.85,0,1.72,0,2.59,0,.22,0,.46,0,.7A6.88,6.88,0,0,0,66,32.37a1.06,1.06,0,0,0,.56.62l.16,0a.62.62,0,0,0,.36-.11c.43-.28.42-.89.41-1.26v0c0-2.25-.06-4.65-.21-7-.06-.9-.05-1.8,0-2.68,0-.38,0-.76,0-1.14a2.49,2.49,0,0,0,0-.46,1.27,1.27,0,0,1,0-.67c.11-.21.27-.22.65-.15l.49.1a9.61,9.61,0,0,0,1,.16,2.27,2.27,0,0,0,.45,0c.35,0,.51,0,.63.11a1.32,1.32,0,0,1,.07.87l0,.15a14.19,14.19,0,0,0-.06,1.67c0,.92,0,1.86.09,2.76.06,1.66.12,3.37.1,5.05,0,.9.12,1.35.44,1.48s.67-.22.77-.34a3,3,0,0,0,.42-2.13c0-.1,0-.2,0-.29,0-.87-.07-1.75-.12-2.61-.08-1.66-.17-3.37-.16-5.06,0-.64,0-1.13.05-1.6a.85.85,0,0,1,0-.23,1.37,1.37,0,0,1,.28,0h.11c.29,0,.74.1.94-.44a1,1,0,0,0-.11-.88A.53.53,0,0,0,72.68,18Z" />
    <path d="M10.48,24.64h0A5.53,5.53,0,0,0,9.32,24,3,3,0,0,0,8.84,24a3.37,3.37,0,0,1-.58-.13,4.6,4.6,0,0,1,0-.84c0-.17,0-.3,0-.4,0-.61-.08-1.16-.13-1.67S8,20.16,8,19.79c-.08-.6-.16-1.23-.2-1.85l0-.54c-.13-2.09-.26-4.25-.42-6.38l-.1-1.18C7.12,8.29,7,6.68,6.89,5.11V5c0-.58-.1-1.68-.92-1.87S4.68,4.18,4.49,4.79l0,.12a29.89,29.89,0,0,0-.85,3.95c0,.27-.08.54-.13.8C3.23,11.09,3,12.55,2.83,14c-.07.5-.14,1-.22,1.5-.23,1.59-.49,3.21-.74,4.77-.09.53-.18,1.06-.26,1.6,0,.17-.05.35-.07.55a4.26,4.26,0,0,1-.18,1.06.69.69,0,0,0,0,.1l-.19.05a.79.79,0,0,1-.23,0,1,1,0,0,0-.52.1A.78.78,0,0,0,0,24.2a.62.62,0,0,0,.09.5c.21.33.64.32,1,.3-.05.33-.1.66-.14,1A15.41,15.41,0,0,1,.2,29.68a1.45,1.45,0,0,0-.1,1.23.75.75,0,0,0,.58.34.89.89,0,0,0,.92-.67,6.88,6.88,0,0,0,.37-2c0-.27,0-.53.07-.77a20.11,20.11,0,0,1,.38-2.17c.18-.69.44-.77,1.31-.68L4,25c1.09.11,2.58.25,2.76,1.38a5.9,5.9,0,0,1,0,1.26c0,.21,0,.43,0,.64,0,.9,0,1.81.06,2.7l0,.21c0,.61.07,1.23.12,1.83A28.69,28.69,0,0,1,7,36.48c0,.06,0,.14,0,.22,0,.44-.11,1.27.66,1.41a.75.75,0,0,0,.21,0,.76.76,0,0,0,.53-.19,1.7,1.7,0,0,0,.4-1.34c-.05-1.36-.11-2.72-.16-4.08-.1-2.34-.2-4.75-.28-7.14l.16,0,.48.07a2,2,0,0,1,.42.17,2,2,0,0,0,.56.21.73.73,0,0,0,.76-.45A.62.62,0,0,0,10.48,24.64Zm-3.76-1c-.5,0-1,0-1.5,0s-1.14,0-1.7,0A.75.75,0,0,1,3,23.4a1.15,1.15,0,0,1-.12-.88c.15-1,.38-2.05.6-3.05s.44-1.93.59-2.9.29-2.15.42-3.2a51.85,51.85,0,0,1,.92-5.78c.06.45.14.9.22,1.34s.17,1,.23,1.47c.21,1.68.36,3.38.46,4.67s.17,2.86.23,4.27v.4c0,.69.06,1.49.11,2.28,0,.14,0,.3,0,.48A3.63,3.63,0,0,1,6.72,23.63Z" />
  </svg>
);

export default HeaderLogo;
