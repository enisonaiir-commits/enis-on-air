'use client';
import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';

const EventButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push('/radio')}
      className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
    >
      <span>Voir tous les événements</span>
      <ArrowRight className="h-5 w-5" />
    </button>
  );
};

export default EventButton;
