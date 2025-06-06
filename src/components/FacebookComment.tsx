"use client";
import Script from "next/script";
import { usePathname } from "next/navigation";

export function FacebookComment() {
  const pathName = usePathname()
  return (
    <>
      <article>
        <div
          className="fb-comments"
          data-href={(process.env.VERCEL_PROJECT_PRODUCTION_URL ?? 'taisaovayem.com') + pathName}
          data-width=""
          data-numposts="10"
        ></div>
      </article>
      <Script
        async
        defer
        crossOrigin="anonymous"
        src={`https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v21.0&appId=${process.env.FACEBOOK_APP_ID}`}
      ></Script>
    </>
  );
}

export default FacebookComment;
