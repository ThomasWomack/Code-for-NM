---
layout: post
title: Open Data Day, Jekyll, and @CutePetsABQ
author: brad
---

Last Saturday was International Open Data Day. Our brigade didn't do anything special this year, but I had a little downtime myself so I tackled a small project tangentially related to open data: I moved this website from Wordpress to GitHub Pages.

The motivation for this change was threefold:

1. to move the design of the site into a public git repository, so anyone can contribute.
2. to do the same for content, particularly so that our leadership needn't manage contributor accounts in Wordpress.
3. to practice what we preach by opening up our site to outside contributions.

And, on a personal note, I just wanted to learn about GitHub Pages, and the underlying technology: Jekyll. Jekyll is a "static site generator". For simple sites that don't need a full-blown CMS like Wordpress, it's a great way to incorporate some light CMS functionality without adding the administrative and performance costs of a database layer. It recognizes Liquid templates, which make it easy to separate page content from the site design, as well as Markdown, which allows authors to contribute content without getting bogged down in HTML or clunky WYSIWYG editors. All-in-all, it's a great solution for sites like this one, and the migration was pretty simple -- the most challenging part was simply stripping out all the extra CSS and JS that Wordpress had injected into our prior site.

***

### Announcing @CutePetsABQ

Today, on a whim, I threw together another quick project: [@CutePetsABQ](https://twitter.com/cutepetsabq), a Twitter bot that automatically tweets about adoptable pets at Albuquerque's Animal Welfare shelters. This project is a clone of Code for America's [CutePets](https://github.com/codeforamerica/CutePets) project. It's a great project for new brigades or new volunteers, because it will work anywhere in the US, can be deployed in less than 2 hours, and gives volunteers the chance to work with some cool technology: the Twitter API, Heroku's amazing application hosting environment, and, of course, GitHub. I followed the standard script to the letter, with one minor change: I scheduled the bot to tweet hourly instead of daily, because there are just too many cute pets out there who need homes.
