// public/scripts/filters.js
document.addEventListener('DOMContentLoaded', () => {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card');

  if (!filterBtns.length || !cards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter || 'all';

      // Actualizar botones
      filterBtns.forEach(b => {
        b.classList.remove('bg-primary', 'text-white', 'shadow-2xl', '-translate-y-1', 'scale-105');
        b.classList.add('bg-gray-200', 'text-gray-800');
      });

      btn.classList.add('bg-primary', 'text-white', 'shadow-2xl', '-translate-y-1', 'scale-105');
      btn.classList.remove('bg-gray-200', 'text-gray-800');

      // Filtrar tarjetas con animación secuencial
      cards.forEach((card, index) => {
        const matches = filter === 'all' || card.dataset.category === filter;

        if (matches) {
          card.classList.remove('hidden');
          card.style.animationDelay = `${index * 0.08}s`;
          card.classList.add('animate-fade-in-up');
        } else {
          card.classList.add('hidden');
          card.classList.remove('animate-fade-in-up');
        }
      });
    });
  });
});