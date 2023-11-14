import React from "react";

export default function InstagramNews() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <iframe
          title="Instagram Feed"
          src="https://instagram.com/avcon_ie?igshid=eTNvcHN4MHdkZHJr"
          width="550"
          height="800"
          style={{ border: 'none', overflow: 'hidden' }}
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>
    </main>
  );
}