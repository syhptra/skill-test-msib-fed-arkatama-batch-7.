// Data JSON
const jsonData = {
    status: "success",
    code: 200,
    message: {
      title: "Success",
      text: "Data berhasil diambil"
    },
    data: [
      {
        id: 20,
        kategori_id: 4,
        judul: "Membina Keunggulan Akademik: Fondasi Kuat untuk Kesuksesan",
        konten: "Quia aut est sit qui quo officiis omnis...",
        thumbnail: "images/Foto.png",
        slug: "tempore-fugit-maiores-perspiciatis-possimus-enim",
        publish_at: "2024-03-27 00:34:29",
        is_full_view: false,
        created_by: 4,
        summary: "Quia aut est sit qui quo officiis omnis...",
        category: {
          id: 4,
          category: "Technology",
          slug: "technology"
        }
      },
    ],
    pagination: {
      from: 1,
      last_page: 1,
      per_page: 10,
      to: 10,
      total: 10
    },
    timestamp: "2024-11-21 08:50:47"
  };
  
  function displayArticles(data) {
    const articlesContainer = document.getElementById('articles');
    articlesContainer.innerHTML = ""; 
  
    data.forEach((item) => {
      const articleCard = document.createElement('div');
      articleCard.className = "article-card";
  
      articleCard.innerHTML = `
        <img src="${item.thumbnail || 'https://via.placeholder.com/300x180.png?text=No+Image'}" alt="${item.judul}">
        <h2>${item.judul}</h2>
        <p><strong>Kategori:</strong> ${item.category.category}</p>
        <p>${item.summary}</p>
        <a href="${item.slug}" target="_blank">Read More</a>
      `;
  
      articlesContainer.appendChild(articleCard);
    });
  }
  

  document.addEventListener("DOMContentLoaded", () => {
    displayArticles(jsonData.data);
  });
  