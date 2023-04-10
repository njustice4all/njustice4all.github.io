import { Link } from '@remix-run/react';

const projects = [
  {
    name: '파우소나',
    image: '/assets/images/projects/pawsona/pawsona1.jpeg',
    to: '/project/pawsona',
  },
  {
    name: '오닥터',
    image: '/assets/images/projects/odoctor/16.png',
    to: '/project/odoctor',
  },
  {
    name: '굿닥',
    image: '/assets/images/projects/thumbnail_goodoc.png',
    to: '/project/goodoc',
  },
  {
    name: '아티컴퍼니',
    image: '/assets/images/projects/thumbnail_aty.png',
    to: '/project/aty',
  },
];

export default function Projects() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-8 max-w-md:grid-cols-1">
        {projects.map(({ name, image, to }) => (
          <div className="aspect-square transition-transform hover:scale-105" key={name}>
            <h4 className="mb-2 inline-block border-b text-lg font-bold">{name}</h4>
            <Link to={to} prefetch="intent">
              <img src={image} alt={name} className="h-full w-full object-cover" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
