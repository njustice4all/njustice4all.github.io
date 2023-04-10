import type { LinksFunction, LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { NavLink, Outlet, useLoaderData } from '@remix-run/react';
import styles from 'highlight.js/styles/github-dark-dimmed.css';
import { ArrowLeft } from 'lucide-react';

import { blogList } from '~/data/blogList.server';
import type { BlogList } from '~/data/blogList.server';

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const pathname = url.pathname;

  const currentPost = blogList.find(({ pathName }) => pathName === pathname);

  return json(currentPost);
};

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

export default function BlogLayout() {
  const currentPost = useLoaderData<BlogList>();

  return (
    <div>
      <div className="mx-auto flex w-full max-w-[47rem]">
        <ArrowLeft />{' '}
        <NavLink className="back-button ml-2 font-sans" to={'/blog'}>
          Back
        </NavLink>
      </div>
      {currentPost ? (
        <header className="mx-auto flex w-full max-w-[47rem] text-center text-primary">
          <h1 className="mb-10 mt-16 text-4xl font-bold leading-[1.3]">{currentPost.title}</h1>
        </header>
      ) : (
        <></>
      )}

      <div className="flex justify-center">
        <div className="prose w-screen px-[2em] py-[1em] dark:prose-invert md:prose-lg lg:prose-xl prose-headings:text-text-primary prose-a:no-underline prose-pre:p-0 dark:prose-headings:text-d-text-primary">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
