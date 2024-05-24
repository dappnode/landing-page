export default function NavLink({
  page,
}: {
  page: {
    name: string;
    path: string;
  };
}) {
  return (
    <a
      href={page.path}
      className="group text-lg tracking-wider text-gray-900 transition-all duration-300 hover:text-dappnodePurple dark:text-white dark:hover:text-dappnodePurple md:text-xl"
    >
      {page.name}
      <span className="block h-1 max-w-0 rounded-lg bg-dappnodePurple transition-all duration-500 group-hover:max-w-full"></span>
    </a>
  );
}
