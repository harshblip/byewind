import Spinner from "./RightPanel/components/Spinner";

export default function Loader() {
  return (
    <>
      <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <Spinner size="xl" variant="primary" />
          <p className="text-gray-500 text-sm font-medium animate-pulse">
            Loading Dashboard...
          </p>
        </div>
      </div>
    </>
  );
}
