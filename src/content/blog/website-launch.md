---
title: 'My Website Launch'
header: 'My Website Launch'
description: 'My first blog post and the launch of my website'
pubDate: 'September 21 2023'
heroImage: '/images/website-launch.jpg'
altText: 'Website Launch text on a blue gradient background'
githubLink: "https://GitHub.com/alex8obrien/website"
---

Hi, welcome to my first blog post and the launch of version 1.0 of my website. It has been a great learning experience, and I hope you enjoy learning more about my projects. In this post, I will discuss several challenges I encountered when building this website and how I overcame them.

Initially, I based this website on the Astro Blog template as I liked the overall design of the website and its included plugins. I revised the header and footer to incorporate my social media, contact information and CV. Then, I focused on the metadata like the localisation, favicon and alt text for all images. Once this was complete, I started compiling content for the site, including the About Me and front pages. I often find it hard to write extended pieces, yet despite the difficulty, I think I did okay.

My first challenge was enabling server-side rending (SSR) using the `@astrojs/Cloudflare` plugin, as it broke the routing for the blogs and error 404 redirects. To fix this, I changed the `404.astro` page to `[...any.astro]`, allowing it to act as a catch-all page. Hopefully, [this issue](https://github.com/withastro/astro/issues/8087) will be resolved in the next release of Astro. However, in fixing the routing issue, I had to rewrite `[...slug].astro` to use dynamic routing rather than static rendering. Thankfully, this issue is known, and multiple workarounds were available online.

Overall, this project of developing my website has been enjoyable and has produced (in my biased opinion) a great finished product. I look forward to writing more blogs and showcasing my latest work.
