import React from "react";

export default function FacebookNews() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <div style={{ display: 'flex', justifyContent: 'center'}}>
        <iframe
          title="Facebook Feed"
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61552633058659&tabs=timeline&width=550&height=800&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
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
