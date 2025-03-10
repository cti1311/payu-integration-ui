import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">PayU Developer Documentation</h1>
      <Link 
        href="/integration-guide" 
        className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
      >
        View Integration Guide
      </Link>
    </main>
  );
}