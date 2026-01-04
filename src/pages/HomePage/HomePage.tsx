export default function HomePage() {
  return (
    <>
      <div className="h-screen -mt-[20%] md:-mt-[5%] flex justify-center items-center text-cyan-800 dark:text-white flex-col p-4">
        <p className="text-7xl">
          Welcome <span className="text-sm">to</span>
        </p>
        <p className="text-7xl mt-4">Byewind</p>
        <code className="mt-8 mono">Go to <strong className="mono">/default</strong> to see the page 1</code>
        <code className="mt-2 mono">Go to <strong className="mono">/default/orders</strong> to see the page 2</code>
      </div>
    </>
  );
}
