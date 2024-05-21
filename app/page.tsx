import ToggleTheme from '@/components/toggle-theme';

export default function Home() {
  return (
    <main className="flex flex-col px-12">
      <h1 className="dark:text-gray-100 my-12 font-bold">Dark Mode App</h1>
      <ToggleTheme />
    </main>
  );
}
