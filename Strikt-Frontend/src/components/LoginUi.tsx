export const LoginPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-slate-700 space-y-3">
        <div className="absolute top-1/4">
            <p className="font-mono text-white font-extrabold text-2xl">Strikt</p>
        </div>
        <div>
            <p> Your personal Gym AI-companion</p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-2">
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                Get started for free
            </button>
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                I already have an Account
            </button>
        </div>
    </div>
  );
};
