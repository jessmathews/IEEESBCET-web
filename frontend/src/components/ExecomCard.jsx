export function createExecomCard({ name, role, image, linkedin, email }) {
  const card = document.createElement('div');
  card.className =
    'bg-white rounded-lg shadow-md p-4 text-center hover:shadow-xl transition duration-300';

  card.innerHTML = `
    <img src="${image}" alt="${name}" class="w-24 h-24 mx-auto rounded-full object-cover mb-3" />
    <h3 class="text-lg font-semibold">${name}</h3>
    <p class="text-sm text-gray-600">${role}</p>
    <div class="mt-3 flex justify-center gap-4">
      ${linkedin ? `<a href="${linkedin}" target="_blank" class="text-blue-600 hover:underline">LinkedIn</a>` : ''}
      ${email ? `<a href="mailto:${email}" class="text-gray-700 hover:underline">Email</a>` : ''}
    </div>
  `;

  return card;
}